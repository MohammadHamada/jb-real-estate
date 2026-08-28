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
    openLead:"Open lead",
    whatsappAssistant:"WhatsApp Sales Assistant", generateMessage:"Generate message", copyMessage:"Copy message",
    openWhatsApp:"Open WhatsApp", messagePreview:"Message preview", outcomeIntelligence:"OUTCOME INTELLIGENCE",
    wonLostInsights:"Won / Lost Insights", wonDeals:"Won", lostDeals:"Lost", winRate:"Win rate",
    wonValue:"Won value", lostReasons:"Lost reasons", recentWins:"Recent wins", noData:"No data yet.",
    lostReason:"Lost reason", wonProject:"Won project", wonValueField:"Won value (EGP)",
    chooseReason:"Choose reason", reasonPrice:"Price", reasonPayment:"Payment plan", reasonLocation:"Location",
    reasonDeveloper:"Developer", reasonDelivery:"Delivery", reasonUnit:"Unit", reasonCompetitor:"Competitor",
    reasonPostponed:"Postponed", reasonNoResponse:"No response", reasonNotQualified:"Not qualified", reasonOther:"Other",
    conversionAnalytics:"CONVERSION ANALYTICS", salesFunnelPerformance:"Sales Funnel Performance",
    leadToWon:"Lead → Won", leadToContact:"Lead → Contact", contactToQualified:"Contact → Qualified",
    qualifiedToMeeting:"Qualified → Meeting", meetingToWon:"Meeting → Won", salesFunnel:"Sales Funnel",
    followupHealth:"Follow-up Health", overdueFollowups:"Overdue", dueToday:"Due today",
    noFollowupScheduled:"No follow-up scheduled", noFirstContact:"No first contact",
    followupAutomation:"FOLLOW-UP AUTOMATION", followupWorkQueue:"Follow-up Work Queue",
    followupContactNow:"Contact now", followupDueToday:"Due today", followupOverdue:"Overdue",
    followupNoSchedule:"No follow-up scheduled", followupNurture:"Nurture", quickFollowup:"Quick follow-up",
    tomorrow:"Tomorrow", in3Days:"In 3 days", in7Days:"In 7 days", in14Days:"In 14 days", smartSuggested:"Suggested",
    noQueueItems:"No leads in this queue.",
    acquisitionAnalytics:"ACQUISITION & REFERRAL INTELLIGENCE",
    whereBestLeadsComeFrom:"Where do the best leads come from?",
    referralShares:"Referral shares", referralVisits:"Referral visits", referredLeads:"Referred leads",
    visitToLead:"Visit → Lead", referralWins:"Referral wins", leadsBySource:"Leads by source",
    referralChannels:"Referral sharing channels", topLandingPages:"Top lead pages",
    source:"Source", leads:"Leads", won:"Won", conversion:"Conversion", value:"Value",
    shares:"Shares", visits:"Visits",
    attributionNote:"V1 reports only attribution already captured by JB; it does not infer missing campaign data.",
    clientJourney:"CLIENT JOURNEY INTELLIGENCE", linkedAccount:"Linked client account",
    noLinkedAccount:"No client account linked to this lead yet.", linkMethod:"Link method",
    accountCreated:"Account created", lastSignIn:"Last sign-in", engagement:"Engagement",
    highEngagement:"High", mediumEngagement:"Medium", lowEngagement:"Low",
    savedProjects:"Saved projects", recentViews:"Recent views", savedSearches:"Saved searches",
    savedComparisons:"Saved comparisons", totalViews:"Total project views", lastClientActivity:"Last client activity",
    mostViewedProject:"Most viewed project", recentProject:"Most recent project",
    customerSelectedProjects:"Customer-selected projects", customerBehavior:"Observed customer behavior",
    noCustomerJourney:"No saved customer journey data yet.", views:"views",
    accountMatchNote:"Account verified by matching email.",
    accountVerified:"Account verified",
    salesInsight:"Sales insight",
    notSpecified:"Not specified",
    searchLocation:"Location",
    searchBudget:"Budget",
    searchType:"Property type",
    searchPurpose:"Purpose",
    searchBedrooms:"Bedrooms",
    searchDelivery:"Delivery",
    searchPayment:"Payment",
    searchTimeline:"Timeline",
    searchReadiness:"Search readiness",
    searchSummaryTitle:"Saved search",
    comparisonProjects:"Compared projects",
    systemDetails:"System details",
    linkMethodTechnical:"Exact email match",
    searchInsightPrefix:"Customer is actively searching",
    searchInsightLocation:"in",
    searchInsightBudget:"with a budget of",
    searchInsightType:"for",
    searchInsightTimeline:"with a buying timeline of",
    searchInsightFallback:"Use this saved search as a practical guide for the next call.",
    valueMillion:"M EGP",
    behaviorIntel:"BEHAVIORAL INTEREST INTELLIGENCE",
    observedIntent:"Observed purchase intent",
    strongestInterest:"Strongest observed interest",
    behaviorScore:"Behavior score",
    dominantArea:"Dominant area",
    dominantType:"Dominant property type",
    profileBehaviorAlignment:"Profile vs behavior",
    aligned:"Aligned",
    divergent:"Needs validation",
    unknownAlignment:"Not enough data",
    behaviorSignals:"Behavior signals",
    repeatedView:"Repeated viewing",
    savedSignal:"Saved by customer",
    comparedSignal:"Included in comparison",
    recentReturn:"Recent return",
    top3Included:"Observed favorite is already in Top 3",
    top3Missing:"Observed favorite is NOT in current Top 3",
    salesImplication:"Recommended sales approach",
    validatePreference:"Validate whether the customer's preference has changed before presenting options.",
    leadWithFavorite:"Open the conversation with the customer's observed favorite, then compare it with the formal Top 3.",
    useComparison:"Use the customer's saved comparison as the main discussion frame.",
    useBehaviorContext:"Use observed browsing behavior as context, but keep the current qualification flow.",
    noBehaviorData:"No meaningful behavioral signal is available yet.",
    intentProjects:"Highest-intent projects",
    behaviorViews:"Views",
    behaviorSaved:"Saved",
    behaviorCompared:"Compared",
    recommendationAlignment:"Recommendation alignment"
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
    openLead:"فتح العميل",
    whatsappAssistant:"مساعد رسائل واتساب", generateMessage:"إنشاء الرسالة", copyMessage:"نسخ الرسالة",
    openWhatsApp:"فتح واتساب", messagePreview:"معاينة الرسالة", outcomeIntelligence:"تحليل نتائج المبيعات",
    wonLostInsights:"تحليل الصفقات المغلقة", wonDeals:"تم البيع", lostDeals:"صفقات مفقودة", winRate:"نسبة الفوز",
    wonValue:"قيمة الصفقات", lostReasons:"أسباب فقد الصفقات", recentWins:"أحدث الصفقات الناجحة", noData:"لا توجد بيانات حتى الآن.",
    lostReason:"سبب فقد الصفقة", wonProject:"المشروع المباع", wonValueField:"قيمة الصفقة (جنيه)",
    chooseReason:"اختر السبب", reasonPrice:"السعر", reasonPayment:"خطة السداد", reasonLocation:"الموقع",
    reasonDeveloper:"المطور", reasonDelivery:"موعد الاستلام", reasonUnit:"الوحدة", reasonCompetitor:"منافس",
    reasonPostponed:"تأجيل الشراء", reasonNoResponse:"لا يرد", reasonNotQualified:"غير مؤهل", reasonOther:"سبب آخر",
    conversionAnalytics:"تحليل التحويل", salesFunnelPerformance:"أداء مسار المبيعات",
    leadToWon:"من العميل إلى البيع", leadToContact:"من العميل إلى التواصل", contactToQualified:"من التواصل إلى التأهيل",
    qualifiedToMeeting:"من التأهيل إلى الاجتماع", meetingToWon:"من الاجتماع إلى البيع", salesFunnel:"مسار المبيعات",
    followupHealth:"حالة المتابعات", overdueFollowups:"متابعات متأخرة", dueToday:"مستحقة اليوم",
    noFollowupScheduled:"بدون متابعة مجدولة", noFirstContact:"بدون تواصل أول",
    followupAutomation:"أتمتة المتابعة", followupWorkQueue:"قائمة عمل المتابعات",
    followupContactNow:"تواصل الآن", followupDueToday:"مستحقة اليوم", followupOverdue:"متأخرة",
    followupNoSchedule:"بدون متابعة مجدولة", followupNurture:"متابعة طويلة", quickFollowup:"متابعة سريعة",
    tomorrow:"غدًا", in3Days:"بعد 3 أيام", in7Days:"بعد أسبوع", in14Days:"بعد أسبوعين", smartSuggested:"مقترح",
    noQueueItems:"لا توجد حالات في هذه القائمة.",
    acquisitionAnalytics:"تحليل مصادر العملاء والإحالات",
    whereBestLeadsComeFrom:"من أين يأتي أفضل العملاء؟",
    referralShares:"مشاركات الإحالة", referralVisits:"زيارات الإحالة", referredLeads:"عملاء الإحالة",
    visitToLead:"من الزيارة إلى العميل", referralWins:"صفقات الإحالة", leadsBySource:"العملاء حسب المصدر",
    referralChannels:"قنوات مشاركة الإحالات", topLandingPages:"أهم صفحات جذب العملاء",
    source:"المصدر", leads:"العملاء", won:"تم البيع", conversion:"التحويل", value:"القيمة",
    shares:"المشاركات", visits:"الزيارات",
    attributionNote:"يعرض الإصدار V1 فقط بيانات المصدر التي سجلها JB فعليًا، ولا يفترض بيانات حملات غير موجودة.",
    clientJourney:"ذكاء رحلة العميل", linkedAccount:"حساب العميل المرتبط",
    noLinkedAccount:"لا يوجد حساب عميل مرتبط بهذا الـLead حتى الآن.", linkMethod:"طريقة الربط",
    accountCreated:"تاريخ إنشاء الحساب", lastSignIn:"آخر تسجيل دخول", engagement:"درجة التفاعل",
    highEngagement:"مرتفع", mediumEngagement:"متوسط", lowEngagement:"منخفض",
    savedProjects:"مشروعات محفوظة", recentViews:"مشاهدات حديثة", savedSearches:"بحوث محفوظة",
    savedComparisons:"مقارنات محفوظة", totalViews:"إجمالي مشاهدات المشروعات", lastClientActivity:"آخر نشاط للعميل",
    mostViewedProject:"أكثر مشروع مشاهدة", recentProject:"أحدث مشروع تمت مشاهدته",
    customerSelectedProjects:"المشروعات التي اختارها العميل", customerBehavior:"السلوك الفعلي للعميل",
    noCustomerJourney:"لا توجد رحلة محفوظة للعميل حتى الآن.", views:"مشاهدات",
    accountMatchNote:"تم التحقق من حساب العميل بالبريد الإلكتروني المطابق.",
    accountVerified:"تم التحقق من الحساب",
    salesInsight:"معلومة بيعية",
    notSpecified:"غير محدد",
    searchLocation:"المنطقة",
    searchBudget:"الميزانية",
    searchType:"نوع الوحدة",
    searchPurpose:"الغرض",
    searchBedrooms:"عدد الغرف",
    searchDelivery:"التسليم",
    searchPayment:"طريقة السداد",
    searchTimeline:"موعد الشراء",
    searchReadiness:"اكتمال البحث",
    searchSummaryTitle:"بحث محفوظ",
    comparisonProjects:"المشروعات المقارنة",
    systemDetails:"تفاصيل النظام",
    linkMethodTechnical:"تطابق البريد الإلكتروني",
    searchInsightPrefix:"العميل يبحث فعليًا",
    searchInsightLocation:"في",
    searchInsightBudget:"بميزانية",
    searchInsightType:"عن",
    searchInsightTimeline:"وموعد شراء",
    searchInsightFallback:"استخدم هذا البحث المحفوظ كمرجع عملي في المكالمة التالية.",
    valueMillion:"مليون جنيه",
    behaviorIntel:"ذكاء الاهتمام السلوكي",
    observedIntent:"نية الشراء المستنتجة من السلوك",
    strongestInterest:"أقوى اهتمام فعلي",
    behaviorScore:"درجة السلوك",
    dominantArea:"المنطقة الأكثر اهتمامًا",
    dominantType:"نوع العقار الأكثر اهتمامًا",
    profileBehaviorAlignment:"توافق البيانات مع السلوك",
    aligned:"متوافق",
    divergent:"يحتاج تحقق",
    unknownAlignment:"بيانات غير كافية",
    behaviorSignals:"إشارات السلوك",
    repeatedView:"مشاهدة متكررة",
    savedSignal:"حفظه العميل",
    comparedSignal:"أدخله في المقارنة",
    recentReturn:"عاد إليه مؤخرًا",
    top3Included:"المشروع المفضل سلوكيًا موجود ضمن أفضل 3",
    top3Missing:"المشروع المفضل سلوكيًا غير موجود ضمن أفضل 3 الحالية",
    salesImplication:"الأسلوب البيعي المقترح",
    validatePreference:"تحقق أولًا هل تغير تفضيل العميل قبل عرض الخيارات النهائية.",
    leadWithFavorite:"ابدأ الحديث بالمشروع الذي أظهر العميل اهتمامًا فعليًا به، ثم قارنه بأفضل 3 ترشيحات.",
    useComparison:"استخدم المقارنة التي حفظها العميل كإطار رئيسي للمناقشة.",
    useBehaviorContext:"استخدم السلوك الفعلي كسياق مساعد مع الاستمرار في مسار التأهيل الحالي.",
    noBehaviorData:"لا توجد إشارة سلوكية قوية حتى الآن.",
    intentProjects:"المشروعات الأعلى نية",
    behaviorViews:"المشاهدات",
    behaviorSaved:"محفوظ",
    behaviorCompared:"مقارنة",
    recommendationAlignment:"توافق الترشيحات"
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


