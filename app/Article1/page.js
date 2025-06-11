'use client';
// Note the ../../ because we are now two folders deep
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function ArticlePage() {
  return (
    <>
      <Navbar />

      <main  translate="no">
        <nav className="nav-breadcrumb">
          <div className="container">
            <div className="breadcrumb">
              <Link href="/" style={{color:'black',backgroundColor:'transparent' , border:'none'}}>Accueil</Link>
              <span>›</span>
              <Link href="/editions"  style={{color:'black',backgroundColor:'transparent' , border:'none'}}>Editions</Link>
              <span>›</span>
              <span>انتخاب نوفل البعمري رئيسا للمنظمة المغربية لحقوق الإنسان</span>
            </div>
          </div>
        </nav>

        <header className="article-header" dir="rtl" lang="ar">
          <div className="container">
            <h1 className="article-title">انتخاب نوفل البعمري رئيسا للمنظمة المغربية لحقوق الإنسان</h1>
            <p className="article-subtitle">استراتيجية جديدة للعمل الميداني وتعزيز حقوق الإنسان</p>
            <div className="article-meta">
              <div className="meta-item">
                <strong>بقلم محمد الطالب - الرباط</strong>
              </div>
              <div className="meta-divider"></div>
              <div className="meta-item">
                28 ماي 2025
              </div>
            </div>
          </div>
        </header>

        <section className="article-hero">
          <div className="container">
            <Image src="/Images/2.jpeg" alt="انتخاب نوفل البعمري" className="hero-image" width={800} height={400} />
          </div>
        </section>

        <article className="article-content" dir="rtl" lang="ar">
          <div className="container">
            <div className="content-body">
              <p>خلال أشغال المؤتمر الوطني الثاني عشر للمنظمة المغربية لحقوق الإنسان، الذي انعقد نهاية الأسبوع الماضي بمدينة الرباط، جددت المنظمة هياكلها التنظيمية، حيث تم انتخاب الأستاذ نوفل البعمري، المحامي بهيئة تطوان، رئيسا وطنيا جديدا للمنظمة خلفا للأستاذ بوبكر لركو، الذي قضى ولايتين على رأس المنظمة.</p>
              <p>وأكد الأستاذ نوفل البعمري، في كلمته بعد انتخابه رئيسا جديدا للمنظمة، أن هذه الأخيرة ستواصل انخراطها القوي في النهوض بحقوق الإنسان في شموليتها، من خلال استراتيجية جديدة ترتكز على العمل الميداني، وعلى القرب من المواطنين، وعلى تعزيز التنسيق مع باقي مكونات الحركة الحقوقية، ومواصلة الانخراط الفاعل في الدفاع عن قضايا حقوق الإنسان وطنيا ودوليا، خاصة في هذه الظرفية الدقيقة التي تمر منها القضية الوطنية الأولى، التي تشكل أولوية بالنسبة إلى كل المغاربة.</p>
              <p>وأضاف الرئيس الجديد للمنظمة المغربية لحقوق الإنسان أن الجهاز التنفيذي للمنظمة، سيعمل على تقوية الفروع الجهوية، وجعلها آليات رئيسية في التفاعل مع المواطنين، مشيرا إلى أن المرحلة المقبلة ستشهد انخراطا كبيرا للمنظمة في التحولات التي تعرفها بلادنا على مستويات متعددة.</p>
              <p>وجاء في بلاغ صادر عن المؤتمر الوطني الثاني عشر للمنظمة المغربية لحقوق الإنسان، أن أشغال المؤتمر مرت في أجواء شفافة وديموقراطية، حيث تم عرض التقريرين الأدبي والمالي والمصادقة عليهما، قبل انتخاب المكتب الوطني الجديد للمنظمة، الذي أفرز انتخاب الأستاذ نوفل البعمري رئيسا، وبعضوية كل من عبد الكريم العلام، ونادية النور، وعبد الله الخلطي، ونادية الشراط، وعبد الحق بنقادى، وحورية بوغنبور، وسعاد حمود، وعبد العزيز قراقي، وسلوى شفيق، وخالد بوشناق، ونزهة المريني، وعبد المجيد طلحة، وعادل أوراغ، وسليمان السدراوي، وفاطمة الرنداني، وسعاد عزيز، وعائشة بناني، ومحمد العلوي، ومريم عزيز، وسعيد مرزوقي، وآخرين.</p>
              <p>وأشار البلاغ إلى أن المؤتمر الوطني الثاني عشر، كان مناسبة للوقوف على ما تحقق في الولاية السابقة من مكتسبات على مستوى الحضور المؤسساتي للمنظمة، وعلى مستوى التفاعل مع القضايا الحقوقية الراهنة، سواء تعلق الأمر بالحقوق المدنية والسياسية، أو الحقوق الاقتصادية والاجتماعية والثقافية والبيئية، مؤكدا أن المنظمة راكمت تجربة كبيرة في الاشتغال الميداني، وفي الترافع من أجل ترسيخ ثقافة حقوق الإنسان.</p>
            </div>
          </div>
        </article>
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
          border-bottom: 1px solid #eee;
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
          background-color: #fff;
          padding: 40px 0;
          text-align: center;
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
          background-color: #ddd;
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

        /* Article Content */
        .article-content {
          background-color: #fff;
          padding: 50px 0;
        }
        .content-body {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--text-dark);
          font-family: 'Roboto', sans-serif;
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

        /* Responsive Design */
        @media (max-width: 768px) {
          .article-title {
            font-size: 2rem;
          }
          .article-meta {
            flex-direction: column;
            gap: 10px;
          }
          .meta-divider {
            display: none;
          }
          .hero-image {
            height: 250px;
          }
          .content-body {
            font-size: 1rem;
          }
          .content-body h2 {
            font-size: 1.5rem;
          }
        }
        @media (max-width: 576px) {
          .container {
            padding: 0 15px;
          }
          .article-header {
            padding: 30px 0;
          }
          .article-title {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </>
  );
}