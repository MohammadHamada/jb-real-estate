/* =========================================================
   JB REAL ESTATE
   Dynamic Website V1
   ========================================================= */

:root{
  --navy:#0D1B2A;
  --navy2:#071321;
  --gold:#D4AF37;
  --gold2:#E7C45A;
  --white:#fff;
  --ink:#132033;
  --muted:#667085;
  --line:#e6e8ec;
  --soft:#f5f7fa;
  --radius:20px;
  --shadow:0 18px 50px rgba(13,27,42,.12);
}

*{box-sizing:border-box}

html{scroll-behavior:smooth}

body{
  margin:0;
  color:var(--ink);
  background:#fff;
  font-family:Poppins,Cairo,sans-serif;
  line-height:1.65;
}

body[dir="rtl"]{font-family:Cairo,Poppins,sans-serif}
body.modal-open{overflow:hidden}

.container{width:min(1160px,92%);margin:auto}

.site-header{
  position:sticky;
  top:0;
  z-index:20;
  background:rgba(7,19,33,.96);
  backdrop-filter:blur(12px);
  border-bottom:1px solid rgba(212,175,55,.2);
}

.nav-wrap{
  min-height:82px;
  display:flex;
  align-items:center;
  gap:26px;
}

.brand img{
  width:82px;
  height:58px;
  object-fit:contain;
}

.main-nav{
  display:flex;
  gap:22px;
  flex:1;
  justify-content:center;
}

.main-nav a,.footer a{
  color:inherit;
  text-decoration:none;
}

.main-nav a{
  color:#f7f7f7;
  font-size:14px;
}

.main-nav a:hover{color:var(--gold2)}

.nav-actions{
  display:flex;
  align-items:center;
  gap:10px;
}

.lang-btn{
  border:1px solid rgba(255,255,255,.3);
  background:transparent;
  color:#fff;
  border-radius:999px;
  padding:9px 13px;
  cursor:pointer;
  font-family:inherit;
}

.btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  min-height:48px;
  padding:0 20px;
  border-radius:999px;
  text-decoration:none;
  font-weight:700;
  border:1px solid transparent;
  cursor:pointer;
  font-family:inherit;
}

.btn-small{
  min-height:40px;
  padding:0 15px;
  font-size:13px;
}

.btn-gold{
  background:linear-gradient(135deg,var(--gold),var(--gold2));
  color:var(--navy);
}

.btn-outline{
  border-color:rgba(255,255,255,.45);
  color:#fff;
  background:rgba(255,255,255,.03);
}

.btn-outline-dark{
  border-color:var(--navy);
  color:var(--navy);
  background:#fff;
}

.btn-navy{
  background:var(--navy);
  color:#fff;
}

.hero{
  min-height:720px;
  display:flex;
  align-items:center;
  position:relative;
  overflow:hidden;
  background:
    radial-gradient(circle at 80% 30%,rgba(212,175,55,.16),transparent 35%),
    linear-gradient(135deg,var(--navy2),var(--navy));
}

.hero:after{
  content:"";
  position:absolute;
  right:-120px;
  bottom:-160px;
  width:600px;
  height:600px;
  border:1px solid rgba(212,175,55,.35);
  border-radius:50%;
  box-shadow:
    0 0 0 28px rgba(212,175,55,.06),
    0 0 0 58px rgba(212,175,55,.03);
}

.hero-overlay{
  position:absolute;
  inset:0;
  background:linear-gradient(
    90deg,
    rgba(7,19,33,.95) 0%,
    rgba(7,19,33,.8) 48%,
    rgba(7,19,33,.35) 100%
  );
}

.hero-content{
  position:relative;
  z-index:2;
  color:#fff;
  max-width:760px;
  padding:110px 0;
}

.eyebrow{
  letter-spacing:.22em;
  font-size:12px;
  font-weight:700;
  color:var(--gold2);
  text-transform:uppercase;
}

