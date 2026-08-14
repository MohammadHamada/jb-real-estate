/* =========================================================
   JB REAL ESTATE
   Dynamic Website V1
   Supabase REST + Finder V2 + Developers + Projects + Compare
   ========================================================= */

const SUPABASE_URL = "https://cmjejijkdztlvhqzcjrg.supabase.co";
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
      Load developers, projects and locations separately.
      This avoids problems with nested Supabase REST relationships.
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


    /* ===============================
       Store developers
       =============================== */

    developers =
      Array.isArray(developerData)
        ? developerData
        : [];


    /* ===============================
       Build lookup maps
       =============================== */

    const developerMap = new Map(
      developers.map(developer => [
        developer.id,
        developer
      ])
    );


    const locationMap = new Map(
      (
        Array.isArray(locationData)
          ? locationData
          : []
      ).map(location => [
        location.id,
        location
      ])
    );


    /* ===============================
       Attach developer + location
       information to every project
       =============================== */

    projects =
      (
        Array.isArray(projectData)
          ? projectData
          : []
      ).map(project => ({

        ...project,

        developers:
          developerMap.get(
            project.developer_id
          ) || null,

        locations:
          locationMap.get(
            project.location_id
          ) || null

      }));


    /* ===============================
       Developer search base
       =============================== */

    filteredDevelopers = [
      ...developers
    ];


    /* ===============================
       Render website
       =============================== */

    renderDevelopers(
      filteredDevelopers
    );

    renderProjects();

    renderComparison();


    console.log(
      `JB Market Database loaded: ${developers.length} developers, ${projects.length} projects`
    );


  } catch (error) {

    console.error(
      'JB market database connection failed:',
      error
    );


    const projectsGrid =
      document.getElementById(
        'projectsGrid'
      );

    const developerRow =
      document.getElementById(
        'developerRow'
      );

    const projectCount =
      document.getElementById(
        'projectCount'
      );

    const developerCount =
      document.getElementById(
        'developerCount'
      );


    /* ===============================
       Project error
       =============================== */

    if (projectCount) {

      projectCount.textContent =
        lang === 'ar'
          ? 'تعذر الاتصال بقاعدة البيانات'
          : 'Database connection error';

    }


    if (projectsGrid) {

      projectsGrid.innerHTML = `

        <div class="data-error">

          <strong>
            ${
              lang === 'ar'
                ? 'تعذر تحميل المشروعات.'
                : 'Projects could not be loaded.'
            }
          </strong>

          <br>

          <small>
            ${escapeHtml(
              error.message ||
              String(error)
            )}
          </small>

        </div>

      `;

    }


    /* ===============================
       Developer error
       =============================== */

    if (developerCount) {

      developerCount.textContent =
        lang === 'ar'
          ? 'تعذر الاتصال بقاعدة البيانات'
          : 'Database connection error';

    }


    if (developerRow) {

      developerRow.innerHTML = `

        <div class="data-error">

          <strong>
            ${
              lang === 'ar'
                ? 'تعذر تحميل دليل المطورين.'
                : 'The developer directory could not be loaded.'
            }
          </strong>

          <br>

          <small>
            ${escapeHtml(
              error.message ||
              String(error)
            )}
          </small>

        </div>

      `;

    }

  }
}


/* =========================================================
   PROJECTS
   ========================================================= */

