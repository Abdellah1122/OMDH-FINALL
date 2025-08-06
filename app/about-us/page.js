'use client';

// Import our reusable components and Next.js features
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

const timelineEvents = [
  {
    "year": "1988-1989",
    "title_fr": "Mahdi ELMANDJRA",
    "title_ar": "المرحوم الأستاذ المهدي المنجرة",
    "description": "أستاذ/جامعي",
    "type": "رئيس شرفي",
    "status": "المرحوم",
    "image": "/PastPres/1.JPG"
  },
  {
    "year": "1988-1989",
    "title_fr": "Omar AZZIMAN",
    "title_ar": "الأستاذ عمر عزيمان",
    "description": "محام/جامعي",
    "type": "",
    "status": "",
    "image": "/PastPres/2.JPG"
  },
  {
    "year": "1989-1991",
    "title_fr": "Khalid NACIRI",
    "title_ar": "المرحوم الأستاذ خالد الناصري",
    "description": "محام/جامعي",
    "type": "",
    "status": "المرحوم",
    "image": "/PastPres/3.JPG"
  },
  {
    "year": "1991-1992",
    "title_fr": "Ali OUMLIL",
    "title_ar": "الأستاذ علي أومليل",
    "description": "جامعي",
    "type": "",
    "status": "",
    "image": "/PastPres/4.JPG"
  },
  {
    "year": "1993-2000",
    "title_fr": "Abdelaziz BENNANI",
    "title_ar": "الأستاذ عبد العزيز بناني",
    "description": "محام",
    "type": "",
    "status": "",
    "image": "/PastPres/5.JPG"
  },
  {
    "year": "2000-2006",
    "title_fr": "Abdellah ELOUALLADI",
    "title_ar": "المرحوم الأستاذ عبد الله الولادي",
    "description": "محام",
    "type": "",
    "status": "المرحوم",
    "image": "/PastPres/6.JPG"
  },
  {
    "year": "2006-2012",
    "title_fr": "Amina BOUAYACH",
    "title_ar": "الأستاذة آمنة بوعياش",
    "description": "خبيرة التواصل المؤسساتي",
    "type": "",
    "status": "",
    "image": "/PastPres/7.JPG"
  },
  {
    "year": "2012-2015",
    "title_fr": "Mohamed NESHNASH",
    "title_ar": "الدكتور محمد النشناش",
    "description": "طبيب",
    "type": "",
    "status": "",
    "image": "/PastPres/8.JPG"
  },
  {
    "year": "2015-2022",
    "title_fr": "Boubkeur LARGOU",
    "title_ar": "الأستاذ بوبكر لركو",
    "description": "مفتش التعليم الثانوي التأهيلي",
    "type": "",
    "status": "",
    "image": "/PastPres/9.JPG"
  },
  {
    "year": "2022-2025",
    "title_fr": "El Hassan El IDRISSI",
    "title_ar": "الأستاذ الحسن الإدريس",
    "description": "إطار إداري",
    "type": "",
    "status": "",
    "image": "/PastPres/10.JPG"
  },
]

