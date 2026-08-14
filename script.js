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
    'finder.button':'Build My Shortlist',
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
    'finder.button':'أنشئ قائمتي المختصرة',
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


let lang = 'en';

let developers = [];
let projects = [];
let filteredDevelopers = [];
let comparison = [];

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

async function supabasePost(path, payload) {
  const response = await fetch(`${SUPABASE_REST}/${path}`, {
    method: 'POST',
    headers: {
      ...apiHeaders(),
      'Content-Type': 'application/json',
      Prefer: 'return=representation'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `Supabase POST failed: ${response.status}`);
  }

  const data = await response.json();
  return Array.isArray(data) ? data[0] : data;
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

  try {
    return new Intl.NumberFormat(lang === 'ar' ? 'ar-EG' : 'en-EG', {
      style: 'currency',
      currency: currency || 'EGP',
      maximumFractionDigits: 0
    }).format(Number(value));
  } catch {
    return `${Number(value).toLocaleString()} ${currency || 'EGP'}`;
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

    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  document
    .querySelectorAll('[data-i18n-placeholder]')
    .forEach(element => {
      const key = element.dataset.i18nPlaceholder;

      if (translations[lang][key]) {
        element.placeholder = translations[lang][key];
      }
    });

  const toggle = document.getElementById('langToggle');

  if (toggle) {
    toggle.textContent = lang === 'en' ? 'العربية' : 'English';
  }

  renderProjects();
  renderDevelopers(filteredDevelopers.length ? filteredDevelopers : developers);
  renderComparison();
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
      Important:
      We intentionally load the three tables separately instead of using
      nested PostgREST relationships. This avoids failures caused by stale
      or unavailable relationship metadata in the REST schema cache.
    */

    const [developerData, projectData, locationData] = await Promise.all([
      supabaseGet(
        'developers?select=id,slug,name_ar,name_en,short_description_ar,short_description_en,description_ar,description_en,website_url,logo_url,founded_year,developer_type,verification_status,last_verified_at&is_published=eq.true&order=name_en.asc'
      ),

      supabaseGet(
        'projects?select=id,slug,name_ar,name_en,project_type,description_ar,description_en,overview_ar,overview_en,starting_price,currency,delivery_date,construction_status,handover_status,website_url,cover_image_url,verification_status,last_verified_at,developer_id,location_id&is_published=eq.true&order=name_en.asc'
      ),

      supabaseGet(
        'locations?select=id,city,area'
      )
    ]);

    developers = Array.isArray(developerData) ? developerData : [];

    const developerMap = new Map(
      developers.map(developer => [developer.id, developer])
    );

    const locationMap = new Map(
      (Array.isArray(locationData) ? locationData : [])
        .map(location => [location.id, location])
    );

    projects = (Array.isArray(projectData) ? projectData : []).map(project => ({
      ...project,
      developers: developerMap.get(project.developer_id) || null,
      locations: locationMap.get(project.location_id) || null
    }));

    filteredDevelopers = [...developers];

    renderDevelopers(filteredDevelopers);
    renderProjects();
    renderComparison();

  } catch (error) {
    console.error('JB market database connection failed:', error);

    const projectsGrid = document.getElementById('projectsGrid');
    const developerRow = document.getElementById('developerRow');
    const projectCount = document.getElementById('projectCount');
    const developerCount = document.getElementById('developerCount');

    if (projectCount) {
      projectCount.textContent = lang === 'ar'
        ? 'تعذر الاتصال بقاعدة البيانات'
        : 'Database connection error';
    }

    if (developerCount) {
      developerCount.textContent = lang === 'ar'
        ? 'تعذر الاتصال بقاعدة البيانات'
        : 'Database connection error';
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

function showDeveloperProfile(id, pushHistory = true) {
  const developer = developers.find(item => item.id === id);
  if (!developer) return;

  const relatedProjects = projects.filter(project => project.developer_id === id);

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
        <span>${lang === 'ar' ? 'المشروعات المنشورة' : 'Published projects'}</span>
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
          : `<p>${lang === 'ar' ? 'لا توجد مشروعات منشورة حاليًا.' : 'No published projects yet.'}</p>`
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
  `, { type: 'developer', id }, pushHistory);
}

function showProjectProfile(id, parentDeveloperId = null, pushHistory = true) {
  const project = projects.find(item => item.id === id);
  if (!project) return;

  const developer = developers.find(item => item.id === project.developer_id);
  const description =
    lang === 'ar'
      ? (project.description_ar || project.overview_ar || project.description_en || project.overview_en || '')
      : (project.description_en || project.overview_en || project.description_ar || project.overview_ar || '');

  const backDeveloperId = parentDeveloperId || project.developer_id;

  openModal(`
    <div class="profile-nav-row">
      <button class="profile-back" type="button" data-modal-back>
        ${lang === 'ar'
          ? `→ العودة إلى ${escapeHtml(developer ? developerName(developer) : 'المطور')}`
          : `← Back to ${escapeHtml(developer ? developerName(developer) : 'developer')}`}
      </button>
      <span class="profile-breadcrumb">${escapeHtml(projectDeveloper(project))} / ${escapeHtml(projectName(project))}</span>
    </div>

    <div class="profile-project-hero">
      ${projectVisual(project)}
    </div>

    <div class="profile-heading">
      <span class="eyebrow dark">${lang === 'ar' ? 'ملف المشروع' : 'PROJECT PROFILE'}</span>
      <h2 id="profileModalTitle">${escapeHtml(projectName(project))}</h2>
      <button class="profile-developer-button" type="button" data-developer-profile="${project.developer_id}">
        ${developer?.logo_url ? `<img src="${escapeHtml(developer.logo_url)}" alt="" loading="lazy">` : ''}
        <span>${escapeHtml(projectDeveloper(project))}</span>
      </button>
      <p>${escapeHtml(description || (
        lang === 'ar'
          ? 'مشروع منشور ضمن قاعدة بيانات JB مع بيانات المصدر والتحقق المتاحة.'
          : 'Published project in the JB Market Database with available source and verification data.'
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
      </div>
      <div>
        <span>${lang === 'ar' ? 'التسليم' : 'Delivery'}</span>
        <strong>${escapeHtml(availabilityDelivery(project))}</strong>
      </div>
      <div>
        <span>${lang === 'ar' ? 'حالة الإنشاء' : 'Construction'}</span>
        <strong>${escapeHtml(project.construction_status || (lang === 'ar' ? 'قيد التحقق' : 'Under verification'))}</strong>
      </div>
      <div>
        <span>${lang === 'ar' ? 'حالة التحقق' : 'Verification'}</span>
        <strong>${escapeHtml(project.verification_status || '—')}</strong>
      </div>
    </div>

    <div class="profile-actions">
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
  `, { type: 'project', id, parentDeveloperId: backDeveloperId }, pushHistory);
}

document.addEventListener('click', event => {
  const backButton = event.target.closest('[data-modal-back]');
  const developerButton = event.target.closest('[data-developer-profile]');
  const projectButton = event.target.closest('[data-project-profile]');
  const compareButton = event.target.closest('[data-project-compare]');
  const consultButton = event.target.closest('[data-project-consult]');

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

function toggleComparison(id) {
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
      project => escapeHtml(formatMoney(project.starting_price, project.currency))
    )}

    ${row(
      'Delivery',
      'التسليم',
      project => formatDate(project.delivery_date)
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

function shortlistProjects(values) {
  const locationMatches = projects.filter(project => {
    if (!values.location) return true;
    const location = `${project.locations?.city || ''} ${project.locations?.area || ''}`.toLowerCase();
    return location.includes(values.location.toLowerCase());
  });

  return locationMatches;
}

function shortlistItem(project) {
  return `
    <button class="finder-shortlist-item" type="button" data-project-profile="${project.id}">
      <span class="finder-shortlist-thumb">
        ${
          project.cover_image_url
            ? `<img src="${escapeHtml(project.cover_image_url)}" alt="" loading="lazy">`
            : `<b>${projectInitials(project)}</b>`
        }
      </span>
      <span class="finder-shortlist-copy">
        <strong>${escapeHtml(projectName(project))}</strong>
        <small>${escapeHtml(projectDeveloper(project))} · ${escapeHtml(projectLocation(project))}</small>
      </span>
    </button>
  `;
}

function renderFinderPreview(values) {
  const result = document.getElementById('finderResult');
  if (!result) return;

  const readiness = calculateReadiness(values);
  currentShortlist = shortlistProjects(values);
  currentSearchProfile = {...values, readiness};

  const preview = currentShortlist.slice(0, 3);

  result.hidden = false;
  result.innerHTML = `
    <div class="finder-result-content">
      <div class="finder-result-head">
        <div>
          <span class="finder-result-label">
            ${lang === 'ar' ? 'نتيجة أولية من JB' : 'YOUR JB PREVIEW'}
          </span>
          <h3>
            ${lang === 'ar'
              ? 'هذه بداية قائمتك المختصرة'
              : 'Here is the start of your shortlist'}
          </h3>
        </div>
        <div class="readiness-score">
          <strong>${readiness}%</strong>
          <span>${lang === 'ar' ? 'اكتمال ملف البحث' : 'Search profile'}</span>
        </div>
      </div>

      <p>
        ${lang === 'ar'
          ? 'نعرض لك نتائج أولية بدون طلب بيانات شخصية. للحصول على القائمة الكاملة وحفظ متطلباتك ومتابعة مستشار JB، يمكنك ترك وسيلة تواصل.'
          : 'We show initial results without asking for personal details. To receive the full shortlist, save your requirements and optionally speak with a JB advisor, leave your preferred contact details.'}
      </p>

      <div class="finder-shortlist">
        ${
          preview.length
            ? preview.map(shortlistItem).join('')
            : `<div class="data-empty">${
                lang === 'ar'
                  ? 'لا توجد نتائج منشورة مطابقة لهذا الموقع حاليًا.'
                  : 'No published projects currently match this location.'
              }</div>`
        }
      </div>

      ${
        currentShortlist.length > 3
          ? `<div class="shortlist-locked">
              <strong>${lang === 'ar'
                ? `هناك ${currentShortlist.length - 3} نتيجة إضافية`
                : `${currentShortlist.length - 3} more results available`}</strong>
              <span>${lang === 'ar'
                ? 'أدخل بيانات التواصل للحصول على القائمة الكاملة وحفظ ملف البحث.'
                : 'Add your contact details to unlock the full shortlist and save this search.'}</span>
            </div>`
          : ''
      }

// JB REAL ESTATE V2 - Lead Capture enabled
      <form id="leadCaptureForm" class="lead-capture-form">
        <div class="lead-capture-heading">
          <strong>${lang === 'ar' ? 'احصل على القائمة الكاملة' : 'Get the full shortlist'}</strong>
          <span>${lang === 'ar'
            ? 'لن نطلب منك إنشاء حساب الآن.'
            : 'No account creation required.'}</span>
        </div>

        <div class="lead-capture-grid">
          <label>
            <span>${lang === 'ar' ? 'الاسم' : 'Name'}</span>
            <input id="leadName" name="name" autocomplete="name" required
                   placeholder="${lang === 'ar' ? 'اسمك' : 'Your name'}">
          </label>

          <label>
            <span>${lang === 'ar' ? 'الهاتف / WhatsApp' : 'Phone / WhatsApp'}</span>
            <input id="leadPhone" name="phone" type="tel" autocomplete="tel" required
                   placeholder="${lang === 'ar' ? '01xxxxxxxxx' : '+20 ...'}">
          </label>

          <label>
            <span>${lang === 'ar' ? 'البريد الإلكتروني (اختياري)' : 'Email (optional)'}</span>
            <input id="leadEmail" name="email" type="email" autocomplete="email"
                   placeholder="name@example.com">
          </label>

          <label>
            <span>${lang === 'ar' ? 'أفضل وسيلة تواصل' : 'Preferred contact'}</span>
            <select id="leadContactPreference" required>
              <option value="whatsapp">${lang === 'ar' ? 'WhatsApp' : 'WhatsApp'}</option>
              <option value="phone">${lang === 'ar' ? 'مكالمة هاتفية' : 'Phone call'}</option>
              <option value="email">${lang === 'ar' ? 'البريد الإلكتروني' : 'Email'}</option>
            </select>
          </label>
        </div>

        <label class="consent-row">
          <input id="leadConsent" type="checkbox" required>
          <span>${lang === 'ar'
            ? 'أوافق على أن تستخدم JB بياناتي ومتطلبات البحث للتواصل معي بخصوص خيارات عقارية مناسبة. يمكنني طلب إيقاف التواصل في أي وقت.'
            : 'I agree that JB may use my contact details and search requirements to follow up about relevant property options. I can opt out at any time.'}</span>
        </label>

        <button class="btn btn-gold" type="submit">
          ${lang === 'ar' ? 'احفظ بحثي واعرض القائمة الكاملة' : 'Save my search & show full shortlist'}
        </button>

        <p id="leadCaptureStatus" class="lead-capture-status" aria-live="polite"></p>
      </form>
    </div>
  `;

  result.scrollIntoView({behavior:'smooth', block:'nearest'});
}

async function submitLeadCapture(event) {
  event.preventDefault();

  const status = document.getElementById('leadCaptureStatus');
  const submitButton = event.currentTarget.querySelector('button[type="submit"]');
  const name = document.getElementById('leadName')?.value.trim() || '';
  const phone = document.getElementById('leadPhone')?.value.trim() || '';
  const email = document.getElementById('leadEmail')?.value.trim() || '';
  const preferred = document.getElementById('leadContactPreference')?.value || 'whatsapp';
  const consent = Boolean(document.getElementById('leadConsent')?.checked);

  if (!name || !phone || !consent || !currentSearchProfile) return;

  if (submitButton) submitButton.disabled = true;
  if (status) {
    status.textContent = lang === 'ar' ? 'جارٍ حفظ طلبك...' : 'Saving your request...';
  }

  try {
    await supabasePost('lead_capture_submissions', {
      full_name: name,
      phone,
      email: email || null,
      preferred_contact: preferred,
      consent_to_contact: consent,
      consent_text_version: 'jb-web-v2-2026-08-14',
      source: 'website_property_finder',
      language: lang,
      search_profile: currentSearchProfile,
      matched_project_ids: currentShortlist.slice(0, 20).map(project => project.id),
      page_path: window.location.pathname,
      referrer: document.referrer || null,
      user_agent: navigator.userAgent || null
    });

    const fullList = currentShortlist.slice(0, 10);

    event.currentTarget.innerHTML = `
      <div class="lead-success">
        <strong>${lang === 'ar' ? 'تم حفظ بحثك بنجاح.' : 'Your search has been saved.'}</strong>
        <span>${lang === 'ar'
          ? 'يمكنك الآن مراجعة القائمة الكاملة، وسيتواصل معك فريق JB حسب اختيارك.'
          : 'You can now review the full shortlist. JB can follow up using your preferred channel.'}</span>
      </div>
    `;

    const shortlistContainer = document.querySelector('#finderResult .finder-shortlist');
    const locked = document.querySelector('#finderResult .shortlist-locked');

    if (shortlistContainer) {
      shortlistContainer.innerHTML = fullList.length
        ? fullList.map(shortlistItem).join('')
        : shortlistContainer.innerHTML;
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

if (finderForm) {
  finderForm.addEventListener('submit', event => {
    event.preventDefault();
    renderFinderPreview(getFinderValues());
  });
}

document.addEventListener('submit', event => {
  if (event.target?.id === 'leadCaptureForm') {
    submitLeadCapture(event);
  }
});

/* =========================================================
   INITIALIZE
   ========================================================= */

const yearElement = document.getElementById('year');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

applyLang();
loadMarketData();
