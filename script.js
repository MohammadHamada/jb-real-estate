/* =========================================================
   JB REAL ESTATE
   Main JavaScript
   Property Finder V2 + Bilingual System
   ========================================================= */


/* =========================================================
   TRANSLATIONS
   ========================================================= */

const translations = {

  en: {

    /* Navigation */
    'nav.properties': 'Properties',
    'nav.projects': 'Projects',
    'nav.developers': 'Developers',
    'nav.compare': 'Compare',
    'nav.investment': 'Investment',
    'nav.about': 'About JB',
    'nav.cta': 'Find My Property',

    /* Hero */
    'hero.eyebrow': 'JB REAL ESTATE GROUP',
    'hero.title': 'Find. Compare. Decide. Invest.',
    'hero.text':
      'Explore opportunities across Egypt, compare developers and projects, and get personalized guidance before you buy.',
    'hero.primary': 'Find My Property',
    'hero.secondary': 'Compare Projects',
    'hero.note': 'One market. Multiple options. One trusted partner.',

    /* Property Finder */
    'finder.eyebrow': 'PROPERTY FINDER',
    'finder.title': 'Tell us what you are looking for.',
    'finder.text':
      'Start with your priorities. JB will use them to build a focused shortlist.',
    'finder.button': 'Build My Shortlist',

    /* Finder Fields */
    'fields.location': 'Location',
    'fields.budget': 'Budget',
    'fields.type': 'Property type',
    'fields.purpose': 'Purpose',
    'fields.delivery': 'Delivery',
    'fields.payment': 'Payment preference',
    'fields.bedrooms': 'Bedrooms',
    'fields.timeline': 'Buying timeline',

    /* Location Options */
    'options.anyLocation': 'Any location',
    'options.northCoast': 'North Coast',
    'options.newCairo': 'New Cairo',
    'options.newCapital': 'New Capital',
    'options.ainSokhna': 'Ain Sokhna',
    'options.sheikhZayed': 'Sheikh Zayed',

    /* Budget Options */
    'options.anyBudget': 'Any budget',
    'options.under5': 'Under EGP 5M',
    'options.5to10': 'EGP 5M–10M',
    'options.10to20': 'EGP 10M–20M',
    'options.20plus': 'EGP 20M+',

    /* Property Type Options */
    'options.anyType': 'Any type',
    'options.apartment': 'Apartment',
    'options.chalet': 'Chalet',
    'options.villa': 'Villa',
    'options.twin': 'Twin House',
    'options.commercial': 'Commercial',

    /* Purpose Options */
    'options.anyPurpose': 'Any purpose',
    'options.investment': 'Investment',
    'options.personal': 'Personal use',
    'options.both': 'Both',

    /* Delivery Options */
    'options.anyDelivery': 'Any delivery',
    'options.ready': 'Ready',
    'options.1to3': '1–3 years',
    'options.3plus': '3+ years',

    /* Payment Options */
    'options.anyPayment': 'No preference',
    'options.lowDown': 'Lower down payment',
    'options.longPlan': 'Longer payment plan',
    'options.cash': 'Cash / strong upfront payment',

    /* Bedroom Options */
    'options.anyBedrooms': 'No preference',
    'options.1to2': '1–2 bedrooms',
    'options.3bed': '3 bedrooms',
    'options.4plus': '4+ bedrooms',

    /* Timeline Options */
    'options.anyTimeline': 'Just exploring',
    'options.now': 'Ready to buy now',
    'options.3months': 'Within 3 months',
    'options.6months': 'Within 6 months',
    'options.later': '6+ months',

    /* Why JB */
    'value.eyebrow': 'WHY JB',
    'value.title':
      'We are not here to show you one property. We help you understand your options.',
    'value.text':
      'JB is being built as a real estate intelligence, advisory and brokerage platform: discover the market, compare alternatives, make a better-informed decision, then complete your purchase with JB.',
    'value.link': 'See how comparison works →',

    'value.card1.title': 'Multiple Options',
    'value.card1.text':
      'Compare opportunities instead of relying on a single sales pitch.',

    'value.card2.title': 'Clear Sources',
    'value.card2.text':
      'Track the source and freshness of important project information.',

    'value.card3.title': 'Personal Guidance',
    'value.card3.text':
      'Move from search to a focused shortlist and advisor conversation.',

    'value.card4.title': 'Purchase Support',
    'value.card4.text':
      'Keep the relationship with JB through the buying journey.',

    /* Projects */
    'projects.eyebrow': 'EXPLORE',
    'projects.title': 'Projects',
    'projects.link': 'Find my best options →',

    'projects.salt':
      'Example project profile — market data will be connected to verified sources in the next phase.',

    'projects.cairo':
      'Project database for New Cairo opportunities will be added through the admin dashboard.',

    'projects.coast':
      'Compare coastal projects by location, budget, payment plan and delivery.',

    'common.view': 'View profile →',
    'common.explore': 'Explore options →',
    'common.compare': 'Compare →',

    /* Developers */
    'developers.eyebrow': 'MARKET DIRECTORY',
    'developers.title': 'Explore Developers',
    'developers.text':
      'A structured directory designed to grow into a verified market intelligence database.',
    'developers.search': 'Search developer...',
    'developers.searchBtn': 'Search',

    /* Compare */
    'compare.eyebrow': 'COMPARE BEFORE YOU BUY',
    'compare.title': 'One market. Clearer decisions.',
    'compare.text':
      'The comparison engine will connect to the central database of developers, projects, prices, payment plans and delivery information.',
    'compare.button': 'Start a personalized search',

    /* International */
    'intl.eyebrow': 'INTERNATIONAL BUYERS',
    'intl.title':
      'Invest in Egypt with a clearer view of the market.',
    'intl.text':
      'JB will provide English-first discovery, project comparison and buyer guidance for international clients interested in Egypt.',

    'intl.li1': 'Arabic + English from V1',
    'intl.li2': 'Investment-focused property search',
    'intl.li3': 'Transparent sources and update dates',
    'intl.li4': 'Personalized consultation',

    'intl.button': 'Request a consultation',

    'intl.boxTitle':
      'Built for local and international buyers',

    'intl.boxText':
      'The data model is designed to support multiple languages, currencies and future market modules such as land and commercial opportunities.',

    /* CTA */
    'cta.eyebrow': 'READY TO START?',
    'cta.title': 'Tell JB what you want to buy.',
    'cta.text':
      'We will turn your requirements into a focused property shortlist.',
    'cta.button': 'Build My Shortlist',

    /* Footer */
    'footer.contact': 'Contact',
    'footer.social': 'Social',
    'footer.demo':
      'V1 prototype — market data modules are being connected.'
  },


  /* =======================================================
     ARABIC
     ======================================================= */

  ar: {

    /* Navigation */
    'nav.properties': 'العقارات',
    'nav.projects': 'المشروعات',
    'nav.developers': 'المطورون',
    'nav.compare': 'مقارنة',
    'nav.investment': 'الاستثمار',
    'nav.about': 'عن JB',
    'nav.cta': 'ابحث عن عقارك',

    /* Hero */
    'hero.eyebrow': 'مجموعة JB للعقارات',
    'hero.title': 'ابحث. قارن. اختر. استثمر.',
    'hero.text':
      'اكتشف الفرص العقارية في مصر، وقارن بين المطورين والمشروعات، واحصل على توجيه يناسب احتياجاتك قبل الشراء.',
    'hero.primary': 'ابحث عن عقارك',
    'hero.secondary': 'قارن المشروعات',
    'hero.note':
      'سوق واحد. خيارات متعددة. شريك واحد تثق به.',

    /* Property Finder */
    'finder.eyebrow': 'الباحث العقاري',
    'finder.title': 'قل لنا ماذا تبحث عنه.',
    'finder.text':
      'ابدأ باحتياجاتك، وستستخدمها JB لبناء قائمة مختصرة تناسبك.',
    'finder.button': 'أنشئ قائمتي المختصرة',

    /* Finder Fields */
    'fields.location': 'الموقع',
    'fields.budget': 'الميزانية',
    'fields.type': 'نوع العقار',
    'fields.purpose': 'الهدف من الشراء',
    'fields.delivery': 'موعد التسليم',
    'fields.payment': 'تفضيل السداد',
    'fields.bedrooms': 'عدد غرف النوم',
    'fields.timeline': 'موعد الشراء',

    /* Location */
    'options.anyLocation': 'أي موقع',
    'options.northCoast': 'الساحل الشمالي',
    'options.newCairo': 'القاهرة الجديدة',
    'options.newCapital': 'العاصمة الإدارية الجديدة',
    'options.ainSokhna': 'العين السخنة',
    'options.sheikhZayed': 'الشيخ زايد',

    /* Budget */
    'options.anyBudget': 'أي ميزانية',
    'options.under5': 'أقل من 5 مليون جنيه',
    'options.5to10': 'من 5 إلى 10 مليون جنيه',
    'options.10to20': 'من 10 إلى 20 مليون جنيه',
    'options.20plus': '20 مليون جنيه فأكثر',

    /* Property Type */
    'options.anyType': 'أي نوع',
    'options.apartment': 'شقة',
    'options.chalet': 'شاليه',
    'options.villa': 'فيلا',
    'options.twin': 'توين هاوس',
    'options.commercial': 'تجاري',

    /* Purpose */
    'options.anyPurpose': 'أي هدف',
    'options.investment': 'استثمار',
    'options.personal': 'استخدام شخصي',
    'options.both': 'استثمار واستخدام شخصي',

    /* Delivery */
    'options.anyDelivery': 'أي موعد للتسليم',
    'options.ready': 'جاهز للتسليم',
    'options.1to3': 'من سنة إلى 3 سنوات',
    'options.3plus': 'أكثر من 3 سنوات',

    /* Payment */
    'options.anyPayment': 'لا يوجد تفضيل',
    'options.lowDown': 'مقدم أقل',
    'options.longPlan': 'فترة سداد أطول',
    'options.cash': 'كاش / مقدم كبير',

    /* Bedrooms */
    'options.anyBedrooms': 'لا يوجد تفضيل',
    'options.1to2': 'غرفة إلى غرفتين',
    'options.3bed': '3 غرف',
    'options.4plus': '4 غرف فأكثر',

    /* Timeline */
    'options.anyTimeline': 'ما زلت أستكشف السوق',
    'options.now': 'جاهز للشراء الآن',
    'options.3months': 'خلال 3 أشهر',
    'options.6months': 'خلال 6 أشهر',
    'options.later': 'بعد 6 أشهر',

    /* Why JB */
    'value.eyebrow': 'لماذا JB؟',
    'value.title':
      'لسنا هنا لنعرض عليك عقارًا واحدًا. نحن نساعدك على فهم اختياراتك.',
    'value.text':
      'نبني JB كمنصة للذكاء والاستشارات والوساطة العقارية: اكتشف السوق، قارن البدائل، اتخذ قرارًا أكثر وعيًا، ثم أكمل عملية الشراء من خلال JB.',
    'value.link': 'شاهد كيف تعمل المقارنة ←',

    'value.card1.title': 'خيارات متعددة',
    'value.card1.text':
      'قارن الفرص بدل الاعتماد على عرض بيع واحد.',

    'value.card2.title': 'مصادر واضحة',
    'value.card2.text':
      'تعرف على مصدر المعلومات ومدى حداثتها.',

    'value.card3.title': 'توجيه شخصي',
    'value.card3.text':
      'انتقل من البحث إلى قائمة مختصرة وحوار مع مستشار.',

    'value.card4.title': 'دعم أثناء الشراء',
    'value.card4.text':
      'تستمر علاقتك مع JB خلال رحلة الشراء.',

    /* Projects */
    'projects.eyebrow': 'اكتشف',
    'projects.title': 'المشروعات',
    'projects.link': 'ابحث عن أفضل الخيارات ←',

    'projects.salt':
      'صفحة تجريبية للمشروع — سيتم ربط بيانات السوق بمصادر موثقة في المرحلة التالية.',

    'projects.cairo':
      'سيتم إضافة قاعدة بيانات مشروعات القاهرة الجديدة من خلال لوحة التحكم.',

    'projects.coast':
      'قارن مشروعات الساحل حسب الموقع والميزانية والسداد والتسليم.',

    'common.view': 'عرض الصفحة ←',
    'common.explore': 'استكشف الخيارات ←',
    'common.compare': 'قارن ←',

    /* Developers */
    'developers.eyebrow': 'دليل السوق',
    'developers.title': 'اكتشف المطورين',
    'developers.text':
      'دليل منظم قابل للتحول إلى قاعدة بيانات للذكاء العقاري والتحقق من المعلومات.',
    'developers.search': 'ابحث عن مطور...',
    'developers.searchBtn': 'بحث',

    /* Compare */
    'compare.eyebrow': 'قارن قبل أن تشتري',
    'compare.title': 'سوق واحد. قرارات أوضح.',
    'compare.text':
      'سيتم ربط محرك المقارنة بقاعدة بيانات المطورين والمشروعات والأسعار وأنظمة السداد ومواعيد التسليم.',
    'compare.button': 'ابدأ بحثًا شخصيًا',

    /* International */
    'intl.eyebrow': 'للمشترين الدوليين',
    'intl.title':
      'استثمر في مصر برؤية أوضح للسوق.',
    'intl.text':
      'ستوفر JB تجربة اكتشاف ومقارنة وإرشاد باللغة الإنجليزية للعملاء الدوليين المهتمين بالسوق المصري.',

    'intl.li1': 'العربية + الإنجليزية من الإصدار الأول',
    'intl.li2': 'بحث عقاري يركز على الاستثمار',
    'intl.li3': 'مصادر واضحة وتواريخ تحديث',
    'intl.li4': 'استشارة شخصية',

    'intl.button': 'اطلب استشارة',

    'intl.boxTitle':
      'مصمم للعملاء المحليين والدوليين',

    'intl.boxText':
      'تم تصميم نموذج البيانات لدعم اللغات والعملات المتعددة وإضافة وحدات مستقبلية مثل الأراضي والعقارات التجارية.',

    /* CTA */
    'cta.eyebrow': 'جاهز للبدء؟',
    'cta.title': 'قل لـ JB ماذا تريد أن تشتري.',
    'cta.text':
      'سنحوّل احتياجاتك إلى قائمة مختصرة من الخيارات العقارية.',
    'cta.button': 'أنشئ قائمتي المختصرة',

    /* Footer */
    'footer.contact': 'تواصل معنا',
    'footer.social': 'تابعنا',
    'footer.demo':
      'نموذج V1 — جاري تجهيز ربط وحدات بيانات السوق.'
  }
};