const LOST_REASON_LABELS = {
  price:{en:"Price",ar:"السعر"},
  payment_plan:{en:"Payment plan",ar:"خطة السداد"},
  location:{en:"Location",ar:"الموقع"},
  developer:{en:"Developer",ar:"المطور"},
  delivery:{en:"Delivery",ar:"موعد الاستلام"},
  unit:{en:"Unit",ar:"الوحدة"},
  competitor:{en:"Competitor",ar:"منافس"},
  postponed:{en:"Postponed",ar:"تأجيل الشراء"},
  no_response:{en:"No response",ar:"لا يرد"},
  not_qualified:{en:"Not qualified",ar:"غير مؤهل"},
  other:{en:"Other",ar:"سبب آخر"},
  unspecified:{en:"Unspecified",ar:"غير محدد"}
};

function lostReasonLabel(v){
  return LOST_REASON_LABELS[v]?.[currentLang] || v || "—";
}


function conversionStageLabel(stage){
  const m={
    new:{en:"New",ar:"جديد"},
    contacted:{en:"Contacted",ar:"تم التواصل"},
    qualified:{en:"Qualified",ar:"مؤهل"},
    options_sent:{en:"Options sent",ar:"تم إرسال الخيارات"},
    meeting:{en:"Meeting",ar:"اجتماع"},
    viewing:{en:"Viewing",ar:"معاينة"},
    negotiation:{en:"Negotiation",ar:"تفاوض"},
    won:{en:"Won",ar:"تم البيع"}
  };
  return m[stage]?.[currentLang] || stage || "—";
}



