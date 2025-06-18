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
              <span>بلاغ حول اختتام أشغال المؤتمر الوطني الثالث</span>
            </div>
          </div>
        </nav>

        <header className="article-header" dir="rtl" lang="ar">
          <div className="container">
            <div className="article-category">بلاغ</div>
            <h1 className="article-title">اختتام أشغال المؤتمر الوطني الثالث للمنظمة</h1>
            <p className="article-subtitle"></p>
            <div className="article-meta">
              <div className="meta-item">
                <strong>بقلم رئيس المنظمة</strong>
              </div>
              <div className="meta-divider"></div>
              <div className="meta-item">
                31 مارس 1997
              </div>
            </div>
          </div>
        </header>

        <section className="article-hero">
          <div className="container">
            <Image src="/Images/Com.jpg" alt="المؤتمر الوطني الثالث للمنظمة المغربية لحقوق الإنسان" className="hero-image" width={800} height={400} priority />
          </div>
        </section>

        <article className="article-content" dir="rtl" lang="ar">
          <div className="container">
            <div className="content-body">
                <p>أنهى المؤتمر الثالث للمنظمة المغربية لحقوق الإنسان أشغاله مساء يوم الأحد 30 مارس 1997. ولقد قرر المؤتمر تعديل بعض مقتضيات القانون الأساسي وإدخال تعديل على الترجمة الفرنسية لتسمية المنظمة. كما صادق على بيان عام سوف ينشر فيما بعد. وانتخب المجلس الوطني المكون من 65 عضوا وذلك عن طريق نظام التصويت على اللائحة.</p>
                <p>وإثر نهاية أشغال المؤتمر، اجتمع المجلس الوطني وأعاد انتخاب الأستاذ عبد العزيز بناني رئيسا للمنظمة. كما قرر عقد دورته المقبلة يوم الأحد 13 أبريل بمقر المنظمة ابتداء من الساعة العاشرة صباحا. وسيكون ضمن جدول أعماله انتخاب أعضاء المكتب الوطني.</p>
              <p><strong>الرباط، 31 مارس 1997</strong></p>
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
                  بلاغ حول اختتام أشغال المؤتمر الوطني الثالث للمنظمة المغربية لحقوق الإنسان، المنعقد بالرباط يوم 30 مارس 1997.
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
