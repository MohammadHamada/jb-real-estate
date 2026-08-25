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
let currentLang = localStorage.getItem("jb_sales_dashboard_lang") || "en";

const I18N = {
  en: {
    brand:"JB REAL ESTATE GROUP", salesIntelligence:"Sales Intelligence", privateAccess:"Private staff access.",
    email:"Email", password:"Password", signIn:"Sign in", internal:"Internal", overview:"Overview",
    leadQueue:"Lead Queue", pipeline:"Pipeline", signOut:"Sign out", todaysPriorities:"TODAY'S SALES PRIORITIES",
    dashboardTitle:"Lead Intelligence Dashboard", refresh:"Refresh", hotLeads:"Hot Leads", warmLeads:"Warm Leads",
    newLeads:"New Leads", followupsDue:"Follow-ups Due", meetings:"Meetings", negotiations:"Negotiations",
    priorityQueue:"PRIORITY QUEUE", leads:"Leads", searchPlaceholder:"Search name, phone, project…",
    allTemperatures:"All temperatures", allStages:"All stages", dueOnly:"Due only", lead:"Lead", score:"Score",
    stage:"Stage", nextAction:"Next action", bestMatch:"Best match", followup:"Follow-up", currentFlow:"Current flow",
    loading:"Loading…", noSavedMatch:"No saved match", open:"Open", leadsCount:"leads", loadingLead:"Loading lead…",
    failedLoadLead:"Failed to load lead.", unauthorized:"This account is not authorized for JB Sales Intelligence.",
    accessFailed:"Access check failed.", signingIn:"Signing in…", lead360:"LEAD 360", call:"Call", location:"Location",
    budget:"Budget", propertyType:"Property type", purpose:"Purpose", delivery:"Delivery", timeline:"Timeline",
    searchProfile:"Search profile", customerPreferences:"Customer preferences", payment:"Payment",
    maxDown:"Max down payment", installmentYears:"Installment years", topPriority:"Top priority",
    alternatives:"Alternatives", futureRecommendations:"Future recommendations", yes:"Yes", no:"No",
    allowed:"Allowed", notAllowed:"Not allowed", top3Support:"TOP 3 DECISION SUPPORT", confidence:"Confidence",
    why:"Why", likelyObjection:"Likely objection", salesAngle:"Sales angle", nextQuestion:"Next question",
    nextActionLabel:"Next action", noMatches:"No saved project matches for this lead.", salesOperation:"SALES OPERATION",
    updateLead:"Update lead", salesOwner:"Sales owner", nextFollowup:"Next follow-up", clearFollowup:"Clear follow-up",
    salesNote:"Sales note", salesNotePlaceholder:"What happened, objection, commitment, next step…",
    markContacted:"Mark contact made now", saveUpdate:"Save update", recentActivity:"Recent activity",
    noActivity:"No internal activity recorded yet.", saving:"Saving…", saved:"Saved.", updateFailed:"Update failed.",
    failedLoadLeads:"Failed to load leads.", whatsapp:"WhatsApp", scoreLabel:"Score",
    contactDetails:"Contact details", phone:"Phone", copy:"Copy", copied:"Copied", copyFailed:"Copy failed",
    primaryContact:"Primary contact", noContact:"Not provided",
    actionCenter:"ACTION CENTER", whatToDoToday:"What should we do today?",
    contactNow:"Contact now", followUpDue:"Follow-up due", sendOptions:"Send options",
    meetingStage:"Meetings", negotiationStage:"Negotiations", noActions:"No leads in this action group.",
    openLead:"Open lead"
  },
  ar: {
    brand:"مجموعة JB العقارية", salesIntelligence:"ذكاء المبيعات", privateAccess:"دخول خاص بفريق العمل.",
    email:"البريد الإلكتروني", password:"كلمة المرور", signIn:"تسجيل الدخول", internal:"داخلي", overview:"نظرة عامة",
    leadQueue:"قائمة العملاء", pipeline:"مسار المبيعات", signOut:"تسجيل الخروج", todaysPriorities:"أولويات المبيعات اليوم",
    dashboardTitle:"لوحة ذكاء العملاء والمبيعات", refresh:"تحديث", hotLeads:"عملاء ساخنون", warmLeads:"عملاء دافئون",
    newLeads:"عملاء جدد", followupsDue:"متابعات مستحقة", meetings:"اجتماعات", negotiations:"مفاوضات",
    priorityQueue:"قائمة الأولويات", leads:"العملاء", searchPlaceholder:"ابحث بالاسم أو الهاتف أو المشروع…",
    allTemperatures:"كل درجات الجدية", allStages:"كل المراحل", dueOnly:"المستحق فقط", lead:"العميل", score:"التقييم",
    stage:"المرحلة", nextAction:"الإجراء التالي", bestMatch:"أفضل مشروع", followup:"المتابعة", currentFlow:"المسار الحالي",
    loading:"جارٍ التحميل…", noSavedMatch:"لا يوجد تطابق محفوظ", open:"فتح", leadsCount:"عميل", loadingLead:"جارٍ تحميل بيانات العميل…",
    failedLoadLead:"تعذر تحميل بيانات العميل.", unauthorized:"هذا الحساب غير مصرح له بالدخول إلى لوحة JB.",
    accessFailed:"فشل التحقق من صلاحية الدخول.", signingIn:"جارٍ تسجيل الدخول…", lead360:"ملف العميل 360", call:"اتصال",
    location:"المنطقة", budget:"الميزانية", propertyType:"نوع العقار", purpose:"الغرض", delivery:"الاستلام", timeline:"موعد الشراء",
    searchProfile:"بيانات البحث", customerPreferences:"تفضيلات العميل", payment:"طريقة الدفع",
    maxDown:"أقصى مقدم", installmentYears:"سنوات التقسيط", topPriority:"الأولوية الرئيسية",
    alternatives:"قبول البدائل", futureRecommendations:"ترشيحات مستقبلية", yes:"نعم", no:"لا",
    allowed:"مسموح", notAllowed:"غير مسموح", top3Support:"أفضل 3 ترشيحات لدعم قرار البيع", confidence:"درجة الثقة",
    why:"لماذا يناسبه", likelyObjection:"الاعتراض المتوقع", salesAngle:"زاوية البيع", nextQuestion:"السؤال التالي",
    nextActionLabel:"الإجراء التالي", noMatches:"لا توجد مشروعات محفوظة مناسبة لهذا العميل.", salesOperation:"إدارة عملية البيع",
    updateLead:"تحديث العميل", salesOwner:"مسؤول المبيعات", nextFollowup:"موعد المتابعة القادمة", clearFollowup:"مسح موعد المتابعة",
    salesNote:"ملاحظة المبيعات", salesNotePlaceholder:"ماذا حدث؟ الاعتراض؟ الالتزام؟ الخطوة التالية…",
    markContacted:"تم التواصل الآن", saveUpdate:"حفظ التحديث", recentActivity:"آخر الأنشطة",
    noActivity:"لا توجد أنشطة داخلية مسجلة حتى الآن.", saving:"جارٍ الحفظ…", saved:"تم الحفظ.", updateFailed:"فشل التحديث.",
    failedLoadLeads:"تعذر تحميل العملاء.", whatsapp:"واتساب", scoreLabel:"التقييم",
    contactDetails:"وسائل التواصل", phone:"الهاتف", copy:"نسخ", copied:"تم النسخ", copyFailed:"تعذر النسخ",
    primaryContact:"وسيلة التواصل الأساسية", noContact:"غير متاح",
    actionCenter:"مركز إجراءات اليوم", whatToDoToday:"ما الذي يجب أن نفعله اليوم؟",
    contactNow:"تواصل الآن", followUpDue:"متابعة مستحقة", sendOptions:"أرسل الخيارات",
    meetingStage:"الاجتماعات", negotiationStage:"المفاوضات", noActions:"لا توجد حالات في هذه المجموعة.",
    openLead:"فتح العميل"
  }
};