function acquisitionChannelLabel(v){
  const map={
    direct:{en:"Direct",ar:"مباشر"},
    google_organic:{en:"Google organic",ar:"Google عضوي"},
    facebook:{en:"Facebook",ar:"Facebook"},
    instagram:{en:"Instagram",ar:"Instagram"},
    whatsapp:{en:"WhatsApp",ar:"WhatsApp"},
    other_referral:{en:"Other referral",ar:"إحالة خارجية"},
    referral_whatsapp:{en:"Referral · WhatsApp",ar:"إحالة · واتساب"},
    referral_email:{en:"Referral · Email",ar:"إحالة · بريد"},
    referral_native:{en:"Referral · Share",ar:"إحالة · مشاركة"},
    referral_copy:{en:"Referral · Copied link",ar:"إحالة · رابط منسوخ"},
    referral_shared_link:{en:"Referral · Shared link",ar:"إحالة · رابط مشترك"}
  };
  return map[v]?.[currentLang] || v || "—";
}

function referralChannelLabel(v){
  const map={
    whatsapp:{en:"WhatsApp",ar:"واتساب"},
    email:{en:"Email",ar:"البريد الإلكتروني"},
    native:{en:"Native share",ar:"مشاركة الجهاز"},
    copy:{en:"Copy link",ar:"نسخ الرابط"},
    shared_link:{en:"Shared link",ar:"رابط مشترك"},
    unknown:{en:"Unknown",ar:"غير محدد"}
  };
  return map[v]?.[currentLang] || v || "—";
}

async function loadAcquisitionAnalytics(){
  $("acquisitionStatus").textContent=tr("loading");
  try{
    const d=await rpc("jb_sales_acquisition_analytics_v1");
    const s=d.summary||{};
    $("aShares").textContent=s.referral_shares??0;
    $("aVisits").textContent=s.referral_visits??0;
    $("aReferralLeads").textContent=s.referred_leads??0;
    $("aVisitLead").textContent=`${s.visit_to_lead_rate??0}%`;
    $("aReferralWins").textContent=s.referred_wins??0;

    $("acquisitionChannels").innerHTML=(d.channels||[]).map(x=>`
      <div class="analytics-row">
        <div><strong>${esc(acquisitionChannelLabel(x.channel))}</strong><small>${tr("leads")}: ${esc(x.leads)}</small></div>
        <div><span>${tr("won")}: <b>${esc(x.won)}</b></span><span>${tr("conversion")}: <b>${esc(x.lead_to_won_rate)}%</b></span></div>
      </div>
    `).join("") || `<p class="muted">${tr("noData")}</p>`;

    $("referralChannels").innerHTML=(d.referral_channels||[]).map(x=>`
      <div class="analytics-row">
        <strong>${esc(referralChannelLabel(x.channel))}</strong>
        <div><span>${tr("shares")}: <b>${esc(x.shares)}</b></span><span>${tr("visits")}: <b>${esc(x.visits)}</b></span></div>
      </div>
    `).join("") || `<p class="muted">${tr("noData")}</p>`;

    $("landingPages").innerHTML=(d.landing_pages||[]).map(x=>`
      <div class="analytics-row">
        <div><strong>${esc(x.page_path||"/")}</strong><small>${tr("leads")}: ${esc(x.leads)}</small></div>
        <div><span>${tr("won")}: <b>${esc(x.won)}</b></span><span>${tr("conversion")}: <b>${esc(x.lead_to_won_rate)}%</b></span></div>
      </div>
    `).join("") || `<p class="muted">${tr("noData")}</p>`;

    $("acquisitionStatus").textContent="";
  }catch(e){
    $("acquisitionStatus").textContent=e.message||"Failed to load acquisition analytics.";
  }
}

function followupQueueCard(titleKey,items,kind){
  const rows=(items||[]).map(x=>{
    const project=(currentLang==="ar"?x.best_project_name_ar:x.best_project_name_en)
      || x.best_project_name_en || x.best_project_name_ar || tr("noSavedMatch");
    const when=x.next_follow_up_at ? fmtDate(x.next_follow_up_at) : "";
    return `<button class="followup-lead-row ${esc(kind)}" type="button" data-followup-lead="${esc(x.lead_id)}">
      <div>
        <strong>${esc(x.full_name)}</strong>
        <span>${esc(project)}</span>
        ${when?`<small>${esc(when)}</small>`:""}
      </div>
      <div>${tempBadge(x.lead_temperature)} <b>${esc(x.qualification_score??"—")}</b></div>
    </button>`;
  }).join("") || `<div class="followup-empty">${tr("noQueueItems")}</div>`;

  return `<article class="followup-queue-group">
    <div class="followup-queue-head"><h3>${tr(titleKey)}</h3><strong>${items?.length||0}</strong></div>
    <div>${rows}</div>
  </article>`;
}