function projectCard(project) {
  const name = escapeHtml(projectName(project));
  const developer = escapeHtml(projectDeveloper(project));
  const location = escapeHtml(projectLocation(project));
  const type = escapeHtml(text(project.project_type));
  const price = escapeHtml(formatMoney(project.starting_price, project.currency));
  const selected = comparison.some(item => item.id === project.id);

  return `
    <article class="project-card dynamic-project-card">

      <div class="project-image dynamic-project-image"
           ${project.cover_image_url
             ? `style="background-image:linear-gradient(rgba(7,19,33,.18),rgba(7,19,33,.55)),url('${escapeHtml(project.cover_image_url)}')"`
             : ''}>
      </div>

      <div class="card-body">

        <div class="project-card-topline">
          <span class="tag">
            ${project.verification_status === 'verified'
              ? (lang === 'ar' ? 'موثّق' : 'VERIFIED')
              : (lang === 'ar' ? 'بيانات السوق' : 'MARKET DATA')}
          </span>

          <span class="project-location">
            ${location}
          </span>
        </div>

        <h3>${name}</h3>

        <p class="project-developer">${developer}</p>

        <div class="project-meta">
          <span>${type}</span>
          <span>${price}</span>
        </div>

        <div class="project-card-actions">

          <button
            class="text-button"
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
   PROFILES
   ========================================================= */

function openModal(html) {
  const modal = document.getElementById('profileModal');
  const content = document.getElementById('profileModalContent');

  if (!modal || !content) return;

  content.innerHTML = html;
  modal.hidden = false;
  document.body.classList.add('modal-open');
}

function closeModal() {
  const modal = document.getElementById('profileModal');

  if (!modal) return;

  modal.hidden = true;
  document.body.classList.remove('modal-open');
}

document.getElementById('profileModalClose')?.addEventListener('click', closeModal);

document.querySelector('[data-close-modal]')?.addEventListener('click', closeModal);

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeModal();
});

function showDeveloperProfile(id) {
  const developer = developers.find(item => item.id === id);

  if (!developer) return;

  const relatedProjects = projects.filter(project => project.developer_id === id);

  const description =
    lang === 'ar'
      ? (developer.description_ar || developer.short_description_ar || developer.description_en || '')
      : (developer.description_en || developer.short_description_en || developer.description_ar || '');

  openModal(`
    <div class="profile-heading">

      <span class="eyebrow dark">
        ${lang === 'ar' ? 'ملف المطور' : 'DEVELOPER PROFILE'}
      </span>

      <h2 id="profileModalTitle">
        ${escapeHtml(developerName(developer))}
      </h2>

      <p>
        ${escapeHtml(description || (
          lang === 'ar'
            ? 'ملف مطور موثق ضمن قاعدة بيانات JB.'
            : 'Verified developer profile in the JB Market Database.'
        ))}
      </p>

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

    <h3 class="profile-subtitle">
      ${lang === 'ar' ? 'مشروعات المطور' : 'Developer projects'}
    </h3>

    <div class="profile-project-list">
      ${
        relatedProjects.length
          ? relatedProjects.map(project => `
              <button
                class="profile-project-link"
                type="button"
                data-project-profile="${project.id}">
                <span>${escapeHtml(projectName(project))}</span>
                <small>${escapeHtml(projectLocation(project))}</small>
              </button>
            `).join('')
          : `<p>${lang === 'ar' ? 'لا توجد مشروعات منشورة حاليًا.' : 'No published projects yet.'}</p>`
      }
    </div>

    ${
      developer.website_url
        ? `
          <a
            class="btn btn-navy profile-source-link"
            href="${escapeHtml(developer.website_url)}"
            target="_blank"
            rel="noopener">
            ${lang === 'ar' ? 'الموقع الرسمي للمطور' : 'Official developer website'}
          </a>
        `
        : ''
    }
  `);
}

function showProjectProfile(id) {
  const project = projects.find(item => item.id === id);

  if (!project) return;

  const description =
    lang === 'ar'
      ? (project.description_ar || project.overview_ar || project.description_en || project.overview_en || '')
      : (project.description_en || project.overview_en || project.description_ar || project.overview_ar || '');

  openModal(`
    <div class="profile-heading">

      <span class="eyebrow dark">
        ${lang === 'ar' ? 'ملف المشروع' : 'PROJECT PROFILE'}
      </span>

      <h2 id="profileModalTitle">
        ${escapeHtml(projectName(project))}
      </h2>

      <p class="profile-project-developer">
        ${escapeHtml(projectDeveloper(project))}
      </p>

      <p>
        ${escapeHtml(description || (
          lang === 'ar'
            ? 'مشروع منشور ضمن قاعدة بيانات JB مع بيانات المصدر والتحقق المتاحة.'
            : 'Published project in the JB Market Database with available source and verification data.'
        ))}
      </p>

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
        <span>${lang === 'ar' ? 'السعر المبدئي' : 'Starting price'}</span>
        <strong>${escapeHtml(formatMoney(project.starting_price, project.currency))}</strong>
      </div>

      <div>
        <span>${lang === 'ar' ? 'التسليم' : 'Delivery'}</span>
        <strong>${formatDate(project.delivery_date)}</strong>
      </div>

      <div>
        <span>${lang === 'ar' ? 'حالة الإنشاء' : 'Construction'}</span>
        <strong>${escapeHtml(text(project.construction_status))}</strong>
      </div>

      <div>
        <span>${lang === 'ar' ? 'حالة التحقق' : 'Verification'}</span>
        <strong>${escapeHtml(project.verification_status || '—')}</strong>
      </div>

    </div>

    <div class="profile-actions">

      <button
        class="btn btn-gold"
        type="button"
        data-project-compare="${project.id}">
        ${comparison.some(item => item.id === project.id)
          ? (lang === 'ar' ? '✓ موجود في المقارنة' : '✓ In comparison')
          : (lang === 'ar' ? 'أضف للمقارنة' : 'Add to comparison')}
      </button>

      ${
        project.website_url
          ? `
            <a
              class="btn btn-navy"
              href="${escapeHtml(project.website_url)}"
              target="_blank"
              rel="noopener">
              ${lang === 'ar' ? 'المصدر الرسمي' : 'Official source'}
            </a>
          `
          : ''
      }

    </div>
  `);
}

document.addEventListener('click', event => {
  const developerButton = event.target.closest('[data-developer-profile]');
  const projectButton = event.target.closest('[data-project-profile]');
  const compareButton = event.target.closest('[data-project-compare]');

  if (developerButton) {
    showDeveloperProfile(developerButton.dataset.developerProfile);
  }

  if (projectButton) {
    showProjectProfile(projectButton.dataset.projectProfile);
  }

  if (compareButton) {
    toggleComparison(compareButton.dataset.projectCompare);
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
   PROPERTY FINDER V2
   Preliminary shortlist from live market data
   ========================================================= */

const finderForm = document.getElementById('finderForm');

if (finderForm) {
  finderForm.addEventListener('submit', event => {
    event.preventDefault();

    const values = {
      location: document.getElementById('location')?.value || '',
      budget: document.getElementById('budget')?.value || '',
      type: document.getElementById('type')?.value || '',
      purpose: document.getElementById('purpose')?.value || '',
      delivery: document.getElementById('delivery')?.value || '',
      payment: document.getElementById('payment')?.value || '',
      bedrooms: document.getElementById('bedrooms')?.value || '',
      timeline: document.getElementById('timeline')?.value || ''
    };

    const result = document.getElementById('finderResult');

    if (!result) return;

    const filled = Object.values(values).filter(Boolean).length;

    let readiness = Math.round((filled / 8) * 60);

    if (values.timeline === 'now') readiness += 25;
    else if (values.timeline === '3months') readiness += 20;
    else if (values.timeline === '6months') readiness += 12;
    else if (values.timeline === 'later') readiness += 5;

    if (values.budget) readiness += 10;
    if (values.payment) readiness += 5;

    readiness = Math.min(readiness, 100);

    const locationMatches = projects.filter(project => {
      if (!values.location) return true;

      const location = `${project.locations?.city || ''} ${project.locations?.area || ''}`
        .toLowerCase();

      return location.includes(values.location.toLowerCase());
    });

    const shortlist = locationMatches.slice(0, 5);

    result.hidden = false;

    result.innerHTML = `
      <div class="finder-result-content">

        <span class="finder-result-label">
          ${lang === 'ar' ? 'ملف البحث لدى JB' : 'YOUR JB SEARCH PROFILE'}
        </span>

        <h3>
          ${lang === 'ar'
            ? 'تم إنشاء قائمة أولية من قاعدة البيانات الحية'
            : 'Preliminary shortlist created from the live database'}
        </h3>

        <div class="readiness-score">
          <strong>${readiness}%</strong>
          <span>${lang === 'ar' ? 'جاهزية ملف الشراء' : 'Profile readiness'}</span>
        </div>

        <p>
          ${lang === 'ar'
            ? `تم تسجيل ${filled} من أصل 8 تفضيلات. نتائج هذه المرحلة تعتمد على بيانات الموقع المنشورة حاليًا، وسيتطور محرك المطابقة عند استكمال بيانات الأسعار وأنواع الوحدات.`
            : `We captured ${filled} of 8 preferences. These results use the market fields currently published; matching will become more precise as price and unit-type coverage expands.`}
        </p>

        <div class="finder-shortlist">

          ${
            shortlist.length
              ? shortlist.map(project => `
                  <button
                    class="finder-shortlist-item"
                    type="button"
                    data-project-profile="${project.id}">

                    <strong>${escapeHtml(projectName(project))}</strong>

                    <span>
                      ${escapeHtml(projectDeveloper(project))}
                      ·
                      ${escapeHtml(projectLocation(project))}
                    </span>

                  </button>
                `).join('')
              : `
                <div class="data-empty">
                  ${lang === 'ar'
                    ? 'لا توجد نتائج منشورة مطابقة لهذا الموقع حاليًا.'
                    : 'No published projects currently match this location.'}
                </div>
              `
          }

        </div>

        <p class="finder-result-next">
          <strong>${lang === 'ar' ? 'الخطوة التالية:' : 'Next step:'}</strong>
          ${lang === 'ar'
            ? 'افتح المشروعات المناسبة أو أضف حتى 3 منها للمقارنة.'
            : 'Open suitable projects or add up to 3 of them to comparison.'}
        </p>

      </div>
    `;

    result.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'
    });
  });
}


/* =========================================================
   INITIALIZE
   ========================================================= */

const yearElement = document.getElementById('year');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

applyLang();
loadMarketData();
