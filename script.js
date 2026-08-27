// JB REAL ESTATE — PRODUCTION FRONTEND V1.3 — HARDENED LEAD RPC
// JB REAL ESTATE V2.8 - Reliable Property Finder button binding
/* =========================================================
   JB REAL ESTATE
   Dynamic Website V1
   Supabase REST + Finder V2 + Developers + Projects + Compare
   ========================================================= */

const SUPABASE_URL = "https://cmjeijjkdztlvhqzcjrg.supabase.co";
const SUPABASE_KEY = "sb_publishable_foGnQkjteOAQ7XL6SBqAVA_fQACuQ7a";
const SUPABASE_REST = `${SUPABASE_URL}/rest/v1`;

const translations = {
  en: {
    'nav.properties':'Properties',
    'nav.projects':'Projects',
    'nav.developers':'Developers',
    'nav.compare':'Compare',
    'nav.investment':'Investment',
    'nav.about':'About JB',
    'nav.cta':'Find My Property',

    'hero.eyebrow':'JB REAL ESTATE GROUP',
    'hero.title':'Find. Compare. Decide. Invest.',
    'hero.text':'Explore opportunities across Egypt, compare developers and projects, and get personalized guidance before you buy.',
    'hero.primary':'Find My Property',
    'hero.secondary':'Compare Projects',
    'hero.note':'One market. Multiple options. One trusted partner.',

    'finder.eyebrow':'PROPERTY FINDER',
    'finder.title':'Tell us what you are looking for.',
    'finder.text':'Start with your priorities. JB will use them to build a focused shortlist.',
    'finder.button':'Find My Best Matches',
    'finder.privacy':'Your search is private. Contact details are only requested if you want the full shortlist or a JB advisor to follow up.',


    'fields.location':'Location',
    'fields.budget':'Budget',
    'fields.type':'Property type',
    'fields.purpose':'Purpose',
    'fields.delivery':'Delivery',
    'fields.payment':'Payment preference',
    'fields.bedrooms':'Bedrooms',
    'fields.timeline':'Buying timeline',

    'options.anyLocation':'Any location',
    'options.northCoast':'North Coast',
    'options.newCairo':'New Cairo',
    'options.newCapital':'New Capital',
    'options.ainSokhna':'Ain Sokhna',
    'options.sheikhZayed':'Sheikh Zayed',

    'options.anyBudget':'Any budget',
    'options.under5':'Under EGP 5M',
    'options.5to10':'EGP 5M–10M',
    'options.10to20':'EGP 10M–20M',
    'options.20plus':'EGP 20M+',

    'options.anyType':'Any type',
    'options.apartment':'Apartment',
    'options.chalet':'Chalet',
    'options.villa':'Villa',
    'options.twin':'Twin House',
    'options.commercial':'Commercial',

    'options.anyPurpose':'Any purpose',
    'options.investment':'Investment',
    'options.personal':'Personal use',
    'options.both':'Both',

    'options.anyDelivery':'Any delivery',
    'options.ready':'Ready',
    'options.1to3':'1–3 years',
    'options.3plus':'3+ years',

    'options.anyPayment':'No preference',
    'options.lowDown':'Lower down payment',
    'options.longPlan':'Longer payment plan',
    'options.cash':'Cash / strong upfront payment',

    'options.anyBedrooms':'No preference',
    'options.1to2':'1–2 bedrooms',
    'options.3bed':'3 bedrooms',
    'options.4plus':'4+ bedrooms',

    'options.anyTimeline':'Just exploring',
    'options.now':'Ready to buy now',
    'options.3months':'Within 3 months',
    'options.6months':'Within 6 months',
    'options.later':'6+ months',

    'value.eyebrow':'WHY JB',
    'value.title':'We are not here to show you one property. We help you understand your options.',
    'value.text':'JB is being built as a real estate intelligence, advisory and brokerage platform: discover the market, compare alternatives, make a better-informed decision, then complete your purchase with JB.',
    'value.link':'See how comparison works →',
    'value.card1.title':'Multiple Options',
    'value.card1.text':'Compare opportunities instead of relying on a single sales pitch.',
    'value.card2.title':'Clear Sources',
    'value.card2.text':'Track the source and freshness of important project information.',
    'value.card3.title':'Personal Guidance',
    'value.card3.text':'Move from search to a focused shortlist and advisor conversation.',
    'value.card4.title':'Purchase Support',
    'value.card4.text':'Keep the relationship with JB through the buying journey.',

    'projects.eyebrow':'EXPLORE',
    'projects.title':'Projects',
    'projects.link':'Find my best options →',
    'recent.eyebrow':'YOUR JOURNEY',
    'recent.title':'Recently viewed',
    'recent.clear':'Clear',
    'intl.brandTag':'Egypt Real Estate Advisory',

    'developers.eyebrow':'MARKET DIRECTORY',
    'developers.title':'Explore Developers',
    'developers.text':'Browse verified developer profiles and explore their published projects.',
    'developers.search':'Search developer...',
    'developers.searchBtn':'Search',

    'compare.eyebrow':'COMPARE BEFORE YOU BUY',
    'compare.title':'One market. Clearer decisions.',
    'compare.text':'Select up to three projects and compare the verified data currently available.',

    'intl.eyebrow':'INTERNATIONAL BUYERS',
    'intl.title':'Invest in Egypt with a clearer view of the market.',
    'intl.text':'JB will provide English-first discovery, project comparison and buyer guidance for international clients interested in Egypt.',
    'intl.li1':'Arabic + English from V1',
    'intl.li2':'Investment-focused property search',
    'intl.li3':'Transparent sources and update dates',
    'intl.li4':'Personalized consultation',
    'intl.button':'Request a consultation',
    'intl.boxTitle':'Built for local and international buyers',
    'intl.boxText':'The data model is designed to support multiple languages, currencies and future market modules such as land and commercial opportunities.',

    'cta.eyebrow':'READY TO START?',
    'cta.title':'Tell JB what you want to buy.',
    'cta.text':'We will turn your requirements into a focused property shortlist.',
    'cta.button':'Build My Shortlist',

    'footer.contact':'Contact',
    'footer.social':'Social',
    'footer.demo':'Live market database connected to Supabase.'
  },

  ar: {
    'nav.properties':'العقارات',
    'nav.projects':'المشروعات',
    'nav.developers':'المطورون',
    'nav.compare':'مقارنة',
    'nav.investment':'الاستثمار',
    'nav.about':'عن JB',
    'nav.cta':'ابحث عن عقارك',

    'hero.eyebrow':'مجموعة JB للعقارات',
    'hero.title':'ابحث. قارن. اختر. استثمر.',
    'hero.text':'اكتشف الفرص العقارية في مصر، وقارن بين المطورين والمشروعات، واحصل على توجيه يناسب احتياجاتك قبل الشراء.',
    'hero.primary':'ابحث عن عقارك',
    'hero.secondary':'قارن المشروعات',
    'hero.note':'سوق واحد. خيارات متعددة. شريك واحد تثق به.',

    'finder.eyebrow':'الباحث العقاري',
    'finder.title':'قل لنا ماذا تبحث عنه.',
    'finder.text':'ابدأ باحتياجاتك، وستستخدمها JB لبناء قائمة مختصرة تناسبك.',
    'finder.button':'اعرض أفضل الخيارات المناسبة لي',
    'finder.privacy':'بحثك خاص. نطلب بيانات التواصل فقط إذا أردت القائمة الكاملة أو متابعة مستشار JB معك.',


    'fields.location':'الموقع',
    'fields.budget':'الميزانية',
    'fields.type':'نوع العقار',
    'fields.purpose':'الهدف من الشراء',
    'fields.delivery':'موعد التسليم',
    'fields.payment':'تفضيل السداد',
    'fields.bedrooms':'عدد غرف النوم',
    'fields.timeline':'موعد الشراء',

    'options.anyLocation':'أي موقع',
    'options.northCoast':'الساحل الشمالي',
    'options.newCairo':'القاهرة الجديدة',
    'options.newCapital':'العاصمة الإدارية الجديدة',
    'options.ainSokhna':'العين السخنة',
    'options.sheikhZayed':'الشيخ زايد',

    'options.anyBudget':'أي ميزانية',
    'options.under5':'أقل من 5 مليون جنيه',
    'options.5to10':'من 5 إلى 10 مليون جنيه',
    'options.10to20':'من 10 إلى 20 مليون جنيه',
    'options.20plus':'20 مليون جنيه فأكثر',

    'options.anyType':'أي نوع',
    'options.apartment':'شقة',
    'options.chalet':'شاليه',
    'options.villa':'فيلا',
    'options.twin':'توين هاوس',
    'options.commercial':'تجاري',

    'options.anyPurpose':'أي هدف',
    'options.investment':'استثمار',
    'options.personal':'استخدام شخصي',
    'options.both':'استثمار واستخدام شخصي',

    'options.anyDelivery':'أي موعد للتسليم',
    'options.ready':'جاهز للتسليم',
    'options.1to3':'من سنة إلى 3 سنوات',
    'options.3plus':'أكثر من 3 سنوات',

    'options.anyPayment':'لا يوجد تفضيل',
    'options.lowDown':'مقدم أقل',
    'options.longPlan':'فترة سداد أطول',
    'options.cash':'كاش / مقدم كبير',

    'options.anyBedrooms':'لا يوجد تفضيل',
    'options.1to2':'غرفة إلى غرفتين',
    'options.3bed':'3 غرف',
    'options.4plus':'4 غرف فأكثر',

    'options.anyTimeline':'ما زلت أستكشف السوق',
    'options.now':'جاهز للشراء الآن',
    'options.3months':'خلال 3 أشهر',
    'options.6months':'خلال 6 أشهر',
    'options.later':'بعد 6 أشهر',

    'value.eyebrow':'لماذا JB؟',
    'value.title':'لسنا هنا لنعرض عليك عقارًا واحدًا. نحن نساعدك على فهم اختياراتك.',
    'value.text':'نبني JB كمنصة للذكاء والاستشارات والوساطة العقارية: اكتشف السوق، قارن البدائل، اتخذ قرارًا أكثر وعيًا، ثم أكمل عملية الشراء من خلال JB.',
    'value.link':'شاهد كيف تعمل المقارنة ←',
    'value.card1.title':'خيارات متعددة',
    'value.card1.text':'قارن الفرص بدل الاعتماد على عرض بيع واحد.',
    'value.card2.title':'مصادر واضحة',
    'value.card2.text':'تعرف على مصدر المعلومات ومدى حداثتها.',
    'value.card3.title':'توجيه شخصي',
    'value.card3.text':'انتقل من البحث إلى قائمة مختصرة وحوار مع مستشار.',
    'value.card4.title':'دعم أثناء الشراء',
    'value.card4.text':'تستمر علاقتك مع JB خلال رحلة الشراء.',

    'projects.eyebrow':'اكتشف',
    'projects.title':'المشروعات',
    'recent.eyebrow':'رحلتك',
    'recent.title':'شوهدت مؤخرًا',
    'recent.clear':'مسح',
    'intl.brandTag':'استشارات عقارية في مصر',
    'projects.link':'ابحث عن أفضل الخيارات ←',

    'developers.eyebrow':'دليل السوق',
    'developers.title':'اكتشف المطورين',
    'developers.text':'تصفح ملفات المطورين الموثقة واستكشف مشروعاتهم المنشورة.',
    'developers.search':'ابحث عن مطور...',
    'developers.searchBtn':'بحث',

    'compare.eyebrow':'قارن قبل أن تشتري',
    'compare.title':'سوق واحد. قرارات أوضح.',
    'compare.text':'اختر حتى 3 مشروعات وقارن البيانات الموثقة المتاحة حاليًا.',

    'intl.eyebrow':'للمشترين الدوليين',
    'intl.title':'استثمر في مصر برؤية أوضح للسوق.',
    'intl.text':'ستوفر JB تجربة اكتشاف ومقارنة وإرشاد باللغة الإنجليزية للعملاء الدوليين المهتمين بالسوق المصري.',
    'intl.li1':'العربية + الإنجليزية من الإصدار الأول',
    'intl.li2':'بحث عقاري يركز على الاستثمار',
    'intl.li3':'مصادر واضحة وتواريخ تحديث',
    'intl.li4':'استشارة شخصية',
    'intl.button':'اطلب استشارة',
    'intl.boxTitle':'مصمم للعملاء المحليين والدوليين',
    'intl.boxText':'تم تصميم نموذج البيانات لدعم اللغات والعملات المتعددة وإضافة وحدات مستقبلية مثل الأراضي والعقارات التجارية.',

    'cta.eyebrow':'جاهز للبدء؟',
    'cta.title':'قل لـ JB ماذا تريد أن تشتري.',
    'cta.text':'سنحوّل احتياجاتك إلى قائمة مختصرة من الخيارات العقارية.',
    'cta.button':'أنشئ قائمتي المختصرة',

    'footer.contact':'تواصل معنا',
    'footer.social':'تابعنا',
    'footer.demo':'قاعدة بيانات السوق الحية متصلة بـ Supabase.'
  }
};


let lang = localStorage.getItem('jbLanguage') || 'en';
if (!['en','ar'].includes(lang)) lang = 'en';

let developers = [];
let projects = [];
let filteredDevelopers = [];
let comparison = [];
let projectPropertyTypeMap = new Map();
let filterOptions = null;
let productionApiOnline = false;

let visibleProjects = 9;
const PROJECT_PAGE_SIZE = 9;


/* =========================================================
   HELPERS
   ========================================================= */

function apiHeaders() {
  return {
    apikey: SUPABASE_KEY,
    Authorization: `Bearer ${SUPABASE_KEY}`
  };
}