async function loadFollowupQueue(){
  $("followupQueueStatus").textContent=tr("loading");
  try{
    const d=await rpc("jb_sales_followup_queue_v1",{p_limit_per_group:10});
    const s=d.summary||{};
    $("followupSummary").innerHTML=`
      <div><span>${tr("followupContactNow")}</span><strong>${esc(s.contact_now??0)}</strong></div>
      <div><span>${tr("followupDueToday")}</span><strong>${esc(s.due_today??0)}</strong></div>
      <div><span>${tr("followupOverdue")}</span><strong>${esc(s.overdue??0)}</strong></div>
      <div><span>${tr("followupNoSchedule")}</span><strong>${esc(s.no_followup_scheduled??0)}</strong></div>
      <div><span>${tr("followupNurture")}</span><strong>${esc(s.nurture??0)}</strong></div>
    `;
    $("followupQueueGrid").innerHTML=[
      followupQueueCard("followupContactNow",d.contact_now,"contact-now"),
      followupQueueCard("followupDueToday",d.due_today,"due-today"),
      followupQueueCard("followupOverdue",d.overdue,"overdue"),
      followupQueueCard("followupNoSchedule",d.no_followup_scheduled,"no-schedule"),
      followupQueueCard("followupNurture",d.nurture,"nurture")
    ].join("");
    document.querySelectorAll("[data-followup-lead]").forEach(btn=>{
      btn.addEventListener("click",()=>openLead(btn.dataset.followupLead));
    });
    $("followupQueueStatus").textContent="";
  }catch(e){
    $("followupQueueStatus").textContent=e.message||"Failed to load follow-up queue.";
  }
}

async function loadConversionAnalytics(){
  $("conversionStatus").textContent=tr("loading");
  try{
    const d=await rpc("jb_sales_conversion_analytics_v1");
    const s=d.summary||{};
    const f=d.followup_health||{};

    $("cLeadWon").textContent=`${s.overall_lead_to_won_rate??0}%`;
    $("cLeadContact").textContent=`${s.lead_to_contact_rate??0}%`;
    $("cContactQualified").textContent=`${s.contact_to_qualified_rate??0}%`;
    $("cQualifiedMeeting").textContent=`${s.qualified_to_meeting_rate??0}%`;
    $("cMeetingWon").textContent=`${s.meeting_to_won_rate??0}%`;

    $("cOverdue").textContent=f.overdue_followups??0;
    $("cDueToday").textContent=f.due_today??0;
    $("cNoFollowup").textContent=f.no_followup_scheduled??0;
    $("cNoFirstContact").textContent=f.no_first_contact??0;

    const funnel=d.funnel||[];
    const maxCount=Math.max(1,...funnel.map(x=>Number(x.count||0)));
    $("salesFunnel").innerHTML=funnel.map(x=>{
      const pct=Math.max(4,Math.round(100*Number(x.count||0)/maxCount));
      return `<div class="funnel-row">
        <div class="funnel-row-head">
          <span>${esc(conversionStageLabel(x.stage))}</span>
          <strong>${esc(x.count??0)}</strong>
        </div>
        <div class="funnel-track"><span style="width:${pct}%"></span></div>
      </div>`;
    }).join("");

    $("conversionStatus").textContent="";
  }catch(e){
    $("conversionStatus").textContent=e.message||"Failed to load conversion analytics.";
  }
}

