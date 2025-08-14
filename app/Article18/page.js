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
            <div className="breadcrumb" dir="rtl">
              <Link href="/" style={{color:'black',backgroundColor:'transparent' , border:'none'}}>الرئيسية</Link>
              <span>‹</span>
              <Link href="/editions" style={{color:'black',backgroundColor:'transparent' , border:'none'}}>إصدارات</Link>
              <span>‹</span>
              <span>بيان حول الأحداث العنصرية بإسبانيا</span>
            </div>
          </div>
        </nav>

        <header className="article-header" dir="rtl" lang="ar">
          <div className="container">
            <div className="article-category">بيان</div>
            <h1 className="article-title">بيان حول الأحداث العنصرية بإقليم مورسيا بإسبانيا</h1>
            <p className="article-subtitle">استنكار الاعتداءات العنصرية على المهاجرين المغاربة والتحذير من المد العنصري</p>
            <div className="article-meta">
              <div className="meta-item">
                <strong>المكتب التنفيذي - المنظمة المغربية لحقوق الإنسان</strong>
              </div>
              <div className="meta-divider"></div>
              <div className="meta-item">
                21 يوليوز 2025
              </div>
            </div>
          </div>
        </header>

        <section className="article-hero">
          <div className="container">
            <div className="hero-image-wrapper">
              <Image src="/Images/Com.jpg" alt="الأحداث العنصرية بإقليم مورسيا بإسبانيا ومحاربة التمييز" className="hero-image" width={800} height={400} priority />
            </div>
          </div>
        </section>

        <article className="article-content" dir="rtl" lang="ar">
          <div className="container">
            <div className="content-body">
                <p className="lead-paragraph">تابع المكتب التنفيذي للمنظمة المغربية لحقوق الإنسان، الأحداث الأليمة التي جرت في إقليم مورسيا بإسبانيا، حيث تمت مطاردات عنصرية دموية خطيرة لمهاجرين أغلبيتهم مغاربة يقيمون بمدينة &ldquo;توري باتشينو&rdquo; منذ أكثر من عقدين.</p>
                
                <div className="highlight-box">
                    <h3>قلق شديد من تصاعد المد العنصري</h3>
                    <p>إن المنظمة لتسجل بقلق شديد تصاعد المد العنصري لليمين المتطرف الذي يذهب ضحيته المهاجرون بإسبانيا، ويضرب في العمق النسيج الاجتماعي الإسباني، ويحيي مشاعر العنصرية والخوف والكراهية.</p>
                </div>

                <p>وتحذر المنظمة من الانعكاسات السلبية لهذه الأحداث على العلاقات المغربية الإسبانية وعلى صورة إسبانيا داخل المجتمع المغربي.</p>

                <h2>السياق والخلفية</h2>
                
                <p>شهدت مدينة &ldquo;توري باتشينو&rdquo; في إقليم مورسيا بإسبانيا أحداثا عنصرية خطيرة استهدفت المهاجرين، وخاصة المغاربة منهم الذين يقيمون في هذه المدينة منذ أكثر من عقدين من الزمن، ويساهمون في التنمية الاقتصادية والاجتماعية للمنطقة.</p>

                <p>وتأتي هذه الأحداث في سياق تصاعد خطابات الكراهية والتمييز التي يروج لها اليمين المتطرف في إسبانيا، والتي تستهدف المهاجرين وتحولهم إلى كبش فداء لمشاكل اقتصادية واجتماعية أخرى.</p>

                <h2>موقف المنظمة المغربية لحقوق الإنسان</h2>
                
                <p>وأمام هذه الأحداث فإن المنظمة المغربية لحقوق الإنسان:</p>

                <div className="highlight-box special-calls">
                    <ul>
                        <li><strong>تستنكر هذه الاعتداءات العنصرية على المهاجرين وتعتبرها تقويضا للمسار الذي قطعته إسبانيا في مجال إدماج المهاجرين</strong></li>
                        
                        <li><strong>تندد بالأعمال العنصرية التي يقوم بها منتمون إلى &ldquo;حزب فوكس&rdquo; اليميني المتطرف وبكل أعمال التحريض على الكراهية التي يتم الترويج لها عبر وسائل الإعلام الإسبانية الموالية لليمين المتطرف وبفضاءات التواصل الاجتماعي</strong></li>
                        
                        <li><strong>تدين توظيف اليمين المتطرف لملف المهاجرين ولأحداث ثانوية واستغلالها بتحويلها لورقة انتخابية</strong></li>
                        
                        <li><strong>تدعو القوى الحقوقية والديمقراطية بإسبانيا لتتجند ضد تصاعد موجة الميز العنصري، وعدم التسامح، بكل أشكاله ومظاهره، والوقوف في وجه كل الأنشطة التي تقوم على الترويج للتمييز والعنصرية، كما تنص على ذلك الاتفاقية الدولية للقضاء على جميع أشكال التمييز العنصري</strong></li>
                        
                        <li><strong>تدعو لفتح تحقيق في هذه الأحداث العنصرية الخطيرة، وتشدد على ضرورة محاكمة كل المتورطين فيها، وكل من يروج للخطاب العنصري والتمييزي ضد المهاجرين</strong></li>
                    </ul>
                </div>

                <h3>حزب فوكس ودوره في التحريض</h3>
                
                <p>تشير المنظمة إلى الدور الخطير الذي يلعبه حزب &ldquo;فوكس&rdquo; اليميني المتطرف في إسبانيا في تأجيج مشاعر الكراهية والعنصرية ضد المهاجرين، من خلال خطابات التحريض والدعاية المعادية للأجانب.</p>

                <div className="highlight-box">
                    <h4>وسائل الإعلام والتحريض</h4>
                    <p>تنتقد المنظمة الدور السلبي لبعض وسائل الإعلام الإسبانية الموالية لليمين المتطرف، وكذلك منصات التواصل الاجتماعي، في نشر خطابات الكراهية والتحريض ضد المهاجرين، مما يساهم في تأجيج التوترات العنصرية.</p>
                </div>

                <h3>المرجعية القانونية الدولية</h3>
                
                <p>تستند المنظمة في مواقفها إلى الاتفاقية الدولية للقضاء على جميع أشكال التمييز العنصري، والتي تلزم الدول الأطراف بمحاربة التمييز والعنصرية بكل أشكالهما، وحماية حقوق الأقليات والمهاجرين.</p>

                <p>كما تؤكد على ضرورة احترام المبادئ الأساسية لحقوق الإنسان، بما في ذلك مبدأ عدم التمييز والمساواة في الكرامة الإنسانية، بغض النظر عن الأصل أو الجنسية أو اللون.</p>

                <h3>تأثير على العلاقات المغربية الإسبانية</h3>
                
                <p>تحذر المنظمة من أن هذه الأحداث العنصرية قد تؤثر سلبا على العلاقات المغربية الإسبانية، التي تشهد تطورا إيجابيا في مختلف المجالات. كما تعبر عن قلقها من تأثير هذه الأحداث على صورة إسبانيا داخل المجتمع المغربي.</p>

                <div className="highlight-box">
                    <h4>المساهمة الإيجابية للمهاجرين المغاربة</h4>
                    <p>تذكر المنظمة بالمساهمة الإيجابية والهامة للمهاجرين المغاربة في التنمية الاقتصادية والاجتماعية في إسبانيا، وخاصة في القطاع الزراعي والخدمات، مما يجعل استهدافهم بالعنف العنصري أمرا غير مبرر ومرفوضا.</p>
                </div>

                <h3>الدعوة للعدالة والمحاسبة</h3>
                
                <p>تشدد المنظمة على ضرورة فتح تحقيق شامل وشفاف في هذه الأحداث العنصرية، ومحاكمة جميع المتورطين فيها أمام القضاء الإسباني. كما تدعو إلى اتخاذ إجراءات حازمة ضد كل من يروج للخطاب العنصري والتمييزي.</p>

                <p className="conclusion"><strong>في الختام،</strong> تجدد المنظمة المغربية لحقوق الإنسان دعوتها للقوى الديمقراطية والحقوقية في إسبانيا للوقوف بحزم ضد موجة العنصرية والتمييز، وحماية حقوق المهاجرين وكرامتهم الإنسانية، انطلاقا من القيم الديمقراطية وحقوق الإنسان التي تأسست عليها إسبانيا الحديثة.</p>

            </div>
          </div>
        </article>

        <section className="author-section">
          <div className="container">
            <div className="author-card" dir="rtl">
              <div className="author-avatar-wrapper">
                <Image src="/omdhlogo.png" alt="شعار المنظمة المغربية لحقوق الإنسان" className="author-avatar" width={80} height={80}/>
              </div>
              <div className="author-info">
                <h4>المكتب التنفيذي للمنظمة المغربية لحقوق الإنسان</h4>
                <p className="author-title">بيان</p>
                <p className="author-bio">
                  بيان استنكار الأحداث العنصرية بإقليم مورسيا بإسبانيا والتنديد بالاعتداءات على المهاجرين المغاربة والدعوة لمحاربة التمييز والعنصرية.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        /* CSS Variables for consistent theming */
        :root {
          --primary-color: #1957a6;
          --primary-light: #e8f1fd;
          --primary-dark: #134080;
          --text-dark: #1a1a1a;
          --text-medium: #4a5568;
          --text-light: #718096;
          --light-bg: #f8fafc;
          --border-light: #e2e8f0;
          --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
          --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          --gradient-primary: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
          --gradient-light: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
        }

        /* Global container styling */
        .container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Enhanced breadcrumb navigation */
        .nav-breadcrumb {
          padding: 20px 0;
          background: var(--gradient-light);
          border-bottom: 1px solid var(--border-light);
          backdrop-filter: blur(10px);
        }

        .breadcrumb {
          font-size: 0.9rem;
          color: var(--text-medium);
          font-weight: 500;
        }

        .breadcrumb a {
          color: var(--primary-color);
          text-decoration: none;
          padding: 4px 8px;
          border-radius: 6px;
          transition: all 0.3s ease;
        }

        .breadcrumb a:hover {
          color: var(--primary-dark);
          background-color: var(--primary-light);
          transform: translateY(-1px);
        }

        .breadcrumb span {
          margin: 0 12px;
          color: var(--text-light);
          font-weight: 300;
        }

        /* Enhanced article header */
        .article-header {
          background: var(--gradient-light);
          padding: 60px 0 80px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .article-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 20%, rgba(25, 87, 166, 0.05) 0%, transparent 50%);
          pointer-events: none;
        }

        .article-category {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--primary-color);
          background: var(--primary-light);
          padding: 8px 20px;
          border-radius: 25px;
          margin-bottom: 24px;
          border: 2px solid rgba(25, 87, 166, 0.1);
          position: relative;
          z-index: 1;
          transition: all 0.3s ease;
        }

        .article-category:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .article-title {
          font-family: 'Poppins', 'system-ui', sans-serif;
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 24px;
          color: var(--text-dark);
          position: relative;
          z-index: 1;
          letter-spacing: -0.02em;
        }

        .article-subtitle {
          font-size: 1.2rem;
          color: var(--text-medium);
          max-width: 700px;
          margin: 0 auto 40px;
          line-height: 1.7;
          font-weight: 400;
          position: relative;
          z-index: 1;
        }

        .article-meta {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 24px;
          font-size: 0.95rem;
          position: relative;
          z-index: 1;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-medium);
          font-weight: 500;
        }

        .meta-divider {
          width: 2px;
          height: 20px;
          background: linear-gradient(to bottom, transparent, var(--border-light), transparent);
          border-radius: 1px;
        }

        /* Enhanced hero image section */
        .article-hero {
          margin: -40px auto 60px;
          max-width: 900px;
          padding: 0 24px;
          position: relative;
          z-index: 2;
        }

        .hero-image-wrapper {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: var(--shadow-xl);
          transition: all 0.4s ease;
        }

        .hero-image-wrapper:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .hero-image-wrapper::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(25, 87, 166, 0.1) 0%, transparent 50%);
          z-index: 1;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .hero-image-wrapper:hover::before {
          opacity: 1;
        }

        .hero-image {
          width: 100%;
          height: auto;
          max-height: 500px;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .hero-image-wrapper:hover .hero-image {
          transform: scale(1.05);
        }

        /* Enhanced article content */
        .article-content {
          background-color: #ffffff;
          padding: 80px 0;
          position: relative;
        }

        .content-body {
          font-size: 1.125rem;
          line-height: 1.8;
          color: var(--text-dark);
          font-weight: 400;
        }

        .lead-paragraph {
          font-size: 1.25rem;
          font-weight: 500;
          color: var(--text-dark);
          margin-bottom: 2.5rem;
          padding: 20px;
          background: var(--primary-light);
          border-radius: 12px;
          border-left: 4px solid var(--primary-color);
          position: relative;
        }

        .content-body p, .content-body li {
          margin-bottom: 1.75rem;
        }

        .content-body ul {
          padding-right: 24px;
          margin-bottom: 2rem;
          list-style: none;
        }

        .content-body ul li {
          position: relative;
          padding-right: 24px;
        }

        .content-body ul li::before {
          content: '✓';
          position: absolute;
          right: 0;
          color: var(--primary-color);
          font-weight: bold;
          font-size: 1.1em;
        }

        .content-body h2, .content-body h3, .content-body h4 {
          font-family: 'Poppins', 'system-ui', sans-serif;
          font-weight: 700;
          margin: 3rem 0 1.5rem;
          color: var(--text-dark);
          position: relative;
        }

        .content-body h2 {
          font-size: 2rem;
          color: var(--primary-color);
          padding-bottom: 12px;
          border-bottom: 3px solid var(--primary-light);
          margin-bottom: 2rem;
        }

        .content-body h3 {
          font-size: 1.6rem;
        }

        .content-body h4 {
          font-size: 1.3rem;
          color: var(--primary-color);
          margin-top: 2.5rem;
        }

        /* Enhanced highlight boxes */
        .highlight-box {
          background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
          border: 1px solid var(--border-light);
          border-right: 5px solid var(--primary-color);
          border-radius: 12px;
          padding: 32px;
          margin: 40px 0;
          box-shadow: var(--shadow-md);
          position: relative;
          transition: all 0.3s ease;
        }

        .highlight-box:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }

        .highlight-box::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 5px;
          height: 100%;
          background: var(--gradient-primary);
          border-radius: 0 12px 12px 0;
        }

        .special-calls {
          background: linear-gradient(135deg, var(--primary-light) 0%, #ffffff 100%);
          border-right-color: var(--primary-dark);
        }

        .special-calls::before {
          background: linear-gradient(to bottom, var(--primary-color), var(--primary-dark));
        }

        .highlight-box ul {
          margin: 0;
          padding-right: 0;
        }

        .highlight-box ul li {
          padding: 8px 0;
          border-bottom: 1px solid rgba(25, 87, 166, 0.1);
          transition: all 0.2s ease;
        }

        .highlight-box ul li:last-child {
          border-bottom: none;
        }

        .highlight-box ul li:hover {
          background-color: rgba(25, 87, 166, 0.05);
          border-radius: 8px;
          padding: 8px 12px;
          margin: 0 -12px;
        }

        .conclusion {
          font-size: 1.2rem;
          padding: 24px;
          background: var(--gradient-light);
          border-radius: 12px;
          border: 1px solid var(--border-light);
          margin-top: 3rem;
          font-weight: 500;
          line-height: 1.7;
        }

        /* Enhanced author section */
        .author-section {
          background: var(--gradient-light);
          padding: 60px 0;
          border-top: 1px solid var(--border-light);
        }

        .author-card {
          background: linear-gradient(135deg, #ffffff 0%, #fefefe 100%);
          border-radius: 20px;
          padding: 40px;
          display: flex;
          align-items: center;
          gap: 24px;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--border-light);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .author-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 80% 20%, rgba(25, 87, 166, 0.05) 0%, transparent 50%);
          pointer-events: none;
        }

        .author-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-xl);
        }

        .author-avatar-wrapper {
          position: relative;
          flex-shrink: 0;
        }

        .author-avatar-wrapper::before {
          content: '';
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          background: var(--gradient-primary);
          border-radius: 50%;
          z-index: -1;
        }

        .author-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
          background-color: white;
          padding: 4px;
          transition: transform 0.3s ease;
        }

        .author-card:hover .author-avatar {
          transform: scale(1.05);
        }

        .author-info {
          flex: 1;
          position: relative;
          z-index: 1;
        }

        .author-info h4 {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 8px;
        }

        .author-info .author-title {
          color: var(--primary-color);
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .author-info .author-bio {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--text-medium);
          font-weight: 400;
        }

        /* Responsive design improvements */
        @media (max-width: 768px) {
          .container {
            padding: 0 20px;
          }

          .article-header {
            padding: 40px 0 60px;
          }

          .article-title {
            font-size: 2rem;
          }

          .article-subtitle {
            font-size: 1.1rem;
          }

          .article-meta {
            flex-direction: column;
            gap: 12px;
          }

          .meta-divider {
            display: none;
          }

          .article-hero {
            margin: -30px auto 40px;
          }

          .content-body {
            font-size: 1.05rem;
          }

          .content-body h2 {
            font-size: 1.6rem;
          }

          .highlight-box {
            padding: 24px;
            margin: 30px 0;
          }

          .author-card {
            flex-direction: column;
            text-align: center;
            padding: 30px;
          }

          .author-avatar {
            width: 100px;
            height: 100px;
          }
        }

        /* Smooth scrolling and focus states */
        * {
          scroll-behavior: smooth;
        }

        *:focus {
          outline: 2px solid var(--primary-color);
          outline-offset: 2px;
        }

        /* Print styles */
        @media print {
          .nav-breadcrumb,
          .author-section {
            display: none;
          }
          
          .article-content {
            padding: 20px 0;
          }
          
          .highlight-box {
            break-inside: avoid;
          }
        }
      `}</style>
    </>
  );
}