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
              <span>البيان العام للمؤتمر الوطني التاسع</span>
            </div>
          </div>
        </nav>

        <header className="article-header" dir="rtl" lang="ar">
          <div className="container">
            <div className="article-category">البيان العام</div>
            <h1 className="article-title">المؤتمر الوطني التاسع للمنظمة المغربية لحقوق الإنسان</h1>
            <p className="article-subtitle">تحت شعار &quot;إعمال الحقوق وإحقاقها أساس دولة الحق والقانون&quot;</p>
            <div className="article-meta">
              <div className="meta-item">
                <strong>بقلم المنظمة المغربية لحقوق الإنسان</strong>
              </div>
              <div className="meta-divider"></div>
              <div className="meta-item">
                12 أبريل 2015
              </div>
            </div>
          </div>
        </header>

        <section className="article-hero">
          <div className="container">
            <Image src="/Images/Com.jpg" alt="المؤتمر الوطني التاسع للمنظمة المغربية لحقوق الإنسان" className="hero-image" width={800} height={400} priority />
          </div>
        </section>

        <article className="article-content" dir="rtl" lang="ar">
          <div className="container">
            <div className="content-body">
                <p>انعقد المؤتمر الوطني التاسع للمنظمة المغربية لحقوق الإنسان بالرباط أيام 10-11-12 أبريل 2015، تحت شعار &quot;إعمال الحقوق وإحقاقها أساس دولة الحق والقانون&quot;. وقد تم التمهيد لأشغال المؤتمر بتنظيم ندوة فكرية موضوعاتية حول موضوع &quot;إعمال حقوق الإنسان وإحقاقها : أية مقاربات لأية سياقات؟&quot;. حيث شارك في منتدياتها خبراء وطنيون ودوليون وممثلو الجمعيات غير الحكومية المهتمة. وأثيرت مجموعة من القضايا المتعلقة بإعمال الحقوق وإحقاقها في أفق جرد أولي للمهام المطروحة على المنظمة المغربية لحقوق الإنسان وشركائها في الحركة الحقوقية، ضمن ديناميكية المجتمع المدني المغربي في سياق الديناميكيات الوطنية والإقليمية والدولية.</p>
                <p>وبعد تشكيل لجن المؤتمر والاستماع إلى التقريرين الأدبي والمالي المقدمين من طرف المكتب الوطني. وبعد النقاش الجاد والعميق والبناء من طرف المؤتمرات والمؤتمرين لمضامين التقريرين والمصادقة عليهما. وبعد مناقشة الأوراق المقدمة صودق على مقترحات تعديل القانون الأساسي والخطوط العامة لبرنامج عمل الولاية المقبلة، وأصدر المؤتمر الوطني التاسع للمنظمة المغربية لحقوق الإنسان هذا البيان العام.</p>
                
                <h4>إن المؤتمر الوطني التاسع للمنظمة المغربية لحقوق الإنسان، واعتبارا لـ :</h4>
                <div className="highlight-box">
                    <ul>
                        <li>استناد المنظمة إلى مرجعية كونية ترتكز على قيم الحرية والمساواة والكرامة الإنسانية</li>
                        <li>ربط عملها بروح الدستور وما جاء به من مقتضيات ضامنة للحقوق والحريات</li>
                        <li>كون حقوق الإنسان الفردية والجماعية والفئوية منظومة كلية متفاعلة ومتكاملة ولا تقبل التجزئة؛</li>
                        <li>الدروس والعبر المستخلصة على مدى أكثر من 26 سنة من النضال الحقوقي الهادف إلى نشر ثقافة حقوق الإنسان ومكافحة الانتهاكات والنهوض بأوضاع حقوق الإنسان وفق المرجعية الكونية.</li>
                    </ul>
                </div>
                
                <h3>يسجل ما يلي:</h3>

                <h2>-1- على المستوى الدولي :</h2>
                <div className="highlight-box">
                    <ul>
                        <li>يلاحظ أن الليبرالية الجديدة استطاعت إنتاج أنواع جديدة من الإقصاء وتعميق الهشاشة والتهميش والانطواء الهوياتي الذي شكل مرتعا للتنظيمات السياسية المتطرفة التي لا تعترف بأية هوية تتأسس على الحقوق والحريات. وفي مقابل ذلك، يلاحظ تنامي الحركات الاجتماعية المناهضة لكل أشكال التدبير الإقصائي والقائم على العنصرية والكراهية؛</li>
                        <li>يؤكد على أن تفاقم ظاهرة الهجرة على الصعيد العالمي تعبر على التمادي في عدم الرغبة في اقتسام الثروات بشكل عادي ومكتسبات التقدم العلمي بين جميع الشعوب والأفراد. ويعبر عن قلقه من تسارع وتفاقم أشكال الهجرة خصوصا السرية. ويطالب معالجة إشكالية الهجرة لتشمل انخراط دول الجوار؛</li>
                        <li>يستغرب لتنامي وتيرة الإرهاب الذي تجاوز كل أشكال احتقار الإنسان من استباحة للكرامة الإنسانية إلى الإعلان الرسمي على إقامة أشكال دول جديدة على أساس الانتهاكات الجسيمة لحقوق الإنسان؛</li>
                        <li>يطالب بالالتزام بمبادئ القانون الدولي في جميع مناطق النزاع والحرب والاقتتال دون انتقائية أو تمييز، وعدم استبدال التنمية المستدامة بافتعال الحروب وتعميق الهشاشة والإقصاء؛</li>
                        <li>يدعو المجتمع الدولي إلى اتخاذ التدابير الضرورية للحفاظ على بيئة سليمة ومتوازنة.</li>
                    </ul>
                </div>

                <h2>-2- على المستوى الإقليمي</h2>
                <h4>يعبر المؤتمر عن:</h4>
                 <div className="highlight-box">
                    <ul>
                        <li>إدانته لكل أشكال تشجيع الحرب على حساب السلم في كل من فلسطين، سوريا، العراق، اليمن ، الصومال، نيجريا ومالي؛</li>
                        <li>استنكاره للتطور المتسارع للعنف والإرهاب والكراهية والعنصرية، كما هو الحال في كل من ليبيا وتونس والجزائر ومالي؛</li>
                        <li>إدانته لكل أشكال الاستعمال الهمجي للنساء وإحياء القيم اللاإنسانية والحاطة بالكرامة الإنسانية من قبيل السبايا وزييجات الجهاد وغيرها ؛</li>
                        <li>رفضه القاطع لما آلت إليه الأوضاع الاقتصادية والاجتماعية والثقافية من تردي ناتج عن تقليص الميزانيات العامة، وانعكاس ذلك سلبا على الخدمات الاجتماعية كالصحة والتعليم والشغل؛</li>
                        <li>إدانته للتشريد الممنهج للأطفال وحرمانهم من الحقوق الأساسية، خصوصا تلك التي لا تعوض كالحق في بيئة أسرية آمنة والحق في النمو والتعليم والتكوين.</li>
                    </ul>
                </div>

                <h2>-3- على المستوى الوطني</h2>
                <h4>يعبر المؤتمر عن:</h4>
                <ul>
                    <li>اعتزازه بديناميكية المجتمع المدني بمختلف مشاربه وتزايد حجم تأثيره في السياسات العمومية؛</li>
                    <li>تثمينه لانفتاح المغرب على اللآليات الأممية، من خلال استقباله لكل من المقررين الأمميين الخاصين المكلفين بالتعذيب والاختفاء القسري والثقافة والمفوضية السامية لحقوق الانسان، ويعبر عن قلقه من واقع الحصار الممارس منذ سنين في مخيمات تيندوف جنوب الجزائر ويطالب بفتح المخيمات أمام الآليات الدولية، وبصفة خاصة المفوضية السامية للاجئين حتى تتمكن من إحصاء المقيمين وتوفير الحماية اللازمة لهم؛</li>
                    <li>مطالبته بإعمال مواد الدستور بمقاربة حقوقية من خلال اعتماد المعايير الديمقراطية وسمو القوانين الدولية وما يتطلبه ذلك من مباشرة كل أشكال الملاءمة التشريعية والتحسيسية؛</li>
                    <li>إدانته لكل التسويفات والتبريرات التي تحول دون صدور القوانين التنظيمية التي تهم الحقوق والحريات وربط التسريع بتلبيسها للدلالات الحقوقية</li>
                    <li>انزعاجه من إنزياح النقاش الجاري بخصوص الإيقاف الإرادي للحمل، الذي لا يأخذ بعين الاعتبار صحة المرأة النفسية والجسدية ولا يكترث بالمكاسب المحققة وتماسك المجتمع وتطوره؛</li>
                    <li>قلقه من تهديد الحريات الفردية والجماعية والفئوية، بدل الاحتكام إلى الديمقراطية والمعايير الدولية؛</li>
                    <li>شجبه لتمادي السلطات العمومية في التضييق على الحريات وإنكار الحقوق الفردية والجماعية</li>
                    <li>انزعاجه من الخلل الذي يشوب منهجية إعداد إصلاح القانون الجنائي، التي تؤسس للخروقات والتمييز بواسطة الخصوصية المحلية والتعامل الانتقائي مع المرجعية الحقوقية الكونية سواء في التجريم أو العقاب؛</li>
                    <li>إيجابية انخراط المغرب في المصادقة على الاتفاقيات المتعلقة بالبروتوكول الاختياري الخاص بالوقاية من التعذيب الملحق باتفاقية مناهضة التعذيب، والبروتوكول الاختياري الثاني الملحق باتفاقية حقوق الطفل؛</li>
                    <li>إلحاحه على ضرورة تفعيل مبدا المساواة بين كل من النساء والرجال وبين اللغتين العربية والأمازيغية، وبين الجهات والجماعات الترابية، وتجريم كل أشكال التمييز، والعمل على نشر ثقافة المساواة من خلال تبني استراتيجية منظمة مصاحبة بمخططات على المستويات القصيرة والمتوسطة والبعيدة، على أن تكون قابلة للتقويم تبعا لمؤشرات إجرائية والتحسين والتحيين؛</li>
                    <li>قلقه من تصاعد وتيرة منع الجمعيات من القيام بأنشطتها وعرقلة حقها في التظاهر السلمي وقمع تجمعاتها بالقوة؛</li>
                </ul>

                <h4>مطالبته بـ :</h4>
                 <div className="highlight-box">
                <ul>
                    <li>المصادقة على البروتوكول الاختياري الثاني الملحق بالعهد الدولي الخاص بالحقوق المدنية والسياسية الخاص بإلغاء عقوبة الإعدام، والبرتوكول الاختياري الملحق بالعهد الدولي الخاص بالحقوق الاقتصادية والاجتماعية والثقافية، والبروتوكول الاختياري الملحق الخاص بمحاربة كل أشكال التمييز ضد المرأة، والبروتوكول الاختياري الثالث الملحق باتفاقية حقوق الطفل، ومعاهدة روما المتعلقة بالمحكمة الجنائية الدولية. كما يطالب بضرورة التعجيل بإنشاء الآلية الوطنية المستقلة للوقاية من التعذيب؛</li>
                    <li>العمل على إصدار منظومة الصحة من خلال إحقاق الحق في الصحة والاستفادة الفعلية من التغطية الاجتماعية الشاملة</li>
                    <li>التسريع بإصلاح منظومة التربية والتعليم، ليتحول إلى تعليم مؤهل للقدرات ذات تنافسية مقبولة على مستوى سوق الشغل وفهم الظواهر الطبيعية والسوسيو اقتصادية وقادر على تنمية مكونات المغرب اللغوية والثقافية؛</li>
                    <li>أجرأة مجموع الاتفاقيات التي تمت بين الفرقاء العاملين في مجال الإعلام، وتخصيص المكانة اللائقة لثقافة حقوق الإنسان، بشكل ممنهج يتجاوز المقاربات الموسمية؛</li>
                    <li>العمل على صياغة استراتيجية إنصاتية لتمكين الشباب من ممارسة جميع حقوقهم وتطوير كفاءاتهم وقدراتهم؛</li>
                    <li>تثمينه للتدقيق في الإطار القانوني لتمويل جمعيات المجتمع المدني وتحسينه، على أساس معايير تكرس الحريات والحق في التعبير وتعميم الشفافية في مصادر التمويل والتدبير من خلال تفعيل المكانة الدستورية الفعالة للمجتمع المدني.</li>
                </ul>
                </div>
              <p><strong>الرباط، 12 أبريل 2015</strong></p>
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
                  البيان العام الصادر عن المؤتمر الوطني التاسع للمنظمة المغربية لحقوق الإنسان، المنعقد بالرباط أيام 10-12 أبريل 2015.
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
        .content-body ul {
          padding-right: 20px;
          margin-bottom: 1.5rem;
          list-style-type: disc;
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