const STAGES = {
  new:{en:"New",ar:"جديد"}, contacted:{en:"Contacted",ar:"تم التواصل"}, qualified:{en:"Qualified",ar:"مؤهل"},
  options_sent:{en:"Options sent",ar:"تم إرسال الخيارات"}, meeting:{en:"Meeting",ar:"اجتماع"},
  viewing:{en:"Viewing",ar:"معاينة"}, negotiation:{en:"Negotiation",ar:"تفاوض"}, won:{en:"Won",ar:"تم البيع"},
  lost:{en:"Lost",ar:"مفقود"}, nurture:{en:"Nurture",ar:"متابعة طويلة"}
};
const ACTIONS = {
  FOLLOW_UP_DUE:{en:"Follow-up due",ar:"متابعة مستحقة"}, CONTACT_NOW:{en:"Contact now",ar:"تواصل الآن"},
  SEND_SHORTLIST:{en:"Send shortlist",ar:"أرسل قائمة مختصرة"}, NURTURE:{en:"Nurture",ar:"متابعة طويلة"},
  SEND_BEST_MATCH:{en:"Send best match",ar:"أرسل أفضل مشروع"}, SEND_COMPARISON:{en:"Send comparison",ar:"أرسل مقارنة"},
  BOOK_MEETING:{en:"Book meeting",ar:"احجز اجتماع"}, BOOK_VIEWING:{en:"Book viewing",ar:"احجز معاينة"},
  NEGOTIATION_FOLLOW_UP:{en:"Negotiation follow-up",ar:"متابعة التفاوض"},
  CLOSE_FOLLOW_UP:{en:"Closing follow-up",ar:"متابعة الإغلاق"}, REVIEW:{en:"Review",ar:"مراجعة"}
};
const ROLES = {
  BEST_FIT:{en:"Best fit",ar:"أفضل تطابق"},
  FINANCIAL_FIT:{en:"Financial fit",ar:"أفضل خيار مالي"},
  STRATEGIC_ALTERNATIVE:{en:"Strategic alternative",ar:"بديل استراتيجي"}
};
const CONF = {HIGH:{en:"HIGH",ar:"عالية"},MEDIUM:{en:"MEDIUM",ar:"متوسطة"},LOW:{en:"LOW",ar:"منخفضة"}};