async function loadOutcomes(){
  $("outcomeStatus").textContent=tr("loading");
  try{
    const d=await rpc("jb_sales_outcome_intelligence_v1");
    const s=d.summary||{};
    $("oWon").textContent=s.won_count??0;
    $("oLost").textContent=s.lost_count??0;
    $("oWinRate").textContent=`${s.win_rate_pct??0}%`;
    $("oWonValue").textContent=fmtMoney(s.won_value_total||0,"EGP");

    $("lostReasonsList").innerHTML=(d.lost_reasons||[]).map(x=>`
      <div class="outcome-list-row">
        <span>${esc(lostReasonLabel(x.reason))}</span>
        <strong>${esc(x.count)}</strong>
      </div>
    `).join("") || `<p class="muted">${tr("noData")}</p>`;

    $("recentWinsList").innerHTML=(d.recent_wins||[]).map(x=>`
      <button class="outcome-win-row" type="button" data-outcome-lead="${esc(x.lead_id)}">
        <span><strong>${esc(x.full_name)}</strong><small>${esc(fmtDate(x.updated_at))}</small></span>
        <b>${esc(fmtMoney(x.won_value||0,"EGP"))}</b>
      </button>
    `).join("") || `<p class="muted">${tr("noData")}</p>`;

    document.querySelectorAll("[data-outcome-lead]").forEach(btn=>{
      btn.addEventListener("click",()=>openLead(btn.dataset.outcomeLead));
    });
    $("outcomeStatus").textContent="";
  }catch(e){
    $("outcomeStatus").textContent=e.message||"Failed to load outcome intelligence.";
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
  try{
    const [detail,journey,behavior]=await Promise.all([
      rpc("jb_sales_dashboard_lead_detail_v1",{p_lead_id:id}),
      rpc("jb_sales_client_journey_v1",{p_lead_id:id}).catch(e=>{
        console.warn("Client journey unavailable:",e);
        return null;
      }),
      rpc("jb_sales_behavioral_interest_v1",{p_lead_id:id}).catch(e=>{
        console.warn("Behavioral interest unavailable:",e);
        return null;
      })
    ]);
    renderLeadDetail(detail,journey,behavior);
  }
  catch(e){$("leadDetail").innerHTML=`<p class="status">${esc(e.message||tr("failedLoadLead"))}</p>`;}
}
document.querySelectorAll("[data-close-drawer]").forEach(x=>x.addEventListener("click",closeDrawer));
function closeDrawer(){ $("leadDrawer").classList.add("hidden"); $("leadDrawer").setAttribute("aria-hidden","true"); currentLeadId=null; }


function buildWhatsAppMessage(lead, top3){
  const name=lead.full_name||"";
  const t=(top3||[])[0]||null;
  const project=t ? ((currentLang==="ar"?t.name_ar:t.name_en)||t.name_en||t.name_ar||"") : "";

  if(currentLang==="ar"){
    let msg=`أستاذ/ة ${name}، أهلاً بحضرتك من JB Real Estate.\n`;
    if(project) msg+=`بناءً على اختياراتك، من أقرب الخيارات المناسبة لك مشروع ${project}.\n`;
    if(t?.why_it_fits_ar) msg+=`سبب الترشيح: ${t.why_it_fits_ar}.\n`;
    if(t?.next_question_ar) msg+=`${t.next_question_ar}\n`;
    msg+=`إذا أحببت، أرسل لحضرتك مقارنة مختصرة بين أفضل الخيارات المناسبة لك.`;
    return msg;
  }

  let msg=`Hello ${name}, this is JB Real Estate.\n`;
  if(project) msg+=`Based on your preferences, one of the closest matches is ${project}.\n`;
  if(t?.why_it_fits) msg+=`Why it fits: ${t.why_it_fits}.\n`;
  if(t?.next_question) msg+=`${t.next_question}\n`;
  msg+=`If you would like, I can send you a short comparison of your best options.`;
  return msg;
}


function engagementLabel(value){
  const v=String(value||"LOW").toUpperCase();
  if(v==="HIGH") return tr("highEngagement");
  if(v==="MEDIUM") return tr("mediumEngagement");
  return tr("lowEngagement");
}


function humanizeSearchValue(key,value){
  if(value===null || value===undefined || value==="") return "";
  const raw=String(value);

  const budgetMap={
    "under5": currentLang==="ar"?"أقل من 5 مليون EGP":"Under 5M EGP",
    "5to10": currentLang==="ar"?"5–10 مليون EGP":"5–10M EGP",
    "10to20": currentLang==="ar"?"10–20 مليون EGP":"10–20M EGP",
    "20plus": currentLang==="ar"?"أكثر من 20 مليون EGP":"20M+ EGP"
  };

  const commonMap={
    "both": currentLang==="ar"?"سكن أو استثمار":"Home or investment",
    "investment": currentLang==="ar"?"استثمار":"Investment",
    "home": currentLang==="ar"?"سكن":"Home",
    "cash": currentLang==="ar"?"كاش":"Cash",
    "installments": currentLang==="ar"?"تقسيط":"Installments",
    "now": currentLang==="ar"?"الآن":"Now",
    "3months": currentLang==="ar"?"خلال 3 أشهر":"Within 3 months",
    "6months": currentLang==="ar"?"خلال 6 أشهر":"Within 6 months",
    "12months": currentLang==="ar"?"خلال 12 شهرًا":"Within 12 months",
    "apartment": currentLang==="ar"?"شقة":"Apartment",
    "villa": currentLang==="ar"?"فيلا":"Villa",
    "townhouse": currentLang==="ar"?"تاون هاوس":"Townhouse",
    "chalet": currentLang==="ar"?"شاليه":"Chalet"
  };

  if(key==="budget" && budgetMap[raw]) return budgetMap[raw];
  const mapped=commonMap[raw.toLowerCase()];
  if(mapped) return mapped;

  return raw.replace(/_/g," ");
}

function searchFieldLabel(key){
  const map={
    location:"searchLocation",
    budget:"searchBudget",
    type:"searchType",
    purpose:"searchPurpose",
    bedrooms:"searchBedrooms",
    delivery:"searchDelivery",
    payment:"searchPayment",
    timeline:"searchTimeline",
    readiness:"searchReadiness"
  };
  return tr(map[key]||key);
}

function normalizedSearchEntries(profile){
  const p=profile||{};
  const order=["location","budget","type","purpose","bedrooms","delivery","payment","timeline","readiness"];
  return order
    .map(key=>({key,label:searchFieldLabel(key),value:humanizeSearchValue(key,p[key])}))
    .filter(item=>item.value!=="" && item.value!==tr("notSpecified"));
}

function buildSavedSearchInsight(profile){
  const p=profile||{};
  const parts=[];
  if(p.type) parts.push(humanizeSearchValue("type",p.type));
  if(p.location) parts.push(`${tr("searchInsightLocation")} ${humanizeSearchValue("location",p.location)}`);
  if(p.budget) parts.push(`${tr("searchInsightBudget")} ${humanizeSearchValue("budget",p.budget)}`);
  if(p.timeline) parts.push(`${tr("searchInsightTimeline")} ${humanizeSearchValue("timeline",p.timeline)}`);

  if(!parts.length) return tr("searchInsightFallback");

  return `${tr("searchInsightPrefix")} ${parts.join(" · ")}.`;
}

function renderSavedSearchCard(x){
  const entries=normalizedSearchEntries(x.search_profile);
  const fields=entries.length ? entries.map(item=>`
    <div class="saved-search-field">
      <span>${esc(item.label)}</span>
      <strong>${esc(item.value)}</strong>
    </div>`).join("") : `<p class="muted">${tr("noData")}</p>`;

  return `<article class="saved-search-card">
    <div class="saved-search-head">
      <strong>${esc(x.name||tr("searchSummaryTitle"))}</strong>
      <small>${esc(fmtDate(x.updated_at||x.created_at))}</small>
    </div>

    <div class="saved-search-grid">${fields}</div>

    <div class="saved-search-insight">
      <span>${tr("salesInsight")}</span>
      <p>${esc(buildSavedSearchInsight(x.search_profile))}</p>
    </div>
  </article>`;
}

function renderSavedComparisonCard(x){
  const names=(x.project_names||[]).filter(Boolean);
  return `<article class="saved-comparison-card">
    <div class="saved-search-head">
      <strong>${esc(x.name||tr("savedComparisons"))}</strong>
      <small>${esc(fmtDate(x.updated_at||x.created_at))}</small>
    </div>
    <div class="comparison-project-tags">
      ${names.length
        ? names.map(name=>`<span>${esc(name)}</span>`).join("")
        : `<span class="muted">${tr("noData")}</span>`}
    </div>
  </article>`;
}

function renderClientJourney(j){
  if(!j || !j.linked){
    return `<section class="client-journey-intel">
      <p class="eyebrow">${tr("clientJourney")}</p>
      <div class="journey-empty">
        <strong>${tr("noLinkedAccount")}</strong>
        <small>${tr("accountMatchNote")}</small>
      </div>
    </section>`;
  }

  const s=j.summary||{};
  const saved=(j.saved_projects||[]).map(p=>`
    <button type="button" class="journey-project-row" data-project-name="${esc((currentLang==="ar"?p.name_ar:p.name_en)||p.name_en||p.name_ar||"")}">
      <span><strong>${esc((currentLang==="ar"?p.name_ar:p.name_en)||p.name_en||p.name_ar||"")}</strong>
      <small>${esc(p.city||"")}${p.area?` · ${esc(p.area)}`:""}</small></span>
      <span class="journey-chip">${tr("savedProjects")}</span>
    </button>`).join("");

  const recent=(j.recent_projects||[]).slice(0,6).map(p=>`
    <div class="journey-project-row">
      <span><strong>${esc((currentLang==="ar"?p.name_ar:p.name_en)||p.name_en||p.name_ar||"")}</strong>
      <small>${esc(fmtDate(p.viewed_at))}</small></span>
      <span class="journey-chip">${esc(p.view_count||0)} ${tr("views")}</span>
    </div>`).join("");

  const searches=(j.saved_searches||[]).slice(0,4).map(renderSavedSearchCard).join("");

  const comparisons=(j.saved_comparisons||[]).slice(0,4).map(renderSavedComparisonCard).join("");

  return `<section class="client-journey-intel">
    <div class="journey-title-row">
      <div><p class="eyebrow">${tr("clientJourney")}</p><h3>${tr("customerBehavior")}</h3></div>
      <span class="journey-engagement ${esc(String(s.engagement_signal||"low").toLowerCase())}">
        ${tr("engagement")}: ${esc(engagementLabel(s.engagement_signal))}
      </span>
    </div>

    <div class="journey-account-note journey-account-verified">
      <div class="journey-verified-icon">✓</div>
      <div class="journey-account-main">
        <strong>${tr("accountVerified")}</strong>
        <span>${esc(j.account?.email||"—")}</span>
      </div>
      <div class="journey-account-meta">
        <span>${tr("accountCreated")}: ${esc(fmtDate(j.account?.created_at))}</span>
        <span>${tr("lastSignIn")}: ${esc(fmtDate(j.account?.last_sign_in_at))}</span>
      </div>
    </div>

    <div class="journey-metrics">
      <div><span>${tr("savedProjects")}</span><strong>${esc(s.saved_projects??0)}</strong></div>
      <div><span>${tr("recentViews")}</span><strong>${esc(s.recent_projects??0)}</strong></div>
      <div><span>${tr("savedSearches")}</span><strong>${esc(s.saved_searches??0)}</strong></div>
      <div><span>${tr("savedComparisons")}</span><strong>${esc(s.saved_comparisons??0)}</strong></div>
      <div><span>${tr("totalViews")}</span><strong>${esc(s.total_project_views??0)}</strong></div>
      <div><span>${tr("lastClientActivity")}</span><strong class="small-date">${esc(fmtDate(s.last_activity_at))}</strong></div>
    </div>

    <div class="journey-signal-grid">
      <div><b>${tr("mostViewedProject")}</b><span>${esc((currentLang==="ar"?s.most_viewed_project_name_ar:s.most_viewed_project_name_en)||s.most_viewed_project_name_en||s.most_viewed_project_name_ar||"—")}</span></div>
      <div><b>${tr("recentProject")}</b><span>${esc((currentLang==="ar"?s.most_recent_project_name_ar:s.most_recent_project_name_en)||s.most_recent_project_name_en||s.most_recent_project_name_ar||"—")}</span></div>
    </div>

    <div class="journey-columns">
      <div><h4>${tr("customerSelectedProjects")}</h4>${saved||`<p class="muted">${tr("noCustomerJourney")}</p>`}</div>
      <div><h4>${tr("recentViews")}</h4>${recent||`<p class="muted">${tr("noCustomerJourney")}</p>`}</div>
    </div>

    ${(searches||comparisons)?`<div class="journey-columns journey-secondary">
      <div><h4>${tr("savedSearches")}</h4>${searches||`<p class="muted">${tr("noData")}</p>`}</div>
      <div><h4>${tr("savedComparisons")}</h4>${comparisons||`<p class="muted">${tr("noData")}</p>`}</div>
    </div>`:""}

    <details class="journey-system-details">
      <summary>${tr("systemDetails")}</summary>
      <div>
        <span>${tr("accountMatchNote")}</span>
        <small>${tr("linkMethod")}: ${tr("linkMethodTechnical")}</small>
      </div>
    </details>
  </section>`;
}


function alignmentLabel(value){
  const v=String(value||"UNKNOWN").toUpperCase();
  if(v==="ALIGNED") return tr("aligned");
  if(v==="DIVERGENT") return tr("divergent");
  return tr("unknownAlignment");
}

function behaviorActionText(code){
  const map={
    VALIDATE_CHANGED_PREFERENCE:"validatePreference",
    LEAD_WITH_OBSERVED_FAVORITE:"leadWithFavorite",
    USE_COMPARISON_CLOSE:"useComparison",
    USE_BEHAVIOR_AS_CONTEXT:"useBehaviorContext"
  };
  return tr(map[code]||"useBehaviorContext");
}

function renderBehavioralInterest(b){
  if(!b || !b.linked || !Array.isArray(b.projects) || !b.projects.length){
    return `<section class="behavior-intel">
      <p class="eyebrow">${tr("behaviorIntel")}</p>
      <div class="behavior-empty">${tr("noBehaviorData")}</div>
    </section>`;
  }

  const s=b.summary||{};
  const signals=(b.signals||[]).map(sig=>{
    const key={
      REPEATED_VIEW:"repeatedView",
      SAVED_PROJECT:"savedSignal",
      COMPARED_PROJECT:"comparedSignal",
      RECENT_RETURN:"recentReturn"
    }[sig]||sig;
    return `<span class="behavior-signal-chip">${esc(tr(key)||sig)}</span>`;
  }).join("");

  const projects=(b.projects||[]).slice(0,5).map((p,index)=>`
    <article class="behavior-project-card ${index===0?"is-top":""}">
      <div>
        <strong>#${index+1} ${esc((currentLang==="ar"?p.name_ar:p.name_en)||p.name_en||p.name_ar||"—")}</strong>
        <small>${esc(p.city||"")}${p.area?` · ${esc(p.area)}`:""}</small>
      </div>
      <div class="behavior-project-metrics">
        <span>${tr("behaviorViews")}: <b>${esc(p.view_count||0)}</b></span>
        ${p.saved?`<span>✓ ${tr("behaviorSaved")}</span>`:""}
        ${p.compared?`<span>✓ ${tr("behaviorCompared")}</span>`:""}
        <span>${tr("behaviorScore")}: <b>${esc(p.behavior_score||0)}</b></span>
      </div>
    </article>`).join("");

  const alignment=String(s.profile_behavior_alignment||"UNKNOWN").toLowerCase();
  const top3Aligned=s.top_project_in_top3===true;

  return `<section class="behavior-intel">
    <div class="behavior-head">
      <div>
        <p class="eyebrow">${tr("behaviorIntel")}</p>
        <h3>${tr("observedIntent")}</h3>
      </div>
      <span class="behavior-alignment ${esc(alignment)}">${tr("profileBehaviorAlignment")}: ${esc(alignmentLabel(s.profile_behavior_alignment))}</span>
    </div>

    <div class="behavior-summary-grid">
      <div><span>${tr("strongestInterest")}</span><strong>${esc((currentLang==="ar"?s.top_project_name_ar:s.top_project_name_en)||s.top_project_name_en||s.top_project_name_ar||"—")}</strong></div>
      <div><span>${tr("dominantArea")}</span><strong>${esc(s.dominant_area||"—")}</strong></div>
      <div><span>${tr("dominantType")}</span><strong>${esc(s.dominant_type||"—")}</strong></div>
      <div><span>${tr("recommendationAlignment")}</span><strong class="${top3Aligned?"behavior-good":"behavior-alert"}">${top3Aligned?tr("top3Included"):tr("top3Missing")}</strong></div>
    </div>

    <div class="behavior-signals">
      <b>${tr("behaviorSignals")}</b>
      <div>${signals||`<span class="muted">${tr("noData")}</span>`}</div>
    </div>

    <div class="behavior-sales-implication">
      <span>${tr("salesImplication")}</span>
      <p>${esc(behaviorActionText(s.recommended_action))}</p>
    </div>

    <div class="behavior-projects">
      <h4>${tr("intentProjects")}</h4>
      ${projects}
    </div>
  </section>`;
}

function renderLeadDetail(d,journey=null,behavior=null){
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
    ${renderClientJourney(journey)}
    ${renderBehavioralInterest(behavior)}
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
    ${behavior?.summary?.top_project_in_top3===false ? `
      <div class="behavior-top3-warning">
        <strong>${tr("top3Missing")}</strong>
        <span>${tr("leadWithFavorite")}</span>
      </div>` : ""}
    <article class="whatsapp-assistant">
      <div class="wa-assistant-head">
        <div><p class="eyebrow">${tr("whatsappAssistant")}</p><h3>${tr("messagePreview")}</h3></div>
      </div>
      <textarea id="waMessagePreview"></textarea>
      <div class="wa-assistant-actions">
        <button id="waGenerateBtn" class="btn secondary" type="button">${tr("generateMessage")}</button>
        <button id="waCopyBtn" class="btn secondary" type="button">${tr("copyMessage")}</button>
        ${wa?`<button id="waOpenBtn" class="btn primary" type="button">${tr("openWhatsApp")}</button>`:""}
      </div>
    </article>

    <form id="leadUpdateForm" class="update-form">
      <div><p class="eyebrow">${tr("salesOperation")}</p><h3>${tr("updateLead")}</h3></div>
      <div class="form-grid">
        <label>${tr("stage")}<select id="uStage">
          ${Object.keys(STAGES).map(s=>`<option value="${s}" ${l.sales_stage===s?"selected":""}>${esc(stageLabel(s))}</option>`).join("")}
        </select></label>
        <label>${tr("salesOwner")}<input id="uOwner" value="${esc(l.sales_owner||"")}"></label>
        <label>${tr("nextFollowup")}<input id="uFollow" type="datetime-local"></label>
        <label class="check"><input id="uClearFollow" type="checkbox"> ${tr("clearFollowup")}</label>
        <label id="lostReasonWrap" class="outcome-field hidden">${tr("lostReason")}
          <select id="uLostReason">
            <option value="">${tr("chooseReason")}</option>
            <option value="price">${tr("reasonPrice")}</option>
            <option value="payment_plan">${tr("reasonPayment")}</option>
            <option value="location">${tr("reasonLocation")}</option>
            <option value="developer">${tr("reasonDeveloper")}</option>
            <option value="delivery">${tr("reasonDelivery")}</option>
            <option value="unit">${tr("reasonUnit")}</option>
            <option value="competitor">${tr("reasonCompetitor")}</option>
            <option value="postponed">${tr("reasonPostponed")}</option>
            <option value="no_response">${tr("reasonNoResponse")}</option>
            <option value="not_qualified">${tr("reasonNotQualified")}</option>
            <option value="other">${tr("reasonOther")}</option>
          </select>
        </label>
        <label id="wonValueWrap" class="outcome-field hidden">${tr("wonValueField")}
          <input id="uWonValue" type="number" min="0" step="1000" value="${esc(l.won_value??"")}">
        </label>
      </div>
      <div class="quick-followup-box">
        <div class="quick-followup-title">${tr("quickFollowup")}</div>
        <div class="quick-followup-actions">
          <button class="btn secondary quick-followup-btn" type="button" data-days="1">${tr("tomorrow")}</button>
          <button class="btn secondary quick-followup-btn" type="button" data-days="3">${tr("in3Days")}</button>
          <button class="btn secondary quick-followup-btn" type="button" data-days="7">${tr("in7Days")}</button>
          <button class="btn secondary quick-followup-btn" type="button" data-days="14">${tr("in14Days")}</button>
          <button class="btn secondary quick-followup-btn" type="button" data-smart="1">${tr("smartSuggested")}</button>
        </div>
      </div>
      <label>${tr("salesNote")}<textarea id="uNotes" placeholder="${esc(tr("salesNotePlaceholder"))}"></textarea></label>
      <label class="check"><input id="uContacted" type="checkbox"> ${tr("markContacted")}</label>
      <button class="btn primary" type="submit">${tr("saveUpdate")}</button>
      <p id="updateStatus" class="status"></p>
    </form>
    <article class="detail-card" style="margin-top:16px"><h3>${tr("recentActivity")}</h3><div class="activity">${activity}</div></article>`;
  $("leadUpdateForm").addEventListener("submit",saveLeadUpdate);

  const syncOutcomeFields=()=>{
    const stage=$("uStage").value;
    $("lostReasonWrap").classList.toggle("hidden",stage!=="lost");
    $("wonValueWrap").classList.toggle("hidden",stage!=="won");
  };
  $("uStage").addEventListener("change",syncOutcomeFields);
  syncOutcomeFields();

  const toLocalInput=(d)=>{
    const pad=n=>String(n).padStart(2,"0");
    return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
  };
  const setFollowupDays=(days)=>{
    const d=new Date();
    d.setDate(d.getDate()+Number(days));
    d.setHours(10,0,0,0);
    $("uFollow").value=toLocalInput(d);
    $("uClearFollow").checked=false;
  };
  const smartDays=()=>{
    const stage=$("uStage").value;
    if(["meeting","viewing","negotiation"].includes(stage)) return 1;
    if(["qualified","options_sent"].includes(stage)) return 3;
    if(stage==="nurture") return 14;
    return 1;
  };
  document.querySelectorAll(".quick-followup-btn").forEach(btn=>{
    btn.addEventListener("click",()=>{
      setFollowupDays(btn.dataset.smart ? smartDays() : btn.dataset.days);
    });
  });

  const refreshWaMessage=()=>{
    $("waMessagePreview").value=buildWhatsAppMessage(l,d.top3||[]);
  };
  refreshWaMessage();
  $("waGenerateBtn").addEventListener("click",refreshWaMessage);
  $("waCopyBtn").addEventListener("click",()=>copyText($("waMessagePreview").value,$("waCopyBtn")));
  if($("waOpenBtn")){
    $("waOpenBtn").addEventListener("click",()=>{
      const msg=encodeURIComponent($("waMessagePreview").value||"");
      window.open(`https://wa.me/${waHref(wa)}?text=${msg}`,"_blank","noopener");
    });
  }

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
      p_lost_reason:$("uStage").value==="lost" ? ($("uLostReason").value||null) : null,
      p_won_project_id:null,
      p_won_value:$("uStage").value==="won" && $("uWonValue").value ? Number($("uWonValue").value) : null
    });
    $("updateStatus").textContent=tr("saved");
    await Promise.all([loadSummary(),loadLeads()]); await openLead(currentLeadId);
  }catch(e2){$("updateStatus").textContent=e2.message||tr("updateFailed");}
}

