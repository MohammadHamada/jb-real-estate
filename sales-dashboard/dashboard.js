const SUPABASE_URL = "https://cmjeijjkdztlvhqzcjrg.supabase.co";
const SUPABASE_KEY = "sb_publishable_foGnQkjteOAQ7XL6SBqAVA_fQACuQ7a";

const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: { persistSession: true, autoRefreshToken: true }
});

const $ = (id) => document.getElementById(id);
const authScreen = $("authScreen");
const app = $("app");
let currentLeadId = null;
let searchTimer = null;

const esc = (v) => String(v ?? "").replace(/[&<>"']/g, c => ({
  "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
}[c]));

function fmtDate(v){
  if(!v) return "—";
  try{return new Intl.DateTimeFormat("en-GB",{dateStyle:"medium",timeStyle:"short"}).format(new Date(v));}
  catch{return "—";}
}
function fmtMoney(v,c="EGP"){
  if(v===null || v===undefined || v==="") return "—";
  return `${new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(Number(v))} ${c||"EGP"}`;
}
function tempBadge(t){
  const x=(t||"NURTURE").toLowerCase();
  return `<span class="badge ${esc(x)}">${esc(t||"—")}</span>`;
}
function telHref(v){return String(v||"").replace(/[^\d+]/g,"");}
function waHref(v){return String(v||"").replace(/\D/g,"");}

async function rpc(name,args={}){
  const {data,error}=await sb.rpc(name,args);
  if(error) throw error;
  return data;
}

async function checkAccess(){
  const {data:{session}}=await sb.auth.getSession();
  if(!session){showLogin();return false;}
  try{
    const allowed=await rpc("jb_is_internal_user_v1");
    if(!allowed){
      await sb.auth.signOut();
      showLogin("This account is not authorized for JB Sales Intelligence.");
      return false;
    }
    $("staffEmail").textContent=session.user.email||"";
    authScreen.classList.add("hidden");
    app.classList.remove("hidden");
    return true;
  }catch(e){
    showLogin(e.message||"Access check failed.");
    return false;
  }
}
function showLogin(msg=""){
  authScreen.classList.remove("hidden");
  app.classList.add("hidden");
  $("loginStatus").textContent=msg;
}

$("loginForm").addEventListener("submit",async(e)=>{
  e.preventDefault();
  $("loginStatus").textContent="Signing in…";
  const {error}=await sb.auth.signInWithPassword({
    email:$("loginEmail").value.trim(),
    password:$("loginPassword").value
  });
  if(error){$("loginStatus").textContent=error.message;return;}
  if(await checkAccess()) await loadAll();
});

$("logoutBtn").addEventListener("click",async()=>{
  await sb.auth.signOut(); showLogin();
});
$("refreshBtn").addEventListener("click",loadAll);

document.querySelectorAll("[data-scroll]").forEach(btn=>{
  btn.addEventListener("click",()=>document.getElementById(btn.dataset.scroll)?.scrollIntoView({behavior:"smooth"}));
});

["temperatureFilter","stageFilter","dueOnly"].forEach(id=>{
  $(id).addEventListener("change",loadLeads);
});
$("searchInput").addEventListener("input",()=>{
  clearTimeout(searchTimer); searchTimer=setTimeout(loadLeads,250);
});

async function loadSummary(){
  const s=await rpc("jb_sales_dashboard_summary_v1");
  $("mHot").textContent=s.hot_leads??0;
  $("mWarm").textContent=s.warm_leads??0;
  $("mNew").textContent=s.new_leads??0;
  $("mDue").textContent=s.overdue_followups??0;
  $("mMeeting").textContent=s.meetings??0;
  $("mNegotiation").textContent=s.negotiations??0;
  renderPipeline(s);
}
function renderPipeline(s){
  const items=[
    ["New",s.new_leads],["Hot",s.hot_leads],["Warm",s.warm_leads],
    ["Meetings",s.meetings],["Negotiations",s.negotiations],
    ["Won",s.won],["Lost",s.lost],["Nurture",s.nurture_leads]
  ];
  $("pipelineGrid").innerHTML=items.map(([label,value])=>
    `<article class="pipeline-card"><span>${esc(label)}</span><strong>${esc(value??0)}</strong></article>`
  ).join("");
}