const esc = (v) => String(v ?? "").replace(/[&<>"']/g, c => ({
  "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
}[c]));
const tr = k => I18N[currentLang][k] || I18N.en[k] || k;
const stageLabel = s => STAGES[s]?.[currentLang] || s || "—";
const actionLabel = s => ACTIONS[s]?.[currentLang] || (s||"").replaceAll("_"," ");
const roleLabel = s => ROLES[s]?.[currentLang] || (s||"").replaceAll("_"," ");
const confLabel = s => CONF[s]?.[currentLang] || s || "—";

function applyLang(){
  document.documentElement.lang=currentLang;
  document.documentElement.dir=currentLang==="ar"?"rtl":"ltr";
  document.title=currentLang==="ar"?"JB — ذكاء المبيعات":"JB Sales Intelligence";
  document.querySelectorAll("[data-i18n]").forEach(el=>el.textContent=tr(el.dataset.i18n));
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>el.placeholder=tr(el.dataset.i18nPlaceholder));
  document.querySelectorAll("[data-stage-option]").forEach(el=>el.textContent=stageLabel(el.dataset.stageOption));
  const toggle=currentLang==="ar"?"English":"العربية";
  if($("langBtn")) $("langBtn").textContent=toggle;
  if($("authLangBtn")) $("authLangBtn").textContent=toggle;
}
function toggleLang(){
  currentLang=currentLang==="en"?"ar":"en";
  localStorage.setItem("jb_sales_dashboard_lang",currentLang);
  applyLang();
  if(!app.classList.contains("hidden")) loadAll();
  if(currentLeadId) openLead(currentLeadId);
}
$("langBtn").addEventListener("click",toggleLang);
$("authLangBtn").addEventListener("click",toggleLang);

function fmtDate(v){
  if(!v) return "—";
  try{return new Intl.DateTimeFormat(currentLang==="ar"?"ar-EG":"en-GB",{dateStyle:"medium",timeStyle:"short"}).format(new Date(v));}
  catch{return "—";}
}
function fmtMoney(v,c="EGP"){
  if(v===null || v===undefined || v==="") return "—";
  return `${new Intl.NumberFormat(currentLang==="ar"?"ar-EG":"en-US",{maximumFractionDigits:0}).format(Number(v))} ${c||"EGP"}`;
}
function tempBadge(t){
  const x=(t||"NURTURE").toLowerCase();
  const label=currentLang==="ar" ? ({HOT:"ساخن",WARM:"دافئ",NURTURE:"متابعة"}[t]||t) : (t||"—");
  return `<span class="badge ${esc(x)}">${esc(label)}</span>`;
}
function telHref(v){return String(v||"").replace(/[^\d+]/g,"");}
function waHref(v){return String(v||"").replace(/\D/g,"");}