async function loadAll(){try{await Promise.all([loadSummary(),loadActionCenter(),loadOutcomes(),loadAcquisitionAnalytics(),loadFollowupQueue(),loadConversionAnalytics(),loadLeads()]);}catch(e){console.error(e);}}

applyLang();
(async()=>{if(await checkAccess()) await loadAll();})();


/* =========================================================
   STAFF AUTH RECOVERY V1
   Keeps password recovery inside /sales-dashboard/.
   ========================================================= */
const STAFF_AUTH_BASE = `${SUPABASE_URL}/auth/v1`;
const STAFF_RECOVERY_REDIRECT = `${window.location.origin}/sales-dashboard/?staff_recovery=1`;

function staffAuthHeaders(token=null){
  const h={apikey:SUPABASE_KEY,'Content-Type':'application/json'};
  if(token) h.Authorization=`Bearer ${token}`;
  return h;
}

function staffRecoveryContext(){
  const q=new URLSearchParams(window.location.search);
  const h=new URLSearchParams(window.location.hash.replace(/^#/,''));
  const type=h.get('type')||q.get('type')||q.get('staff_recovery');
  const accessToken=h.get('access_token')||q.get('access_token');
  if((type==='recovery'||type==='1') && accessToken) return {accessToken};
  return null;
}

function openStaffRecovery(mode='request'){
  const p=document.getElementById('staffRecoveryPanel'); if(!p) return;
  p.classList.remove('hidden'); p.setAttribute('aria-hidden','false');
  document.getElementById('staffRecoveryRequestForm')?.classList.toggle('hidden',mode!=='request');
  document.getElementById('staffSetPasswordForm')?.classList.toggle('hidden',mode!=='set');
  const st=document.getElementById('staffRecoveryPanelStatus'); if(st) st.textContent='';
}
function closeStaffRecovery(){
  const p=document.getElementById('staffRecoveryPanel'); if(!p) return;
  p.classList.add('hidden'); p.setAttribute('aria-hidden','true');
}
async function requestStaffReset(email){
  const r=await fetch(`${STAFF_AUTH_BASE}/recover?redirect_to=${encodeURIComponent(STAFF_RECOVERY_REDIRECT)}`,{
    method:'POST',headers:staffAuthHeaders(),body:JSON.stringify({email})
  });
  const t=await r.text(); let d=null; try{d=t?JSON.parse(t):null;}catch{d={message:t};}
  if(!r.ok) throw new Error(d?.msg||d?.message||`AUTH_${r.status}`);
}
async function updateStaffPassword(token,password){
  const r=await fetch(`${STAFF_AUTH_BASE}/user`,{
    method:'PUT',headers:staffAuthHeaders(token),body:JSON.stringify({password})
  });
  const t=await r.text(); let d=null; try{d=t?JSON.parse(t):null;}catch{d={message:t};}
  if(!r.ok) throw new Error(d?.msg||d?.message||`AUTH_${r.status}`);
}
function cleanStaffRecoveryUrl(){
  const u=new URL(window.location.href);
  u.searchParams.delete('staff_recovery');u.searchParams.delete('type');u.searchParams.delete('access_token');u.searchParams.delete('refresh_token');u.hash='';
  history.replaceState({},'',u.pathname+u.search);
}

document.getElementById('staffForgotPassword')?.addEventListener('click',()=>{
  const e=document.getElementById('loginEmail')?.value||'';
  const f=document.getElementById('staffRecoveryEmail'); if(f) f.value=e;
  openStaffRecovery('request');
});
document.getElementById('staffRecoveryClose')?.addEventListener('click',closeStaffRecovery);
document.querySelector('.staff-recovery-backdrop')?.addEventListener('click',closeStaffRecovery);
document.getElementById('staffRecoveryRequestForm')?.addEventListener('submit',async ev=>{
  ev.preventDefault(); const st=document.getElementById('staffRecoveryPanelStatus');
  if(st) st.textContent='Sending reset link...';
  try{await requestStaffReset(document.getElementById('staffRecoveryEmail').value.trim()); if(st) st.textContent='Reset link sent. Use the newest email.';}
  catch(err){if(st) st.textContent=err.message||'Failed to send reset link.';}
});
document.getElementById('staffSetPasswordForm')?.addEventListener('submit',async ev=>{
  ev.preventDefault(); const st=document.getElementById('staffRecoveryPanelStatus'); const ctx=staffRecoveryContext();
  const p1=document.getElementById('staffNewPassword').value; const p2=document.getElementById('staffConfirmPassword').value;
  if(!ctx?.accessToken){if(st) st.textContent='Recovery link is missing or expired. Request a new one.';return;}
  if(p1!==p2){if(st) st.textContent='Passwords do not match.';return;}
  if(st) st.textContent='Updating password...';
  try{await updateStaffPassword(ctx.accessToken,p1); if(st) st.textContent='Password updated. You can now sign in to Sales Intelligence.'; cleanStaffRecoveryUrl(); setTimeout(closeStaffRecovery,900);}
  catch(err){if(st) st.textContent=err.message||'Failed to update password.';}
});
window.addEventListener('DOMContentLoaded',()=>{if(staffRecoveryContext()?.accessToken) openStaffRecovery('set');});