async function loadLeads(){
  $("leadStatus").textContent="Loading…";
  try{
    const rows=await rpc("jb_sales_dashboard_leads_v1",{
      p_temperature:$("temperatureFilter").value||null,
      p_stage:$("stageFilter").value||null,
      p_only_due:$("dueOnly").checked,
      p_search:$("searchInput").value.trim()||null,
      p_limit:150,p_offset:0
    });
    $("leadRows").innerHTML=(rows||[]).map(r=>`
      <tr>
        <td><div class="lead-name">${esc(r.full_name)}</div><div class="lead-contact">${esc(r.whatsapp_phone||r.phone||r.email||"—")}</div></td>
        <td>${tempBadge(r.lead_temperature)} <strong>${esc(r.qualification_score??"—")}</strong></td>
        <td><span class="stage">${esc((r.sales_stage||"").replaceAll("_"," "))}</span></td>
        <td><span class="action">${esc((r.next_best_action||"REVIEW").replaceAll("_"," "))}</span><div class="lead-contact">${esc(r.recommended_channel||"")}</div></td>
        <td>${esc(r.best_project_name_en||"No saved match")}</td>
        <td>${esc(fmtDate(r.next_follow_up_at))}</td>
        <td><button class="open-btn" data-lead="${esc(r.lead_id)}">Open</button></td>
      </tr>
    `).join("");
    $("leadStatus").textContent=`${rows?.length||0} leads`;
    document.querySelectorAll("[data-lead]").forEach(b=>b.addEventListener("click",()=>openLead(b.dataset.lead)));
  }catch(e){$("leadStatus").textContent=e.message||"Failed to load leads.";}
}

async function openLead(id){
  currentLeadId=id;
  $("leadDrawer").classList.remove("hidden");
  $("leadDrawer").setAttribute("aria-hidden","false");
  $("leadDetail").innerHTML="<p>Loading lead…</p>";
  try{
    const d=await rpc("jb_sales_dashboard_lead_detail_v1",{p_lead_id:id});
    renderLeadDetail(d);
  }catch(e){
    $("leadDetail").innerHTML=`<p class="status">${esc(e.message||"Failed to load lead.")}</p>`;
  }
}
document.querySelectorAll("[data-close-drawer]").forEach(x=>x.addEventListener("click",closeDrawer));
function closeDrawer(){
  $("leadDrawer").classList.add("hidden");
  $("leadDrawer").setAttribute("aria-hidden","true");
  currentLeadId=null;
}