async function copyText(value, button){
  if(!value) return;
  try{
    await navigator.clipboard.writeText(String(value));
    if(button){
      const old=button.textContent;
      button.textContent=tr("copied");
      button.classList.add("copied");
      setTimeout(()=>{button.textContent=old;button.classList.remove("copied");},1200);
    }
  }catch(_){
    window.prompt(currentLang==="ar"?"انسخ القيمة:":"Copy value:",String(value));
  }
}

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
      showLogin(tr("unauthorized"));
      return false;
    }
    $("staffEmail").textContent=session.user.email||"";
    authScreen.classList.add("hidden");
    app.classList.remove("hidden");
    return true;
  }catch(e){
    showLogin(e.message||tr("accessFailed"));
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
  $("loginStatus").textContent=tr("signingIn");
  const {error}=await sb.auth.signInWithPassword({
    email:$("loginEmail").value.trim(),
    password:$("loginPassword").value
  });
  if(error){$("loginStatus").textContent=error.message;return;}
  if(await checkAccess()) await loadAll();
});

$("logoutBtn").addEventListener("click",async()=>{await sb.auth.signOut();showLogin();});
$("refreshBtn").addEventListener("click",loadAll);

document.querySelectorAll("[data-scroll]").forEach(btn=>{
  btn.addEventListener("click",()=>document.getElementById(btn.dataset.scroll)?.scrollIntoView({behavior:"smooth"}));
});
["temperatureFilter","stageFilter","dueOnly"].forEach(id=>$(id).addEventListener("change",loadLeads));
$("searchInput").addEventListener("input",()=>{clearTimeout(searchTimer);searchTimer=setTimeout(loadLeads,250);});


function actionGroup(titleKey, items, icon){
  const rows=(items||[]).map(x=>{
    const project=(currentLang==="ar" ? x.best_project_name_ar : x.best_project_name_en) || x.best_project_name_en || x.best_project_name_ar || tr("noSavedMatch");
    return `<button class="action-lead-card" type="button" data-action-lead="${esc(x.lead_id)}">
      <div class="action-lead-main">
        <strong>${esc(x.full_name)}</strong>
        <span>${esc(project)}</span>
      </div>
      <div class="action-lead-score">${tempBadge(x.lead_temperature)} <b>${esc(x.qualification_score??"—")}</b></div>
    </button>`;
  }).join("") || `<div class="action-empty">${tr("noActions")}</div>`;

  return `<article class="action-group">
    <div class="action-group-head"><span class="action-icon">${icon}</span><h3>${tr(titleKey)}</h3><b>${items?.length||0}</b></div>
    <div class="action-group-list">${rows}</div>
  </article>`;
}

async function loadActionCenter(){
  $("actionCenterStatus").textContent=tr("loading");
  try{
    const data=await rpc("jb_sales_action_center_v1",{p_limit_per_group:8});
    $("actionCenterGrid").innerHTML=[
      actionGroup("contactNow",data.contact_now,"☎"),
      actionGroup("followUpDue",data.follow_up_due,"↻"),
      actionGroup("sendOptions",data.send_shortlist,"➜"),
      actionGroup("meetingStage",data.meetings,"◫"),
      actionGroup("negotiationStage",data.negotiations,"◆")
    ].join("");
    $("actionCenterStatus").textContent="";
    document.querySelectorAll("[data-action-lead]").forEach(btn=>{
      btn.addEventListener("click",()=>openLead(btn.dataset.actionLead));
    });
  }catch(e){
    $("actionCenterStatus").textContent=e.message||"Failed to load action center.";
  }
}