async function supabaseGet(path) {
  const response = await fetch(`${SUPABASE_REST}/${path}`, {
    headers: apiHeaders()
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Supabase ${response.status}: ${errorText}`);
  }

  return response.json();
}


async function supabaseRpc(functionName, payload = {}) {
  const response = await fetch(`${SUPABASE_REST}/rpc/${functionName}`, {
    method: 'POST',
    headers: {
      ...apiHeaders(),
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload || {})
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Supabase RPC ${response.status}: ${errorText}`);
  }

  if (response.status === 204) return null;

  const text = await response.text();
  return text ? JSON.parse(text) : null;
}


async function supabasePost(path, payload) {
  const response = await fetch(`${SUPABASE_REST}/${path}`, {
    method: 'POST',
    headers: {
      ...apiHeaders(),
      'Content-Type': 'application/json',
      Prefer: 'return=minimal'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `Supabase POST failed: ${response.status}`);
  }

  return true;
}


function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function formatMoney(value, currency = 'EGP') {
  if (value === null || value === undefined || value === '') {
    return lang === 'ar' ? 'غير متاح حاليًا' : 'Not currently available';
  }

  /*
   * JB UX invariant:
   * Money must always use Latin/English digits in BOTH Arabic and English UI.
   * Do not switch price numerals to Arabic-Indic digits.
   */
  try {
    return new Intl.NumberFormat('en-EG', {
      style: 'currency',
      currency: currency || 'EGP',
      maximumFractionDigits: 0
    }).format(Number(value));
  } catch {
    return `${Number(value).toLocaleString('en-US')} ${currency || 'EGP'}`;
  }
}

function formatDate(value) {
  if (!value) return lang === 'ar' ? 'غير متاح' : 'Not available';

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return escapeHtml(value);
  }

  return new Intl.DateTimeFormat(lang === 'ar' ? 'ar-EG' : 'en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(date);
}

function projectName(project) {
  return lang === 'ar'
    ? (project.name_ar || project.name_en)
    : (project.name_en || project.name_ar);
}

function developerName(developer) {
  return lang === 'ar'
    ? (developer.name_ar || developer.name_en)
    : (developer.name_en || developer.name_ar);
}

function projectDeveloper(project) {
  const developer = project.developers || {};

  return lang === 'ar'
    ? (developer.name_ar || developer.name_en || '')
    : (developer.name_en || developer.name_ar || '');
}

function projectLocation(project) {
  const location = project.locations || {};

  if (location.area && location.city && location.area !== location.city) {
    return `${location.area} · ${location.city}`;
  }

  return location.area || location.city || (lang === 'ar' ? 'مصر' : 'Egypt');
}

function text(value, fallbackEn = 'Not available', fallbackAr = 'غير متاح') {
  return value || (lang === 'ar' ? fallbackAr : fallbackEn);
}


/* =========================================================
   LANGUAGE
   ========================================================= */

function applyLang() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.body.dir = document.documentElement.dir;

  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;
    if (translations[lang]?.[key]) {
      element.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.dataset.i18nPlaceholder;
    if (translations[lang]?.[key]) {
      element.placeholder = translations[lang][key];
    }
  });

  const toggle = document.getElementById('langToggle');
  if (toggle) {
    toggle.textContent = lang === 'en' ? 'العربية' : 'English';
    toggle.setAttribute('aria-label',
      lang === 'en' ? 'Switch to Arabic' : 'التحويل إلى الإنجليزية');
  }

  localStorage.setItem('jbLanguage', lang);

  renderProjects();
  renderDevelopers(filteredDevelopers.length ? filteredDevelopers : developers);
  renderComparison();

  // Re-render dynamic finder content in the selected language
  // without losing the user's selected search criteria.
  const finderResult = document.getElementById('finderResult');
  if (currentSearchProfile && finderResult && !finderResult.hidden) {
    renderFinderPreview({...currentSearchProfile}, false);
  }

  // Re-render the currently open developer/project profile in the new language.
  const modal = document.getElementById('profileModal');
  if (modal && !modal.hidden && modalHistory.length) {
    const current = modalHistory[modalHistory.length - 1];
    if (current?.type === 'developer') {
      showDeveloperProfile(current.id, false);
    } else if (current?.type === 'project') {
      showProjectProfile(current.id, current.parentDeveloperId || null, false);
    }
  }
}

document.getElementById('langToggle')?.addEventListener('click', () => {
  lang = lang === 'en' ? 'ar' : 'en';
  applyLang();
});


/* =========================================================
   LOAD MARKET DATA
   ========================================================= */

async function loadMarketData() {
  try {
    /*
      Production V1:
      The website no longer reads projects/developers/locations raw.
      It consumes only the production-safe public catalogue, which
      already excludes MANUAL_REVIEW / QA_REVIEW projects.
    */

    const [publicProjectData, options, coverRows] = await Promise.all([
      supabaseGet(
        'jb_public_projects_v1?select=project_id,slug,name_ar,name_en,project_type,description_ar,description_en,overview_ar,overview_en,cover_image_url,website_url,developer_id,developer_slug,developer_name_ar,developer_name_en,developer_logo_url,location_id,city,area,official_starting_price,market_starting_price,display_starting_price,currency,price_evidence_type,delivery_date,completion_year,construction_status,handover_status,property_type_slugs,property_types_en,property_types_ar,market_min_area,market_max_area,min_down_payment_percentage,max_installment_years,payment_evidence_type,readiness_score,readiness,production_status,evidence_source_count,verification_status,last_verified_at&order=name_en.asc'
      ),
      supabaseRpc('jb_get_filter_options_v1', {}),
      supabaseGet('jb_public_project_cover_v1?select=project_id,public_url,thumbnail_url&order=project_id.asc')
        .catch(() => [])
    ]);

    const rows = Array.isArray(publicProjectData) ? publicProjectData : [];
    const mediaCoverMap = new Map(
      (Array.isArray(coverRows) ? coverRows : []).map(item => [
        item.project_id,
        item.thumbnail_url || item.public_url || null
      ])
    );
    filterOptions = options || null;
    productionApiOnline = true;

    projectPropertyTypeMap = new Map();

    projects = rows.map(row => {
      const project = {
        id: row.project_id,
        project_id: row.project_id,
        slug: row.slug,
        name_ar: row.name_ar,
        name_en: row.name_en,
        project_type: row.project_type,
        description_ar: row.description_ar,
        description_en: row.description_en,
        overview_ar: row.overview_ar,
        overview_en: row.overview_en,
        cover_image_url: mediaCoverMap.get(row.project_id) || row.cover_image_url,
        website_url: row.website_url,

        developer_id: row.developer_id,
        location_id: row.location_id,

        // Compatibility: existing UI expects starting_price.
        // It is now the safe DISPLAY price from the production layer.
        starting_price: row.display_starting_price,
        official_starting_price: row.official_starting_price,
        market_starting_price: row.market_starting_price,
        display_starting_price: row.display_starting_price,
        price_evidence_type: row.price_evidence_type,
        currency: row.currency,

        delivery_date: row.delivery_date,
        completion_year: row.completion_year,
        construction_status: row.construction_status,
        handover_status: row.handover_status,

        property_type_slugs: row.property_type_slugs || [],
        property_types_en: row.property_types_en || [],
        property_types_ar: row.property_types_ar || [],
        market_min_area: row.market_min_area,
        market_max_area: row.market_max_area,
        min_down_payment_percentage: row.min_down_payment_percentage,
        max_installment_years: row.max_installment_years,
        payment_evidence_type: row.payment_evidence_type,

        readiness_score: row.readiness_score,
        readiness: row.readiness,
        production_status: row.production_status,
        evidence_source_count: row.evidence_source_count,
        verification_status: row.verification_status,
        last_verified_at: row.last_verified_at,

        developers: {
          id: row.developer_id,
          slug: row.developer_slug,
          name_ar: row.developer_name_ar,
          name_en: row.developer_name_en,
          logo_url: row.developer_logo_url
        },

        locations: {
          id: row.location_id,
          city: row.city,
          area: row.area
        }
      };

      projectPropertyTypeMap.set(
        project.id,
        (project.property_type_slugs || []).map((slug, index) => ({
          slug,
          name_en: project.property_types_en?.[index] || slug,
          name_ar: project.property_types_ar?.[index] || slug
        }))
      );

      return project;
    });

    const developerMap = new Map();

    projects.forEach(project => {
      const d = project.developers;
      if (!d?.id || developerMap.has(d.id)) return;
      developerMap.set(d.id, {
        id: d.id,
        slug: d.slug,
        name_ar: d.name_ar,
        name_en: d.name_en,
        logo_url: d.logo_url,
        verification_status: 'verified'
      });
    });

    developers = [...developerMap.values()].sort((a, b) =>
      String(a.name_en || a.name_ar || '').localeCompare(
        String(b.name_en || b.name_ar || '')
      )
    );

    filteredDevelopers = [...developers];

    renderDevelopers(filteredDevelopers);
    renderProjects();
    renderComparison();
    renderRecentProjects();

  } catch (error) {
    productionApiOnline = false;
    console.error('JB production data connection failed:', error);

    const projectsGrid = document.getElementById('projectsGrid');
    const developerRow = document.getElementById('developerRow');
    const projectCount = document.getElementById('projectCount');
    const developerCount = document.getElementById('developerCount');

    if (projectCount) {
      projectCount.textContent = lang === 'ar'
        ? 'تعذر الاتصال ببيانات الإنتاج'
        : 'Production data connection error';
    }

    if (developerCount) {
      developerCount.textContent = lang === 'ar'
        ? 'تعذر الاتصال بدليل المطورين'
        : 'Developer directory connection error';
    }

    if (projectsGrid) {
      projectsGrid.innerHTML = `
        <div class="data-error">
          <strong>${lang === 'ar' ? 'تعذر تحميل المشروعات.' : 'Projects could not be loaded.'}</strong>
          <br>
          <small>${escapeHtml(error.message || String(error))}</small>
        </div>
      `;
    }

    if (developerRow) {
      developerRow.innerHTML = `
        <div class="data-error">
          <strong>${lang === 'ar' ? 'تعذر تحميل دليل المطورين.' : 'The developer directory could not be loaded.'}</strong>
          <br>
          <small>${escapeHtml(error.message || String(error))}</small>
        </div>
      `;
    }
  }
}



function projectInitials(project) {
  const value = projectName(project)
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(word => word[0])
    .join('')
    .toUpperCase();

  return escapeHtml(value || 'RE');
}

function projectVisual(project) {
  if (project.cover_image_url) {
    return `
      <div class="project-image dynamic-project-image has-photo"
           style="background-image:
             linear-gradient(180deg,rgba(6,23,38,.05),rgba(6,23,38,.58)),
             url('${escapeHtml(project.cover_image_url)}')">
        <span class="project-image-location">${escapeHtml(projectLocation(project))}</span>
      </div>
    `;
  }

  const developer = project.developers || {};
  const logo = developer.logo_url
    ? `<img class="project-fallback-logo" src="${escapeHtml(developer.logo_url)}" alt="${escapeHtml(projectDeveloper(project))} logo" loading="lazy">`
    : '';

  return `
    <div class="project-image dynamic-project-image project-image-fallback" data-project-kind="${escapeHtml(project.project_type || 'Residential')}">
      ${logo}
      <span class="project-fallback-initials">${projectInitials(project)}</span>
      <span class="project-fallback-name">${escapeHtml(projectName(project))}</span>
      <small>${escapeHtml(projectLocation(project))}</small>
    </div>
  `;
}

function availabilityPrice(project) {
  if (project.starting_price) return formatMoney(project.starting_price, project.currency);

  return lang === 'ar'
    ? 'تحقق من السعر الحالي مع JB'
    : 'Verify current price with JB';
}

function availabilityDelivery(project) {
  if (project.delivery_date) return formatDate(project.delivery_date);

  if (project.completion_year) {
    return lang === 'ar'
      ? `سنة ${project.completion_year}`
      : `Year ${project.completion_year}`;
  }

  return lang === 'ar'
    ? 'يتم التحقق من موعد التسليم'
    : 'Delivery under verification';
}

/* =========================================================
   PROJECTS
   ========================================================= */

function projectCard(project) {
  const name = escapeHtml(projectName(project));
  const developer = escapeHtml(projectDeveloper(project));
  const location = escapeHtml(projectLocation(project));
  const type = escapeHtml(text(project.project_type));
  const price = escapeHtml(availabilityPrice(project));
  const selected = comparison.some(item => item.id === project.id);

  return `
    <article class="project-card dynamic-project-card">

      ${projectVisual(project)}

      <div class="card-body">

        <div class="project-card-topline">
          <span class="tag">
            ${project.verification_status === 'verified'
              ? (lang === 'ar' ? 'موثّق' : 'VERIFIED')
              : (lang === 'ar' ? 'بيانات السوق' : 'MARKET DATA')}
          </span>

          <span class="project-location">${location}</span>
        </div>

        <h3>${name}</h3>

        <p class="project-developer">${developer}</p>

        <div class="project-meta">
          <span>${type}</span>
          <span class="project-price">${price}</span>
        </div>

        <div class="project-card-actions">

          <button
            class="text-link project-profile-btn"
            type="button"
            data-project-profile="${project.id}">
            ${lang === 'ar' ? 'عرض المشروع ←' : 'View project →'}
          </button>

          <button
            class="compare-chip save-chip ${isProjectSaved(project.id) ? 'is-selected' : ''}"
            type="button"
            data-project-save="${project.id}"
            aria-label="${lang === 'ar' ? 'حفظ المشروع' : 'Save project'}">
            ${isProjectSaved(project.id)
              ? (lang === 'ar' ? '♥ محفوظ' : '♥ Saved')
              : (lang === 'ar' ? '♡ حفظ' : '♡ Save')}
          </button>

          <button
            class="compare-chip ${selected ? 'is-selected' : ''}"
            type="button"
            data-project-compare="${project.id}">
            ${selected
              ? (lang === 'ar' ? '✓ تمت الإضافة' : '✓ Added')
              : (lang === 'ar' ? '+ مقارنة' : '+ Compare')}
          </button>

        </div>

      </div>
    </article>
  `;
}