function renderLeadDetail(d){
  const l=d.lead||{};
  const p=l.search_profile||{};
  const cp=l.customer_preferences||{};
  const wa=l.whatsapp_phone||l.phone;
  const contactButtons=[
    wa?`<a class="btn primary" target="_blank" rel="noopener" href="https://wa.me/${esc(waHref(wa))}">WhatsApp</a>`:"",
    l.phone?`<a class="btn secondary" href="tel:${esc(telHref(l.phone))}">Call</a>`:"",
    l.email?`<a class="btn secondary" href="mailto:${esc(l.email)}">Email</a>`:""
  ].join("");

  const top3=(d.top3||[]).map(t=>`
    <article class="match-card">
      <div class="match-head">
        <div><h3>#${esc(t.recommendation_order)} ${esc(t.name_en||t.name_ar)}</h3>
        <div class="match-meta">${esc(t.developer_name_en||"")} · ${esc(t.city||"")} ${t.area?`· ${esc(t.area)}`:""} · ${esc(fmtMoney(t.display_starting_price,t.currency))}</div></div>
        <span class="match-role">${esc((t.fit_role||"").replaceAll("_"," "))}</span>
      </div>
      <div class="match-lines">
        <div><b>Confidence:</b> <span class="confidence ${esc((t.confidence_level||"").toLowerCase())}">${esc(t.confidence_level||"—")}</span></div>
        <div><b>Why:</b> ${esc(t.why_it_fits||"—")}</div>
        <div><b>Likely objection:</b> ${esc(t.likely_objection||"—")}</div>
        <div><b>Sales angle:</b> ${esc(t.sales_angle||"—")}</div>
        <div><b>Next question:</b> ${esc(t.next_question||"—")}</div>
        <div><b>Next action:</b> ${esc((t.next_action||"").replaceAll("_"," "))}</div>
      </div>
    </article>
  `).join("") || `<div class="detail-card"><p class="muted">No saved project matches for this lead.</p></div>`;

  const activity=(d.activity||[]).map(a=>`
    <div class="activity-item"><strong>${esc((a.action_type||"UPDATE").replaceAll("_"," "))}</strong>
    · ${esc(fmtDate(a.created_at))}${a.note?`<div>${esc(a.note)}</div>`:""}</div>
  `).join("") || `<p class="muted">No internal activity recorded yet.</p>`;

  $("leadDetail").innerHTML=`
    <section class="lead-hero">
      <p class="eyebrow">LEAD 360</p>
      <h2>${esc(l.full_name||"Lead")}</h2>
      <div class="meta">${tempBadge(l.lead_temperature)} <span>Score ${esc(l.qualification_score??"—")}/100</span><span>${esc((l.sales_stage||"").replaceAll("_"," "))}</span><span>${esc((l.next_best_action||"REVIEW").replaceAll("_"," "))}</span></div>
      <div class="lead-actions">${contactButtons}</div>
    </section>

    <div class="detail-grid">
      <article class="detail-card"><h3>Search profile</h3><div class="kv">
        <b>Location</b><span>${esc(p.location||"—")}</span>
        <b>Budget</b><span>${esc(p.budget||"—")}</span>
        <b>Property type</b><span>${esc(p.type||"—")}</span>
        <b>Purpose</b><span>${esc(p.purpose||"—")}</span>
        <b>Delivery</b><span>${esc(p.delivery||"—")}</span>
        <b>Timeline</b><span>${esc(p.timeline||"—")}</span>
      </div></article>
      <article class="detail-card"><h3>Customer preferences</h3><div class="kv">
        <b>Payment</b><span>${esc(cp.payment_method||p.payment||"—")}</span>
        <b>Max down payment</b><span>${esc(cp.max_down_payment_pct??"—")}${cp.max_down_payment_pct!=null?"%":""}</span>
        <b>Installment years</b><span>${esc(cp.preferred_installment_years??"—")}</span>
        <b>Top priority</b><span>${esc(cp.top_priority||"—")}</span>
        <b>Alternatives</b><span>${cp.open_to_alternatives===true?"Yes":cp.open_to_alternatives===false?"No":"—"}</span>
        <b>Future recommendations</b><span>${l.allow_recommendations?"Allowed":"Not allowed"}</span>
      </div></article>
    </div>

    <p class="eyebrow">TOP 3 DECISION SUPPORT</p>
    <div class="top3">${top3}</div>

    <form id="leadUpdateForm" class="update-form">
      <div><p class="eyebrow">SALES OPERATION</p><h3>Update lead</h3></div>
      <div class="form-grid">
        <label>Stage<select id="uStage">
          ${["new","contacted","qualified","options_sent","meeting","viewing","negotiation","won","lost","nurture"].map(s=>`<option value="${s}" ${l.sales_stage===s?"selected":""}>${s.replaceAll("_"," ")}</option>`).join("")}
        </select></label>
        <label>Sales owner<input id="uOwner" value="${esc(l.sales_owner||"")}"></label>
        <label>Next follow-up<input id="uFollow" type="datetime-local"></label>
        <label class="check"><input id="uClearFollow" type="checkbox"> Clear follow-up</label>
      </div>
      <label>Sales note<textarea id="uNotes" placeholder="What happened, objection, commitment, next step…"></textarea></label>
      <label class="check"><input id="uContacted" type="checkbox"> Mark contact made now</label>
      <button class="btn primary" type="submit">Save update</button>
      <p id="updateStatus" class="status"></p>
    </form>

    <article class="detail-card" style="margin-top:16px"><h3>Recent activity</h3><div class="activity">${activity}</div></article>
  `;
  $("leadUpdateForm").addEventListener("submit",saveLeadUpdate);
}

async function saveLeadUpdate(e){
  e.preventDefault();
  $("updateStatus").textContent="Saving…";
  const follow=$("uFollow").value;
  try{
    await rpc("jb_sales_dashboard_update_lead_v1",{
      p_lead_id:currentLeadId,
      p_sales_stage:$("uStage").value,
      p_sales_owner:$("uOwner").value.trim()||null,
      p_next_follow_up_at:follow?new Date(follow).toISOString():null,
      p_clear_follow_up:$("uClearFollow").checked,
      p_sales_notes:$("uNotes").value.trim()||null,
      p_mark_contacted:$("uContacted").checked,
      p_lost_reason:null,
      p_won_project_id:null,
      p_won_value:null
    });
    $("updateStatus").textContent="Saved.";
    await Promise.all([loadSummary(),loadLeads()]);
    await openLead(currentLeadId);
  }catch(e2){$("updateStatus").textContent=e2.message||"Update failed.";}
}

async function loadAll(){
  try{await Promise.all([loadSummary(),loadLeads()]);}
  catch(e){console.error(e);}
}

(async()=>{
  if(await checkAccess()) await loadAll();
})();