const timelineEvents2 = [
   {
    "year": "1988",
    "title": "تأسيس المنظمة المغربية لحقوق الإنسان",
    "description": "تم تأسيس المنظمة المغربية لحقوق الإنسان (OMDH) رسمياً في 10 ديسمبر 1988، بأكدال، الرباط، بهدف التوعية بحقوق الإنسان والدفاع عن ضحايا الانتهاكات.",
    "image": "/Images/HandsSolidarity.jpg",
    "type": "primary"
  },
  {
    "year": "بداية 1989",
    "title": "الدعوة إلى العفو",
    "description": "أطلقت المنظمة المغربية لحقوق الإنسان دعوات للعفو عن المعتقلين السياسيين وقدمت طلبات لزيارة السجون في إطار جهودها الأولى.",
    "image": "/Images/AmnestyInternational.jpg",
    "type": "secondary"
  },
  {
    "year": "1993",
    "title": "الاعتراف الدولي",
    "description": "أصبحت المنظمة المغربية لحقوق الإنسان عضواً في الاتحاد الدولي لحقوق الإنسان (FIDH)، مما وسع نفوذها ووصولها إلى المحافل الدولية لحقوق الإنسان.",
    "image": "/Images/CandleInHand2.jpg",
    "type": "secondary"
  },
    {
    "year": "1997",
    "title": "الاندماج الإقليمي",
    "description": "أصبحت المنظمة المغربية لحقوق الإنسان عضواً نظامياً في شبكة حقوق الإنسان الأوروبية المتوسطية، مما يشير إلى التزامها بالأطر الإقليمية لحقوق الإنسان.",
    "image": "/Images/blue.png",
    "type": "primary"
  },
  {
    "year": "2004",
    "title": "العدالة والمصالحة",
    "description": "لعبت المنظمة المغربية لحقوق الإنسان دوراً رئيسياً في هيئة الإنصاف والمصالحة المغربية، مساهمة في العدالة الانتقالية وجهود البحث عن الحقيقة.",
    "image": "/Images/Women.jpg",
    "type": "primary"
  },
  {
    "year": "2011",
    "title": "الربيع العربي والإصلاح الدستوري",
    "description": "خلال الإصلاحات الدستورية التي تلت مظاهرات 2011، دعت المنظمة المغربية لحقوق الإنسان إلى توسيع حماية حقوق الإنسان واستقلالية القضاء والمساواة بين الجنسين.",
    "image": "/Images/PA.jpg",
    "type": "secondary"
  },
    {
    "year": "2011",
    "title": "التحالف ضد التعذيب",
    "description": "عملت المنظمة المغربية لحقوق الإنسان بالتعاون مع المجلس الوطني لحقوق الإنسان وجمعية منع التعذيب لتعزيز الموافقة على البروتوكول الاختياري لاتفاقية الأمم المتحدة ضد التعذيب (OPCAT).",
    "image": "/Images/CNDH.jpg",
    "type": "secondary"
  },
  {
    "year": "2013",
    "title": "إدانة الظلم",
    "description": "نشرت المنظمة المغربية لحقوق الإنسان بالتعاون مع منظمة معاً ضد عقوبة الإعدام تقريراً بعنوان \"رحلة إلى مقبرة الأحياء\"، والذي حلل ظروف احتجاز المحكوم عليهم بالإعدام في المغرب.",
    "image": "/Images/DeathPenaltyAbolition.jpg",
    "type": "primary"
  },
  {
    "year": "2023",
    "title": "الدعوة الوطنية والشراكات",
    "description": "عززت المنظمة المغربية لحقوق الإنسان تعاونها مع الجامعات المغربية والمؤسسات المدنية والمنظمات الدولية لتعزيز التعليم وحقوق المرأة والحريات المدنية.",
    "image": "/Images/ChatGPT Image May 3, 2025, 05_09_56 PM.png",
    "type": "primary"
  },
  {
    "year": "أبريل 2025",
    "title": "التضامن مع غزة",
    "description": "خلال مؤتمرها الوطني الثاني عشر، أعربت المنظمة المغربية لحقوق الإنسان عن تضامنها مع الشعب الفلسطيني وأدانت العدوان الإسرائيلي المستمر على غزة، ودعت إلى تدخل دولي.",
    "image": "/Images/gaza.jpg",
    "type": "primary"
  },
]