function renderProjects(list = projects) {
  const grid = document.getElementById('projectsGrid');
  const count = document.getElementById('projectCount');
  const loadMore = document.getElementById('loadMoreProjects');

  if (!grid) return;

  if (!list.length) {
    grid.innerHTML = `
      <div class="data-empty">
        ${lang === 'ar' ? 'لا توجد مشروعات مطابقة.' : 'No matching projects found.'}
      </div>
    `;

    if (count) count.textContent = lang === 'ar' ? '0 مشروع' : '0 projects';
    if (loadMore) loadMore.hidden = true;
    return;
  }

  const visible = list.slice(0, visibleProjects);

  grid.innerHTML = visible.map(projectCard).join('');

  if (count) {
    count.textContent =
      lang === 'ar'
        ? `${list.length} مشروعًا منشورًا`
        : `${list.length} published projects`;
  }

  if (loadMore) {
    loadMore.hidden = visibleProjects >= list.length;
    loadMore.textContent =
      lang === 'ar' ? 'عرض المزيد من المشروعات' : 'Load more projects';
  }
}

document.getElementById('loadMoreProjects')?.addEventListener('click', () => {
  visibleProjects += PROJECT_PAGE_SIZE;
  renderProjects();
});


/* =========================================================
   DEVELOPERS
   ========================================================= */

function renderDevelopers(list) {
  const row = document.getElementById('developerRow');
  const count = document.getElementById('developerCount');

  if (!row) return;

  if (!list.length) {
    row.innerHTML = `
      <div class="data-empty">
        ${lang === 'ar' ? 'لم يتم العثور على مطور.' : 'No developer found.'}
      </div>
    `;

    if (count) count.textContent = lang === 'ar' ? '0 مطور' : '0 developers';

    return;
  }

  row.innerHTML = list.map(developer => `
    <button
      class="developer-pill developer-pill-button"
      type="button"
      data-developer-profile="${developer.id}">

      ${escapeHtml(developerName(developer))}

      <span>
        ${lang === 'ar' ? 'عرض الملف' : 'Profile'}
      </span>

    </button>
  `).join('');

  if (count) {
    count.textContent =
      lang === 'ar'
        ? `${list.length} مطورًا موثقًا`
        : `${list.length} verified developers`;
  }
}

function searchDevelopers() {
  const query =
    document.getElementById('developerSearch')?.value
      .trim()
      .toLowerCase() || '';

  filteredDevelopers = developers.filter(developer => {
    return [
      developer.name_en,
      developer.name_ar,
      developer.slug
    ]
      .filter(Boolean)
      .some(value => String(value).toLowerCase().includes(query));
  });

  renderDevelopers(filteredDevelopers);
}

document.getElementById('developerSearchBtn')?.addEventListener('click', searchDevelopers);

document.getElementById('developerSearch')?.addEventListener('input', searchDevelopers);



/* =========================================================
   GUEST SAVED PROJECTS + RECENTLY VIEWED
   Pre-account journey memory. Client Account will sync these later.
   ========================================================= */

const JB_SAVED_PROJECTS_KEY = 'jb_saved_projects_v1';
const JB_RECENT_PROJECTS_KEY = 'jb_recent_projects_v1';
const JB_RECENT_PROJECTS_MAX = 5;

function readIdList(key) {
  try {
    const parsed = JSON.parse(localStorage.getItem(key) || '[]');
    return Array.isArray(parsed) ? parsed.filter(Boolean) : [];
  } catch {
    return [];
  }
}

function writeIdList(key, list) {
  localStorage.setItem(key, JSON.stringify([...new Set(list.filter(Boolean))]));
}

function isProjectSaved(id) {
  return readIdList(JB_SAVED_PROJECTS_KEY).includes(id);
}

function toggleSavedProject(id) {
  const list = readIdList(JB_SAVED_PROJECTS_KEY);
  const exists = list.includes(id);
  const next = exists ? list.filter(item => item !== id) : [id, ...list];
  writeIdList(JB_SAVED_PROJECTS_KEY, next);
  renderProjects();
  renderRecentProjects();

  const modal = document.getElementById('profileModal');
  if (modal && !modal.hidden) {
    const current = modalHistory[modalHistory.length - 1];
    if (current?.type === 'project' && current.id === id) {
      showProjectProfile(id, current.parentDeveloperId || null, false);
    }
  }
}

function addRecentlyViewedProject(id) {
  const list = readIdList(JB_RECENT_PROJECTS_KEY).filter(item => item !== id);
  writeIdList(JB_RECENT_PROJECTS_KEY, [id, ...list].slice(0, JB_RECENT_PROJECTS_MAX));
  renderRecentProjects();
}

function renderRecentProjects() {
  const panel = document.getElementById('recentProjectsPanel');
  const row = document.getElementById('recentProjectsRow');
  if (!panel || !row || !projects.length) return;

  const items = readIdList(JB_RECENT_PROJECTS_KEY)
    .map(id => projects.find(project => project.id === id))
    .filter(Boolean)
    .slice(0, JB_RECENT_PROJECTS_MAX);

  panel.hidden = items.length === 0;
  row.innerHTML = items.map(project => `
    <button type="button" class="recent-project-card" data-project-profile="${project.id}">
      <span class="recent-project-thumb">
        ${project.cover_image_url
          ? `<img src="${escapeHtml(project.cover_image_url)}" alt="${escapeHtml(projectName(project))}" loading="lazy">`
          : `<b>${projectInitials(project)}</b>`}
      </span>
      <span>
        <strong>${escapeHtml(projectName(project))}</strong>
        <small>${escapeHtml(projectLocation(project))}</small>
      </span>
    </button>
  `).join('');
}

document.getElementById('clearRecentProjects')?.addEventListener('click', () => {
  localStorage.removeItem(JB_RECENT_PROJECTS_KEY);
  renderRecentProjects();
});


/* =========================================================
   PROFILES / NAVIGATION
   ========================================================= */

let modalHistory = [];

function openModal(html, state = null, pushHistory = true) {
  const modal = document.getElementById('profileModal');
  const content = document.getElementById('profileModalContent');

  if (!modal || !content) return;

  if (pushHistory && state) {
    const current = modalHistory[modalHistory.length - 1];
    const sameState = current &&
      current.type === state.type &&
      current.id === state.id;

    if (!sameState) modalHistory.push(state);
  }

  content.innerHTML = html;
  modal.hidden = false;
  document.body.classList.add('modal-open');

  const card = modal.querySelector('.profile-modal-card');
  if (card) card.scrollTop = 0;
}

function closeModal() {
  const modal = document.getElementById('profileModal');
  if (!modal) return;

  modal.hidden = true;
  document.body.classList.remove('modal-open');
  modalHistory = [];
}

function modalBack() {
  if (modalHistory.length <= 1) {
    closeModal();
    return;
  }

  modalHistory.pop();
  const previous = modalHistory[modalHistory.length - 1];

  if (!previous) {
    closeModal();
  } else if (previous.type === 'developer') {
    showDeveloperProfile(previous.id, false);
  } else if (previous.type === 'project') {
    showProjectProfile(previous.id, previous.parentDeveloperId || null, false);
  }
}

document.getElementById('profileModalClose')?.addEventListener('click', closeModal);
document.querySelector('[data-close-modal]')?.addEventListener('click', closeModal);

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeModal();
});

function developerLogo(developer) {
  return developer?.logo_url
    ? `<img class="profile-developer-logo" src="${escapeHtml(developer.logo_url)}" alt="${escapeHtml(developerName(developer))} logo" loading="lazy">`
    : `<div class="profile-developer-monogram">${escapeHtml((developerName(developer) || 'D').slice(0,2).toUpperCase())}</div>`;
}

async function showDeveloperProfile(id, pushHistory = true) {
  const localDeveloper = developers.find(item => item.id === id);
  if (!localDeveloper) return;

  openModal(`
    <div class="data-empty">
      ${lang === 'ar' ? 'جارٍ تحميل ملف المطور...' : 'Loading developer profile...'}
    </div>
  `, { type: 'developer', id }, pushHistory);

  let payload = null;

  try {
    payload = await supabaseRpc('jb_get_developer_details_v1', {
      p_slug: localDeveloper.slug
    });
  } catch (error) {
    console.warn('Developer RPC fallback:', error);
  }

  const developer = payload?.developer
    ? {...localDeveloper, ...payload.developer}
    : localDeveloper;

  const relatedProjects = payload?.projects?.length
    ? payload.projects
        .map(item => projects.find(project => project.slug === item.slug))
        .filter(Boolean)
    : projects.filter(project => project.developer_id === id);

  const description =
    lang === 'ar'
      ? (developer.description_ar || developer.short_description_ar || developer.description_en || '')
      : (developer.description_en || developer.short_description_en || developer.description_ar || '');

  openModal(`
    <div class="profile-brand-row">
      ${developerLogo(developer)}
      <div class="profile-heading">
        <span class="eyebrow dark">${lang === 'ar' ? 'ملف المطور' : 'DEVELOPER PROFILE'}</span>
        <h2 id="profileModalTitle">${escapeHtml(developerName(developer))}</h2>
        <p>${escapeHtml(description || (
          lang === 'ar'
            ? 'ملف مطور موثق ضمن قاعدة بيانات JB.'
            : 'Verified developer profile in the JB Market Database.'
        ))}</p>
      </div>
    </div>

    <div class="profile-facts">
      <div>
        <span>${lang === 'ar' ? 'سنة التأسيس' : 'Founded'}</span>
        <strong>${escapeHtml(developer.founded_year || '—')}</strong>
      </div>
      <div>
        <span>${lang === 'ar' ? 'المشروعات المتاحة' : 'Available projects'}</span>
        <strong>${relatedProjects.length}</strong>
      </div>
      <div>
        <span>${lang === 'ar' ? 'حالة التحقق' : 'Verification'}</span>
        <strong>${escapeHtml(developer.verification_status || '—')}</strong>
      </div>
      <div>
        <span>${lang === 'ar' ? 'آخر تحقق' : 'Last verified'}</span>
        <strong>${formatDate(developer.last_verified_at)}</strong>
      </div>
    </div>

    <h3 class="profile-subtitle">${lang === 'ar' ? 'مشروعات المطور' : 'Developer projects'}</h3>

    <div class="profile-project-list">
      ${
        relatedProjects.length
          ? relatedProjects.map(project => `
              <button
                class="profile-project-link"
                type="button"
                data-project-profile="${project.id}"
                data-parent-developer="${developer.id}">
                <span>${escapeHtml(projectName(project))}</span>
                <small>${escapeHtml(projectLocation(project))}</small>
              </button>
            `).join('')
          : `<p>${lang === 'ar' ? 'لا توجد مشروعات متاحة حاليًا.' : 'No available projects yet.'}</p>`
      }
    </div>

    ${
      developer.website_url
        ? `<a class="btn btn-navy profile-source-link"
              href="${escapeHtml(developer.website_url)}"
              target="_blank" rel="noopener">
              ${lang === 'ar' ? 'الموقع الرسمي للمطور' : 'Official developer website'}
           </a>`
        : ''
    }
  `, { type: 'developer', id }, false);
}


async function getProjectMedia(slug) {
  try {
    const payload = await supabaseRpc('jb_get_project_media_v1', { p_slug: slug });
    return payload || {media:[]};
  } catch (error) {
    console.warn('Project media fallback:', error);
    return {media:[]};
  }
}

function mediaTypeLabel(type) {
  const labels = {
    cover:{en:'Cover',ar:'الرئيسية'},
    gallery:{en:'Photos',ar:'الصور'},
    master_plan:{en:'Master Plan',ar:'المخطط العام'},
    floor_plan:{en:'Floor Plans',ar:'مخططات الوحدات'},
    unit_layout:{en:'Unit Layouts',ar:'تقسيمات الوحدات'},
    brochure:{en:'Brochure',ar:'البروشور'}
  };
  return labels[type]?.[lang] || type;
}

function renderProjectMedia(project, mediaPayload) {
  const media = Array.isArray(mediaPayload?.media) ? mediaPayload.media : [];
  const visualMedia = media.filter(item =>
    ['cover','gallery','master_plan','floor_plan','unit_layout'].includes(item.media_type)
  );

  if (!visualMedia.length) {
    return `<div class="profile-project-hero">${projectVisual(project)}</div>`;
  }

  const first = visualMedia[0];
  const groups = [...new Set(visualMedia.map(item => item.media_type))];

  return `
    <section class="project-media-shell" data-project-media-shell>
      <div class="project-media-main">
        <img
          id="projectMediaMainImage"
          src="${escapeHtml(first.public_url)}"
          alt="${escapeHtml((lang === 'ar' ? first.title_ar : first.title_en) || projectName(project))}">
        <button class="project-media-nav project-media-prev" type="button" aria-label="${lang === 'ar' ? 'الصورة السابقة' : 'Previous image'}">‹</button>
        <button class="project-media-nav project-media-next" type="button" aria-label="${lang === 'ar' ? 'الصورة التالية' : 'Next image'}">›</button>

        <div class="project-media-overlay">
          <span id="projectMediaCounter">1 / ${visualMedia.length}</span>
          <a id="projectMediaOpenOriginal" href="${escapeHtml(first.public_url)}" target="_blank" rel="noopener">
            ${lang === 'ar' ? 'فتح بالحجم الكامل' : 'Open full size'}
          </a>
        </div>
      </div>

      ${groups.length > 1 ? `
        <div class="project-media-tabs">
          <button class="project-media-tab is-active" type="button" data-media-filter="all">
            ${lang === 'ar' ? 'الكل' : 'All'}
          </button>
          ${groups.map(type => `
            <button class="project-media-tab" type="button" data-media-filter="${escapeHtml(type)}">
              ${escapeHtml(mediaTypeLabel(type))}
            </button>
          `).join('')}
        </div>
      ` : ''}

      <div class="project-media-thumbs" id="projectMediaThumbs">
        ${visualMedia.map((item,index) => `
          <button
            class="project-media-thumb ${index===0?'is-active':''}"
            type="button"
            data-media-index="${index}"
            data-media-type="${escapeHtml(item.media_type)}"
            data-media-url="${escapeHtml(item.public_url)}"
            data-media-title="${escapeHtml((lang === 'ar' ? item.title_ar : item.title_en) || projectName(project))}"
            data-media-source="${escapeHtml(item.source_url || '')}">
            <img src="${escapeHtml(item.thumbnail_url || item.public_url)}"
                 alt="${escapeHtml((lang === 'ar' ? item.title_ar : item.title_en) || mediaTypeLabel(item.media_type))}"
                 loading="lazy">
            <small>${escapeHtml(mediaTypeLabel(item.media_type))}</small>
          </button>
        `).join('')}
      </div>

      <div class="project-media-meta">
        <span>${lang === 'ar'
          ? `${visualMedia.length} مادة بصرية موثقة`
          : `${visualMedia.length} verified visual item${visualMedia.length===1?'':'s'}`}</span>
        <span>${lang === 'ar'
          ? 'يتم عرض المواد المتاحة فقط'
          : 'Only available media is shown'}</span>
      </div>
    </section>
  `;
}

