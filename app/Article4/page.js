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

      <main>
        <nav className="nav-breadcrumb">
          <div className="container">
            <div className="breadcrumb">
              <Link href="/"  style={{color:'black',backgroundColor:'transparent' , border:'none'}}>Accueil</Link>
              <span>›</span>
              <Link href="/editions"  style={{color:'black',backgroundColor:'transparent' , border:'none'}}>Editions</Link>
              <span>›</span>
              <span>تصريح صحفي بخصوص المؤتمر الوطني الثاني عشر</span>
            </div>
          </div>
        </nav>

        <header className="article-header" dir="rtl" lang="ar">
          <div className="container">
            <div className="article-category">بيان صحفي</div>
            <h1 className="article-title">تصريح صحفي بخصوص انعقاد المؤتمر الوطني الثاني عشر للمنظمة المغربية لحقوق الإنسان</h1>
            <p className="article-subtitle">المجريات، المواقف وآفاق العمل الحقوقي</p>
            <div className="article-meta">
              <div className="meta-item">
                <strong>بقلم المنظمة المغربية لحقوق الإنسان</strong>
              </div>
              <div className="meta-divider"></div>
              <div className="meta-item">
                06 ماي 2025
              </div>
            </div>
          </div>
        </header>

        <section className="article-hero">
          <div className="container">
            <Image src="/Images/Com.jpg" alt="المؤتمر الوطني الثاني عشر للمنظمة المغربية لحقوق الإنسان" className="hero-image" width={800} height={400} priority />
            
          </div>
        </section>

        <article className="article-content" dir="rtl" lang="ar">
          <div className="container">
            <div className="content-body">
                <p>
                    أود باسم رئاسة المنظمة المغربية لحقوق الإنسان أن أرحب بكم/ن وأشكركم/ن على تلبيتكم/ن دعوة الحضور في هذه الندوة الصحفية التي نعقدها في أعقاب انعقاد المؤتمر الوطني الثاني عشر أيام 25-26-27 أبريل 2025 بمدينة الرباط، من أجل تقديم أهم النتائج المنبثقة عن هذا المؤتمر، والآفاق التي يفتحها.
                </p>
                <p>
                    وقبل ذلك، أود أن أثمن الدور الهام الذي يقوم به السادة الصحفيون والصحفيات وعموم الإعلاميات والإعلاميين من أجل تغطية الأحداث الوطنية، إخبارا وتعليقا، ومنها المواقف والأنشطة والمبادرات التي يضطلع بها المجتمع المدني، ولا سيما الحركة الحقوقية.
                </p>
                {/* All other paragraphs would go here... */}
                <h2>أبرز نتائج المؤتمر:</h2>
                <h3>أولا: على الصعيد التنظيمي</h3>
                <div className="highlight-box">
                    <ul>
                        <li>يحضر المؤتمر الوطني، وفق القانون الأساسي للمنظمة...</li>
                        <li>بلغ عدد المؤتمرين والمؤتمرات...</li>
                        <li>صادق المؤتمر الثاني عشر بالتصويت السري...</li>
                        <li>بلغ عدد الأعضاء والعضوات اللذين التحقوا بالمجلس الوطني...</li>
                        <li>عقدت أغلب فروع المنظمة جموعها العامة...</li>
                    </ul>
                </div>

                <h3>ثانيا: على الصعيد القانوني</h3>
                <div className="highlight-box">
                    <ul>
                        <li>صادق المؤتمر على عدد من التعديلات على القانون الأساسي...</li>
                        <li>رفع عدد أعضاء وعضوات المجلس الوطني...</li>
                        <li>توسيع عدد حالات التنافي في المجلس الوطني...</li>
                        <li>توحيد العضوية بحذف العضوية المساندة.</li>
                        <li>إنشاء هيكل تنظيمي جديد...</li>
                        <li>إمكانية تأسيس فروع للمنظمة من طرف مغاربة العالم...</li>
                    </ul>
                </div>

                <h3>ثالثا: على الصعيد الحقوقي</h3>
                <div className="highlight-box">
                    <h4>على المستوى الوطني:</h4>
                    <ul>
                       {/* All national list items... */}
                        <li>التسريع بوضع سياسة عمومية مندمجة ودامجة للشباب...</li>
                    </ul>
                    <h4>على المستوى الإقليمي:</h4>
                    <ul>
                        {/* All regional list items... */}
                        <li>المطالبة الدول المغاربية باحترام حقوق المهاجرين...</li>
                    </ul>
                    <h4>على المستوى الدولي:</h4>
                    <ul>
                        {/* All international list items... */}
                        <li>التأكيد على كون إحلال السلام في المنطقة رهين بإقامة دولة فلسطين المستقلة...</li>
                    </ul>
                </div>
                <h2>توصيات المؤتمر للقيادة الجديدة:</h2>
                <div className="highlight-box">
                    <ul>
                        <li>وضع استراتيجية عمل طيلة الولاية الانتدابية لأجهزة المنظمة.</li>
                        <li>وضع برامج منsجمة لتفعيل استراتيجية العمل، مع تجويد آليات التنفيذ.</li>
                        <li>التعبئة من أجل ضمان انخراط جميع مكونات المنظمة في تفعيل استراتيجيتها.</li>
                    </ul>
                </div>
                <p>
                    تلكم كانت أهم المخرجات التي أفضت اليها أشغال المؤتمر الوطني الثاني عشر للمنظمة المغربية لحقوق الإنسان، وفي نهاية هذا التصريح أجدد للجميع شكر المنظمة على حضوركم/ن واهتمامكم/ن بنتائج هذا المؤتمر. ونحن رهن الإشارة للجواب على ما تنوون طرحه من أسئلة ذات الصلة. فمرحبا بكم وبكن.
                </p>
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
                  تصريح صحفي صادر عن المنظمة المغربية لحقوق الإنسان بخصوص نتائج وتوصيات المؤتمر الوطني الثاني عشر.
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
        .image-caption {
            text-align: center;
            font-size: 0.9rem;
            color: var(--text-medium);
            margin-top: 10px;
            font-style: italic;
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
        .highlight-box ul {
          padding-right: 20px; /* Indent list for RTL */
          margin: 0;
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