/* =========================================================
   LANGUAGE SYSTEM
   ========================================================= */

let lang = 'en';

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

  const langToggle = document.getElementById('langToggle');

  if (langToggle) {
    langToggle.textContent =
      lang === 'en' ? 'العربية' : 'English';
  }
}


/* =========================================================
   LANGUAGE BUTTON
   ========================================================= */

const langToggle = document.getElementById('langToggle');

if (langToggle) {

  langToggle.addEventListener('click', () => {

    lang = lang === 'en' ? 'ar' : 'en';

    applyLang();

  });

}


/* =========================================================
   FOOTER YEAR
   ========================================================= */

const yearElement = document.getElementById('year');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


/* =========================================================
   PROPERTY FINDER V2
   ========================================================= */

const finderForm = document.getElementById('finderForm');

if (finderForm) {

  finderForm.addEventListener('submit', event => {

    event.preventDefault();


    /* -----------------------------------------------------
       Capture Buyer Requirements
       ----------------------------------------------------- */

    const values = {

      location:
        document.getElementById('location')?.value || '',

      budget:
        document.getElementById('budget')?.value || '',

      type:
        document.getElementById('type')?.value || '',

      purpose:
        document.getElementById('purpose')?.value || '',

      delivery:
        document.getElementById('delivery')?.value || '',

      payment:
        document.getElementById('payment')?.value || '',

      bedrooms:
        document.getElementById('bedrooms')?.value || '',

      timeline:
        document.getElementById('timeline')?.value || ''

    };


    const result =
      document.getElementById('finderResult');

    if (!result) return;


    /* -----------------------------------------------------
       Count Completed Preferences
       ----------------------------------------------------- */

    const filled =
      Object.values(values)
        .filter(Boolean)
        .length;


    /* =====================================================
       BUYER READINESS SCORE
       ===================================================== */

    /*
       Base profile completion:
       Maximum 60 points.
    */

    let score =
      Math.round((filled / 8) * 60);


    /*
       Purchase timeline:
       Maximum 25 points.
    */

    if (values.timeline === 'now') {

      score += 25;

    } else if (values.timeline === '3months') {

      score += 20;

    } else if (values.timeline === '6months') {

      score += 12;

    } else if (values.timeline === 'later') {

      score += 5;

    }


    /*
       Defined budget:
       +10 points.
    */

    if (values.budget) {
      score += 10;
    }


    /*
       Payment preference:
       +5 points.
    */

    if (values.payment) {
      score += 5;
    }


    /*
       Never exceed 100.
    */

    score = Math.min(score, 100);


    /* =====================================================
       BUYER PROFILE
       ===================================================== */

    let profile;


    if (score >= 85) {

      profile =
        lang === 'en'
          ? 'High Purchase Readiness'
          : 'جاهزية مرتفعة للشراء';

    } else if (score >= 65) {

      profile =
        lang === 'en'
          ? 'Qualified Buyer'
          : 'مشتري مؤهل';

    } else if (score >= 40) {

      profile =
        lang === 'en'
          ? 'Exploring Options'
          : 'في مرحلة استكشاف الخيارات';

    } else {

      profile =
        lang === 'en'
          ? 'Early Research Stage'
          : 'في مرحلة البحث الأولي';

    }


    /* =====================================================
       SHOW RESULT
       ===================================================== */

    result.hidden = false;


    if (lang === 'en') {

      result.innerHTML = `

        <div class="finder-result-content">

          <span class="finder-result-label">
            YOUR JB BUYER PROFILE
          </span>

          <h3>${profile}</h3>

          <div class="readiness-score">

            <strong>
              ${score}%
            </strong>

            <span>
              Buyer Readiness
            </span>

          </div>

          <p>
            We have captured
            <strong>${filled} of 8</strong>
            property preferences.
            JB can use these requirements to build a focused
            shortlist and compare suitable opportunities
            across the market.
          </p>

          <p class="finder-result-next">
            <strong>Next step:</strong>
            review matching projects and speak with JB
            before making your decision.
          </p>

        </div>

      `;

    } else {

      result.innerHTML = `

        <div class="finder-result-content">

          <span class="finder-result-label">
            ملف المشتري لدى JB
          </span>

          <h3>${profile}</h3>

          <div class="readiness-score">

            <strong>
              ${score}%
            </strong>

            <span>
              جاهزية الشراء
            </span>

          </div>

          <p>
            تم تسجيل
            <strong>${filled} من أصل 8</strong>
            تفضيلات عقارية.
            يمكن لـ JB استخدام هذه المتطلبات لبناء
            قائمة مختصرة ومقارنة الفرص المناسبة لك
            في السوق.
          </p>

          <p class="finder-result-next">
            <strong>الخطوة التالية:</strong>
            مراجعة المشروعات المناسبة والتحدث مع JB
            قبل اتخاذ قرار الشراء.
          </p>

        </div>

      `;

    }


    /* -----------------------------------------------------
       Move User To Result
       ----------------------------------------------------- */

    result.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'
    });

  });

}


/* =========================================================
   INITIALIZE WEBSITE
   ========================================================= */

applyLang();