function bindProjectMediaGallery() {
  const shell = document.querySelector('[data-project-media-shell]');
  const thumbs = [...document.querySelectorAll('.project-media-thumb')];
  const main = document.getElementById('projectMediaMainImage');
  const counter = document.getElementById('projectMediaCounter');
  const original = document.getElementById('projectMediaOpenOriginal');
  const tabs = [...document.querySelectorAll('.project-media-tab')];
  const prev = document.querySelector('.project-media-prev');
  const next = document.querySelector('.project-media-next');

  if (!main || !thumbs.length) return;

  let autoplayTimer = null;
  let userPaused = false;

  const visibleThumbs = () => thumbs.filter(btn => !btn.hidden);

  const activate = btn => {
    if (!btn || !main) return;
    thumbs.forEach(item => item.classList.remove('is-active'));
    btn.classList.add('is-active');

    main.classList.add('is-changing');
    window.setTimeout(() => {
      main.src = btn.dataset.mediaUrl;
      main.alt = btn.dataset.mediaTitle || '';
      if (original) original.href = btn.dataset.mediaUrl;
      main.classList.remove('is-changing');
    }, 120);

    const visible = visibleThumbs();
    const position = visible.indexOf(btn);
    if (counter) counter.textContent = `${Math.max(1, position + 1)} / ${visible.length}`;
  };

  const move = direction => {
    const visible = visibleThumbs();
    if (visible.length < 2) return;
    let current = visible.findIndex(btn => btn.classList.contains('is-active'));
    if (current < 0) current = 0;
    const nextIndex = (current + direction + visible.length) % visible.length;
    activate(visible[nextIndex]);
  };

  const stopAutoplay = () => {
    if (autoplayTimer) {
      window.clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  };

  const startAutoplay = () => {
    stopAutoplay();
    if (userPaused || visibleThumbs().length < 2) return;
    autoplayTimer = window.setInterval(() => move(1), 5000);
  };

  thumbs.forEach(btn => btn.addEventListener('click', () => {
    activate(btn);
    startAutoplay();
  }));

  prev?.addEventListener('click', () => {
    move(-1);
    startAutoplay();
  });

  next?.addEventListener('click', () => {
    move(1);
    startAutoplay();
  });

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(item => item.classList.remove('is-active'));
      tab.classList.add('is-active');
      const filter = tab.dataset.mediaFilter;
      thumbs.forEach(btn => {
        btn.hidden = filter !== 'all' && btn.dataset.mediaType !== filter;
      });
      activate(visibleThumbs()[0]);
      startAutoplay();
    });
  });

  shell?.addEventListener('mouseenter', () => {
    userPaused = true;
    stopAutoplay();
  });
  shell?.addEventListener('mouseleave', () => {
    userPaused = false;
    startAutoplay();
  });
  shell?.addEventListener('focusin', stopAutoplay);
  shell?.addEventListener('focusout', startAutoplay);

  startAutoplay();
}

function buildProjectShareUrl(project, channel='copy') {
  const url = new URL(window.location.href);
  url.hash = 'projects';
  url.searchParams.set('project', project.slug);
  url.searchParams.set('ref', getOrCreateShareCode());
  url.searchParams.set('via', channel);
  return url.toString();
}

async function shareProject(project, channel='copy') {
  const url = buildProjectShareUrl(project, channel);
  const message = lang === 'ar'
    ? `شاهد مشروع ${projectName(project)} على JB Real Estate:\n${url}`
    : `View ${projectName(project)} on JB Real Estate:\n${url}`;

  await trackReferralEvent('share', channel, getOrCreateShareCode());

  if (channel === 'whatsapp') {
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
    return;
  }

  if (channel === 'email') {
    window.location.href = `mailto:?subject=${encodeURIComponent(projectName(project))}&body=${encodeURIComponent(message)}`;
    return;
  }

  if (channel === 'native' && navigator.share) {
    await navigator.share({title:projectName(project),text:message,url});
    return;
  }

  await navigator.clipboard.writeText(url);
  const status = document.getElementById('projectShareStatus');
  if (status) status.textContent = lang === 'ar' ? 'تم نسخ الرابط' : 'Link copied';
}

function bindProjectShare(project) {
  document.querySelectorAll('[data-project-share-channel]').forEach(btn => {
    btn.addEventListener('click', () => {
      shareProject(project, btn.dataset.projectShareChannel || 'copy')
        .catch(error => console.warn('Project share failed:', error));
    });
  });
}

function openSharedProjectFromUrl() {
  const slug = new URL(window.location.href).searchParams.get('project');
  if (!slug || !projects.length) return;
  const project = projects.find(item => item.slug === slug);
  if (project) showProjectProfile(project.id, project.developer_id, true);
}


async function showProjectProfile(id, parentDeveloperId = null, pushHistory = true) {
  const localProject = projects.find(item => item.id === id);
  if (!localProject) return;

  openModal(`
    <div class="data-empty">
      ${lang === 'ar' ? 'جارٍ تحميل بيانات المشروع...' : 'Loading project data...'}
    </div>

    <div class="project-share-panel" id="projectSharePanel" hidden>
      <strong>${lang === 'ar' ? 'شارك المشروع مع شخص يساعدك في القرار' : 'Share this project with someone you trust'}</strong>
      <div class="project-share-actions">
        <button type="button" class="jb-share-btn" data-project-share-channel="whatsapp">WhatsApp</button>
        <button type="button" class="jb-share-btn" data-project-share-channel="copy">${lang === 'ar' ? 'نسخ الرابط' : 'Copy link'}</button>
        ${navigator.share ? `<button type="button" class="jb-share-btn" data-project-share-channel="native">${lang === 'ar' ? 'مشاركة من الهاتف' : 'Share'}</button>` : ''}
        <button type="button" class="jb-share-btn" data-project-share-channel="email">${lang === 'ar' ? 'البريد' : 'Email'}</button>
      </div>
      <span id="projectShareStatus" class="jb-share-status" aria-live="polite"></span>
    </div>
  `, {
    type: 'project',
    id,
    parentDeveloperId: parentDeveloperId || localProject.developer_id
  }, pushHistory);

  let payload = null;
  let mediaPayload = {media:[]};

  try {
    [payload, mediaPayload] = await Promise.all([
      supabaseRpc('jb_get_project_details_v1', { p_slug: localProject.slug }),
      getProjectMedia(localProject.slug)
    ]);
  } catch (error) {
    console.warn('Project RPC/media fallback:', error);
    try {
      mediaPayload = await getProjectMedia(localProject.slug);
    } catch {}
  }

  const project = {
    ...localProject,
    ...(payload?.project || {}),
    starting_price:
      payload?.pricing?.display_starting_price ??
      localProject.starting_price,
    official_starting_price:
      payload?.pricing?.official_starting_price ??
      localProject.official_starting_price,
    market_starting_price:
      payload?.pricing?.market_starting_price ??
      localProject.market_starting_price,
    price_evidence_type:
      payload?.pricing?.evidence_type ??
      localProject.price_evidence_type,
    currency:
      payload?.pricing?.currency ??
      localProject.currency,
    delivery_date:
      payload?.delivery?.delivery_date ??
      localProject.delivery_date,
    completion_year:
      payload?.delivery?.completion_year ??
      localProject.completion_year,
    construction_status:
      payload?.delivery?.construction_status ??
      localProject.construction_status,
    handover_status:
      payload?.delivery?.handover_status ??
      localProject.handover_status,
    min_down_payment_percentage:
      payload?.payment?.min_down_payment_percentage ??
      localProject.min_down_payment_percentage,
    max_installment_years:
      payload?.payment?.max_installment_years ??
      localProject.max_installment_years,
    payment_evidence_type:
      payload?.payment?.evidence_type ??
      localProject.payment_evidence_type,
    market_min_area:
      payload?.area?.market_min_area ??
      localProject.market_min_area,
    market_max_area:
      payload?.area?.market_max_area ??
      localProject.market_max_area,
    developers: payload?.developer
      ? {
          id: payload.developer.id,
          slug: payload.developer.slug,
          name_ar: payload.developer.name_ar,
          name_en: payload.developer.name_en,
          logo_url: payload.developer.logo_url
        }
      : localProject.developers,
    locations: payload?.location
      ? {
          id: payload.location.id,
          city: payload.location.city,
          area: payload.location.area
        }
      : localProject.locations
  };

  const developer = developers.find(item => item.id === project.developer_id) ||
                    project.developers;

  const description =
    lang === 'ar'
      ? (project.description_ar || project.overview_ar || project.description_en || project.overview_en || '')
      : (project.description_en || project.overview_en || project.description_ar || project.overview_ar || '');

  const backDeveloperId = parentDeveloperId || project.developer_id;

  const areaText =
    project.market_min_area || project.market_max_area
      ? `${project.market_min_area ?? '—'}–${project.market_max_area ?? project.market_min_area ?? '—'} m²`
      : (lang === 'ar' ? 'قيد التحقق' : 'Under verification');

  const paymentText =
    project.min_down_payment_percentage !== null &&
    project.min_down_payment_percentage !== undefined
      ? `${project.min_down_payment_percentage}% ${
          project.max_installment_years
            ? (lang === 'ar'
                ? `· حتى ${project.max_installment_years} سنة`
                : `· up to ${project.max_installment_years} years`)
            : ''
        }`
      : (lang === 'ar' ? 'قيد التحقق' : 'Under verification');

  const priceEvidence =
    project.price_evidence_type === 'OFFICIAL_PRICE'
      ? (lang === 'ar' ? 'سعر رسمي' : 'Official price')
      : project.price_evidence_type === 'MARKET_REFERENCE'
        ? (lang === 'ar' ? 'مرجع سوقي' : 'Market reference')
        : (lang === 'ar' ? 'قيد التحقق' : 'Under verification');

  openModal(`
    <div class="profile-nav-row">
      <button class="profile-back" type="button" data-modal-back>
        ${lang === 'ar'
          ? `→ العودة إلى ${escapeHtml(developer ? developerName(developer) : 'المطور')}`
          : `← Back to ${escapeHtml(developer ? developerName(developer) : 'developer')}`}
      </button>
      <span class="profile-breadcrumb">${escapeHtml(projectDeveloper(project))} / ${escapeHtml(projectName(project))}</span>
    </div>

    ${renderProjectMedia(project, mediaPayload)}

    <div class="profile-heading">
      <span class="eyebrow dark">${lang === 'ar' ? 'ملف المشروع' : 'PROJECT PROFILE'}</span>
      <h2 id="profileModalTitle">${escapeHtml(projectName(project))}</h2>
      <button class="profile-developer-button" type="button" data-developer-profile="${project.developer_id}">
        ${developer?.logo_url ? `<img src="${escapeHtml(developer.logo_url)}" alt="" loading="lazy">` : ''}
        <span>${escapeHtml(projectDeveloper(project))}</span>
      </button>
      <p>${escapeHtml(description || (
        lang === 'ar'
          ? 'مشروع متاح ضمن قاعدة بيانات JB الإنتاجية.'
          : 'Available project in the JB production market database.'
      ))}</p>
    </div>

    <div class="profile-facts">
      <div>
        <span>${lang === 'ar' ? 'الموقع' : 'Location'}</span>
        <strong>${escapeHtml(projectLocation(project))}</strong>
      </div>
      <div>
        <span>${lang === 'ar' ? 'نوع المشروع' : 'Project type'}</span>
        <strong>${escapeHtml(text(project.project_type))}</strong>
      </div>
      <div>
        <span>${lang === 'ar' ? 'السعر الحالي' : 'Current price'}</span>
        <strong>${escapeHtml(availabilityPrice(project))}</strong>
        <small>${escapeHtml(priceEvidence)}</small>
      </div>
      <div>
        <span>${lang === 'ar' ? 'التسليم' : 'Delivery'}</span>
        <strong>${escapeHtml(availabilityDelivery(project))}</strong>
      </div>
      <div>
        <span>${lang === 'ar' ? 'المساحات المرصودة' : 'Observed areas'}</span>
        <strong>${escapeHtml(areaText)}</strong>
      </div>
      <div>
        <span>${lang === 'ar' ? 'السداد' : 'Payment'}</span>
        <strong>${escapeHtml(paymentText)}</strong>
      </div>
      <div>
        <span>${lang === 'ar' ? 'درجة جاهزية البيانات' : 'Data readiness'}</span>
        <strong>${escapeHtml(String(project.readiness_score ?? payload?.quality?.readiness_score ?? '—'))}/100</strong>
      </div>
      <div>
        <span>${lang === 'ar' ? 'حالة الإنتاج' : 'Production status'}</span>
        <strong>${escapeHtml(project.production_status || payload?.quality?.production_status || '—')}</strong>
      </div>
    </div>

    <div class="profile-actions">
      <button class="btn btn-outline-dark" type="button" data-project-save="${project.id}">
        ${isProjectSaved(project.id)
          ? (lang === 'ar' ? '♥ محفوظ في قائمتي' : '♥ Saved')
          : (lang === 'ar' ? '♡ حفظ المشروع' : '♡ Save project')}
      </button>

      <button class="btn btn-outline-dark" type="button" data-project-share-toggle>
        ${lang === 'ar' ? 'مشاركة المشروع' : 'Share project'}
      </button>

      <button class="btn btn-gold" type="button" data-project-compare="${project.id}">
        ${comparison.some(item => item.id === project.id)
          ? (lang === 'ar' ? '✓ موجود في المقارنة' : '✓ In comparison')
          : (lang === 'ar' ? 'أضف للمقارنة' : 'Add to comparison')}
      </button>

      <a class="btn btn-outline-dark" href="#finder" data-project-consult="${project.id}">
        ${lang === 'ar' ? 'اطلب استشارة من JB' : 'Ask JB about this project'}
      </a>

      ${
        project.website_url
          ? `<a class="btn btn-navy"
                href="${escapeHtml(project.website_url)}"
                target="_blank" rel="noopener">
                ${lang === 'ar' ? 'المصدر الرسمي' : 'Official source'}
             </a>`
          : ''
      }
    </div>
  `, {
    type: 'project',
    id,
    parentDeveloperId: backDeveloperId
  }, false);

  addRecentlyViewedProject(project.id);
  bindProjectMediaGallery();
  bindProjectShare(project);

  document.querySelector('[data-project-share-toggle]')?.addEventListener('click', () => {
    const panel = document.getElementById('projectSharePanel');
    if (panel) panel.hidden = !panel.hidden;
  });
}

