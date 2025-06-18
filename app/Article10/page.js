'use client';

// Import our reusable components and Next.js features
// Note the ../../ path to go up two folders
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function PressReleasePage() {
  return (
    <>
      <Navbar />

      <main translate="no">
        <nav className="nav-breadcrumb">
          <div className="container">
            <div className="breadcrumb">
              <Link href="/" style={{color:'black',backgroundColor:'transparent' , border:'none'}}>Accueil</Link>
              <span>›</span>
              <Link href="/editions" style={{color:'black',backgroundColor:'transparent' , border:'none'}}>Editions</Link>
              <span>›</span>
              <span>بلاغ صحفي للمؤتمر الوطني العاشر</span>
            </div>
          </div>
        </nav>

        <header className="article-header" dir="rtl" lang="ar">
          <div className="container">
            <div className="article-category">بلاغ صحفي</div>
            <h1 className="article-title">المؤتمر الوطني العاشر للمنظمة المغربية لحقوق الإنسان</h1>
            <p className="article-subtitle">تحت شعار: "دور الفاعل في إعمال حقوق الإنسان وإحقاقها"</p>
            <div className="article-meta">
              <div className="meta-item">
                <strong>بقلم المنظمة المغربية لحقوق الإنسان</strong>
              </div>
              <div className="meta-divider"></div>
              <div className="meta-item">
                13 ماي 2018
              </div>
            </div>
          </div>
        </header>

        <section className="article-hero">
          <div className="container">
            <Image src="/Images/Com.jpg" alt="المؤتمر الوطني العاشر للمنظمة المغربية لحقوق الإنسان" className="hero-image" width={800} height={400} priority />
          </div>
        </section>

        <article className="article-content" dir="rtl" lang="ar">
          <div className="container">
            <div className="content-body">
                <p>عقدت المنظمة المغربية لحقوق الإنسان مؤتمرها العاشر بالرباط أيام 11 و 12 و 13 ماي 2018، تحت شعار : "دور الفاعل في إعمال حقوق الإنسان وإحقاقها والذي تميزت جلسته الافتتاحية بحضور ضيوف يمثلون المنظمات غير الحكومية الوطنية والإقليمية والدولية الصديقة والمؤسسات الوطنية والقطاعات الحكومية بالإضافة الى عدد من الشخصيات والفعاليات الصديقة وثلة من مؤسسي المنظمة.</p>
                <p>و بعد المناقشة والمصادقة على المشاريع المعروضة على المؤتمر &#123; التقريرين الأدبي والمالي والتعديلات المقترحة على القانون الأساسي والبيان العام &#125; توج المؤتمر بإعادة انتخاب السيد بوبكر لركو رئيسا للمنظمة وانتخاب عضوات وأعضاء المجلس الوطني المتكون من 51 عضوا والمكتب التنفيذي وفق التشكيلتين التاليتين:</p>
                
                <h2>أعضاء المجلس الوطني</h2>
                <div className="highlight-box">
                    <ol style={{ listStyleType: 'decimal', paddingRight: '20px' }}>
                        <li>بوبكر لركو</li>
                        <li>عبد العزيز العتيقي</li>
                        <li>فيصل السلمي</li>
                        <li>الطيب بنعلي</li>
                        <li>سميرة عنان</li>
                        <li>عايدة حشاد</li>
                        <li>مصطفى الزنايدي</li>
                        <li>عبد الجليل بادو</li>
                        <li>عبد القادر بوشخاشخ</li>
                        <li>المصطفى المريزق</li>
                        <li>نادية بلقاري</li>
                        <li>يامنة غبار</li>
                        <li>مسعود بوعيش</li>
                        <li>أحمد مفيد</li>
                        <li>جمال الدين الشعيبي</li>
                        <li>الحسن الادريسي</li>
                        <li>نوفل البعمري</li>
                        <li>فهد الوزاني الشاهدي</li>
                        <li>محمد بوزلافة</li>
                        <li>عبد السلام امختاري</li>
                        <li>أمينة الكاني</li>
                        <li>عبد الوهاب الطراف</li>
                        <li>حمادي لمنور</li>
                        <li>محمد المرابطي</li>
                        <li>وفاء الطغرائي</li>
                        <li>محمد الشاط</li>
                        <li>سمية بعوشي</li>
                        <li>محمد الخوخشاني</li>
                        <li>ندى البقالي</li>
                        <li>فريدة المحمودي</li>
                        <li>يوسف الفيلالي</li>
                        <li>مروة دحو</li>
                        <li>عماد القضاوي</li>
                        <li>عبد الرحمان فضلي</li>
                        <li>سيدي ابراهيم التروزي</li>
                        <li>حسام هاب</li>
                        <li>محمد الطيبي</li>
                        <li>أمينة دحاوي</li>
                        <li>كاميليا بوطمو</li>
                        <li>محمد هاشم</li>
                        <li>فدوی امحارش</li>
                        <li>أحمد حموش</li>
                        <li>عبد المجيد الكوزي</li>
                        <li>نعيمة بوهوشي</li>
                        <li>سامي المودني</li>
                        <li>عبد السلام حموشن</li>
                        <li>فتيحة عدة</li>
                        <li>أنور الهزيتي</li>
                        <li>أمينة الهيلوش</li>
                        <li>طارق النشناش</li>
                        <li>سناء بلخو</li>
                    </ol>
                </div>

                <h2>أعضاء المكتب التنفيذي :</h2>
                 <div className="highlight-box">
                    <ul>
                        <li><strong>الرئيس:</strong> بوبكر لركو</li>
                        <li><strong>نائب الرئيس:</strong> أحمد مفيد</li>
                        <li><strong>الأمين:</strong> فيصل سلمي</li>
                        <li><strong>نائب الأمين:</strong> الحسن الادريسي</li>
                        <li><strong>الكاتب العام:</strong> مصطفى الزنايدي</li>
                        <li><strong>نائب الكاتب العام:</strong> حسام هاب</li>
                    </ul>
                    <p>وسيكلف باقي عضوات وأعضاء المكتب التنفيذي لاحقا وهم:</p>
                    <ul>
                        <li>كاميليا بوطمو</li>
                        <li>سامية بعوشي</li>
                        <li>فريدة المحمودي</li>
                        <li>مروة دحو</li>
                        <li>فهد الوزاني الشاهدي</li>
                        <li>نوفل البعمري</li>
                        <li>عبد السلام امختاري</li>
                        <li>محمد الطيبي</li>
                        <li>سامي المودني</li>
                    </ul>
                </div>
              <p><strong>المكتب التنفيذي</strong></p>
              <p><strong>13 ماي 2018</strong></p>
            </div>
          </div>
        </article>

        <section className="author-section">
          <div className="container">
            <div className="author-card" dir="rtl">
              <Image src="/omdhlogo.png" alt="شعار المنظمة المغربية لحقوق الإنسان" className="author-avatar" width={80} height={80}/>
              <div className="author-info">
                <h4>المنظمة المغربية لحقوق الإنسان</h4>
                <p className="author-title">جهة الإصدار</p>
                <p className="author-bio">
                  بلاغ صحفي صادر عن المؤتمر الوطني العاشر للمنظمة المغربية لحقوق الإنسان، المنعقد بالرباط أيام 11-13 ماي 2018.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Page-specific styles for the article template */}
      <style jsx>{`
        /* Using the same article template styles as the previous page */
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .nav-breadcrumb {
          padding: 20px 0;
          background-color: #ffffff;
          border-bottom: 1px solid #eeeeee;
        }
        .breadcrumb {
          font-size: 0.9rem;
          color: var(--text-medium);
        }
        .breadcrumb a {
          color: var(--primary-color);
          text-decoration: none;
          padding: 0;
        }
        .breadcrumb a:hover {
          color: var(--primary-dark);
        }
        .breadcrumb span {
          margin: 0 8px;
          color: #ccc;
        }
        .article-header {
          background-color: #ffffff;
          padding: 40px 0;
          text-align: center;
        }
        .article-category {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--primary-color);
          background: rgba(25, 87, 166, 0.08);
          padding: 6px 16px;
          border-radius: 20px;
          margin-bottom: 20px;
        }
        .article-title {
          font-family: 'Poppins', sans-serif;
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 20px;
          color: var(--text-dark);
        }
        .article-subtitle {
          font-size: 1.1rem;
          color: var(--text-medium);
          max-width: 600px;
          margin: 0 auto 30px;
          line-height: 1.6;
        }
        .article-meta {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          font-size: 0.9rem;
        }
        .meta-item {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .meta-divider {
          width: 1px;
          height: 16px;
          background-color: #eeeeee;
        }
        .article-hero {
          margin: 40px auto;
          max-width: 800px;
          padding: 0 20px;
        }
        .hero-image {
          width: 100%;
          height: auto;
          max-height: 450px;
          object-fit: cover;
          display: block;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        .article-content {
          background-color: #ffffff;
          padding: 50px 0;
        }
        .content-body {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--text-dark);
        }
        .content-body p, .content-body li {
          margin-bottom: 1.5rem;
        }
        .content-body ul, .content-body ol {
          padding-right: 20px;
          margin-bottom: 1.5rem;
        }
        .content-body h2, .content-body h3, .content-body h4 {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          margin: 2.5rem 0 1.5rem;
          color: var(--text-dark);
        }
        .content-body h2 { font-size: 1.8rem; }
        .content-body h3 { font-size: 1.5rem; }
        .content-body h4 { font-size: 1.2rem; color: var(--primary-color); }

        .highlight-box {
          background: #f8f9fa;
          border-right: 4px solid var(--primary-color);
          border-radius: 0 8px 8px 0;
          padding: 25px;
          margin: 30px 0;
        }
        .highlight-box ul, .highlight-box ol {
          padding-right: 20px; /* Indent list for RTL */
          margin: 0;
        }
        .highlight-box ul {
           list-style-type: '✔  ';
        }
        .author-section {
          background-color: var(--light-bg);
          padding: 40px 0;
          border-top: 1px solid #eeeeee;
        }
        .author-card {
          background-color: #ffffff;
          border-radius: 12px;
          padding: 30px;
          display: flex;
          align-items: center;
          gap: 20px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }
        .author-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid var(--primary-color);
        }
        .author-info h4 {
          font-size: 1.2rem;
        }
        .author-info .author-title {
          color: var(--primary-color);
          font-size: 0.9rem;
          margin-bottom: 10px;
        }
        .author-info .author-bio {
          font-size: 0.95rem;
          line-height: 1.5;
        }
      `}</style>
    </>
  );
}