async function loadSummary(){
  const s=await rpc("jb_sales_dashboard_summary_v1");
  $("mHot").textContent=s.hot_leads??0; $("mWarm").textContent=s.warm_leads??0; $("mNew").textContent=s.new_leads??0;
  $("mDue").textContent=s.overdue_followups??0; $("mMeeting").textContent=s.meetings??0; $("mNegotiation").textContent=s.negotiations??0;
  renderPipeline(s);
}
function renderPipeline(s){
  const items=currentLang==="ar" ? [
    ["جديد",s.new_leads],["ساخن",s.hot_leads],["دافئ",s.warm_leads],["اجتماعات",s.meetings],
    ["مفاوضات",s.negotiations],["تم البيع",s.won],["مفقود",s.lost],["متابعة",s.nurture_leads]
  ] : [
    ["New",s.new_leads],["Hot",s.hot_leads],["Warm",s.warm_leads],["Meetings",s.meetings],
    ["Negotiations",s.negotiations],["Won",s.won],["Lost",s.lost],["Nurture",s.nurture_leads]
  ];
  $("pipelineGrid").innerHTML=items.map(([label,value])=>`<article class="pipeline-card"><span>${esc(label)}</span><strong>${esc(value??0)}</strong></article>`).join("");
}

async function loadLeads(){
  $("leadStatus").textContent=tr("loading");
  try{
    const rows=await rpc("jb_sales_dashboard_leads_v1",{
      p_temperature:$("temperatureFilter").value||null,p_stage:$("stageFilter").value||null,
      p_only_due:$("dueOnly").checked,p_search:$("searchInput").value.trim()||null,p_limit:150,p_offset:0
    });
    $("leadRows").innerHTML=(rows||[]).map(r=>`
      <tr>
        <td><div class="lead-name">${esc(r.full_name)}</div><div class="lead-contact">${esc(r.whatsapp_phone||r.phone||r.email||"—")}</div></td>
        <td>${tempBadge(r.lead_temperature)} <strong>${esc(r.qualification_score??"—")}</strong></td>
        <td><span class="stage">${esc(stageLabel(r.sales_stage))}</span></td>
        <td><span class="action">${esc(actionLabel(r.next_best_action||"REVIEW"))}</span><div class="lead-contact">${esc(r.recommended_channel==="whatsapp"?tr("whatsapp"):r.recommended_channel||"")}</div></td>
        <td>${esc((currentLang==="ar"?r.best_project_name_ar:r.best_project_name_en)||r.best_project_name_en||r.best_project_name_ar||tr("noSavedMatch"))}</td>
        <td>${esc(fmtDate(r.next_follow_up_at))}</td>
        <td><button class="open-btn" data-lead="${esc(r.lead_id)}">${tr("open")}</button></td>
      </tr>`).join("");
    $("leadStatus").textContent=`${rows?.length||0} ${tr("leadsCount")}`;
    document.querySelectorAll("[data-lead]").forEach(b=>b.addEventListener("click",()=>openLead(b.dataset.lead)));
  }catch(e){$("leadStatus").textContent=e.message||tr("failedLoadLeads");}
}

async function openLead(id){
  currentLeadId=id; $("leadDrawer").classList.remove("hidden"); $("leadDrawer").setAttribute("aria-hidden","false");
  $("leadDetail").innerHTML=`<p>${tr("loadingLead")}</p>`;
  try{renderLeadDetail(await rpc("jb_sales_dashboard_lead_detail_v1",{p_lead_id:id}));}
  catch(e){$("leadDetail").innerHTML=`<p class="status">${esc(e.message||tr("failedLoadLead"))}</p>`;}
}
document.querySelectorAll("[data-close-drawer]").forEach(x=>x.addEventListener("click",closeDrawer));
function closeDrawer(){ $("leadDrawer").classList.add("hidden"); $("leadDrawer").setAttribute("aria-hidden","true"); currentLeadId=null; }