.eyebrow.dark{color:#9b7a16}

.hero h1{
  font-size:clamp(42px,7vw,76px);
  line-height:1.05;
  margin:18px 0;
}

.hero p{
  font-size:19px;
  color:#e5e8ed;
  max-width:680px;
}

.hero-actions{
  display:flex;
  gap:12px;
  flex-wrap:wrap;
  margin:30px 0;
}

.hero-note{
  color:#d4af37;
  font-size:13px;
}

.section{padding:92px 0}

.section-head{
  display:flex;
  align-items:end;
  justify-content:space-between;
  gap:25px;
  margin-bottom:38px;
}

.section-head.center{
  display:block;
  text-align:center;
  max-width:780px;
  margin:0 auto 40px;
}

.section-head h2,.split h2{
  font-size:clamp(30px,4vw,48px);
  line-height:1.15;
  margin:8px 0 12px;
}

.section-head p,.split p{
  color:var(--muted);
  margin:0;
}

.dynamic-count{
  color:var(--muted);
  margin-top:8px;
  font-size:14px;
}

.section-action{margin-top:28px}

.finder{background:var(--soft)}

.finder-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:16px;
  background:#fff;
  padding:24px;
  border-radius:24px;
  box-shadow:var(--shadow);
}

label{
  display:grid;
  gap:7px;
  font-size:13px;
  font-weight:700;
}

select,input{
  width:100%;
  height:50px;
  border:1px solid #d8dce3;
  border-radius:12px;
  padding:0 14px;
  background:#fff;
  font:inherit;
  color:var(--ink);
}

.finder-submit{
  width:100%;
  align-self:end;
}

.finder-result{
  margin-top:18px;
  background:var(--navy);
  color:#fff;
  padding:24px;
  border-radius:16px;
}

.finder-result-content{
  display:grid;
  gap:14px;
}

.finder-result-label{
  color:var(--gold2);
  font-size:11px;
  font-weight:700;
  letter-spacing:.14em;
}

.finder-result-content h3{
  margin:0;
  font-size:28px;
}

.finder-result-content p{
  color:#cbd2db;
  margin:0;
}

.readiness-score{
  display:flex;
  align-items:center;
  gap:14px;
}

.readiness-score strong{
  display:grid;
  place-items:center;
  width:86px;
  height:86px;
  border:2px solid var(--gold);
  border-radius:50%;
  color:var(--gold2);
  font-size:24px;
}

.finder-result-next{
  padding:14px 16px;
  border:1px solid rgba(212,175,55,.3);
  background:rgba(212,175,55,.08);
  border-radius:12px;
}

.finder-shortlist{
  display:grid;
  gap:10px;
  margin-top:4px;
}

.finder-shortlist-item{
  width:100%;
  text-align:left;
  border:1px solid rgba(212,175,55,.25);
  border-radius:12px;
  background:rgba(255,255,255,.04);
  color:#fff;
  padding:14px 16px;
  cursor:pointer;
  font:inherit;
}

body[dir="rtl"] .finder-shortlist-item{text-align:right}

.finder-shortlist-item strong{
  display:block;
  color:var(--gold2);
}

.finder-shortlist-item span{
  display:block;
  color:#cbd2db;
  font-size:13px;
  margin-top:4px;
}

.dark-section{
  background:var(--navy);
  color:#fff;
}

.split{
  display:grid;
  grid-template-columns:1.05fr .95fr;
  gap:70px;
  align-items:center;
}