export default function AboutUsPage() {
  return (
    <>
      <Navbar />

      <main lang='ar' dir='rtl'>
        <section className="about-section">
          <div className="about-container">
            <div className="about-header" dir='ltr'>
              <h1><span className="highlight">انبثاق فكرة ... مسار فعل</span></h1>
              <p className="about-tagline">
                المنظمة المغربية لحقوق الإنسان، جمعية حقوقية وطنية غير حكومية ذات اختصاص عام، غرضها الحماية والنهوض بحقوق الإنسان بالمغرب، تأسست سنة 1988.<br/>
                وتعتمد في مرجعيتها على قيم ومبادئ الشرعة الدولية والمواثيق والإعلانات والاتفاقيات الدولية ذات الصلة.<br/>
                وهي جمعيـــة ذات النفــع العـــام ولها الصفة الاستشارية لدى المجلس الاقتصادي والاجتماعي بالأمم المتحدة.
              </p>
            </div>

            <div className="about-content" dir='ltr'>
              <div className="about-image">
                <Image src="/Images/candle White Background.jpg" alt="OMDH" width={600} height={700} style={{ objectFit: 'cover' }} />
                <div className="image-overlay">
                  <span className="founded-year">Fondée en 1988</span>
                </div>
              </div>

              <div className="about-text" dir='rtl'>
                <h2>التأسيس</h2>
                <p>
                  المنظمة المغربية لحقوق الإنسان، جمعية حقوقية وطنية غير حكومية ذات اختصاص عام، غرضها الحماية والنهوض بحقوق الإنسان.
                </p>
                <p>
                  تأسست في الذكرى الأربعينية لصدور الإعلان العالمي لحقوق الإنسان، يوم 10 دجنبر 1988، بعد ثلاثة قرارات منع متتالية (28 ماي، 25 يونيو، 24 شتنبر 1988) من طرف السلطات العمومية. وقد سهرت على هذا التأسيس لجنة تحضيرية تتكون من 37 رجلاً وامرأة: جامعيين وباحثين ومحامين وكتاب وفنانين ومستخدمين.
                </p>
                <p>
                  وتعتمد المنظمة في مرجعيتها على قيم ومبادئ الشرعة الدولية والمواثيق والإعلانات والاتفاقيات الدولية ذات الصلة.
                </p>
                <p>
                  وتأسست المنظمة على مبدأ التعددية من أشخاص ينتمون إلى مجموعات ثقافية وسياسية مختلفة. ويمثل استقلالها عن السلطات العمومية وعن التيارات الإيديولوجية والسياسية مبدأ أساسياً في عملها الحقوقي.
                </p>
                <p>
                  وتتابع المنظمة المغربية عملها الدؤوب في مجال حماية حقوق الإنسان والنهوض بها، لدعم دولة المؤسسات والفصل بين السلطات واستقلال القضاء وذلك في سبيل ترسيخ دولة الحق والقانون.
                </p>
                <p>
                  المنظمة جمعيـــة ذات النفــع العـــام ولها الصفة الاستشارية لدى المجلس الاقتصادي والاجتماعي بالأمم المتحدة، عضو فاعل ومؤسس للعديد من الشبكات الوطنية والدولية لحقوق الانسان.
                </p>

                <h3>مسار الفعل</h3>
                <p>خلال مسار فعلها منذ التأسيس سعت المنظمة إلى:</p>
                
                <div className="action-points">
                  <p>• نشر وتعميق الوعي بحقوق الإنسان الفردية والجماعية والاجتماعية والاقتصادية والثقافية والمدنية والسياسية.</p>
                  <p>• السعي للتربية على المواطنة وتدريس التربية على حقوق الإنسان في جميع مراحل التعليم.</p>
                  <p>• العمل على احترام سيادة القانون في أفق توطيد دولة الحق والقانون.</p>
                  <p>• السعي إلى تعزيز السلطة القضائية واستقلالها ونزاهتها.</p>
                  <p>• السعي إلى تطوير التشريع المغربي والعمل على إلغاء المقتضيات التشريعية والتنظيمية الماسة بالحريات الفردية والجماعية، والنصوص المتنافية مع المعايير الدولية لحقوق الإنسان.</p>
                  <p>• توفير ضمانات فعالة لإعمال هذه الحقوق والحريات.</p>
                  <p>• الدعوة إلى المصادقة على المواثيق الدولية التي تهم حقوق الإنسان والعمل على متابعة التزام المغرب بتقديم التقارير المتعلقة بإعمال مقتضيات الاتفاقيات المصدق عليها في الآجال المحددة لها.</p>
                  <p>• تعزيز روابط التضامن الوطني والعربي والإفريقي والدولي في مجال حقوق الإنسان.</p>
                </div>

                <div className="stats-container" dir='rtl'>
                  <div className="stat-item">
                    <span className="stat-number">+37</span>
                    <span className="stat-label">سنوات من الدفاع عن حقوق الإنسان</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">+100</span>
                    <span className="stat-label">حملات التوعية</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">+100</span>
                    <span className="stat-label">الشراكات الإقليمية والمحلية</span>
                  </div>
                </div>

                <div className="cta-container">
                  <Link href="/projects" className="BtnPrimary">مشاريعنا</Link>
                  <Link href="/contact" className="BtnSuc">اتصل بنا</Link>
                </div>
              </div>
            </div>

            <section className="timeline-section">
              <div className="section-header">
                <h2 className="section-title">اكتشف مسار فعلنا</h2>
              </div>

              <div className="timeline-container">
                <div className="timeline-wrapper">
                  <div className="timeline-line"></div>

                  {timelineEvents2.map((event, index) => (
                    <div key={index} className="timeline-item">
                      <div className="timeline-dot"></div>

                      <div className={`timeline-content ${index % 2 === 0 ? "left" : "right"}`}>
                        <div className="timeline-card">
                          <div className={`timeline-year ${event.type}`}>{event.year}</div>
                          <h4 className={`timeline-title ${event.type}`}>{event.title}</h4>
                          <p className="timeline-description">{event.description}</p>
                          <div className="timeline-image">
                            <Image
                              src={event.image || "/placeholder.svg?height=250&width=400"}
                              alt={event.title}
                              fill
                              className="timeline-img"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
             
            <section className="timeline-section">
              <div className="section-header">
                <h2 className="section-title">تعرف على الرؤساء السابقين للمنظمة</h2>
              </div>

              <div className="timeline-container" translate='no'>
                <div className="timeline-wrapper">
                  <div className="timeline-line"></div>

                  {timelineEvents.map((event, index) => (
                    <div key={index} className="timeline-item">
                      <div className="timeline-dot"></div>

                      <div className={`timeline-content ${index % 2 === 0 ? "left" : "right"}`}>
                        <div className="timeline-card">
                          <div className={`timeline-year ${event.type}`}>{event.year}</div>
                          <h4 className={`timeline-title ${event.type}`}>{event.title_fr}</h4>
                          {event.title_ar && <h5 className="timeline-title-ar">{event.title_ar}</h5>}
                          <p className="timeline-description">{event.description}</p>
                          <div className="timeline-image">
                            <Image
                              src={event.image || "/placeholder.svg?height=250&width=400"}
                              alt={event.title_fr}
                              fill
                              className="timeline-img"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <div className="values-section">
              <h2>قيمنا الأساسية</h2>
              <p className="values-description">قيمنا هي أساس رسالتنا وأعمالنا، وهي تُجسّد التزامنا الراسخ بالعدالة والكرامة وحقوق الإنسان للجميع.</p>
              <div className="values-container">
                <div className="value-card">
                  <div className="value-icon"><div className="icon-circle"><span>⚖️</span></div></div>
                  <h3>عدالة</h3>
                  <p>نسعى إلى تحقيق العدالة من خلال الإصلاح القانوني والمساءلة والدفاع عن الحقوق الفردية والجماعية، وضمان العدالة والمساواة في جميع أنحاء المجتمع المغربي.</p>
                </div>
                <div className="value-card">
                  <div className="value-icon"><div className="icon-circle"><span>🕊️</span></div></div>
                  <h3>كرامة</h3>
                  <p>نحن نعمل على تعزيز احترام الكرامة المتأصلة في كل شخص، ونعمل على القضاء على التمييز والإقصاء والعنف بجميع أشكاله.</p>
                </div>
                <div className="value-card">
                  <div className="value-icon"><div className="icon-circle"><span>🤝</span></div></div>
                  <h3>تكافل</h3>
                  <p>نحن نتعاون مع المجتمعات والمنظمات والمؤسسات لبناء صوت جماعي لحقوق الإنسان وتعزيز مشاركة المجتمع المدني.</p>
                </div>
                <div className="value-card">
                  <div className="value-icon"><div className="icon-circle"><span>📣</span></div></div>
                  <h3>المرافعة</h3>
                  <p>نحن نشارك بشكل فعال في الخطاب العام، ونؤثر على السياسات، ونتخذ إجراءات ملموسة لحماية حقوق الإنسان والحريات الديمقراطية.</p>
                </div>
              </div>
            </div>

            <div className="Partnairs">
              <h2>اكتشف جميع شركائنا!</h2>
              <div className="parts">
                <div className="ImgCont"><Image src="/IntPartnaires/28JUN-ECOSOC-LOGO-BLOG.png" alt="Ecosoc Logo" width={150} height={100} style={{objectFit: 'contain'}} /></div>
                <div className="ImgCont"><Image src="/IntPartnaires/Amnesty_International_logo.svg.png" alt="Amnesty International Logo" width={150} height={100} style={{objectFit: 'contain'}} /></div>
                <div className="ImgCont"><Image src="/IntPartnaires/LC-Logo-thumbnail-980x551-1-400x250.jpg" alt="LC Logo" width={150} height={100} style={{objectFit: 'contain'}} /></div>
                <div className="ImgCont"><Image src="/IntPartnaires/WORLD_REPORT_2023_OF_HUMAN_RIGHTS_WATCH_0.png" alt="Human Rights Watch Logo" width={150} height={100} style={{objectFit: 'contain'}} /></div>
                <div className="ImgCont"><Image src="/UNIPartnaires/1631365508628.jpeg" alt="Partner Logo" width={150} height={100} style={{objectFit: 'contain'}} /></div>
                <div className="ImgCont"><Image src="/UNIPartnaires/images (3).png" alt="Partner Logo" width={150} height={100} style={{objectFit: 'contain'}} /></div>
                <div className="ImgCont"><Image src="/UNIPartnaires/images.jpeg" alt="Partner Logo" width={150} height={100} style={{objectFit: 'contain'}} /></div>
                <div className="ImgCont"><Image src="/UNIPartnaires/Logo-UIZ.jpg" alt="UIZ Logo" width={150} height={100} style={{objectFit: 'contain'}} /></div>
                <div className="ImgCont"><Image src="/UNIPartnaires/logo.png" alt="Partner Logo" width={150} height={100} style={{objectFit: 'contain'}} /></div>
                <div className="ImgCont"><Image src="/UNIPartnaires/Mohammed_V_University_Logo.png" alt="Mohammed V University Logo" width={150} height={100} style={{objectFit: 'contain'}} /></div>
                <div className="ImgCont"><Image src="/UNIPartnaires/univ-cadi-ayyad-logo-900x420-1.png" alt="Cadi Ayyad University Logo" width={150} height={100} style={{objectFit: 'contain'}} /></div>
                <div className="ImgCont"><Image src="/UNIPartnaires/universite-abdelmalek-essaadi-900x420-1.png" alt="Abdelmalek Essaadi University Logo" width={150} height={100} style={{objectFit: 'contain'}} /></div>
                <div className="ImgCont"><Image src="/UNIPartnaires/Universite-Hassan-1er-settat.png" alt="Hassan 1er University Logo" width={150} height={100} style={{objectFit: 'contain'}} /></div>
                <div className="ImgCont"><Image src="/NatPartnaires/ensemble-contre-la-peine-de-mort-ecpm-morocco-417461.jpg" alt="ECPM Logo" width={150} height={100} style={{objectFit: 'contain'}} /></div>
                <div className="ImgCont"><Image src="/NatPartnaires/images (1).jpeg" alt="Partner Logo" width={150} height={100} style={{objectFit: 'contain'}} /></div>
                <div className="ImgCont"><Image src="/NatPartnaires/images (1).png" alt="Partner Logo" width={150} height={100} style={{objectFit: 'contain'}} /></div>
                <div className="ImgCont"><Image src="/NatPartnaires/images (2).png" alt="Partner Logo" width={150} height={100} style={{objectFit: 'contain'}} /></div>
                <div className="ImgCont"><Image src="/NatPartnaires/images.jpeg" alt="Partner Logo" width={150} height={100} style={{objectFit: 'contain'}} /></div>
                <div className="ImgCont"><Image src="/NatPartnaires/images.png" alt="Partner Logo" width={150} height={100} style={{objectFit: 'contain'}} /></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        /* Section Headers */
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: 2rem;
          font-weight: 600;
          color: var(--secondary-color);
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          letter-spacing: -0.025em;
          position: relative;
        }

        .about-section {
          padding: 5rem 2rem;
          background-color: var(--light-bg);
        }
        
        .about-container {
          max-width: 1400px;
          margin: 0 auto;
        }
        
        .about-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .about-header h1 {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 1rem;
          position: relative;
          display: inline-block;
        }
        
        .highlight {
          color: var(--primary-color);
        }
        
        .about-tagline {
          font-size: 1.2rem;
          color: var(--text-medium);
          max-width: 700px;
          margin: 2rem auto;
          line-height: 1.8;
          font-family: var(--Poppins);
        }
        
        .about-content {
          display: flex;
          flex-wrap: wrap;
          gap: 3rem;
          margin-bottom: 4rem;
          align-items: flex-start;
        }
        
        .about-image {
          flex: 1;
          min-width: 300px;
          position: relative;
          border-radius: var(--border-radius);
          overflow: hidden;
          box-shadow: var(--box-shadow);
        }
        
        .about-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        
        .about-image:hover img {
          transform: scale(1.05);
        }
        
        .image-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
          padding: 2rem;
          box-sizing: border-box;
        }
        
        .founded-year {
          display: inline-block;
          background-color: var(--gold-accent);
          color: var(--text-dark);
          padding: 0.5rem 1.5rem;
          font-weight: 600;
          border-radius: var(--border-radius);
          font-family: var(--Poppins);
        }
        
        .about-text {
          flex: 1.5;
          min-width: 300px;
        }
        
        .about-text h2 {
          font-size: 2rem;
          color: var(--primary-color);
          margin-bottom: 1.5rem;
          font-family: var(--Poppins);
          position: relative;
          padding-bottom: 0.75rem;
        }

        .about-text h2::after {
          content: '';
          position: absolute;
          bottom: 0;
          right: 0;
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
          border-radius: 2px;
        }
        
        .about-text h3 {
          font-size: 1.6rem;
          color: var(--secondary-color);
          margin: 2rem 0 1.5rem 0;
          font-family: var(--Poppins);
          position: relative;
          padding-bottom: 0.5rem;
        }

        .about-text h3::after {
          content: '';
          position: absolute;
          bottom: 0;
          right: 0;
          width: 40px;
          height: 2px;
          background: var(--secondary-color);
          border-radius: 2px;
        }
        
        .about-text p {
          margin-bottom: 1.5rem;
          line-height: 1.8;
          color: var(--text-medium);
          font-size: 1.05rem;
          position: relative;
          padding-bottom: 0.5rem;
        }

        .about-text p::after {
          content: '';
          position: absolute;
          bottom: 0;
          right: 0;
          width: 20px;
          height: 1px;
          background: rgba(25, 87, 166, 0.2);
          border-radius: 1px;
        }

        .action-points {
          background: rgba(25, 87, 166, 0.05);
          padding: 1.5rem;
          border-radius: var(--border-radius);
          border-right: 4px solid var(--primary-color);
          margin: 1.5rem 0;
        }

        .action-points p {
          margin-bottom: 1rem;
          color: var(--text-medium);
          font-size: 1rem;
        }

        .action-points p::after {
          display: none;
        }
        
        .stats-container {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          margin: 2.5rem 0;
        }
        
        .stat-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          min-width: 120px;
          background-color: white;
          padding: 1.5rem;
          border-radius: var(--border-radius);
          box-shadow: var(--box-shadow);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .stat-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        
        .stat-number {
          display: block;
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 0.5rem;
        }
        
        .stat-label {
          color: var(--text-medium);
          font-size: 0.95rem;
          font-weight: 500;
        }
        
        .cta-container {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
        }
        
        /* Timeline Styles */
        .timeline-section {
          margin-top: 5rem;
          display: flex;
          flex-direction: column;
        }
        
        .timeline-title-ar {
          font-family: 'Amiri', 'Noto Naskh Arabic', serif;
          font-size: 1.25rem;
          font-weight: 500;
          color: #333;
          margin-top: -0.75rem;
          margin-bottom: 1rem;
          line-height: 1.5;
          direction: rtl;
          text-align: right;
          overflow: hidden;
        }

        .timeline-description {
          font-family: 'Amiri', 'Noto Naskh Arabic', serif;
          font-size: 1rem;
          color: #555;
          direction: rtl;
          text-align: right;
          overflow: hidden;
        }

        .timeline-year.رئيس.شرفي {
          color: #d3612f;
          font-weight: 700;
        }

        .timeline-container {
          background: white;
          border-radius: 4px;
          padding: 4rem 2rem;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .timeline-wrapper {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
        }

        .timeline-line {
          position: absolute;
          left: 1rem;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, #1957a6, rgba(25, 87, 166, 0.3));
        }

        .timeline-item {
          position: relative;
          padding-left: 3rem;
          margin-bottom: 4rem;
        }
        
        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-dot {
          position: absolute;
          top: 1.5rem;
          left: calc(1rem - 5px);
          width: 12px;
          height: 12px;
          background: #1957a6;
          border-radius: 50%;
          border: 3px solid white;
          z-index: 2;
          box-shadow: 0 0 0 3px rgba(25, 87, 166, 0.2);
        }
        
        .timeline-card {
          position: relative;
          background: #fafafa;
          padding: 2rem;
          border-radius: 4px;
          border: 1px solid rgba(0, 0, 0, 0.05);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @media (min-width: 993px) {
          .timeline-line {
            left: 50%;
            transform: translateX(-50%);
          }

          .timeline-item {
            padding-left: 0;
          }
          
          .timeline-item::after {
            content: '';
            display: table;
            clear: both;
          }

          .timeline-dot {
            left: 50%;
            transform: translateX(-50%);
          }

          .timeline-content {
            width: calc(50% - 40px);
            position: relative;
          }

          .timeline-content.left {
            float: left;
          }
          
          .timeline-content.right {
            float: right;
          }

          .timeline-card::before {
            content: '';
            position: absolute;
            top: 1.8rem;
            width: 0;
            height: 0;
            border: 8px solid transparent;
            transition: border-color 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .timeline-content.left .timeline-card::before {
            right: -16px;
            border-left-color: #fafafa;
          }

          .timeline-content.right .timeline-card::before {
            left: -16px;
            border-right-color: #fafafa;
          }

          .timeline-content .timeline-card:hover::before {
            border-left-color: white;
            border-right-color: white;
          }
        }
        
        .timeline-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          background: white;
        }

        .timeline-year {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--secondary-color);
        }

        .timeline-title {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 1rem;
          line-height: 1.3;
          color: var(--primary-color);
        }

        .timeline-title.primary {
          color: #1957a6;
        }

        .timeline-title.secondary {
          color: #d3612f;
        }

        .timeline-description {
          color: #4a4a4a;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
        }

        .timeline-image {
          position: relative;
          height: 10rem;
          border-radius: 2px;
          overflow: hidden;
        }

        .timeline-img {
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .timeline-card:hover .timeline-img {
          transform: scale(1.05);
        }
        
        .Projects img {
          width: 100%;
          max-width: 20em;
          margin-top: 1em;
          border-radius: var(--border-radius);
          height: auto;
        }
        
        .values-section {
          margin-top: 5rem;
          text-align: center;
        }
        
        .values-section h2 {
          font-size: 2rem;
          color: var(--text-dark);
          margin-bottom: 1rem;
          font-family: var(--Poppins);
        }
        
        .values-description {
          max-width: 800px;
          margin: 0 auto 3rem;
          color: var(--text-medium);
          line-height: 1.7;
        }
        
        .values-container {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          justify-content: center;
        }
        
        .value-card {
          flex: 1;
          min-width: 250px;
          max-width: 350px;
          background-color: white;
          padding: 2.5rem 2rem;
          border-radius: var(--border-radius);
          box-shadow: var(--box-shadow);
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .value-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }
        
        .value-icon {
          margin-bottom: 1.5rem;
        }
        
        .icon-circle {
          width: 70px;
          height: 70px;
          background-color: var(--accent-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          transition: transform 0.3s ease;
        }
        
        .value-card:hover .icon-circle {
          transform: scale(1.1);
          background-color: var(--primary-color);
        }
        
        .value-card:hover .icon-circle span {
          color: white;
        }
        
        .icon-circle span {
          font-size: 1.8rem;
          color: var(--primary-color);
          transition: color 0.3s ease;
        }
        
        .value-card h3 {
          font-size: 1.4rem;
          color: var(--primary-color);
          margin-bottom: 1rem;
          font-family: var(--Poppins);
        }
        
        .value-card p {
          color: var(--text-medium);
          line-height: 1.6;
        }
        
        .Partnairs {
          padding: 2rem;
          background-color: #f9f9f9;
          text-align: center;
          margin-top: 4rem;
        }
        
        .Partnairs h2 {
          font-size: 2rem;
          color: #333;
          margin-bottom: 1.5rem;
        }
        
        .parts {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.5rem;
        }
        
        .ImgCont {
          width: 15rem;
          height: 13rem;
          background-color: white;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          border-radius: 1rem;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .ImgCont:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        }
        
        .autoShow {
          animation: autoShowAnimation both;
          animation-timeline: view(90% 5%);
        }
        
        @keyframes autoShowAnimation {
          from {
            opacity: 0;
            transform: translateY(200px) scale(0.3);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
          .about-content {
            flex-direction: column;
          }
          
          .cta-container {
            flex-direction: column;
          }
          
          .about-header h1 {
            font-size: 2rem;
          }
          
          .about-text h2 {
            font-size: 1.5rem;
          }
          
          .values-section h2,
          .Partnairs h2 {
            font-size: 1.8rem;
          }
          
          .stat-item {
            min-width: 45%;
          }
          
          .timeline-container {
            padding: 3rem 1.5rem;
          }
        }
        
        @media (max-width: 576px) {
          .about-section {
            padding: 3rem 1rem;
          }
          
          .about-header h1 {
            font-size: 1.8rem;
          }
          
          .about-tagline {
            font-size: 1rem;
          }
          
          .value-card,
          .ImgCont,
          .stat-item {
            min-width: 100%;
          }
          
          .timeline-card {
            padding: 1.5rem;
          }

          .timeline-image {
            height: 8rem;
          }
        }
      `}</style>
    </>
  );
}