document.addEventListener('click', event => {
  const backButton = event.target.closest('[data-modal-back]');
  const developerButton = event.target.closest('[data-developer-profile]');
  const projectButton = event.target.closest('[data-project-profile]');
  const compareButton = event.target.closest('[data-project-compare]');
  const consultButton = event.target.closest('[data-project-consult]');
  const saveButton = event.target.closest('[data-project-save]');

  if (backButton) {
    modalBack();
    return;
  }

  if (developerButton) {
    const parentState = modalHistory[modalHistory.length - 1];
    showDeveloperProfile(developerButton.dataset.developerProfile, true);
  }

  if (projectButton) {
    const parentDeveloperId =
      projectButton.dataset.parentDeveloper ||
      modalHistory.findLast?.(state => state.type === 'developer')?.id ||
      null;

    showProjectProfile(projectButton.dataset.projectProfile, parentDeveloperId, true);
  }

  if (saveButton) {
    toggleSavedProject(saveButton.dataset.projectSave);
    return;
  }

  if (compareButton) {
    toggleComparison(compareButton.dataset.projectCompare);
  }

  if (consultButton) {
    closeModal();
    setTimeout(() => document.getElementById('finder')?.scrollIntoView({behavior:'smooth'}), 50);
  }
});

/* =========================================================
   COMPARISON — MAXIMUM 3 PROJECTS
   ========================================================= */

async function toggleComparison(id) {
  const project = projects.find(item => item.id === id);

  if (!project) return;

  const exists = comparison.some(item => item.id === id);

  if (exists) {
    comparison = comparison.filter(item => item.id !== id);
  } else {
    if (comparison.length >= 3) {
      alert(
        lang === 'ar'
          ? 'يمكنك مقارنة 3 مشروعات كحد أقصى.'
          : 'You can compare a maximum of 3 projects.'
      );
      return;
    }

    comparison.push(project);
  }

  if (comparison.length) {
    try {
      const rows = await supabaseRpc('jb_compare_projects_v1', {
        p_slugs: comparison.map(item => item.slug)
      });

      if (Array.isArray(rows) && rows.length) {
        comparison = rows
          .map(row => {
            const local = projects.find(item => item.slug === row.slug);
            return local
              ? {
                  ...local,
                  starting_price: row.display_starting_price ?? local.starting_price,
                  display_starting_price: row.display_starting_price ?? local.display_starting_price,
                  completion_year: row.completion_year ?? local.completion_year,
                  delivery_date: row.delivery_date ?? local.delivery_date,
                  min_down_payment_percentage:
                    row.min_down_payment_percentage ?? local.min_down_payment_percentage,
                  max_installment_years:
                    row.max_installment_years ?? local.max_installment_years,
                  readiness_score: row.readiness_score ?? local.readiness_score,
                  production_status: row.production_status ?? local.production_status
                }
              : null;
          })
          .filter(Boolean);
      }
    } catch (error) {
      console.warn('Compare RPC fallback:', error);
    }
  }

  renderProjects();
  renderComparison();

  const modal = document.getElementById('profileModal');

  if (modal && !modal.hidden) {
    showProjectProfile(id);
  }
}

function renderComparison() {
  const preview = document.getElementById('comparePreview');
  const status = document.getElementById('compareStatus');
  const clearButton = document.getElementById('clearComparison');

  if (!preview) return;

  if (!comparison.length) {
    preview.innerHTML = `
      <div class="compare-empty">
        ${lang === 'ar'
          ? 'لم تختر أي مشروعات للمقارنة بعد.'
          : 'No projects selected yet.'}
      </div>
    `;

    if (status) {
      status.textContent =
        lang === 'ar'
          ? 'اختر حتى 3 مشروعات باستخدام زر مقارنة داخل بطاقة المشروع.'
          : 'Select up to 3 projects using the Compare button on project cards.';
    }

    if (clearButton) clearButton.hidden = true;

    return;
  }

  const columns = comparison.length;

  const header = comparison
    .map(project => `<span>${escapeHtml(projectName(project))}</span>`)
    .join('');

  const row = (labelEn, labelAr, valueGetter) => `
    <div class="compare-row compare-row-dynamic" style="grid-template-columns:1.25fr repeat(${columns},1fr)">
      <span class="compare-criteria">${lang === 'ar' ? labelAr : labelEn}</span>
      ${comparison.map(project => `<span>${valueGetter(project)}</span>`).join('')}
    </div>
  `;

  preview.innerHTML = `
    <div class="compare-row head compare-row-dynamic"
         style="grid-template-columns:1.25fr repeat(${columns},1fr)">
      <span>${lang === 'ar' ? 'المعيار' : 'Criteria'}</span>
      ${header}
    </div>

    ${row(
      'Developer',
      'المطور',
      project => escapeHtml(projectDeveloper(project))
    )}

    ${row(
      'Location',
      'الموقع',
      project => escapeHtml(projectLocation(project))
    )}

    ${row(
      'Project type',
      'نوع المشروع',
      project => escapeHtml(text(project.project_type))
    )}

    ${row(
      'Starting price',
      'السعر المبدئي',
      project => escapeHtml(formatMoney(project.display_starting_price ?? project.starting_price, project.currency))
    )}

    ${row(
      'Delivery',
      'التسليم',
      project => escapeHtml(availabilityDelivery(project))
    )}

    ${row(
      'Verification',
      'التحقق',
      project => escapeHtml(project.verification_status || '—')
    )}
  `;

  if (status) {
    status.textContent =
      lang === 'ar'
        ? `تم اختيار ${comparison.length} من 3 مشروعات.`
        : `${comparison.length} of 3 projects selected.`;
  }

  if (clearButton) {
    clearButton.hidden = false;
    clearButton.textContent =
      lang === 'ar' ? 'مسح المقارنة' : 'Clear comparison';
  }
}

document.getElementById('clearComparison')?.addEventListener('click', () => {
  comparison = [];
  renderProjects();
  renderComparison();
});


/* =========================================================
   PROPERTY FINDER V3
   Preliminary shortlist + consent-based lead capture
   ========================================================= */

const finderForm = document.getElementById('finderForm');
let currentSearchProfile = null;
let currentShortlist = [];

/* =========================================================
   CUSTOMER EXPERIENCE GROWTH LOOP V1
   Saved search + referral sharing + return triggers
   ========================================================= */

const JB_SAVED_SEARCH_KEY = 'jb_saved_search_v1';
const JB_SHARE_CODE_KEY = 'jb_share_code_v1';
const JB_REFERRAL_CONTEXT_KEY = 'jb_referral_context_v1';

let previousSavedSearchSnapshot = null;

function safeJsonParse(value, fallback = null) {
  try {
    return JSON.parse(value);
  } catch (_) {
    return fallback;
  }
}

function getOrCreateShareCode() {
  let code = localStorage.getItem(JB_SHARE_CODE_KEY);

  if (!code) {
    code = (window.crypto?.randomUUID?.() || (
      'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      })
    ));

    localStorage.setItem(JB_SHARE_CODE_KEY, code);
  }

  return code;
}

function getReferralContext() {
  return safeJsonParse(localStorage.getItem(JB_REFERRAL_CONTEXT_KEY), {}) || {};
}

async function trackReferralEvent(eventType, channel = null, referralCode = null) {
  try {
    await supabaseRpc('jb_track_referral_event_v1', {
      p_event_type: eventType,
      p_referral_code: referralCode || getOrCreateShareCode(),
      p_channel: channel || null,
      p_page_path: window.location.pathname,
      p_referrer: document.referrer || null
    });
  } catch (error) {
    // Referral analytics must never block the user journey.
    console.warn('Referral event was not recorded:', error);
  }
}

function referralParamsFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const ref = params.get('ref');
  const via = params.get('via');

  if (!ref) return null;

  return {
    referred_by_code: ref,
    referral_source: via || 'shared_link',
    first_seen_at: new Date().toISOString()
  };
}

function captureReferralContext() {
  const incoming = referralParamsFromUrl();
  if (!incoming) return;

  const existing = getReferralContext();

  if (!existing.referred_by_code) {
    localStorage.setItem(
      JB_REFERRAL_CONTEXT_KEY,
      JSON.stringify(incoming)
    );

    trackReferralEvent(
      'visit',
      incoming.referral_source,
      incoming.referred_by_code
    );
  }
}

function finderProfileKey(values = {}) {
  return JSON.stringify({
    location: values.location || '',
    budget: values.budget || '',
    type: values.type || '',
    purpose: values.purpose || '',
    delivery: values.delivery || '',
    payment: values.payment || '',
    bedrooms: values.bedrooms || '',
    timeline: values.timeline || ''
  });
}

function readSavedSearch() {
  return safeJsonParse(localStorage.getItem(JB_SAVED_SEARCH_KEY), null);
}

function saveCurrentSearch(values, shortlist = []) {
  const payload = {
    profile: {...values},
    profile_key: finderProfileKey(values),
    shortlist_ids: shortlist.map(project => project.id).filter(Boolean),
    shortlist_slugs: shortlist.map(project => project.slug).filter(Boolean),
    saved_at: new Date().toISOString()
  };

  localStorage.setItem(JB_SAVED_SEARCH_KEY, JSON.stringify(payload));
  return payload;
}

function applyFinderValues(values = {}) {
  const ids = ['location','budget','type','purpose','delivery','payment','bedrooms','timeline'];

  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el && Object.prototype.hasOwnProperty.call(values, id)) {
      el.value = values[id] || '';
    }
  });
}

function sharedSearchValuesFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const allowed = ['location','budget','type','purpose','delivery','payment','bedrooms','timeline'];
  const values = {};
  let found = false;

  allowed.forEach(key => {
    const value = params.get(key);
    if (value !== null) {
      values[key] = value;
      found = true;
    }
  });

  return found ? values : null;
}

function buildShareUrl(channel = 'copy') {
  const url = new URL(window.location.href);
  const values = currentSearchProfile || getFinderValues();

  ['location','budget','type','purpose','delivery','payment','bedrooms','timeline']
    .forEach(key => {
      if (values?.[key]) url.searchParams.set(key, values[key]);
      else url.searchParams.delete(key);
    });

  url.searchParams.set('ref', getOrCreateShareCode());
  url.searchParams.set('via', channel);

  return url.toString();
}

function shareMessage() {
  const values = currentSearchProfile || getFinderValues();
  const location = values.location || (lang === 'ar' ? 'العقارات في مصر' : 'Egypt real estate');
  const type = values.type || (lang === 'ar' ? 'عقارات' : 'properties');

  return lang === 'ar'
    ? `وجدت قائمة خيارات على JB تناسب بحثي عن ${type} في ${location}. راجعها معي:`
    : `I found a JB shortlist for ${type} in ${location}. Take a look with me:`;
}