.dark-section p{color:#cbd2db}

.value-cards{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:14px;
}

.value-cards article{
  padding:22px;
  border:1px solid rgba(212,175,55,.25);
  border-radius:18px;
  background:rgba(255,255,255,.035);
}

.value-cards b{color:var(--gold2)}
.value-cards h3{margin:8px 0}
.value-cards p{font-size:14px;margin:0}

.text-link{
  color:var(--gold);
  font-weight:700;
  text-decoration:none;
}

.dark-section .text-link{color:var(--gold2)}

.cards-3{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:22px;
}

.dynamic-project-grid .data-loading,
.dynamic-project-grid .data-error,
.dynamic-project-grid .data-empty{
  grid-column:1/-1;
}

.project-card{
  border:1px solid var(--line);
  border-radius:var(--radius);
  overflow:hidden;
  background:#fff;
  box-shadow:0 10px 30px rgba(13,27,42,.06);
}

.dynamic-project-card{
  display:flex;
  flex-direction:column;
}

.project-image{
  height:210px;
  background:linear-gradient(135deg,#0b1b2f,#244363);
  position:relative;
}

.project-image:after{
  content:"JB";
  position:absolute;
  inset:0;
  display:grid;
  place-items:center;
  color:rgba(212,175,55,.28);
  font-size:90px;
  font-weight:700;
}

.dynamic-project-image{
  background-size:cover;
  background-position:center;
}

.card-body{
  padding:22px;
  display:flex;
  flex-direction:column;
  flex:1;
}

.tag{
  font-size:10px;
  letter-spacing:.14em;
  color:#8a6d16;
  font-weight:700;
}

.card-body h3{
  font-size:25px;
  margin:8px 0 3px;
}

.card-body p{
  color:var(--muted);
  font-size:14px;
}

.project-card-topline{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:8px;
}

.project-location{
  color:var(--muted);
  font-size:11px;
}

.project-developer{
  margin:0 0 14px;
  font-weight:600;
}

.project-meta{
  display:flex;
  gap:8px;
  flex-wrap:wrap;
  margin-top:auto;
}

.project-meta span{
  background:var(--soft);
  border-radius:999px;
  padding:7px 10px;
  font-size:11px;
  color:var(--ink);
}

.project-card-actions{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:12px;
  margin-top:18px;
}

.text-button{
  border:0;
  background:transparent;
  padding:0;
  color:var(--gold);
  font:inherit;
  font-weight:700;
  cursor:pointer;
}

.compare-chip{
  border:1px solid #d8dce3;
  background:#fff;
  color:var(--ink);
  border-radius:999px;
  padding:7px 10px;
  font:inherit;
  font-size:11px;
  font-weight:700;
  cursor:pointer;
}

.compare-chip.is-selected{
  border-color:var(--gold);
  background:#fbf6df;
}

.light-gold{background:#fbfaf5}

.developer-search{
  display:flex;
  max-width:760px;
  margin:auto;
  gap:10px;
}

.developer-row{
  display:flex;
  gap:12px;
  flex-wrap:wrap;
  justify-content:center;
  margin-top:28px;
}

.developer-pill{
  padding:14px 18px;
  background:#fff;
  border:1px solid #eadfbd;
  border-radius:999px;
  font-weight:700;
}

.developer-pill span{
  font-size:11px;
  color:#8c7a4a;
  margin-left:8px;
}

.developer-pill-button{
  cursor:pointer;
  font:inherit;
  color:var(--ink);
}

.compare-status{
  text-align:center;
  color:var(--muted);
  margin-bottom:18px;
}

.compare-preview{
  border:1px solid var(--line);
  border-radius:18px;
  overflow:auto;
  margin-bottom:28px;
  background:#fff;
}

.compare-empty{
  padding:34px;
  text-align:center;
  color:var(--muted);
}

.compare-row{
  display:grid;
  grid-template-columns:1.5fr repeat(3,1fr);
  min-width:720px;
}

.compare-row-dynamic{
  min-width:640px;
}

.compare-row span{
  padding:16px;
  border-bottom:1px solid var(--line);
  border-right:1px solid var(--line);
}

.compare-row.head{
  background:var(--navy);
  color:#fff;
  font-weight:700;
}

.compare-row:last-child span{border-bottom:0}

.compare-criteria{
  font-weight:700;
  background:#fbfaf5;
}

.international{
  background:linear-gradient(135deg,var(--navy2),var(--navy));
  color:#fff;
}

.international p,.international li{color:#d3d9e0}

.international ul{
  padding-left:20px;
  margin:20px 0;
}

.international-box{
  border:1px solid rgba(212,175,55,.35);
  border-radius:24px;
  padding:40px;
  background:rgba(255,255,255,.035);
}

.currency{
  font-size:80px;
  font-weight:700;
  color:var(--gold2);
  line-height:1;
}

.final-cta{background:#f8f8f6}
.final-cta p{color:var(--muted)}

.footer{
  background:#071321;
  color:#cbd2db;
  padding:55px 0 20px;
}

.footer-grid{
  display:grid;
  grid-template-columns:2fr 1fr 1fr;
  gap:40px;
}

.footer-logo{
  width:130px;
  height:90px;
  object-fit:contain;
}

.footer h4{color:#fff;margin-top:0}

.footer-bottom{
  border-top:1px solid rgba(255,255,255,.1);
  margin-top:35px;
  padding-top:18px;
  font-size:12px;
  color:#8d98a6;
}

.center{text-align:center}

.data-loading,
.data-error,
.data-empty{
  border:1px dashed #d8dce3;
  border-radius:16px;
  padding:28px;
  text-align:center;
  color:var(--muted);
  background:#fff;
}


/* PROFILE MODAL */

.profile-modal{
  position:fixed;
  inset:0;
  z-index:100;
  display:grid;
  place-items:center;
  padding:24px;
}

.profile-modal[hidden]{display:none}

.profile-modal-backdrop{
  position:absolute;
  inset:0;
  background:rgba(7,19,33,.78);
  backdrop-filter:blur(6px);
}

.profile-modal-card{
  position:relative;
  z-index:1;
  width:min(900px,96vw);
  max-height:88vh;
  overflow:auto;
  background:#fff;
  border-radius:24px;
  padding:36px;
  box-shadow:0 30px 80px rgba(0,0,0,.28);
}

.profile-modal-close{
  position:absolute;
  top:14px;
  right:16px;
  width:40px;
  height:40px;
  border:0;
  border-radius:50%;
  background:var(--soft);
  color:var(--navy);
  font-size:24px;
  cursor:pointer;
}

body[dir="rtl"] .profile-modal-close{
  right:auto;
  left:16px;
}

.profile-heading h2{
  font-size:clamp(30px,5vw,48px);
  line-height:1.1;
  margin:8px 0 12px;
}

.profile-heading p{
  color:var(--muted);
}

.profile-project-developer{
  font-weight:700;
  color:#8a6d16!important;
}

.profile-facts{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:12px;
  margin:26px 0;
}

.profile-facts>div{
  border:1px solid var(--line);
  border-radius:16px;
  padding:16px;
}

.profile-facts span{
  display:block;
  color:var(--muted);
  font-size:11px;
  margin-bottom:6px;
}

.profile-facts strong{
  display:block;
  font-size:15px;
}

.profile-subtitle{
  margin-top:30px;
}

.profile-project-list{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:10px;
  margin-bottom:24px;
}

.profile-project-link{
  text-align:left;
  border:1px solid var(--line);
  border-radius:14px;
  background:#fff;
  padding:14px;
  cursor:pointer;
  font:inherit;
}

body[dir="rtl"] .profile-project-link{text-align:right}

.profile-project-link span{
  display:block;
  font-weight:700;
}

.profile-project-link small{
  display:block;
  color:var(--muted);
  margin-top:3px;
}

.profile-actions{
  display:flex;
  gap:10px;
  flex-wrap:wrap;
  margin-top:24px;
}

.profile-source-link{margin-top:8px}


/* RTL */

body[dir="rtl"] .nav-actions{margin-right:auto}
body[dir="rtl"] .developer-pill span{
  margin-left:0;
  margin-right:8px;
}
body[dir="rtl"] .international ul{
  padding-left:0;
  padding-right:20px;
}
body[dir="rtl"] .compare-row span{
  border-right:0;
  border-left:1px solid var(--line);
}


/* RESPONSIVE */

@media(max-width:900px){
  .main-nav{display:none}
  .nav-actions{margin-left:auto}
  body[dir="rtl"] .nav-actions{
    margin-left:0;
    margin-right:auto;
  }

  .hero{min-height:650px}

  .finder-grid{
    grid-template-columns:1fr 1fr;
  }

  .cards-3,.split,.footer-grid{
    grid-template-columns:1fr;
  }

  .value-cards{
    grid-template-columns:1fr;
  }

  .section-head{display:block}

  .section-head .text-link{
    display:inline-block;
    margin-top:12px;
  }

  .brand img{width:72px}

  .hero-content{padding:90px 0}

  .profile-facts{
    grid-template-columns:1fr 1fr;
  }
}

@media(max-width:560px){
  .nav-wrap{min-height:70px}
  .nav-actions .btn{display:none}

  .hero h1{font-size:42px}
  .hero p{font-size:16px}

  .section{padding:68px 0}

  .finder-grid{
    grid-template-columns:1fr;
    padding:16px;
  }

  .developer-search{
    flex-direction:column;
  }

  .compare-row{
    font-size:13px;
  }

  .profile-modal{
    padding:10px;
  }

  .profile-modal-card{
    padding:28px 20px;
  }

  .profile-facts{
    grid-template-columns:1fr;
  }

  .profile-project-list{
    grid-template-columns:1fr;
  }

  .project-card-actions{
    align-items:flex-start;
    flex-direction:column;
  }

  .currency{font-size:60px}
}


/* =========================================================
   JB REAL ESTATE — UI / LEAD CAPTURE V2
   Light premium system
   ========================================================= */

:root{
  --navy:#0d1b2a;
  --navy2:#17314d;
  --gold:#d4af37;
  --gold2:#e4c55d;
  --ink:#132238;
  --muted:#64748b;
  --line:#e3e8ef;
  --paper:#ffffff;
  --warm:#f7f5ef;
  --soft:#f4f7fa;
}

body{
  background:#fff;
  color:var(--ink);
}

.hero{
  min-height:500px;
  background:
    radial-gradient(circle at 84% 45%, rgba(212,175,55,.13), transparent 24%),
    linear-gradient(118deg,#0b1b2b 0%,#10263a 70%,#132f48 100%);
}

.hero-content{
  padding:84px 0 76px;
  max-width:820px;
}

.hero h1{
  max-width:760px;
}

.finder.section{
  background:linear-gradient(180deg,#f8fafc 0%,#ffffff 100%);
}

.finder-grid{
  background:#fff;
  border:1px solid var(--line);
  box-shadow:0 20px 60px rgba(16,33,52,.08);
}

.finder-privacy-note{
  margin:15px auto 0;
  max-width:860px;
  text-align:center;
  font-size:13px;
  color:var(--muted);
}

.dark-section{
  background:var(--warm);
  color:var(--ink);
}

.dark-section .eyebrow{
  color:#9b7506;
}

.dark-section p{
  color:var(--muted);
}

.dark-section .text-link{
  color:#9b7506;
}

.value-cards article{
  background:#fff;
  border:1px solid #e7e1d4;
  box-shadow:0 10px 30px rgba(16,33,52,.05);
}

.dynamic-project-card{
  background:#fff;
  border:1px solid var(--line);
  box-shadow:0 14px 38px rgba(15,31,48,.07);
  overflow:hidden;
}

.dynamic-project-card:hover{
  transform:translateY(-4px);
  box-shadow:0 20px 48px rgba(15,31,48,.12);
}

.dynamic-project-image{
  min-height:225px;
  position:relative;
  background-size:cover;
  background-position:center;
  display:flex;
  flex-direction:column;
  justify-content:flex-end;
  overflow:hidden;
}

.dynamic-project-image.has-photo{
  color:#fff;
}

.project-image-location{
  position:absolute;
  inset-inline-start:16px;
  bottom:14px;
  padding:7px 10px;
  border-radius:999px;
  background:rgba(5,18,31,.72);
  color:#fff;
  font-size:11px;
  backdrop-filter:blur(8px);
}

.project-image-fallback{
  justify-content:center;
  align-items:center;
  text-align:center;
  gap:7px;
  color:#fff;
  background:
    radial-gradient(circle at 22% 20%,rgba(212,175,55,.26),transparent 26%),
    linear-gradient(135deg,#163653,#0c1c2b);
}

.project-image-fallback[data-project-kind*="Coastal"]{
  background:
    radial-gradient(circle at 78% 20%,rgba(108,184,212,.35),transparent 30%),
    linear-gradient(135deg,#1d4d68,#0d2639);
}

.project-image-fallback[data-project-kind*="Commercial"]{
  background:
    radial-gradient(circle at 20% 18%,rgba(212,175,55,.28),transparent 28%),
    linear-gradient(135deg,#353b46,#121d2a);
}

.project-fallback-logo{
  max-width:88px;
  max-height:56px;
  object-fit:contain;
  filter:drop-shadow(0 4px 12px rgba(0,0,0,.12));
}

.project-fallback-initials{
  font-size:42px;
  font-weight:700;
  letter-spacing:.04em;
  color:var(--gold2);
}

.project-fallback-name{
  font-size:17px;
  font-weight:700;
}

.project-image-fallback small{
  color:rgba(255,255,255,.72);
}

.project-price{
  font-weight:600;
}

.profile-modal-backdrop{
  background:rgba(11,25,39,.70);
  backdrop-filter:blur(8px);
}

.profile-modal-card{
  max-width:980px;
  background:#fff;
  box-shadow:0 30px 100px rgba(5,16,28,.28);
}

.profile-brand-row{
  display:flex;
  gap:22px;
  align-items:flex-start;
}

.profile-developer-logo{
  width:92px;
  height:92px;
  object-fit:contain;
  border:1px solid var(--line);
  border-radius:20px;
  padding:12px;
  background:#fff;
}

.profile-developer-monogram{
  width:92px;
  height:92px;
  display:grid;
  place-items:center;
  border-radius:20px;
  background:var(--navy);
  color:var(--gold2);
  font-size:28px;
  font-weight:700;
}

.profile-nav-row{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:16px;
  margin-bottom:20px;
  padding-inline-end:44px;
}

.profile-back{
  border:0;
  background:transparent;
  color:#9b7506;
  font:inherit;
  font-weight:700;
  cursor:pointer;
  padding:7px 0;
}

.profile-breadcrumb{
  font-size:12px;
  color:var(--muted);
}

.profile-project-hero .dynamic-project-image{
  min-height:300px;
  border-radius:22px;
  margin-bottom:26px;
}

.profile-developer-button{
  display:inline-flex;
  align-items:center;
  gap:8px;
  border:0;
  background:transparent;
  padding:0;
  color:#8a6706;
  font:inherit;
  font-weight:700;
  cursor:pointer;
}

.profile-developer-button img{
  width:28px;
  height:28px;
  object-fit:contain;
}

.btn-outline-dark{
  border:1px solid var(--navy);
  background:#fff;
  color:var(--navy);
}

.lead-capture-form{
  margin-top:22px;
  padding:24px;
  border-radius:20px;
  background:#fff;
  border:1px solid var(--line);
  box-shadow:0 12px 35px rgba(16,33,52,.06);
}

.lead-capture-heading{
  display:flex;
  justify-content:space-between;
  gap:16px;
  align-items:baseline;
  margin-bottom:18px;
}

.lead-capture-heading strong{
  font-size:20px;
}

.lead-capture-heading span{
  font-size:12px;
  color:var(--muted);
}

.lead-capture-grid{
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:14px;
}

.lead-capture-grid label{
  display:grid;
  gap:7px;
}

.lead-capture-grid label > span{
  font-size:12px;
  font-weight:600;
  color:var(--ink);
}

.lead-capture-grid input,
.lead-capture-grid select{
  min-height:48px;
  border:1px solid #d7dee8;
  border-radius:12px;
  padding:0 13px;
  font:inherit;
  background:#fff;
  color:var(--ink);
}

.consent-row{
  display:flex;
  gap:10px;
  align-items:flex-start;
  margin:17px 0;
  font-size:12px;
  color:var(--muted);
  line-height:1.7;
}

.consent-row input{
  margin-top:4px;
  flex:0 0 auto;
}

.finder-result-head{
  display:flex;
  justify-content:space-between;
  gap:24px;
  align-items:flex-start;
}

.shortlist-locked{
  margin-top:16px;
  padding:15px 18px;
  border:1px dashed #d7b342;
  background:#fffaf0;
  border-radius:14px;
  display:flex;
  justify-content:space-between;
  gap:15px;
  align-items:center;
}

.shortlist-locked span{
  color:var(--muted);
  font-size:13px;
}

.finder-shortlist-item{
  display:flex;
  align-items:center;
  gap:12px;
}

.finder-shortlist-thumb{
  width:52px;
  height:52px;
  border-radius:12px;
  overflow:hidden;
  flex:0 0 auto;
  display:grid;
  place-items:center;
  background:var(--navy);
  color:var(--gold2);
}

.finder-shortlist-thumb img{
  width:100%;
  height:100%;
  object-fit:cover;
}

.finder-shortlist-thumb b{
  font-size:15px;
}

.finder-shortlist-copy{
  display:grid;
  gap:3px;
  text-align:start;
}

.finder-shortlist-copy small{
  color:var(--muted);
}

.lead-capture-status{
  margin:10px 0 0;
  font-size:12px;
  color:#a74d36;
}

.lead-success{
  display:grid;
  gap:7px;
  padding:7px 0;
}

.lead-success strong{
  color:#1f6d4d;
}

@media (max-width:900px){
  .hero{min-height:430px}
  .hero-content{padding:62px 0}
  .lead-capture-grid{grid-template-columns:1fr}
  .finder-result-head,
  .shortlist-locked,
  .lead-capture-heading,
  .profile-nav-row{
    align-items:flex-start;
    flex-direction:column;
  }
  .profile-brand-row{flex-direction:column}
}

@media (max-width:600px){
  .hero{min-height:390px}
  .dynamic-project-image{min-height:190px}
  .profile-project-hero .dynamic-project-image{min-height:210px}
}


/* =========================================================
   JB V2 HOTFIX — Lead consent checkbox layout
   Fixes global input width/height rules affecting checkbox.
   ========================================================= */

.lead-capture-form .consent-row{
  display:flex;
  flex-direction:row;
  align-items:flex-start;
  justify-content:flex-start;
  gap:10px;
  margin:18px 0;
  width:100%;
  min-height:0;
  font-size:12px;
  font-weight:400;
  line-height:1.7;
  color:var(--muted);
}

.lead-capture-form .consent-row input[type="checkbox"]{
  width:18px !important;
  height:18px !important;
  min-width:18px;
  min-height:18px;
  flex:0 0 18px;
  margin:3px 0 0;
  padding:0;
  border-radius:4px;
  accent-color:var(--gold);
  cursor:pointer;
}

.lead-capture-form .consent-row span{
  display:block;
  flex:1 1 auto;
  width:auto;
  min-width:0;
  max-width:none;
  color:var(--muted);
  text-align:start;
  white-space:normal;
  overflow-wrap:anywhere;
}

.lead-capture-form{
  min-height:0;
}

.lead-capture-form .btn{
  justify-self:start;
}

[dir="rtl"] .lead-capture-form .consent-row{
  text-align:right;
}

@media (max-width:600px){
  .lead-capture-form{
    padding:18px;
  }

  .lead-capture-form .consent-row{
    font-size:11.5px;
  }

  .lead-capture-form .btn{
    width:100%;
    justify-content:center;
  }
}


/* =========================================================
   JB V2.1 — LIGHTER PREMIUM PALETTE
   Same navy family, brighter and less visually heavy.
   ========================================================= */

:root{
  --navy:#1B3A57;
  --navy2:#284F70;
  --gold:#D6AE35;
  --gold2:#E7C85E;
  --ink:#17304A;
  --muted:#6B7D90;
  --warm:#FAF9F5;
  --soft:#F5F8FB;
  --line:#E3EAF0;
}

.site-header{
  background:rgba(25,53,79,.97);
  border-bottom-color:rgba(226,196,93,.22);
}

.hero{
  background:
    radial-gradient(circle at 84% 45%, rgba(231,200,94,.16), transparent 25%),
    linear-gradient(118deg,#1A3954 0%,#214866 65%,#2C5878 100%);
}

.hero::after{
  opacity:.45;
}

.finder.section{
  background:linear-gradient(180deg,#F6F9FC 0%,#FFFFFF 100%);
}

.finder-result{
  background:linear-gradient(135deg,#234762,#2D5875);
  border:1px solid rgba(231,200,94,.28);
  box-shadow:0 18px 45px rgba(25,53,79,.12);
}

.finder-result-content p,
.finder-result-next,
.finder-shortlist-copy small{
  color:#DCE6EE;
}

.finder-shortlist-item{
  background:rgba(255,255,255,.055);
  border-color:rgba(231,200,94,.28);
}

.shortlist-locked{
  background:#FFFDF6;
  color:var(--ink);
  border-color:#DFC35D;
}

.shortlist-locked span{
  color:#728195;
}

.lead-capture-form{
  background:#FFFFFF;
  border-color:#DCE5EC;
  box-shadow:0 16px 38px rgba(28,61,88,.08);
}

.dark-section{
  background:#F8F7F2;
  color:var(--ink);
}

.value-cards article{
  background:#FFFFFF;
}

.project-image-fallback{
  background:
    radial-gradient(circle at 22% 20%,rgba(231,200,94,.24),transparent 27%),
    linear-gradient(135deg,#2D5875,#1B3A57);
}

.project-image-fallback[data-project-kind*="Coastal"]{
  background:
    radial-gradient(circle at 78% 18%,rgba(146,207,229,.32),transparent 30%),
    linear-gradient(135deg,#3C718C,#244C69);
}

.project-image-fallback[data-project-kind*="Commercial"]{
  background:
    radial-gradient(circle at 20% 18%,rgba(231,200,94,.24),transparent 28%),
    linear-gradient(135deg,#4B6174,#263E55);
}

.profile-modal-backdrop{
  background:rgba(27,58,87,.58);
}

.footer{
  background:#1A344D;
}

.btn-navy{
  background:#1B3A57;
  border-color:#1B3A57;
}

.btn-navy:hover{
  background:#284F70;
  border-color:#284F70;
}

.compare-chip,
.btn-outline-dark{
  border-color:#315A78;
  color:#1B3A57;
}

@media (max-width:900px){
  .site-header{
    background:#1B3A57;
  }
}
