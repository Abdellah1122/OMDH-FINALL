'use client';

// Import our reusable components and Next.js features
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function EditionsPage() {
  return (
    <>
      <Navbar />

     <main dir='rtl' lang='ar'>
    <section className="header-section">
      <div className="header-pattern"></div>
      <div className="container">
        <div className="header-content">
          <span className="header-subtitle">الموارد والمنشورات</span>
          <h1 className="header-title">مقالاتنا</h1>
          {/* FIX: Replaced d' with d&apos; */}
          <p className="header-description">اكتشف أحدث منشوراتنا وتحليلاتنا وشهاداتنا.</p>
        </div>
      </div>
    </section>

    <section className="articles-section">
      <div className="container">
        <h2 className="section-title">بيانات  :</h2>
        <div className="article-list"  translate="no">
          {/* Note: I've updated the hrefs to point to the pages we created! */}
<article className="article-item">
  <div className="article-image">
    {/* Using the organization's logo as a placeholder image */}
    <Image src="/omdhlogo.png" alt="L&apos;Organisation marocaine des droits de l&apos;homme célèbre la Journée mondiale des réfugiés" width={300} height={300} style={{objectFit: 'contain', padding: '1rem'}}/>
  </div>
  <div className="article-content">
    {/* Content from the OMDH document */}
    <span className="article-category">Communiqué</span>
    <h3 className="article-title">
      L&apos;Organisation marocaine des droits de l&apos;homme célèbre la Journée mondiale des réfugiés
    </h3>
    <div className="article-meta">
      <span className="article-author">Organisation Marocaine des Droits Humains (OMDH)</span>
      <span className="article-date">Vendredi 20 juin 2025</span>
    </div>
    <p className="article-excerpt">
      À l&apos;occasion de la Journée mondiale des réfugiés, l&apos;OMDH réaffirme ses positions de principe concernant les droits des migrants, des réfugiés et des demandeurs d&apos;asile, et appelle à renforcer la protection internationale face à la montée des discours de haine et de discrimination...
    </p>
    {/* Make sure the href points to the correct page for this new article */}
    <Link href="/Article14" className="article-button" style={{color: 'var(--primary-color)',backgroundColor:'transparent',border:'none'}}>اقرأ المزيد</Link>
  </div>
</article>
<article className="article-item">
  <div className="article-image">
    {/* Using the organization's logo as a placeholder image */}
    <Image src="/omdhlogo.png" alt="تصريح المنظمة المغربية لحقوق الإنسان بمناسبة اليوم العالمي للاجئين" width={300} height={300} style={{objectFit: 'contain', padding: '1rem'}}/>
  </div>
  <div className="article-content">
    {/* Content from the PDF document */}
    <span className="article-category">تصريح</span>
    <h3 className="article-title">
      المنظمة المغربية لحقوق الإنسان تحيي اليوم العالمي للاجئين
    </h3>
    <div className="article-meta">
      <span className="article-author">المنظمة المغربية لحقوق الإنسان</span>
      <span className="article-date">الجمعة 20 يونيو 2025</span>
    </div>
    <p className="article-excerpt">
      بمناسبة اليوم العالمي للاجئين، تجدد المنظمة المغربية لحقوق الإنسان (OMDH) التأكيد على مواقفها المبدئية بخصوص حقوق المهاجرين واللاجئين...
    </p>
    {/* Make sure the href points to the correct page for this new article */}
    <Link href="/Article13" className="article-button" style={{color: 'var(--primary-color)',backgroundColor:'transparent',border:'none'}}>اقرأ المزيد</Link>
  </div>
</article>

          <article className="article-item">
              <div className="article-image">
                <Image src="/Images/naoufal.JPG" alt="Naoufal Bouamri OMDH" width={300} height={300} style={{objectFit: 'contain', padding: '1rem'}}/>
              </div>
              <div className="article-content">
                <span className="article-category">Actualité</span>
                <h3 className="article-title">
                  {/* FIX: Replaced typographic apostrophe */}
                  Naoufal Bouamri consacré à la tête de l&apos;OMDH
                </h3>
                <div className="article-meta">
                  <span className="article-author"></span>
                  <span className="article-date">Mardi 29 Avril 2025</span>
                </div>
                {/* FIX: Replaced typographic apostrophes */}
                <p className="article-excerpt">Le 12e congrès national de l&apos;Organisation Marocaine des Droits Humains (OMDH) s&apos;est achevé dimanche dernier sur une note de renouveau...</p>
                <Link href="/Article2" className="article-button"style={{color: 'var(--primary-color)',backgroundColor:'transparent',border:'none'}}>اقرأ المزيد</Link>
              </div>
            </article>

            <article className="article-item">
              <div className="article-image">
                <Image src="/Images/2.jpeg" alt="Droits des réfugiés au Maroc" width={300} height={300} style={{objectFit: 'contain', padding: '1rem'}}/>
              </div>
              <div className="article-content">
                <span className="article-category">Actualité</span>
                <h3 className="article-title">
                  انتخاب نوفل البعمري رئيسا للمنظمة المغربية لحقوق الإنسان
                </h3>
                <div className="article-meta">
                  <span className="article-author">بقلم: ذ. محمد الطالب ,الرباط</span>
                  <span className="article-date">.</span>
                </div>
                <p className="article-excerpt">خلال أشغال المؤتمر الوطني الثاني عشر للمنظمة المغربية لحقوق الإنسان، الذي انعقد نهاية الأسبوع الماضي بمدينة الرباط، جددت المنظمة هياكلها التنظيمية...</p>
                <Link href="/Article" className="article-button" style={{color: 'var(--primary-color)',backgroundColor:'transparent',border:'none'}}>اقرأ المزيد</Link>
              </div>
            </article>

           <article className="article-item">
              <div className="article-image">
                <Image src="/Images/Com.jpg" alt="المؤتمر الوطني الثاني عشر" width={300} height={300} style={{objectFit: 'contain', padding: '1rem'}}/>
              </div>
              <div className="article-content">
                <span className="article-category">البيان العام</span>
                <h3 className="article-title">البيان العام للمؤتمر الوطني الثاني عشر</h3>
                <div className="article-meta">
                  <span className="article-author">المنظمة المغربية لحقوق الإنسان</span>
                  <span className="article-date">27 أبريل 2025</span>
                </div>
                <p className="article-excerpt">انعقد المؤتمر الوطني الثاني عشر للمنظمة المغربية لحقوق الانسان أيام 25-26-27 أبريل 2025 تحت شعار &quot;أي فعلية لحقوق الانسان في ظل التحولات الدولية الراهنة؟&quot;...</p>
                <Link href="/Article12" className="article-button" style={{color: 'var(--primary-color)',backgroundColor:'transparent',border:'none'}}>اقرأ المزيد</Link>
              </div>
            </article>

            <article className="article-item">
              <div className="article-image">
                <Image src="/Images/Com.jpg" alt="المؤتمر الوطني الحادي عشر" width={300} height={300} style={{objectFit: 'contain', padding: '1rem'}}/>
              </div>
              <div className="article-content">
                <span className="article-category">البيان العام</span>
                <h3 className="article-title">البيان العام للمؤتمر الوطني الحادي عشر</h3>
                <div className="article-meta">
                  <span className="article-author">المنظمة المغربية لحقوق الإنسان</span>
                  <span className="article-date">29 ماي 2022</span>
                </div>
                <p className="article-excerpt">انعقد المؤتمر الوطني الحادي عشر للمنظمة المغربية لحقوق الإنسان أيام 27 و 28 و 29 ماي 2022 تحت شعار &quot;من أجل حماية وضمانات فعلية التمتع بحقوق الإنسان في ظل الأزمات&quot;...</p>
                <Link href="/Article11" className="article-button" style={{color: 'var(--primary-color)',backgroundColor:'transparent',border:'none'}}>اقرأ المزيد</Link>
              </div>
            </article>

            <article className="article-item">
              <div className="article-image">
                <Image src="/Images/Com.jpg" alt="المؤتمر الوطني العاشر" width={300} height={300} style={{objectFit: 'contain', padding: '1rem'}}/>
              </div>
              <div className="article-content">
                <span className="article-category">بلاغ صحفي</span>
                <h3 className="article-title">بلاغ صحفي للمؤتمر الوطني العاشر</h3>
                <div className="article-meta">
                  <span className="article-author">المنظمة المغربية لحقوق الإنسان</span>
                  <span className="article-date">13 ماي 2018</span>
                </div>
                <p className="article-excerpt">عقدت المنظمة المغربية لحقوق الإنسان مؤتمرها العاشر بالرباط أيام 11 و 12 و 13 ماي 2018، تحت شعار : &quot;دور الفاعل في إعمال حقوق الإنسان وإحقاقها&quot;...</p>
                <Link href="/Article10" className="article-button" style={{color: 'var(--primary-color)',backgroundColor:'transparent',border:'none'}}>اقرأ المزيد</Link>
              </div>
            </article>

           <article className="article-item">
              <div className="article-image">
                <Image src="/Images/Com.jpg" alt="المؤتمر الوطني التاسع" width={300} height={300} style={{objectFit: 'contain', padding: '1rem'}}/>
              </div>
              <div className="article-content">
                <span className="article-category">البيان العام</span>
                <h3 className="article-title">البيان العام للمؤتمر الوطني التاسع</h3>
                <div className="article-meta">
                  <span className="article-author">المنظمة المغربية لحقوق الإنسان</span>
                  <span className="article-date">12 أبريل 2015</span>
                </div>
                <p className="article-excerpt">انعقد المؤتمر الوطني التاسع للمنظمة المغربية لحقوق الإنسان بالرباط أيام 10-11-12 أبريل 2015، تحت شعار &quot;إعمال الحقوق وإحقاقها أساس دولة الحق والقانون&quot;...</p>
                <Link href="/Article9" className="article-button" style={{color: 'var(--primary-color)',backgroundColor:'transparent',border:'none'}}>اقرأ المزيد</Link>
              </div>
            </article>

            <article className="article-item">
              <div className="article-image">
                <Image src="/Images/Com.jpg" alt="المؤتمر الوطني الثامن" width={300} height={300} style={{objectFit: 'contain', padding: '1rem'}}/>
              </div>
              <div className="article-content">
                <span className="article-category">البيان العام</span>
                <h3 className="article-title">البيان العام للمؤتمر الوطني الثامن</h3>
                <div className="article-meta">
                  <span className="article-author">المنظمة المغربية لحقوق الإنسان</span>
                  <span className="article-date">08 أبريل 2012</span>
                </div>
                <p className="article-excerpt">إن المؤتمر الوطني الثامن للمنظمة المغربية لحقوق الإنسان، المنعقد بالرباط وبوزنيقة أيام 06- 07 - 08 أبريل 2012 تحت شعار &quot;إعمال المساواة ضمانا لسيادة حقوق الإنسان&quot;...</p>
                <Link href="/Article8" className="article-button" style={{color: 'var(--primary-color)',backgroundColor:'transparent',border:'none'}}>اقرأ المزيد</Link>
              </div>
            </article>

            
             <article className="article-item">
              <div className="article-image">
                <Image src="/Images/Com.jpg" alt="المؤتمر الوطني السابع" width={300} height={300} style={{objectFit: 'contain', padding: '1rem'}}/>
              </div>
              <div className="article-content">
                <span className="article-category">البيان العام</span>
                <h3 className="article-title">البيان العام للمؤتمر الوطني السابع</h3>
                <div className="article-meta">
                  <span className="article-author">المنظمة المغربية لحقوق الإنسان</span>
                  <span className="article-date">29 مارس 2009</span>
                </div>
                <p className="article-excerpt">إن المؤتمر الوطني السابع للمنظمة المغربية لحقوق الإنسان، المنعقد بالرباط أيام 27 28 و 29 مارس 2009 بشعار مركزي &quot;مناهضة الإفلات من العقاب رهان مأسسة دولة الحق&quot;...</p>
                <Link href="/Article7" className="article-button" style={{color: 'var(--primary-color)',backgroundColor:'transparent',border:'none'}}>اقرأ المزيد</Link>
              </div>
            </article>

            
            <article className="article-item">
              <div className="article-image">
                <Image src="/Images/Com.jpg" alt="المؤتمر الوطني السادس" width={300} height={300} style={{objectFit: 'contain', padding: '1rem'}}/>
              </div>
              <div className="article-content">
                <span className="article-category">البيان العام</span>
                <h3 className="article-title">البيان العام للمؤتمر الوطني السادس</h3>
                <div className="article-meta">
                  <span className="article-author">المنظمة المغربية لحقوق الإنسان</span>
                  <span className="article-date">02 أبريل 2006</span>
                </div>
                <p className="article-excerpt">إن المؤتمر الوطني السادس للمنظمة المغربية لحقوق الإنسان المنعقد بالرباط أيام 31 مارس 1- 2 أبريل 2006 تحت شعار: &quot;تعميق وتسريع وتيرة الاصلاحات أساس لضمان وحماية الانتقال الديمقراطي&quot;...</p>
                <Link href="/Article6" className="article-button" style={{color: 'var(--primary-color)',backgroundColor:'transparent',border:'none'}}>اقرأ المزيد</Link>
              </div>
            </article>

            
            <article className="article-item">
              <div className="article-image">
                <Image src="/Images/Com.jpg" alt="المؤتمر الوطني الخامس" width={300} height={300} style={{objectFit: 'contain', padding: '1rem'}}/>
              </div>
              <div className="article-content">
                <span className="article-category">البيان العام</span>
                <h3 className="article-title">البيان العام للمؤتمر الوطني الخامس</h3>
                <div className="article-meta">
                  <span className="article-author">المنظمة المغربية لحقوق الإنسان</span>
                  <span className="article-date">18 ماي 2003</span>
                </div>
                <p className="article-excerpt">إن المؤتمر الوطني الخامس للمنظمة المغربية لحقوق الإنسان، المنعقد بالرباط أيام 16-17-18 ماي 2003 تحت شعار &quot;من أجل حماية الانتقال الديموقراطي والشرعية الدولية والسلم العالمي&quot;...</p>
                <Link href="/Article5" className="article-button" style={{color: 'var(--primary-color)',backgroundColor:'transparent',border:'none'}}>اقرأ المزيد</Link>
              </div>
            </article>

            
            
            
             <article className="article-item">
              <div className="article-image">
                <Image src="/Images/Com.jpg" alt="المؤتمر الوطني الرابع" width={300} height={300} style={{objectFit: 'contain', padding: '1rem'}}/>
              </div>
              <div className="article-content">
                <span className="article-category">بلاغ</span>
                <h3 className="article-title">بلاغ حول أشغال المؤتمر الرابع للمنظمة</h3>
                <div className="article-meta">
                  <span className="article-author">المنظمة المغربية لحقوق الإنسان</span>
                  <span className="article-date">26 مارس 2000</span>
                </div>
                <p className="article-excerpt">عقدت المنظمة المغربية لحقوق الإنسان مؤتمرها الرابع تحت شعار &quot;لا ضمانة قارة لحقوق الإنسان وللديمقراطيين دون إصلاح جذري للقضاء وترسيخ كل دعائم دولة الحق والقانون&quot;...</p>
                <Link href="/Article4" className="article-button" style={{color: 'var(--primary-color)',backgroundColor:'transparent',border:'none'}}>اقرأ المزيد</Link>
              </div>
            </article>
            <article className="article-item">
              <div className="article-image">
                <Image src="/Images/Com.jpg" alt="المؤتمر الوطني الثالث" width={300} height={300} style={{objectFit: 'contain', padding: '1rem'}}/>
              </div>
              <div className="article-content">
                <span className="article-category">بلاغ</span>
                <h3 className="article-title">بلاغ حول اختتام أشغال المؤتمر الوطني الثالث</h3>
                <div className="article-meta">
                  <span className="article-author">المنظمة المغربية لحقوق الإنسان</span>
                  <span className="article-date">31 مارس 1997</span>
                </div>
                <p className="article-excerpt">أنهى المؤتمر الثالث للمنظمة المغربية لحقوق الإنسان أشغاله مساء يوم الأحد 30 مارس 1997. ولقد قرر المؤتمر تعديل بعض مقتضيات القانون الأساسي...</p>
                <Link href="/Article3" className="article-button" style={{color: 'var(--primary-color)',backgroundColor:'transparent',border:'none'}}>اقرأ المزيد</Link>
              </div>
            </article>
            <article className="article-item">
              <div className="article-image">
                <Image src="/Images/Com.jpg" alt="الجمع التأسيسي" width={300} height={300} style={{objectFit: 'contain', padding: '1rem'}}/>
              </div>
              <div className="article-content">
                <span className="article-category">البيان العام</span>
                <h3 className="article-title">البيان العام الصادر عن الجمع التأسيسي</h3>
                <div className="article-meta">
                  <span className="article-author">المنظمة المغربية لحقوق الإنسان</span>
                  <span className="article-date">10 ديسمبر 1988</span>
                </div>
                <p className="article-excerpt">إن الجمع العام التأسيسي للمنظمة المغربية لحقوق الإنسان المنعقد بالرباط يوم 10 دجنبر 1988 يوم الذكرى الأربعينية للإعلان العالمي لحقوق الإنسان...</p>
                <Link href="/Article1" className="article-button" style={{color: 'var(--primary-color)',backgroundColor:'transparent',border:'none'}}>اقرأ المزيد</Link>
              </div>
            </article>
        </div>
        <h2 className="section-title">بلاغات  :</h2>
        <div className="article-list"  translate="no">
          
        </div>
        <h2 className="section-title">مذكرات واراء  :</h2>
        <div className="article-list"  translate="no">

        </div>
      </div>
    </section>
  </main>

      <Footer />
      
      <style jsx>{`
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* Header Section */
        .header-section {
            position: relative;
            padding: 80px 0 60px;
            background-color: white;
            overflow: hidden;
            text-align: center;
        }
        .header-pattern {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: radial-gradient(circle at 20% 30%, rgba(25, 87, 166, 0.05) 0%, transparent 8%), radial-gradient(circle at 80% 40%, rgba(25, 87, 166, 0.05) 0%, transparent 8%);
            background-size: 120% 120%;
            opacity: 0.8;
        }
        .header-content {
            position: relative;
            z-index: 2;
            max-width: 800px;
            margin: 0 auto;
        }
        .header-subtitle {
            font-weight: 500;
            font-size: 0.9em;
            text-transform: uppercase;
            letter-spacing: 3px;
            color: var(--primary-color);
            margin-bottom: 15px;
            display: inline-block;
        }
        .header-title {
            font-weight: 700;
            font-size: 3em;
            line-height: 1.2;
            margin-bottom: 20px;
            color: var(--text-dark);
        }
        .header-description {
            font-weight: 400;
            font-size: 1.1em;
            line-height: 1.7;
            color: var(--text-medium);
            max-width: 700px;
            margin: 30px auto 0;
        }

        /* Articles Section */
        .articles-section {
            padding: 60px 0;
        }
        .section-title {
            font-size: 1.8rem;
            font-weight: 600;
            margin-bottom: 30px;
            color: var(--text-dark);
            position: relative;
            padding-bottom: 10px;
            text-align: center;
        }
        

        /* Article List */
        .article-list {
            display: flex;
            flex-direction: column;
            gap: 40px; /* Increased gap */
            margin-top: 40px;
        }
        .article-item {
            display: flex;
            background-color: #ffffff;
            border: 1px solid #e0e0e0;
            transition: var(--transition);
            border-radius: var(--border-radius);
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }
        .article-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
        }
        .article-image {
            flex: 0 0 300px; /* Fixed width for the image */
            overflow: hidden;
        }
        .article-image :global(img) { /* Target Next.js Image component */
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            transition: var(--transition);
        }
        .article-item:hover .article-image :global(img) {
            transform: scale(1.05);
        }
        .article-content {
            flex: 1;
            padding: 30px;
            display: flex;
            flex-direction: column;
        }
        .article-category {
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: var(--primary-color);
            margin-bottom: 10px;
        }
        .article-title {
            font-size: 1.4rem;
            font-weight: 600;
            margin-bottom: 10px;
            color: var(--text-dark);
            line-height: 1.4;
        }
        .article-meta {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            font-size: 0.8rem;
            color: var(--text-medium);
        }
        .article-author {
            margin-right: 15px;
        }
        .article-excerpt {
            color: var(--text-medium);
            font-size: 0.95rem;
            margin-bottom: 20px;
            line-height: 1.6;
            flex-grow: 1; /* Pushes the button to the bottom */
        }
        .article-button {
            align-self: flex-start;
            font-size: 0.9rem;
            font-weight: 600;
            color: var(--primary-color);
            background: none;
            border: none;
            padding: 0;
            cursor: pointer;
            transition: var(--transition);
            display: flex;
            align-items: center;
            text-decoration: none; /* For Link component */
        }
        .article-button:hover {
            color: var(--secondary-color);
        }
        .article-button::after {
            content: "→";
            margin-left: 8px;
            transition: var(--transition);
        }
        .article-button:hover::after {
            transform: translateX(4px);
        }
        
        /* Responsive */
        @media (max-width: 768px) {
            .article-item {
                flex-direction: column;
            }
            .article-image {
                flex: 0 0 200px; /* Height for the image on mobile */
            }
            .header-title {
                font-size: 2.2rem;
            }
            .section-title {
                font-size: 1.5rem;
            }
        }
      `}</style>
    </>
  );
}