async function shareCurrentSearch(channel = 'copy') {
  const url = buildShareUrl(channel);
  const message = shareMessage();

  await trackReferralEvent('share', channel, getOrCreateShareCode());

  if (channel === 'whatsapp') {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(`${message} ${url}`)}`,
      '_blank',
      'noopener'
    );
    return;
  }

  if (channel === 'email') {
    const subject = lang === 'ar'
      ? 'قائمة عقارات للمقارنة من JB'
      : 'JB property shortlist to compare';

    window.location.href =
      `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`${message}\n\n${url}`)}`;
    return;
  }

  if (channel === 'native' && navigator.share) {
    await navigator.share({
      title: lang === 'ar' ? 'قائمة JB العقارية' : 'JB Property Shortlist',
      text: message,
      url
    });
    return;
  }

  try {
    await navigator.clipboard.writeText(url);
    const status = document.getElementById('shareShortlistStatus');
    if (status) {
      status.textContent = lang === 'ar'
        ? 'تم نسخ الرابط.'
        : 'Link copied.';
    }
  } catch (_) {
    window.prompt(
      lang === 'ar' ? 'انسخ هذا الرابط:' : 'Copy this link:',
      url
    );
  }
}

function renderReturnSearchPrompt() {
  const finder = document.getElementById('finderForm');
  if (!finder) return;

  document.getElementById('jbReturnSearchPrompt')?.remove();

  const shared = sharedSearchValuesFromUrl();
  const saved = readSavedSearch();
  const candidate = shared || saved?.profile;

  if (!candidate) return;

  applyFinderValues(candidate);

  const box = document.createElement('div');
  box.id = 'jbReturnSearchPrompt';
  box.className = 'jb-return-search';

  const isShared = Boolean(shared);

  box.innerHTML = `
    <div>
      <strong>${isShared
        ? (lang === 'ar' ? 'تمت مشاركة قائمة بحث معك' : 'A property search was shared with you')
        : (lang === 'ar' ? 'مرحبًا بعودتك — بحثك السابق جاهز' : 'Welcome back — your saved search is ready')}</strong>
      <span>${isShared
        ? (lang === 'ar' ? 'راجع الاختيارات الحالية وشاهد ما إذا ظهرت خيارات جديدة.' : 'Review the current matches and see whether new options are available.')
        : (lang === 'ar' ? 'أكمل من حيث توقفت بدل بدء البحث من جديد.' : 'Continue where you left off instead of starting again.')}</span>
    </div>

    <button id="jbContinueSavedSearch" class="btn btn-navy" type="button">
      ${lang === 'ar' ? 'عرض النتائج الآن' : 'Show my matches'}
    </button>
  `;

  finder.insertAdjacentElement('afterend', box);

  document.getElementById('jbContinueSavedSearch')?.addEventListener('click', async () => {
    previousSavedSearchSnapshot = saved;
    await renderFinderPreview(getFinderValues(), true);
  });
}

function renderNewMatchesBanner(newCount = 0) {
  if (!newCount) return '';

  return `
    <div class="jb-new-matches-banner">
      <strong>${lang === 'ar'
        ? `${newCount} ${newCount === 1 ? 'خيار جديد' : 'خيارات جديدة'} منذ آخر بحث`
        : `${newCount} new ${newCount === 1 ? 'match' : 'matches'} since your last search`}</strong>
      <span>${lang === 'ar'
        ? 'تمت مقارنة بحثك المحفوظ بأحدث المشروعات المتاحة في JB.'
        : 'Your saved criteria were checked against the latest projects available on JB.'}</span>
    </div>
  `;
}

function renderSharePanel() {
  return `
    <section class="jb-share-panel">
      <div>
        <strong>${lang === 'ar'
          ? 'ناقش هذه القائمة مع شخص تثق به'
          : 'Review this shortlist with someone you trust'}</strong>
        <span>${lang === 'ar'
          ? 'شارك البحث مع شريك أو صديق للمقارنة واتخاذ القرار معًا.'
          : 'Share the search with a partner, friend, or colleague and compare together.'}</span>
      </div>

      <div class="jb-share-actions">
        <button type="button" class="jb-share-btn" data-share-channel="whatsapp">WhatsApp</button>
        <button type="button" class="jb-share-btn" data-share-channel="native">
          ${lang === 'ar' ? 'مشاركة من الهاتف' : 'Share from phone'}
        </button>
        <button type="button" class="jb-share-btn" data-share-channel="email">
          ${lang === 'ar' ? 'البريد' : 'Email'}
        </button>
        <button type="button" class="jb-share-btn" data-share-channel="copy">
          ${lang === 'ar' ? 'نسخ الرابط' : 'Copy link'}
        </button>
      </div>

      <span id="shareShortlistStatus" class="jb-share-status" aria-live="polite"></span>
    </section>
  `;
}

function getFinderValues() {
  return {
    location: document.getElementById('location')?.value || '',
    budget: document.getElementById('budget')?.value || '',
    type: document.getElementById('type')?.value || '',
    purpose: document.getElementById('purpose')?.value || '',
    delivery: document.getElementById('delivery')?.value || '',
    payment: document.getElementById('payment')?.value || '',
    bedrooms: document.getElementById('bedrooms')?.value || '',
    timeline: document.getElementById('timeline')?.value || ''
  };
}

function calculateReadiness(values) {
  const filled = Object.values(values).filter(Boolean).length;
  let readiness = Math.round((filled / 8) * 60);

  if (values.timeline === 'now') readiness += 25;
  else if (values.timeline === '3months') readiness += 20;
  else if (values.timeline === '6months') readiness += 12;
  else if (values.timeline === 'later') readiness += 5;

  if (values.budget) readiness += 10;
  if (values.payment) readiness += 5;

  return Math.min(readiness, 100);
}

function normalizeUnitType(value = '') {
  const key = String(value).trim().toLowerCase();

  const aliases = {
    'apartment': ['apartment'],
    'chalet': ['chalet'],
    'villa': ['villa'],
    'twin house': ['twin-house', 'twin house'],
    'townhouse': ['townhouse', 'town house'],
    'duplex': ['duplex'],
    'commercial': ['commercial', 'office', 'clinic', 'retail', 'shop']
  };

  return aliases[key] || [key];
}

function projectMatchesUnitType(project, selectedType) {
  if (!selectedType) return true;

  const wanted = normalizeUnitType(selectedType);
  const linkedTypes = projectPropertyTypeMap.get(project.id) || [];

  const linkedValues = linkedTypes.flatMap(type => [
    String(type.slug || '').toLowerCase(),
    String(type.name_en || '').toLowerCase(),
    String(type.name_ar || '').toLowerCase()
  ]);

  if (wanted.some(value => linkedValues.includes(value))) {
    return true;
  }

  // Fallback for commercial/mixed-use projects whose detailed unit-type
  // rows have not yet been enriched.
  const broadProjectType = String(project.project_type || '').toLowerCase();

  if (selectedType === 'Commercial') {
    return broadProjectType.includes('commercial') ||
           broadProjectType.includes('mixed use') ||
           broadProjectType.includes('mixed-use') ||
           broadProjectType.includes('medical') ||
           broadProjectType.includes('office');
  }

  // If detailed unit data is absent, do not falsely claim a residential
  // project matches a specific unit type.
  return false;
}


function finderBudgetRange(value) {
  return {
    under5: [0, 5000000],
    '5to10': [5000000, 10000000],
    '10to20': [10000000, 20000000],
    '20plus': [20000000, Infinity]
  }[value] || null;
}

function finderProjectPrice(project) {
  const price = Number(
    project.display_starting_price ??
    project.starting_price ??
    0
  );

  if (!price) {
    return { price: null, sourceClass: 'unavailable' };
  }

  if (
    project.price_evidence_type === 'OFFICIAL_PRICE' ||
    project.official_starting_price
  ) {
    return { price, sourceClass: 'official' };
  }

  return { price, sourceClass: 'market_reference' };
}

function finderDeliveryYear(project) {
  if (project.completion_year) return Number(project.completion_year);

  if (project.delivery_date) {
    const year = new Date(project.delivery_date).getFullYear();
    return Number.isFinite(year) ? year : null;
  }

  return null;
}

function finderMatchDecorate(project, values) {
  let score = 0;
  const reasons = [];
  const gaps = [];

  if (values.location) {
    const loc = `${project.locations?.city || ''} ${project.locations?.area || ''}`.toLowerCase();

    if (loc.includes(values.location.toLowerCase())) {
      score += 30;
      reasons.push(lang === 'ar' ? '✓ الموقع مطابق' : '✓ Location matches');
    }
  } else {
    score += 15;
  }

  if (values.type) {
    if (projectMatchesUnitType(project, values.type)) {
      score += 25;
      reasons.push(lang === 'ar' ? '✓ نوع الوحدة مطابق' : '✓ Unit type matches');
    }
  } else {
    score += 12;
  }

  const pricing = finderProjectPrice(project);
  const range = finderBudgetRange(values.budget);

  if (values.budget && range) {
    if (pricing.price) {
      if (pricing.price >= range[0] && pricing.price <= range[1]) {
        score += pricing.sourceClass === 'official' ? 20 : 17;

        reasons.push(
          pricing.sourceClass === 'official'
            ? (lang === 'ar'
                ? '✓ السعر الرسمي داخل الميزانية'
                : '✓ Official price fits budget')
            : (lang === 'ar'
                ? '✓ المرجع السوقي داخل الميزانية'
                : '✓ Market reference fits budget')
        );
      }
    } else {
      gaps.push(lang === 'ar' ? 'السعر قيد التحقق' : 'Price under verification');
    }
  } else if (pricing.price) {
    score += 10;
  } else {
    score += 4;
    gaps.push(lang === 'ar' ? 'السعر قيد التحقق' : 'Price under verification');
  }

  if (values.delivery) {
    const y = finderDeliveryYear(project);
    const currentYear = new Date().getFullYear();

    if (y) {
      let ok = false;

      if (values.delivery === 'Ready') {
        ok = y <= currentYear;
      } else if (values.delivery === '1-3') {
        ok = y > currentYear && y <= currentYear + 3;
      } else if (values.delivery === '3plus') {
        ok = y > currentYear + 3;
      }

      if (ok) {
        score += 10;
        reasons.push(lang === 'ar' ? '✓ التسليم متوافق' : '✓ Delivery matches');
      }
    } else {
      gaps.push(lang === 'ar'
        ? 'موعد التسليم قيد التحقق'
        : 'Delivery under verification');
    }
  } else {
    score += 5;
  }

  const projectType = String(project.project_type || '').toLowerCase();

  if (values.purpose === 'Investment') {
    if (projectType) {
      score += 5;
      reasons.push(lang === 'ar'
        ? '✓ نوع المشروع مناسب للتقييم الاستثماري'
        : '✓ Project type is investment-relevant');
    }
  } else if (values.purpose === 'Personal use') {
    if (
      projectType.includes('residential') ||
      projectType.includes('coastal') ||
      projectType.includes('mixed')
    ) {
      score += 5;
      reasons.push(lang === 'ar'
        ? '✓ مناسب للاستخدام الشخصي'
        : '✓ Suitable for personal use');
    }
  } else if (values.purpose === 'Both') {
    score += 5;
  } else {
    score += 3;
  }

  if (project.verification_status === 'verified') {
    score += 5;
    reasons.push(lang === 'ar' ? '✓ مشروع موثّق' : '✓ Verified project');
  }

  if (project.production_status === 'PRODUCTION_READY') {
    score += 5;
  }

  if (values.payment === 'low-down') {
    if (
      project.min_down_payment_percentage !== null &&
      project.min_down_payment_percentage !== undefined &&
      Number(project.min_down_payment_percentage) <= 10
    ) {
      score += 5;
      reasons.push(lang === 'ar' ? '✓ مقدم منخفض' : '✓ Low down payment');
    } else if (
      project.min_down_payment_percentage === null ||
      project.min_down_payment_percentage === undefined
    ) {
      gaps.push(lang === 'ar'
        ? 'بيانات المقدم قيد التحقق'
        : 'Down payment under verification');
    }
  } else if (values.payment === 'long-plan') {
    if (Number(project.max_installment_years || 0) >= 7) {
      score += 5;
      reasons.push(lang === 'ar'
        ? '✓ فترة سداد طويلة'
        : '✓ Long payment plan');
    } else if (!project.max_installment_years) {
      gaps.push(lang === 'ar'
        ? 'مدة السداد قيد التحقق'
        : 'Payment term under verification');
    }
  }

  return {
    score: Math.min(100, Math.max(0, Math.round(score))),
    reasons,
    gaps
  };
}

function enrichFinderMatches(list, values) {
  return list
    .map(project => ({
      ...project,
      _match: finderMatchDecorate(project, values)
    }))
    .sort((a, b) => {
      const aKnown = finderProjectPrice(a).price ? 1 : 0;
      const bKnown = finderProjectPrice(b).price ? 1 : 0;

      if (aKnown !== bKnown) return bKnown - aKnown;
      return (b._match?.score || 0) - (a._match?.score || 0);
    });
}

function finderApiParams(values) {
  const typeAliases = normalizeUnitType(values.type || '');
  const primaryType =
    values.type === 'Commercial'
      ? null
      : (typeAliases[0] || null);

  // Keep unknown-price / unknown-delivery projects available so they can
  // appear in the Potential Matches group instead of disappearing.
  return {
    p_location: values.location || null,
    p_budget_max: null,
    p_property_type: primaryType,
    p_delivery_year_max: null,
    p_down_payment_max: null,
    p_only_ready: false,
    p_limit: 100,
    p_offset: 0
  };
}

function postFilterFinderResults(list, values) {
  const currentYear = new Date().getFullYear();
  const range = finderBudgetRange(values.budget);

  return list.filter(project => {
    const pricing = finderProjectPrice(project);
    const deliveryYear = finderDeliveryYear(project);

    // Known price outside budget = exclude.
    // Unknown price = keep as potential match.
    if (range && pricing.price) {
      if (pricing.price < range[0] || pricing.price > range[1]) {
        return false;
      }
    }

    // Known delivery conflict = exclude.
    // Unknown delivery = keep and mark for verification.
    if (values.delivery && deliveryYear) {
      if (values.delivery === 'Ready' && deliveryYear > currentYear) {
        return false;
      }

      if (
        values.delivery === '1-3' &&
        (deliveryYear <= currentYear || deliveryYear > currentYear + 3)
      ) {
        return false;
      }

      if (
        values.delivery === '3plus' &&
        deliveryYear <= currentYear + 3
      ) {
        return false;
      }
    }

    if (
      values.payment === 'long-plan' &&
      project.max_installment_years &&
      Number(project.max_installment_years) < 7
    ) {
      return false;
    }

    if (
      values.payment === 'low-down' &&
      project.min_down_payment_percentage !== null &&
      project.min_down_payment_percentage !== undefined &&
      Number(project.min_down_payment_percentage) > 10
    ) {
      return false;
    }

    if (
      values.type === 'Commercial' &&
      !projectMatchesUnitType(project, 'Commercial')
    ) {
      return false;
    }

    return true;
  });
}

async function shortlistProjects(values) {
  try {
    const rows = await supabaseRpc(
      'jb_search_projects_v1',
      finderApiParams(values)
    );

    const mapped = (Array.isArray(rows) ? rows : [])
      .map(row => {
        const local = projects.find(project => project.slug === row.slug);
        if (!local) return null;

        return {
          ...local,
          starting_price: row.display_starting_price ?? local.starting_price,
          display_starting_price: row.display_starting_price ?? local.display_starting_price,
          completion_year: row.completion_year ?? local.completion_year,
          delivery_date: row.delivery_date ?? local.delivery_date,
          property_type_slugs: row.property_type_slugs || local.property_type_slugs,
          market_min_area: row.market_min_area ?? local.market_min_area,
          market_max_area: row.market_max_area ?? local.market_max_area,
          min_down_payment_percentage:
            row.min_down_payment_percentage ?? local.min_down_payment_percentage,
          max_installment_years:
            row.max_installment_years ?? local.max_installment_years,
          readiness_score: row.readiness_score ?? local.readiness_score,
          production_status: row.production_status ?? local.production_status
        };
      })
      .filter(Boolean);

    return enrichFinderMatches(postFilterFinderResults(mapped, values), values);

  } catch (error) {
    console.warn('Finder RPC fallback:', error);

    // Safe fallback uses only the already production-filtered catalogue.
    return enrichFinderMatches(
      postFilterFinderResults(
        projects.filter(project => {
          const locationMatch = !values.location || (() => {
            const location =
              `${project.locations?.city || ''} ${project.locations?.area || ''}`.toLowerCase();
            return location.includes(values.location.toLowerCase());
          })();

          const unitTypeMatch = projectMatchesUnitType(project, values.type);
          return locationMatch && unitTypeMatch;
        }),
        values
      ),
      values
    );
  }
}

function shortlistItem(project) {
  const match = project._match || {
    score: 0,
    reasons: [],
    gaps: []
  };

  const pricing = finderProjectPrice(project);

  const priceLabel = !pricing.price
    ? (lang === 'ar'
        ? 'السعر قيد التحقق'
        : 'Price under verification')
    : pricing.sourceClass === 'official'
      ? (lang === 'ar'
          ? `سعر رسمي: ${formatMoney(pricing.price, project.currency || 'EGP')}`
          : `Official price: ${formatMoney(pricing.price, project.currency || 'EGP')}`)
      : (lang === 'ar'
          ? `مرجع سوقي: ${formatMoney(pricing.price, project.currency || 'EGP')}`
          : `Market reference: ${formatMoney(pricing.price, project.currency || 'EGP')}`);

  const priceClass = !pricing.price
    ? 'price-unknown'
    : pricing.sourceClass === 'official'
      ? 'price-official'
      : 'price-market';

  return `
    <button
      class="finder-shortlist-item matching-card ${
        pricing.price
          ? 'confirmed-match-card'
          : 'potential-match-card'
      }"
      type="button"
      data-project-profile="${project.id}">

      <span class="finder-shortlist-thumb">
        ${
          project.cover_image_url
            ? `<img src="${escapeHtml(project.cover_image_url)}" alt="" loading="lazy">`
            : `<b>${projectInitials(project)}</b>`
        }
      </span>

      <span class="finder-shortlist-copy">
        <span class="matching-card-title">
          <strong class="match-project-name">
            ${escapeHtml(projectName(project))}
          </strong>

          <b class="match-score">
            ${match.score}% ${lang === 'ar' ? 'تطابق' : 'Match'}
          </b>
        </span>

        <small class="match-meta">
          ${escapeHtml(projectDeveloper(project))} · ${escapeHtml(projectLocation(project))}
        </small>

        <strong class="match-price ${priceClass}">
          ${escapeHtml(priceLabel)}
        </strong>

        <span class="match-reasons">
          ${match.reasons
            .slice(0, 4)
            .map(reason => `<em class="match-positive">${escapeHtml(reason)}</em>`)
            .join('')}

          ${match.gaps
            .slice(0, 2)
            .map(gap => `<em class="match-gap">○ ${escapeHtml(gap)}</em>`)
            .join('')}
        </span>
      </span>
    </button>
  `;
}

async function renderFinderPreview(values, shouldScroll = true) {
  const result = document.getElementById('finderResult');
  if (!result) return;

  const readiness = calculateReadiness(values);

  result.hidden = false;
  result.innerHTML = `
    <div class="data-empty">
      ${lang === 'ar'
        ? 'جارٍ البحث في مشروعات JB المتاحة...'
        : 'Searching JB available projects...'}
    </div>
  `;

  currentShortlist = await shortlistProjects(values);
  currentSearchProfile = {...values, readiness};

  const savedBeforeRun = previousSavedSearchSnapshot || readSavedSearch();
  const currentProfileKey = finderProfileKey(values);

  const previousIds = new Set(
    savedBeforeRun?.profile_key === currentProfileKey
      ? (savedBeforeRun.shortlist_ids || [])
      : []
  );

  const newMatchCount = previousIds.size
    ? currentShortlist.filter(project => project.id && !previousIds.has(project.id)).length
    : 0;

  saveCurrentSearch(currentSearchProfile, currentShortlist);
  previousSavedSearchSnapshot = null;

  const confirmedMatches = currentShortlist.filter(
    project => Boolean(finderProjectPrice(project).price)
  );

  const potentialMatches = currentShortlist.filter(
    project => !finderProjectPrice(project).price
  );

  const confirmedPreview = confirmedMatches.slice(0, 3);
  const remainingPreviewSlots = Math.max(0, 3 - confirmedPreview.length);
  const potentialPreview = potentialMatches.slice(0, remainingPreviewSlots);

  const shownCount = confirmedPreview.length + potentialPreview.length;
  const hiddenCount = Math.max(0, currentShortlist.length - shownCount);

  result.hidden = false;

  result.innerHTML = `
    <div class="finder-result-content finder-rich-results">
      <div class="finder-result-head">
        <div>
          <span class="finder-result-label">
            ${lang === 'ar' ? 'نتيجة أولية من JB' : 'YOUR JB PREVIEW'}
          </span>

          <h3>
            ${lang === 'ar'
              ? 'أفضل النتائج المتاحة حاليًا'
              : 'Your best available matches'}
          </h3>
        </div>

        <div class="readiness-score">
          <strong>${readiness}%</strong>
          <span>${lang === 'ar' ? 'اكتمال ملف البحث' : 'Search profile'}</span>
        </div>
      </div>

      <p class="finder-result-copy">
        ${
          lang === 'ar'
            ? 'نرتب المشروعات وفق متطلباتك الحالية. يظهر السعر الرسمي أولًا، ثم المرجع السوقي الموثق عند غياب السعر الرسمي. المشروعات التي تناسب الموقع ونوع الوحدة ولكن ما زال سعرها غير موثق تظهر بشكل منفصل حتى لا نفقد خيارًا محتملًا.'
            : 'We rank projects using your current requirements. Official pricing is shown first, followed by verified market references where no official price is available. Projects that fit location and unit type but still need price verification are shown separately so a potentially suitable option is not lost.'
        }
      </p>

      ${renderNewMatchesBanner(newMatchCount)}

      ${
        confirmedPreview.length
          ? `
            <section class="match-group">
              <div class="match-group-head">
                <strong>${lang === 'ar' ? 'أفضل التطابقات' : 'Best Matches'}</strong>
                <span>${lang === 'ar'
                  ? 'السعر معروف ومتوافق مع معايير البحث المختارة'
                  : 'Known price and budget-aligned'}</span>
              </div>

              <div class="finder-shortlist rich-finder-list">
                ${confirmedPreview.map(shortlistItem).join('')}
              </div>
            </section>
          `
          : ''
      }

      ${
        potentialPreview.length
          ? `
            <section class="match-group potential-group">
              <div class="match-group-head">
                <strong>${lang === 'ar'
                  ? 'خيارات محتملة — تحتاج تحقق السعر'
                  : 'Potential Matches — Price Verification Needed'}</strong>

                <span>${lang === 'ar'
                  ? 'الموقع ونوع الوحدة مناسبان لكن السعر الحالي يحتاج تحققًا إضافيًا'
                  : 'Location and unit type fit, but current price still needs verification'}</span>
              </div>

              <div class="finder-shortlist rich-finder-list">
                ${potentialPreview.map(shortlistItem).join('')}
              </div>
            </section>
          `
          : ''
      }

      ${
        !shownCount
          ? `<div class="data-empty">${
              lang === 'ar'
                ? 'لا توجد نتائج منشورة مطابقة لهذه المتطلبات حاليًا.'
                : 'No published projects currently match these requirements.'
            }</div>`
          : ''
      }

      ${
        hiddenCount > 0
          ? `<div class="shortlist-locked">
              <strong>${lang === 'ar'
                ? `هناك ${hiddenCount} نتيجة إضافية`
                : `${hiddenCount} more results available`}</strong>

              <span>${lang === 'ar'
                ? 'أدخل بيانات التواصل للحصول على القائمة الكاملة وحفظ ملف البحث.'
                : 'Add your contact details to unlock the full shortlist and save this search.'}</span>
            </div>`
          : ''
      }

      ${shownCount ? renderSharePanel() : ''}

      <form id="leadCaptureForm" class="lead-capture-form">
        <div class="lead-capture-heading">
          <strong>${lang === 'ar' ? 'احصل على القائمة الكاملة' : 'Get the full shortlist'}</strong>
          <span>${lang === 'ar'
            ? 'أخبرنا بتفضيلاتك حتى نرشح لك الأنسب الآن ولاحقًا.'
            : 'Tell us your preferences so JB can recommend the best fit now and later.'}</span>
        </div>

        <div class="lead-capture-grid">
          <label>
            <span>${lang === 'ar' ? 'الاسم' : 'Name'}</span>
            <input id="leadName" name="full_name" required autocomplete="name">
          </label>

          <label>
            <span>${lang === 'ar' ? 'رقم الهاتف' : 'Phone number'}</span>
            <input id="leadPhone" name="phone" required autocomplete="tel">
          </label>

          <label>
            <span>${lang === 'ar' ? 'رقم واتساب' : 'WhatsApp number'}</span>
            <input id="leadWhatsapp" name="whatsapp_phone" autocomplete="tel"
              placeholder="${lang === 'ar' ? 'اتركه فارغًا إذا كان نفس الهاتف' : 'Leave blank if same as phone'}">
          </label>

          <label>
            <span>${lang === 'ar' ? 'البريد الإلكتروني (اختياري)' : 'Email (optional)'}</span>
            <input id="leadEmail" name="email" type="email" autocomplete="email">
          </label>
        </div>

        <label class="lead-inline-check">
          <input id="leadWhatsappSame" type="checkbox" checked>
          <span>${lang === 'ar' ? 'رقم واتساب هو نفس رقم الهاتف' : 'WhatsApp is the same as my phone number'}</span>
        </label>

        <div class="preference-panel">
          <strong>${lang === 'ar' ? 'كيف تفضل أن نتواصل معك؟' : 'How would you like us to contact you?'}</strong>
          <div class="contact-methods">
            <label><input class="leadContactMethod" type="checkbox" value="whatsapp" checked> <span>${lang === 'ar' ? 'واتساب' : 'WhatsApp'}</span></label>
            <label><input class="leadContactMethod" type="checkbox" value="phone"> <span>${lang === 'ar' ? 'اتصال هاتفي' : 'Phone call'}</span></label>
            <label><input class="leadContactMethod" type="checkbox" value="email"> <span>${lang === 'ar' ? 'البريد الإلكتروني' : 'Email'}</span></label>
          </div>
        </div>

        <div class="lead-capture-grid preference-grid">
          <label>
            <span>${lang === 'ar' ? 'طريقة الدفع المناسبة' : 'Preferred payment method'}</span>
            <select id="leadPaymentMethod">
              <option value="flexible">${lang === 'ar' ? 'مرن — حسب أفضل عرض' : 'Flexible — best available option'}</option>
              <option value="installments">${lang === 'ar' ? 'تقسيط' : 'Installments'}</option>
              <option value="cash">${lang === 'ar' ? 'كاش / دفعة قوية' : 'Cash / strong upfront'}</option>
            </select>
          </label>

          <label>
            <span>${lang === 'ar' ? 'أقصى مقدم مناسب' : 'Maximum suitable down payment'}</span>
            <select id="leadMaxDownPayment">
              <option value="">${lang === 'ar' ? 'لا يوجد تفضيل محدد' : 'No specific preference'}</option>
              <option value="5">5%</option>
              <option value="10">10%</option>
              <option value="15">15%</option>
              <option value="20">20%</option>
              <option value="30">30%</option>
              <option value="50">50%</option>
            </select>
          </label>

          <label>
            <span>${lang === 'ar' ? 'مدة التقسيط المفضلة' : 'Preferred installment term'}</span>
            <select id="leadInstallmentYears">
              <option value="">${lang === 'ar' ? 'لا يوجد تفضيل محدد' : 'No specific preference'}</option>
              <option value="3">3 ${lang === 'ar' ? 'سنوات' : 'years'}</option>
              <option value="5">5 ${lang === 'ar' ? 'سنوات' : 'years'}</option>
              <option value="7">7 ${lang === 'ar' ? 'سنوات' : 'years'}</option>
              <option value="8">8 ${lang === 'ar' ? 'سنوات' : 'years'}</option>
              <option value="10">10 ${lang === 'ar' ? 'سنوات' : 'years'}</option>
            </select>
          </label>

          <label>
            <span>${lang === 'ar' ? 'أهم أولوية لك' : 'Your top priority'}</span>
            <select id="leadTopPriority">
              <option value="best_value">${lang === 'ar' ? 'أفضل قيمة مقابل السعر' : 'Best value for money'}</option>
              <option value="location">${lang === 'ar' ? 'الموقع' : 'Location'}</option>
              <option value="payment">${lang === 'ar' ? 'سهولة السداد' : 'Payment flexibility'}</option>
              <option value="delivery">${lang === 'ar' ? 'موعد الاستلام' : 'Delivery timing'}</option>
              <option value="developer">${lang === 'ar' ? 'المطور' : 'Developer'}</option>
              <option value="space">${lang === 'ar' ? 'المساحة' : 'Space'}</option>
            </select>
          </label>

          <label class="full-span">
            <span>${lang === 'ar' ? 'أي متطلبات أخرى؟ (اختياري)' : 'Anything else we should know? (optional)'}</span>
            <textarea id="leadNotes" rows="3" maxlength="800"
              placeholder="${lang === 'ar' ? 'مثال: إطلالة بحر، دور معين، استلام قريب...' : 'Example: sea view, specific floor, near delivery...'}"></textarea>
          </label>
        </div>

        <label class="lead-inline-check">
          <input id="leadOpenAlternatives" type="checkbox" checked>
          <span>${lang === 'ar'
            ? 'أنا منفتح على مشروعات أو مناطق مشابهة إذا كانت أكثر ملاءمة لاحتياجاتي.'
            : 'I am open to similar projects or locations if they are a better fit.'}</span>
        </label>

        <label class="lead-inline-check">
          <input id="leadAllowRecommendations" type="checkbox">
          <span>${lang === 'ar'
            ? 'أوافق على أن ترشح لي JB مشروعات أو وحدات أخرى مناسبة إذا توفرت لاحقًا.'
            : 'I agree that JB may recommend other suitable projects or units if they become available later.'}</span>
        </label>

        <label class="lead-consent consent-row">
          <input id="leadConsent" type="checkbox" required>
          <span>${lang === 'ar'
            ? 'أوافق على استخدام بياناتي للتواصل معي بخصوص هذا البحث العقاري عبر الوسائل التي اخترتها.'
            : 'I agree that JB may use my details to contact me about this property search through the methods I selected.'}</span>
        </label>

        <div class="lead-capture-actions">
          <button class="btn btn-gold" type="submit">
            ${lang === 'ar' ? 'أرسل لي القائمة الكاملة' : 'Send My Full Shortlist'}
          </button>
          <span id="leadCaptureStatus" class="lead-capture-status" aria-live="polite"></span>
        </div>
      </form>
    </div>
  `;

  const whatsappSameCheckbox = document.getElementById('leadWhatsappSame');
  const whatsappInput = document.getElementById('leadWhatsapp');
  if (whatsappSameCheckbox?.checked && whatsappInput) {
    whatsappInput.disabled = true;
    whatsappInput.setAttribute('aria-disabled', 'true');
  }

  if (shouldScroll) {
    result.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
}


async function submitLeadCaptureRpc(payloadV3) {
  try {
    return await supabaseRpc('jb_submit_lead_v3', payloadV3);
  } catch (v3Error) {
    console.warn('jb_submit_lead_v3 failed; using V2 compatibility fallback.', v3Error);

    const {
      p_referral_code,
      p_referred_by_code,
      p_referral_source,
      ...payloadV2
    } = payloadV3;

    try {
      return await supabaseRpc('jb_submit_lead_v2', payloadV2);
    } catch (v2Error) {
      console.error('Lead V2 fallback also failed.', v2Error);
      const error = new Error('LEAD_CAPTURE_UNAVAILABLE');
      error.cause = {v3Error, v2Error};
      throw error;
    }
  }
}

async function submitLeadCapture(event) {
  event.preventDefault();

  const form =
    event.target?.closest?.('#leadCaptureForm') ||
    event.target;

  const status =
    form?.querySelector?.('#leadCaptureStatus') ||
    document.getElementById('leadCaptureStatus');

  const submitButton =
    form?.querySelector?.('button[type="submit"]') ||
    null;

  const name = document.getElementById('leadName')?.value.trim() || '';
  const phone = document.getElementById('leadPhone')?.value.trim() || '';
  const email = document.getElementById('leadEmail')?.value.trim() || '';
  const whatsappSame = Boolean(document.getElementById('leadWhatsappSame')?.checked);
  const whatsappRaw = document.getElementById('leadWhatsapp')?.value.trim() || '';
  const whatsappPhone = whatsappSame ? phone : whatsappRaw;

  const contactMethods = Array.from(
    document.querySelectorAll('.leadContactMethod:checked')
  ).map(input => input.value);

  const consent = Boolean(document.getElementById('leadConsent')?.checked);
  const allowRecommendations =
    Boolean(document.getElementById('leadAllowRecommendations')?.checked);

  const paymentMethod =
    document.getElementById('leadPaymentMethod')?.value || 'flexible';

  const maxDownPaymentRaw =
    document.getElementById('leadMaxDownPayment')?.value || '';

  const installmentYearsRaw =
    document.getElementById('leadInstallmentYears')?.value || '';

  const topPriority =
    document.getElementById('leadTopPriority')?.value || 'best_value';

  const notes = document.getElementById('leadNotes')?.value.trim() || '';
  const openAlternatives =
    Boolean(document.getElementById('leadOpenAlternatives')?.checked);

  const customerPreferences = {
    payment_method: paymentMethod,
    max_down_payment_pct: maxDownPaymentRaw ? Number(maxDownPaymentRaw) : null,
    preferred_installment_years:
      installmentYearsRaw ? Number(installmentYearsRaw) : null,
    top_priority: topPriority,
    open_to_alternatives: openAlternatives,
    notes: notes || null
  };

  if (!name || !phone || !consent || !currentSearchProfile) return;

  if (!contactMethods.length) {
    if (status) {
      status.textContent = lang === 'ar'
        ? 'اختر وسيلة تواصل واحدة على الأقل.'
        : 'Please select at least one contact method.';
    }
    return;
  }

  if (contactMethods.includes('email') && !email) {
    if (status) {
      status.textContent = lang === 'ar'
        ? 'أدخل البريد الإلكتروني أو ألغِ اختيار التواصل عبر البريد.'
        : 'Enter your email or deselect Email as a contact method.';
    }
    return;
  }

  if (contactMethods.includes('whatsapp') && !whatsappPhone) {
    if (status) {
      status.textContent = lang === 'ar'
        ? 'أدخل رقم واتساب أو اختر أنه نفس رقم الهاتف.'
        : 'Enter a WhatsApp number or mark it as the same as your phone.';
    }
    return;
  }

  if (submitButton) submitButton.disabled = true;

  if (status) {
    status.textContent = lang === 'ar'
      ? 'جارٍ حفظ طلبك...'
      : 'Saving your request...';
  }

  try {
    const referralContext = getReferralContext();

    await submitLeadCaptureRpc({
      p_full_name: name,
      p_phone: phone,
      p_whatsapp_phone: whatsappPhone || null,
      p_email: email || null,
      p_preferred_contact_methods: contactMethods,
      p_consent_to_contact: consent,
      p_allow_recommendations: allowRecommendations,
      p_consent_text_version: 'jb-web-growth-loop-v1-2026-08-24',
      p_source: 'website_property_finder',
      p_language: lang,
      p_search_profile: currentSearchProfile,
      p_customer_preferences: customerPreferences,
      p_matched_project_ids:
        currentShortlist.slice(0, 20).map(project => project.id),
      p_page_path: window.location.pathname,
      p_referrer: document.referrer || null,
      p_user_agent: navigator.userAgent || null,
      p_referral_code: getOrCreateShareCode(),
      p_referred_by_code: referralContext.referred_by_code || null,
      p_referral_source: referralContext.referral_source || null
    });

    const fullList = currentShortlist.slice(0, 10);

    if (form) {
      form.innerHTML = `
        <div class="lead-success">
          <strong>${lang === 'ar'
            ? 'تم حفظ بحثك بنجاح.'
            : 'Your search has been saved.'}</strong>
          <span>${lang === 'ar'
            ? 'يمكنك الآن مراجعة القائمة الكاملة، وسيتواصل معك فريق JB حسب وسيلة التواصل التي اخترتها.'
            : 'You can now review the full shortlist. JB can follow up using your preferred contact method.'}</span>
        </div>
      `;
    }

    const resultRoot =
      document.querySelector('#finderResult .finder-result-content');

    const locked =
      document.querySelector('#finderResult .shortlist-locked');

    if (resultRoot && fullList.length) {
      const confirmed = fullList.filter(
        project => Boolean(finderProjectPrice(project).price)
      );

      const potential = fullList.filter(
        project => !finderProjectPrice(project).price
      );

      resultRoot.querySelectorAll('.match-group').forEach(group => group.remove());

      const groupsHtml = `
        ${
          confirmed.length
            ? `
              <section class="match-group">
                <div class="match-group-head">
                  <strong>${lang === 'ar' ? 'أفضل التطابقات' : 'Best Matches'}</strong>
                  <span>${lang === 'ar'
                    ? 'السعر معروف ومتوافق مع معايير البحث المختارة'
                    : 'Known price and budget-aligned'}</span>
                </div>

                <div class="finder-shortlist rich-finder-list">
                  ${confirmed.map(shortlistItem).join('')}
                </div>
              </section>
            `
            : ''
        }

        ${
          potential.length
            ? `
              <section class="match-group potential-group">
                <div class="match-group-head">
                  <strong>${lang === 'ar'
                    ? 'خيارات محتملة — تحتاج تحقق السعر'
                    : 'Potential Matches — Price Verification Needed'}</strong>

                  <span>${lang === 'ar'
                    ? 'الموقع ونوع الوحدة مناسبان لكن السعر الحالي يحتاج تحققًا إضافيًا'
                    : 'Location and unit type fit, but current price still needs verification'}</span>
                </div>

                <div class="finder-shortlist rich-finder-list">
                  ${potential.map(shortlistItem).join('')}
                </div>
              </section>
            `
            : ''
        }
      `;

      const resultCopy = resultRoot.querySelector('.finder-result-copy');
      const insertPoint = locked || form;

      if (insertPoint) {
        insertPoint.insertAdjacentHTML('beforebegin', groupsHtml);
      } else if (resultCopy) {
        resultCopy.insertAdjacentHTML('afterend', groupsHtml);
      } else {
        resultRoot.insertAdjacentHTML('beforeend', groupsHtml);
      }
    }

    if (locked) locked.remove();

  } catch (error) {
    console.error('Lead capture failed:', error);

    if (status) {
      status.textContent = lang === 'ar'
        ? 'تعذر حفظ بيانات التواصل الآن. حاول مرة أخرى بعد قليل.'
        : 'We could not save your contact details right now. Please try again.';
    }

    if (submitButton) submitButton.disabled = false;
  }
}

let finderBusy = false;

async function runFinder(event) {
  if (event) event.preventDefault();
  if (finderBusy) return;

  const result = document.getElementById('finderResult');
  const button = document.getElementById('finderSubmit');

  try {
    finderBusy = true;
    if (button) {
      button.disabled = true;
      button.dataset.originalText = button.textContent;
      button.textContent = lang === 'ar' ? 'جارٍ إعداد النتائج...' : 'Building matches...';
    }

    await renderFinderPreview(getFinderValues(), true);
  } catch (error) {
    console.error('Finder failed:', error);

    if (result) {
      result.hidden = false;
      result.innerHTML = `
        <div class="finder-result-content">
          <div class="data-error">
            <strong>${lang === 'ar' ? 'تعذر تشغيل الباحث العقاري.' : 'The property finder could not run.'}</strong>
            <span>${lang === 'ar'
              ? 'أعد تحميل الصفحة وحاول مرة أخرى. إذا استمرت المشكلة سنراجع اتصال البيانات.'
              : 'Refresh the page and try again. If the issue continues, we will check the data connection.'}</span>
          </div>
        </div>
      `;
      result.scrollIntoView({behavior:'smooth', block:'nearest'});
    }
  } finally {
    finderBusy = false;
    if (button) {
      button.disabled = false;
      button.textContent =
        button.dataset.originalText ||
        (lang === 'ar' ? 'اعرض أفضل الخيارات المناسبة لي' : 'Find My Best Matches');
    }
  }
}

function bindFinderControls() {
  const form = document.getElementById('finderForm');
  const button = document.getElementById('finderSubmit');

  if (form && !form.dataset.finderBound) {
    form.dataset.finderBound = 'true';
    form.addEventListener('submit', runFinder);
  }

  if (button && !button.dataset.finderClickBound) {
    button.dataset.finderClickBound = 'true';
    button.addEventListener('click', runFinder);
  }
}

bindFinderControls();

document.addEventListener('submit', event => {
  if (event.target?.id === 'leadCaptureForm') {
    submitLeadCapture(event);
  }
});

document.addEventListener('click', event => {
  const shareButton = event.target?.closest?.('[data-share-channel]');
  if (!shareButton) return;

  const channel = shareButton.dataset.shareChannel || 'copy';

  shareCurrentSearch(channel).catch(error => {
    console.warn('Share action failed:', error);
  });
});

document.addEventListener('change', event => {
  if (event.target?.id === 'leadWhatsappSame') {
    const whatsappInput = document.getElementById('leadWhatsapp');
    if (!whatsappInput) return;

    if (event.target.checked) {
      whatsappInput.value = '';
      whatsappInput.disabled = true;
      whatsappInput.setAttribute('aria-disabled', 'true');
    } else {
      whatsappInput.disabled = false;
      whatsappInput.removeAttribute('aria-disabled');
      whatsappInput.focus();
    }
  }
});

/* =========================================================
   INITIALIZE
   ========================================================= */

const yearElement = document.getElementById('year');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

captureReferralContext();
getOrCreateShareCode();

applyLang();
bindFinderControls();

document.addEventListener('DOMContentLoaded', () => {
  bindFinderControls();
  renderReturnSearchPrompt();
});

loadMarketData().then(() => {
  renderReturnSearchPrompt();
  renderRecentProjects();
  openSharedProjectFromUrl();
});
