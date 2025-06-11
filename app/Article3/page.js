'use client';

// Import our reusable components and Next.js features
// Note the ../../ path to go up two folders
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function ArticlePage() {
  return (
    <>
      <Navbar />

     <main>
    <nav className="nav-breadcrumb">
      <div className="container">
        <div className="breadcrumb">
          <Link href="/"  style={{color:'black',backgroundColor:'transparent' , border:'none'}}> Accueil</Link>
          <span>›</span>
          <Link href="/editions"  style={{color:'black',backgroundColor:'transparent' , border:'none'}}>Editions</Link>
          <span>›</span>
          <span>البيان العام الصادر عن المؤتمر الوطني الثاني عشر</span>
        </div>
      </div>
    </nav>

    <header className="article-header" dir="rtl" lang="ar">
      <div className="container">
        <div className="article-category">Actualité</div>
        <h1 className="article-title">البيان العام الصادر عن المؤتمر الوطني الثاني عشر المنعقد أيام 25-26-27 أبريل 2025</h1>
        <p className="article-subtitle">Moroccan Organization of Human Rights – Organisation Marocaine des Droits Humains</p>
        <div className="article-meta">
          <div className="meta-item">
            <strong>بقلم المنظمة المغربية لحقوق الإنسان</strong>
          </div>
          <div className="meta-divider"></div>
          <div className="meta-item">
            27 أبريل 2025
          </div>
        </div>
      </div>
    </header>

    <section className="article-hero">
      <div className="container">
        <Image src="/Images/Com.jpg" alt="المؤتمر الوطني الثاني عشر للمنظمة المغربية لحقوق الانسان" className="hero-image" width={800} height={400} priority />
      </div>
    </section>

    <article className="article-content" dir="rtl" lang="ar">
      <div className="container">
        <div className="content-body">
          {/* FIX: Replaced " with &quot; */}
          <p>انعقد المؤتمر الوطني الثاني عشر للمنظمة المغربية لحقوق الانسان أيام 25-26-27 أبريل 2025 بالمعهد الوطني لكتابة الضبط والمهن القانونية والقضائية تحت شعار &quot;أي فعلية لحقوق الانسان في ظل التحولات الدولية الراهنة؟&quot; ، وقد تم التمهيد لأشغال المؤتمر بتنظيم ندوة موضوعاتية تحت عنوان &quot;الحقوق الاقتصادية والاجتماعية والثقافية في السياسات العمومية وسؤال الفعلية&quot;، وتهدف هذه الندوة إلى طرح وضعية هذه الحقوق انطلاقا من السياسات العمومية التي نهجتها الحكومة في ظل تدبيرها للشأن العمومي، وقد شارك في تأطيرها مجموعة من الأساتذة الجامعيين والخبراء والفاعلين الحقوقيين الوطنيين والدوليين حيث طرحت مجموعة من الأسئلة والاشكالات المرتبطة بوضعية الحقوق الاقتصادية والاجتماعية والثقافية في ظل سؤال مركزي مرتبط بمدى فعليتها في السياسات العمومية، مؤكدين على ضرورة التزام الحكومة بحماية هذه الحقوق وضمان فعليتها وفقا لالتزامات المغرب الدولية والوطنية المؤطرة بالاتفاقيات والصكوك ومواثيق حقوق الانسان والدستور المغربي.</p>
          <p>وقد خلصت هذه الندوة الموضوعاتية إلى بلورة توصيات متعلقة بحماية الحقوق الاقتصادية والاجتماعية والثقافية والضمانات الأساسية لفعليتها في إطار السياسات العمومية مع تقديم ملاحظات حول كيفية عمل الفاعلين الحقوقيين لكسب هذا الرهان الحقوقي.</p>
          {/* ... More paragraphs ... */}
          <h2>نتائج المؤتمر:</h2>
          <div className="highlight-box">
            <ul>
              <li>يثمن المؤتمر المكتسبات الحقوقية بالمغرب...</li>
              <li>يسجل المؤتمر بإيجابية العفو الملكي على مجموعة من الصحفيين...</li>
              {/* ... All other list items ... */}
              <li>يؤكد على كون إحلال السلام في المنطقة رهين بإقامة دولة فلسطين المستقلة وعاصمتها القدس الشرقية على حدود 67.</li>
            </ul>
          </div>
          <h2>توصيات المؤتمر:</h2>
          <div className="highlight-box">
            <ul>
              <li>وضع استراتيجية عمل طيلة الولاية الانتدابية لأجهزة المنظمة.</li>
              <li>وضع برامج منسجمة لتفعيل استراتيجية العمل، مع تجويد آليات التنفيذ.</li>
              <li>التعبئة من أجل ضمان انخراط جميع مكونات المنظمة في تفعيل استراتيجيتها.</li>
            </ul>
          </div>
        </div>
      </div>
    </article>

    <section className="author-section">
      <div className="container">
        <div className="author-card" dir="rtl">
          <Image src="/omdhlogo.png" alt="شعار المنظمة المغربية لحقوق الإنسان" className="author-avatar" width={80} height={80} />
          <div className="author-info">
            <h4>المنظمة المغربية لحقوق الإنسان</h4>
            <p className="author-title">جهة الإصدار</p>
            <p className="author-bio">
              البيان العام الصادر عن المؤتمر الوطني الثاني عشر للمنظمة المغربية لحقوق الإنسان، المنعقد أيام 25-26-27 أبريل 2025 بالرباط.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>

      <Footer />

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Navigation */
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
          transition: var(--transition);
          padding: 0;
        }
        .breadcrumb a:hover {
          color: var(--primary-dark);
        }
        .breadcrumb span {
          margin: 0 8px;
          color: #ccc;
        }

        /* Article Header */
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
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
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
          color: var(--text-medium);
          margin-bottom: 20px;
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

        /* Hero Image */
        .article-hero {
          margin: 40px 0;
        }
        .hero-image {
          width: 100%;
          height: 400px;
          object-fit: cover;
          display: block;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        .image-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
          color: white;
          padding: 30px 20px 20px;
          font-size: 0.9rem;
          font-style: italic;
        }

        /* Article Content */
        .article-content {
          background-color: #ffffff;
          padding: 50px 0;
        }
        .content-body {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--text-dark);
        }
        .content-body p {
          margin-bottom: 24px;
        }
        .content-body h2 {
          font-family: 'Poppins', sans-serif;
          font-size: 1.8rem;
          font-weight: 600;
          margin: 40px 0 20px;
          color: var(--text-dark);
          position: relative;
          padding-bottom: 10px;
        }
        .content-body h2::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 50px;
          height: 2px;
          background-color: var(--primary-color);
        }
        .content-body blockquote {
          border-right: 4px solid var(--primary-color);
          border-left: none;
          padding: 20px 30px;
          margin: 30px 0;
          background-color: var(--light-bg);
          font-style: italic;
          font-size: 1.05rem;
          border-radius: 8px 0 0 8px;
        }
        .content-body ul {
          margin: 20px 30px 20px 0; /* RTL padding */
        }
        .content-body li {
          margin-bottom: 8px;
        }
        .highlight-box {
          background: linear-gradient(135deg, rgba(25, 87, 166, 0.05), rgba(25, 87, 166, 0.02));
          border: 1px solid rgba(25, 87, 166, 0.1);
          border-radius: 8px;
          padding: 25px;
          margin: 30px 0;
        }
        .highlight-box ul {
            padding-right: 20px;
            list-style-type: '✔ ';
        }

        /* Author Section */
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
          font-weight: 600;
          margin-bottom: 5px;
          color: var(--text-dark);
        }
        .author-info .author-title {
          color: var(--primary-color);
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 10px;
        }
        .author-info .author-bio {
          color: var(--text-medium);
          font-size: 0.95rem;
          line-height: 1.5;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .article-title { font-size: 2rem; }
          .article-meta { flex-direction: column; gap: 10px; }
          .meta-divider { display: none; }
          .hero-image { height: 250px; }
          .content-body { font-size: 1rem; }
          .content-body h2 { font-size: 1.5rem; }
          .author-card { flex-direction: column; text-align: center; }
        }
        @media (max-width: 576px) {
          .container { padding: 0 15px; }
          .article-header { padding: 30px 0; }
          .article-title { font-size: 1.8rem; }
        }
      `}</style>
    </>
  );
}