function renderLeadDetail(d){
  const l=d.lead||{}, p=l.search_profile||{}, cp=l.customer_preferences||{}, wa=l.whatsapp_phone||l.phone;
  const contactButtons=[
    wa?`<a class="btn primary" target="_blank" rel="noopener" href="https://wa.me/${esc(waHref(wa))}">${tr("whatsapp")}</a>`:"",
    l.phone?`<a class="btn secondary" href="tel:${esc(telHref(l.phone))}">${tr("call")}</a>`:"",
    l.email?`<a class="btn secondary" href="mailto:${esc(l.email)}">${tr("email")}</a>`:""
  ].join("");

  const contactDetails = `
    <div class="lead-contact-panel">
      <div class="lead-contact-panel-title">${tr("contactDetails")}</div>

      <div class="lead-contact-items">
        <div class="contact-item">
          <span class="contact-label">${tr("phone")}</span>
          <strong class="contact-value ltr-value">${esc(l.phone||tr("noContact"))}</strong>
          ${l.phone?`<button type="button" class="copy-contact-btn" data-copy-value="${esc(l.phone)}">${tr("copy")}</button>`:""}
        </div>

        <div class="contact-item">
          <span class="contact-label">${tr("whatsapp")}</span>
          <strong class="contact-value ltr-value">${esc(l.whatsapp_phone||l.phone||tr("noContact"))}</strong>
          ${wa?`<button type="button" class="copy-contact-btn" data-copy-value="${esc(wa)}">${tr("copy")}</button>`:""}
        </div>

        <div class="contact-item">
          <span class="contact-label">${tr("email")}</span>
          <strong class="contact-value ltr-value">${esc(l.email||tr("noContact"))}</strong>
          ${l.email?`<button type="button" class="copy-contact-btn" data-copy-value="${esc(l.email)}">${tr("copy")}</button>`:""}
        </div>
      </div>
    </div>
  `;

  const top3=(d.top3||[]).map(t=>`
    <article class="match-card">
      <div class="match-head">
        <div><h3>#${esc(t.recommendation_order)} ${esc((currentLang==="ar"?t.name_ar:t.name_en)||t.name_en||t.name_ar)}</h3>
        <div class="match-meta">${esc((currentLang==="ar"?t.developer_name_ar:t.developer_name_en)||t.developer_name_en||t.developer_name_ar||"")} · ${esc(t.city||"")} ${t.area?`· ${esc(t.area)}`:""} · ${esc(fmtMoney(t.display_starting_price,t.currency))}</div></div>
        <span class="match-role">${esc(currentLang==="ar" ? (t.fit_role_ar||roleLabel(t.fit_role)) : roleLabel(t.fit_role))}</span>
      </div>
      <div class="match-lines">
        <div><b>${tr("confidence")}:</b> <span class="confidence ${esc((t.confidence_level||"").toLowerCase())}">${esc(currentLang==="ar" ? (t.confidence_level_ar||confLabel(t.confidence_level)) : confLabel(t.confidence_level))}</span></div>
        <div><b>${tr("why")}:</b> ${esc(currentLang==="ar" ? (t.why_it_fits_ar||t.why_it_fits||"—") : (t.why_it_fits||"—"))}</div>
        <div><b>${tr("likelyObjection")}:</b> ${esc(currentLang==="ar" ? (t.likely_objection_ar||t.likely_objection||"—") : (t.likely_objection||"—"))}</div>
        <div><b>${tr("salesAngle")}:</b> ${esc(currentLang==="ar" ? (t.sales_angle_ar||t.sales_angle||"—") : (t.sales_angle||"—"))}</div>
        <div><b>${tr("nextQuestion")}:</b> ${esc(currentLang==="ar" ? (t.next_question_ar||t.next_question||"—") : (t.next_question||"—"))}</div>
        <div><b>${tr("nextActionLabel")}:</b> ${esc(currentLang==="ar" ? (t.next_action_ar||t.next_action||"—") : (t.next_action||"—"))}</div>
      </div>
    </article>`).join("") || `<div class="detail-card"><p class="muted">${tr("noMatches")}</p></div>`;

  const activity=(d.activity||[]).map(a=>`
    <div class="activity-item"><strong>${esc(actionLabel(a.action_type||"UPDATE"))}</strong>
    · ${esc(fmtDate(a.created_at))}${a.note?`<div>${esc(a.note)}</div>`:""}</div>`
  ).join("") || `<p class="muted">${tr("noActivity")}</p>`;

  $("leadDetail").innerHTML=`
    <section class="lead-hero">
      <p class="eyebrow">${tr("lead360")}</p><h2>${esc(l.full_name||tr("lead"))}</h2>
      <div class="meta">${tempBadge(l.lead_temperature)} <span>${tr("scoreLabel")} ${esc(l.qualification_score??"—")}/100</span><span>${esc(stageLabel(l.sales_stage))}</span><span>${esc(actionLabel(l.next_best_action||"REVIEW"))}</span></div>
      ${contactDetails}
      <div class="lead-actions">${contactButtons}</div>
    </section>
    <div class="detail-grid">
      <article class="detail-card"><h3>${tr("searchProfile")}</h3><div class="kv">
        <b>${tr("location")}</b><span>${esc(p.location||"—")}</span><b>${tr("budget")}</b><span>${esc(p.budget||"—")}</span>
        <b>${tr("propertyType")}</b><span>${esc(p.type||"—")}</span><b>${tr("purpose")}</b><span>${esc(p.purpose||"—")}</span>
        <b>${tr("delivery")}</b><span>${esc(p.delivery||"—")}</span><b>${tr("timeline")}</b><span>${esc(p.timeline||"—")}</span>
      </div></article>
      <article class="detail-card"><h3>${tr("customerPreferences")}</h3><div class="kv">
        <b>${tr("payment")}</b><span>${esc(cp.payment_method||p.payment||"—")}</span>
        <b>${tr("maxDown")}</b><span>${esc(cp.max_down_payment_pct??"—")}${cp.max_down_payment_pct!=null?"%":""}</span>
        <b>${tr("installmentYears")}</b><span>${esc(cp.preferred_installment_years??"—")}</span>
        <b>${tr("topPriority")}</b><span>${esc(cp.top_priority||"—")}</span>
        <b>${tr("alternatives")}</b><span>${cp.open_to_alternatives===true?tr("yes"):cp.open_to_alternatives===false?tr("no"):"—"}</span>
        <b>${tr("futureRecommendations")}</b><span>${l.allow_recommendations?tr("allowed"):tr("notAllowed")}</span>
      </div></article>
    </div>
    <p class="eyebrow">${tr("top3Support")}</p><div class="top3">${top3}</div>
    <form id="leadUpdateForm" class="update-form">
      <div><p class="eyebrow">${tr("salesOperation")}</p><h3>${tr("updateLead")}</h3></div>
      <div class="form-grid">
        <label>${tr("stage")}<select id="uStage">
          ${Object.keys(STAGES).map(s=>`<option value="${s}" ${l.sales_stage===s?"selected":""}>${esc(stageLabel(s))}</option>`).join("")}
        </select></label>
        <label>${tr("salesOwner")}<input id="uOwner" value="${esc(l.sales_owner||"")}"></label>
        <label>${tr("nextFollowup")}<input id="uFollow" type="datetime-local"></label>
        <label class="check"><input id="uClearFollow" type="checkbox"> ${tr("clearFollowup")}</label>
      </div>
      <label>${tr("salesNote")}<textarea id="uNotes" placeholder="${esc(tr("salesNotePlaceholder"))}"></textarea></label>
      <label class="check"><input id="uContacted" type="checkbox"> ${tr("markContacted")}</label>
      <button class="btn primary" type="submit">${tr("saveUpdate")}</button>
      <p id="updateStatus" class="status"></p>
    </form>
    <article class="detail-card" style="margin-top:16px"><h3>${tr("recentActivity")}</h3><div class="activity">${activity}</div></article>`;
  $("leadUpdateForm").addEventListener("submit",saveLeadUpdate);
  document.querySelectorAll(".copy-contact-btn").forEach(btn=>{
    btn.addEventListener("click",()=>copyText(btn.dataset.copyValue,btn));
  });
}

async function saveLeadUpdate(e){
  e.preventDefault(); $("updateStatus").textContent=tr("saving"); const follow=$("uFollow").value;
  try{
    await rpc("jb_sales_dashboard_update_lead_v1",{
      p_lead_id:currentLeadId,p_sales_stage:$("uStage").value,p_sales_owner:$("uOwner").value.trim()||null,
      p_next_follow_up_at:follow?new Date(follow).toISOString():null,p_clear_follow_up:$("uClearFollow").checked,
      p_sales_notes:$("uNotes").value.trim()||null,p_mark_contacted:$("uContacted").checked,
      p_lost_reason:null,p_won_project_id:null,p_won_value:null
    });
    $("updateStatus").textContent=tr("saved");
    await Promise.all([loadSummary(),loadLeads()]); await openLead(currentLeadId);
  }catch(e2){$("updateStatus").textContent=e2.message||tr("updateFailed");}
}

async function loadAll(){try{await Promise.all([loadSummary(),loadActionCenter(),loadLeads()]);}catch(e){console.error(e);}}

applyLang();
(async()=>{if(await checkAccess()) await loadAll();})();
