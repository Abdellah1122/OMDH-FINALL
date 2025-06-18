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
              <span>البيان العام الصادر عن الجمع التأسيسي</span>
            </div>
          </div>
        </nav>

        <header className="article-header" dir="rtl" lang="ar">
          <div className="container">
            <div className="article-category">البيان العام</div>
            <h1 className="article-title">البيان العام الصادر عن الجمع التأسيسي</h1>
            <p className="article-subtitle">المنظمة المغربية لحقوق الإنسان - 10 دجنبر 1988</p>
            <div className="article-meta">
              <div className="meta-item">
                <strong>المنظمة المغربية لحقوق الإنسان</strong>
              </div>
              <div className="meta-divider"></div>
              <div className="meta-item">
                10 ديسمبر 1988
              </div>
            </div>
          </div>
        </header>

        <section className="article-hero">
          <div className="container">
            <Image src="/Images/Com.jpg" alt="الجمع التأسيسي للمنظمة المغربية لحقوق الإنسان" className="hero-image" width={800} height={400} priority />
          </div>
        </section>

        <article className="article-content" dir="rtl" lang="ar">
          <div className="container">
            <div className="content-body">
                <p>إن الجمع العام التأسيسي للمنظمة المغربية لحقوق الإنسان المنعقد بالرباط يوم 10 دجنبر 1988 يوم الذكرى الأربعينية للإعلان العالمي لحقوق الإنسان.</p>
                <p>وبعد مرور سنة كاملة على انتفاضة الشعب الفلسطيني البطل الذي يواجه أبشع ضروب قمع حقوق الإنسان والشعوب والذي يكتب أروع صفحات تاريخه بدماء أبناء حجارته.</p>
                <p>وبعد مصادقة على وثيقة التأسيس التي تحدد هوية وأهداف المنظمة وإطار نشاطها.</p>
                <p>وبعد المصادقة على قانونها الأساسي الذي يدقق وسائل عملها ويضبط أسسها التنظيمية، وأسلوب عمل هياكلها الديمقراطية.</p>
                <p>وبعد الاستماع إلى ممثلي مختلف منظمات الدفاع عن حقوق الإنسان الشقيقة والصديقة.</p>
                <p>وإذ يسجل باعتزاز كبير حضور ممثلي الأحزاب والهيئات الوطنية في أعلى مستوى كتعبير عن مساندتها المعنوية وكذا ممثلي دولة فلسطين الشقيقة.</p>
                <p>وإذ يحيى روح المثابرة والتفاني التي أبان عنها أعضاء لجنتها التحضيرية التي تثبت على مبادئها المثلى طيلة أكثر من سنة، حيث عكفت على أحكام التهيئ المعنوي والمادي الملائم رغم الصعاب والعراقيل.</p>
                <p>وإذ تسجل تجاوب أوسع فئات المجتمع مع الأهداف النبيلة التي سطرتها المنظمة لنفسها، والذي تبلور في الاهتمام الكبير الذي أعارته لها منذ بداية تحرك نواتها الأولى، وفي الحضور المكثف للمؤسسين من كل أنحاء البلاد.</p>
                
                <h4>ليؤكد المبادئ الأساسية التالية التي تقوم عليها المنظمة :</h4>
                <ol style={{ listStyleType: 'decimal', paddingRight: '20px' }}>
                    <li>إن الدفاع عن حقوق الإنسان هو بالدرجة الأولى عمل حضاري وإنساني لا يقف عند حدود زمان أو مكان.</li>
                    <li>إن قيام هذه المنظمة بالمغرب يأتي في سياق مسلسل تاريخي حافل وتراكمات أجيال وأجيال من بناة هذه الأمة المتسمة بأجمل صفات الإقدام والتفتح والتسامح والحرية والحرص على هويتها وقيمتها الأصيلة.</li>
                    <li>إن قضية حقوق الإنسان بالمغرب ليست لا قضية جديدة، ولا اهتماما مستحدثا بل تتمتع برصيد قديم يتجسم أساسا في ذلك الربط الجدلي القائم تاريخيا بين قضايا الوطن وقضايا الشعب والذي تبلور في مواقف الملك والحركة الوطنية ثم على المستوى الدستوري والتشريعي.</li>
                    <li>إن قضية حقوق الإنسان مهما كانت قوة التنصيص التشريعي عليها، فإن التجربة أكدت دوما ضرورة اليقظة المستمرة حيال كل التجاوزات الممكنة، على أي مستوى كان.</li>
                    <li>إن قضية الدفاع عن حقوق الإنسان تستدعي تظافر جهود كل النيات الحسنة بعيدا عن كل تحيز أو عصبية ضيقة لأنها ليست قضية طبقة أو فئة، بل قضية هوية الإنسان كإنسان خلقه الله كريما ويجب أن يعيش مكرما.</li>
                    <li>إن المنظمة المغربية لحقوق الإنسان التي تكونت على ضوء هذه المبادئ السامية إنما تعمل على بلورتها فوق أرض الواقع من خلال ممارسة قوامها مجموعة من الثوابت الأساسية وهي :
                        <ul style={{ paddingRight: '20px', listStyleType: 'circle' }}>
                            <li>أ- التشبث بالدفاع عن المصالح العليا للوطن والإنسان العربي</li>
                            <li>ب- التشبث بالمشروعية ومبادئ دولة القانون</li>
                            <li>ج- التشبث باستقلال المنظمة إزاء السلطة والتيارات السياسية</li>
                        </ul>
                    </li>
                    <li>إنها على ضوء التوجهات الواردة في وثيقة التأسيس تعتبر أن توطيد الديمقراطية وطنيا ومحليا، هو الضمانة الكبرى لتثمين حقوق الإنسان بمعناها الحضاري الواسع سياسيا واجتماعيا وثقافيا واقتصاديا، وإن ذلك يقتضي علاقة نوعية جديدة بين الإدارة والمواطنين في كل المستويات يكون منطلقها أن الإدارة هي التي تخدم المواطن وليس العكس.</li>
                    <li>وأنها تطالب، على ضوء كل ما سبق :
                        <ul style={{ paddingRight: '20px', listStyleType: 'circle' }}>
                            <li>بتطبيق نزيه للقانون في علاقة الحاكمين بالمحكومين.</li>
                            <li>بالعدول عن التراجعات التشريعية التي ضيقت من مجال ممارسة الحريات.</li>
                            <li>بالسماح للتعددية الفكرية والسياسية أن تتبلور بكل حرية وبدون تضييق ولا تحريف.</li>
                            <li>برفع كل تضييق على التعبير والرأي والنشر والإيداع.</li>
                            <li>بانطلاق سراح جميع المعتقلين في القضايا السياسية والسماح بعودة المغتربين مع تمتيع المعنيين بالأمر بكامل حقوقهم.</li>
                            <li>بالمصادقة على جميع الاتفاقيات والمواثيق الدولية والإقليمية ذات العلاقة بحقوق الإنسان.</li>
                            <li>بمراجعة قوانين وضعية السجون والسجناء وتحسين أوضاعها.</li>
                            <li>بوضع إطار قانوني لتنظيم ومراقبة أماكن وظروف الوضع تحت الحراسة.</li>
                            <li>بإدماج مواد حقوق الإنسان في البرامج التعليمية الثانوية العليا.</li>
                        </ul>
                    </li>
                    <li>وأنها تؤكد أن حقوق الإنسان لها أيضا مدلول اقتصادي واجتماعي وثقافي، مما يستلزم ضمان حق المواطن في العمل والصحة وفي الراحة والترفيه وفي الضمان الاجتماعي للجميع كما أن من حقه التوفر على وسائل التعليم والمعرفة والتثقيف والعيش في بيئة سليمة.</li>
                    <li>أنها من أجل هذه الأهداف تعلن عن استعدادها التام للنضال والتعاون مع كل من يهتم قولا وفعلا بحقوق الإنسان، كما أنها تعلن عن استعدادها للتحاور مع السلطات المعنية للعمل على تمكين كل ذي حق حقه، علما أن وظيفتها هي الدفاع عن ضحايا خرق حقوق الإنسان بمختلف الوسائل المشروعة.</li>
                    <li>تدعو المنظمة المغربية لحقوق الإنسان إلى إعداد ميثاق وطني لحقوق الإنسان.</li>
                    <li>تدعو المجلس المنتخب والمكتب الوطني للانكباب فورا على إنجاز المهام التي تعبأت من أجلها المنظمة والعمل على تنظيمها أفقيا على مستوى نواحي وأقاليم المملكة، حتى يرتفع الوعي بقضية حقوق الإنسان ويتسع إشعاع مبادئها وتتوطد ممارستها خدمة لكرامة المواطن وحقوقه، ورفعا من شأن البلاد على المسرح الدولية.</li>
                    <li>تدعوهما إلى توثيق روابط الصداقة والعمل المشتركة مع كل المدافعين عن حقوق الإنسان وطنيا ومغاربيا وعربيا وافريقيا ودوليا.</li>
                </ol>
                <p>عاشت حقوق الإنسان</p>
                <p>عاش المغرب موحدا حرا ديمقراطيا كريما.</p>
                <p><strong>الرباط 10 دجنبر 1988</strong></p>
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
                  البيان العام الصادر عن الجمع التأسيسي للمنظمة المغربية لحقوق الإنسان، المنعقد بالرباط يوم 10 دجنبر 1988.
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
