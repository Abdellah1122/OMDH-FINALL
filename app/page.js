"use client"

import { useState, useEffect } from "react"
// Import your existing components
import Nav from "./components/Nav"
import Footer from "./components/Footer"



const heroSlides = [
  {
    image: "/Images/omdhbg.jpg",
    text: "انبثاق فكرة....مسار فعل",
  },
  {
    image: "/slider/1.jpg",
  },
  {
    image: "/slider/2.jpg",
  },
    {
    image: "/slider/3.jpg",
  },
    {
    image: "/slider/4.jpg",
  },
    {
    image: "/slider/5.jpg",
  },

]

const newsItems = [
  {
    date: "",
    title: "",
    description:' في إطار استكمال برنامجها التواصلي، عقد  وفد عن المكتب التنفيذي للمنظمة ، لقاء مع قيادة حزب الأصالة و المعاصرة الذي كان مناسبة لاستحضار القواسم الحقوقية المشتركة و سبل تعزيز التعاون بين الإطارين في مجالات حقوق الإنسان بالمغرب.',
    image: "/news/1.jpg",
  },
{
    date: "",
    title: "",
    description:"استقبل رئيس مؤسسة وسيط المملكة الأستاذ حسن طارق، وفداً عن المنظمة المغربية لحقوق الإنسان و قد كانت مناسبة للإطلاع على تجربة الوسيط في مجال عمل تدخلها الوسائطي، كما كانت مناسبة أيضاً لوضع هذه المؤسسة أمام المستجدات التي شهدتها المنظمة بعد مؤتمرها الثاني عشر. اللقاء تناول سُبل التعاون بين المؤسستين لما يعزز الدور الوسائطي للمنظمة حقوقياً و لما يكرس من ثقافة حقوق الإنسان و تعزيزها مدنياً و اجتماعياً إرساءً لمقومات بناء دولة الحقوق و الحريات.",
    image: "/news/2.jpg",
  },
  {
    date: "",
    title: "",
    description:"في إطار سياسة انفتاح المنظمة المغربية لحقوق الإنسان على محيطها، عقد وفد عنها يتقدمهم رئيس المنظمة إلى جانب اعضاء و عضوات المكتب التنفيذي، مع الهيئة الوطنية للنزاهة و الوقاية من الرشوة بحضور رئيسها الأستاذ محمد بنعليلو و فريقه الإداري. و قد تمحور اللقاء حول مناقشة سبل التعاون و الشراكة بين الهيئة و المنظمة خاصة مع مختلف التطورات الحالية التي تشهد طلباً حقوقياً نحو الوقاية من الرشوة و دعم النزاهة.",
    image: "/news/3.jpg",
  },
  {
    date: "",
    title: "",
    description:"المنظمة المغربية لحقوق الإنسان  تستقبل في مقرها على هامش اللقاء التشاوري الذي نظمته الفيدرالية الدولية لحقوق الإنسان بالرباط أيام 4-5 يوليوز 2025 كل من الكاتب العام للفيدرالية الدولية لحقوق الإنسان السيد عيسى رحمون و رئيسة الفيدرالية الاورومتوسطية ضد الاختفاء القسري السيدة نصيرة داتور. و قد انصب النقاش حول سبل تعزيز التعاون بين المنظمة و هذه الإطارات بما يخدم قضايا حقوق الإنسان في المنطقة و العالم.",
    image: "/news/4.jpg",
  },
  {
    date: "",
    title: "",
    description:"لقاء وفد المنظمة المغربية لحقوق الإنسان بقيادة رئيس المنظمة الأستاذ نوفل البعمري مع وفد عن حزب التقدم و الإشتراكية برئاسة الأمين العام للحزب الأستاذ نبيل بن عبد الله، و قد تدارس الطرفان كيفية العمل المشترك للمساهمة في النهوض بمنظومة حقوق الإنسان بالمغرب.",
    image: "/news/5.jpg",
  },
  {
    date: "",
    title: "",
    description:"لقاء وفد  عن المكتب التنفيذي للمنظمة المغربية لحقوق الإنسان برئاسة الاستاذ نوفل البعمري رئيس المنظمة، مع وفد عن المكتب السياسي لحزب  للإتحاد الاشتراكي للقوات الشعبية برئاسة الكاتب الأول الأستاذ ادريس لشكر، لقاء تم التأكيد فيه على أهمية التعاون في القضايا الحقوقية ذات الاهتمام المشترك.",
    image: "/news/6.jpg",
  },
]

// Note: Using placeholder logos for demonstration
const natPart = [
      { name: "", logo:"nat/المجلس الأعلى للسلطة القضائية.jpg" },
      { name: "", logo:"nat/المجلس الوطني لحقوق الانسان.jpg" },
      { name: "", logo:"nat/المندوبية الوزارية لحقوق الانسان.jpg" },
      { name: "", logo:"nat/المندوبية الوزارية لحقوق الانسان.jpeg" },
      { name: "", logo:"nat/الهيئة الوطنية للنزاهة والوقاية من الرشوة ومحاربتها.jpg" },
      { name: "", logo:"nat/الهيئة الوطنية للنزاهة والوقاية من الرشوة ومحاربتها.jpeg" },
      { name: "", logo:"nat/هيئات المحامين بالمغرب.jpg" },
      { name: "", logo:"nat/وزارة التربية الوطنية.png" },
      { name: "", logo:"nat/وزارة التعليم العالي والبحت العلمي.png" },
      { name: "", logo:"nat/وزارة الداخلية.jpg" },
      { name: "", logo:"nat/وزارة العدل.jpeg" },
      { name: "", logo:"nat/وسيط المملكة.jpg" },
]

const UniPart = [
      { name: "University 1", logo: "UNIPartnaires/1631365508628.jpeg" },
      { name: "University 2", logo:"UNIPartnaires/images (3).png"},
      { name: "University 3", logo: "UNIPartnaires/images.jpeg" },
      { name: "UIZ", logo:"UNIPartnaires/Logo-UIZ.jpg" },
      { name: "University 4", logo: "UNIPartnaires/logo.png" },
      { name: "Cadi Ayyad", logo: "UNIPartnaires/univ-cadi-ayyad-logo-900x420-1.png" },
      { name: "Mohammed V University", logo: "UNIPartnaires/Mohammed_V_University_Logo.png"},
      { name: "Abdelmalek Essaadi", logo: "UNIPartnaires/universite-abdelmalek-essaadi-900x420-1.png" },
      { name: "Hassan 1er", logo: "UNIPartnaires/Universite-Hassan-1er-settat.png"},
]

const intPart = [
      { name: "", logo: "inter/AFD.png" },
      { name: "", logo: "inter/CIDEAL Foundation.jpeg" },
      { name: "", logo: "inter/ECPM.png" },
      { name: "", logo: "inter/NDI.png" },
      { name: "", logo: "inter/Euro-Med Monitor.jpg" },
      { name: "", logo: "inter/Friedrich-Ebert-Stiftung.png" },
      { name: "", logo: "inter/International Federation for Human Rights.png" },
      { name: "", logo: "inter/The World Coalition Against the Death Penalty.png" },
      { name: "", logo: "inter/المعهد العربي لحقوق الإنسان.png" },
      { name: "", logo: "inter/المنظمة العربية لحقوق الإنسان.jpg" },
      { name: "", logo: "inter/ECOSOC.jpg" },
]

const timelineEvents = [
    {
    "year": "1988",
    "title":"التأسيس",
    "description": "تأسست في الذكرى الأربعينية لصدور الإعلان العالمي لحقوق الإنسان، يوم 10 دجنبر 1988، بعد ثلاثة قرارات منع متتالية (28 ماي،25 يونيو،24 شتنبر 1988) من طرف السلطات العمومية. وقد سهرت على هذا التأسيس لجنة تحضيرية تتكون من 37 رجلا وامرأة: جامعيين وباحثين ومحامين وكتاب وفنانين ومستخدمين...",
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
    "year": "2011",
    "title": "الربيع العربي والإصلاح الدستوري",
    "description": "خلال الإصلاحات الدستورية التي تلت مظاهرات 2011، دعت المنظمة المغربية لحقوق الإنسان إلى توسيع حماية حقوق الإنسان واستقلالية القضاء والمساواة بين الجنسين.",
    "image": "/Images/PA.jpg",
    "type": "secondary"
  },
  {
    "year": "أبريل 2025",
    "title": "التضامن مع غزة",
    "description": "خلال مؤتمرها الوطني الثاني عشر، أعربت المنظمة المغربية لحقوق الإنسان عن تضامنها مع الشعب الفلسطيني وأدانت العدوان الإسرائيلي المستمر على غزة، ودعت إلى تدخل دولي.",
    "image": "/Images/gaza.jpg",
    "type": "primary"
  },
]


export default function HomePage() {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0)
  const [currentNewsSlide, setCurrentNewsSlide] = useState(0)

  // Auto-advance hero carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  // Auto-advance news carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentNewsSlide((prev) => (prev + 1) % newsItems.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  const nextHeroSlide = () => {
    setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevHeroSlide = () => {
    setCurrentHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <div className="homepage">
      <Nav />

      <main style={{ marginTop: "-85px" }} >
        {/* Hero Carousel */}
        <section className="hero-section">
          <div className="hero-container">
            {heroSlides.map((slide, index) => (
              <div key={index} className={`hero-slide ${index === currentHeroSlide ? "active" : ""}`}>
                <img
                  src={slide.image || "/placeholder.svg?height=800&width=1200"}
                  alt={slide.alt}
                  className="hero-image"
                />
                {/**
                 *                 <div className="hero-overlay" />
                  <div className="hero-content">
                    <div className="hero-text-box">
                      <p className="hero-text" translate="no">{slide.text}</p>
                    </div>
                  </div>
                 */}


              </div>
            ))}
          </div>

          <button onClick={prevHeroSlide} className="hero-control hero-prev" aria-label="Previous slide">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <button onClick={nextHeroSlide} className="hero-control hero-next" aria-label="Next slide">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>

          <div className="hero-indicators">
            {heroSlides.map((_, index) => (
              <button key={index} onClick={() => setCurrentHeroSlide(index)} className={`hero-indicator ${index === currentHeroSlide ? "active" : ""}`} aria-label={`Go to slide ${index + 1}`} />
            ))}
          </div>
        </section>

        <div className="main-container">
          {/* News Section */}
          <section className="news-section">
            <div className="section-header">
              <h2 className="section-title">:اخر المستجدات</h2>
            </div>
            <div className="news-container" translate="no">
              <div className="news-card">
                <div className="news-content">
                  <div className="news-text-section">
                    {/*
                    <div className="news-date">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" /><path d="M16 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path d="M8 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path d="M3 10H21" stroke="currentColor" strokeWidth="1.5" /></svg>
                      <span>{newsItems[currentNewsSlide].date}</span>
                    </div>
                    */}
                    <h3 className="news-title" lang="ar" dir="rtl">{newsItems[currentNewsSlide].title}</h3>
                    <p className="news-description" lang="ar" dir="rtl">{newsItems[currentNewsSlide].description}</p>
                  </div>
                  <div className={`news-image-section ${newsItems[currentNewsSlide].imageStyle || ""}`}>
                    <img src={newsItems[currentNewsSlide].image || "/placeholder.svg?height=500&width=600"} alt={newsItems[currentNewsSlide].title} className="news-image" />
                  </div>
                </div>
              </div>
              <div className="news-indicators">
                {newsItems.map((_, index) => (
                  <button key={index} onClick={() => setCurrentNewsSlide(index)} className={`news-indicator ${index === currentNewsSlide ? "active" : ""}`} aria-label={`Go to news ${index + 1}`} />
                ))}
              </div>
            </div>
          </section>

          {/* === ENHANCED PARTNER SECTIONS START === */}

          {/* National Partners */}
          <div className="partner-section">
            <h2 className="section-title" style={{marginTop:"3em"}}>:مؤسسات وطنية شريكة</h2>
            <div className="slider">
              <div className="slide-track national-track">
                {/* We duplicate the array to create a seamless loop */}
                {[...natPart, ...natPart].map((partner, index) => (
                  <div className="slide" key={`nat-${index}`}>
                    <img src={partner.logo} alt={partner.name} className="partner-logo" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* University Partners */}
          <div className="partner-section">
            <h2 className="section-title">:جامعات شريكة</h2>
            <div className="slider">
              <div className="slide-track university-track">
                {/* We duplicate the array to create a seamless loop */}
                {[...UniPart, ...UniPart].map((partner, index) => (
                  <div className="slide" key={`uni-${index}`}>
                    <img src={partner.logo} alt={partner.name} className="partner-logo" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* International Partners */}
          <div className="partner-section">
            <h2 className="section-title">:الشركاء الدوليون</h2>
            <div className="slider">
              <div className="slide-track international-track">
                {/* We duplicate the array to create a seamless loop */}
                {[...intPart, ...intPart].map((partner, index) => (
                  <div className="slide" key={`int-${index}`}>
                    <img src={partner.logo} alt={partner.name} className="partner-logo" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* === ENHANCED PARTNER SECTIONS END === */}

          {/* Our Story Section */}
          <section className="story-section" lang="ar" dir="rtl">
            <div className="story-container">
              <div className="story-image-section">
                <img src="/Images/Hands.jpg" alt="OMDH Story" className="story-image" />
              </div>
              <div className="story-content">
                <h3 className="story-title">المنظمة المغربية لحقوق الإنسان: الدعوة إلى العدالة والكرامة الإنسانية</h3>
                <p className="story-text">
في صميم رسالتنا يكمن التزامنا الراسخ بالعدالة والمساواة وحماية حقوق الإنسان الأساسية. ندافع عن كرامة وحريات جميع الأفراد، ونسعى جاهدين لخلق عالم يُسمع فيه كل صوت، ويُحترم فيه كل حق، ويُمكّن كل شخص من العيش دون خوف أو قمع.                 </p>
                <a href="/about-us" className="story-button">استكشف المزيد</a>
              </div>
            </div>
          </section>

          {/* Timeline Section */}
          <section className="timeline-section" lang="ar" dir="rtl">
            <div className="section-header">
              <h2 className="section-title">اكتشف مسار فعلنا</h2>
            </div>
            <div className="timeline-container">
              <div className="timeline-wrapper">
                <div className="timeline-line"></div>
                {timelineEvents.map((event, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className={`timeline-content ${index % 2 === 0 ? "left" : "right"}`}>
                      <div className="timeline-card">
                        <div className={`timeline-year ${event.type}`}>{event.year}</div>
                        <h4 className={`timeline-title ${event.type}`}>{event.title}</h4>
                        <p className="timeline-description">{event.description}</p>
                        <div className="timeline-image">
                          <img src={event.image || "/placeholder.svg?height=250&width=400"} alt={event.title} className="timeline-img" />
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
          {/* Map Section */}
          <section className="map-section">
            <div className="section-header">
              <h2 className="section-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
               تجدنا
              </h2>
            </div>
            <div className="map-container">
              <iframe
                src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=8,%20rue%20Ouargha,%20R%C3%A9sidence%20Volubilis,%20appt%201,%20Agdal%20/%20Rabat,%20Maroc+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed"                width="100%"
                height="500"
                title="OMDH Location"
                className="map-iframe"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        /* Global Styles */
        :root {
          --primary-color: #1957a6;
          --secondary-color: #d3612f;
          --background-color: #fafafa;
          --text-color: #1a1a1a;
          --text-muted: #4a4a4a;
        }

        .homepage {
          min-height: 100vh;
          background-color: var(--background-color);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          color: var(--text-color);
          line-height: 1.6;
        }

        .main-container {
          max-width: 1700px;
          margin: 0 auto;
          padding: 8rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 10rem;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: 2rem;
          font-weight: 600;
          color: var(--primary-color);
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          letter-spacing: -0.025em;
          position: relative;
        }

        /* Hero Section */
        .hero-section { z-index:0; position: relative; height: 100vh; overflow: hidden; }
        .hero-container { position: relative; width: 100%; height: 100%; }
        .hero-slide { position: absolute; inset: 0; opacity: 0;overflow: hidden; transition: opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1); }
        .hero-slide.active { opacity: 1; }
        .hero-image {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transform: scale(1.02);
          transition: transform 20s ease-out;
        }

        .hero-slide.active .hero-image { transform: scale(1); }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient( to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.1) 40%, rgba(0, 0, 0, 0.6) 100% ); }
        .hero-content { position: absolute; bottom: 8rem; left: 50%; transform: translateX(-50%); width: 85%; max-width: 56rem; z-index: 10; }
        .hero-text-box { background: rgba(0, 0, 0, 0.1);margin-bottom:32em; backdrop-filter: blur(3px); border-radius: 10px; padding: 2rem; text-align: center; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1); }
        .hero-text { color: white; font-size: 2.7rem; font-weight: 400; line-height: 1.7; margin: 0; letter-spacing: 0.01em; }
        .hero-control { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(10px); border: none; border-radius: 50%; width: 3.5rem; height: 3.5rem; color: #333; cursor: pointer; transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); display: flex; align-items: center; justify-content: center; z-index: 20; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); }
        .hero-control:hover { background: rgba(255, 255, 255, 1); transform: translateY(-50%) scale(1.1); box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15); }
        .hero-prev { left: 3rem; }
        .hero-next { right: 3rem; }
        .hero-indicators { position: absolute; bottom: 3rem; left: 50%; transform: translateX(-50%); display: flex; gap: 1rem; z-index: 20; }
        .hero-indicator { width: 2.5rem; height: 2px; border-radius: 1px; border: none; background: rgba(255, 255, 255, 0.4); cursor: pointer; transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); padding: 0; }
        .hero-indicator.active { background: rgba(255, 255, 255, 0.9); width: 4rem; }

        /* News Section */
        .news-section { display: flex; flex-direction: column;overflow: hidden; }
        .news-container { max-width: 1600px; margin: 0 auto; width: 100%; }
        .news-card { background: white; border-radius: 4px; box-shadow: 0 2px 20px rgba(0, 0, 0, 0.04); overflow: hidden; border: 1px solid rgba(0, 0, 0, 0.05); }
        .news-content { display: flex; min-height: 450px; }
        .news-text-section { flex: 1.2; padding: 3rem; display: flex; flex-direction: column; justify-content: center; gap: 1.5rem; }
        .news-date { display: flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; color: #666; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; }
        .news-title { font-size: 1.5rem; font-weight: 600; color: #1957a6; line-height: 1.3; margin: 0; letter-spacing: -0.02em; }
        .news-description { color: #4a4a4a; line-height: 1.7; margin: 0; font-size: 0.95rem; }
        .news-image-section { flex: 1; position: relative; min-height: 500px; overflow: hidden;}
        .news-image-section.special-padding { padding: 2rem; }
        .news-image-section.special-padding .news-image { object-fit: contain; overflow: hidden;}
        .news-image { position: absolute; width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }
        .news-card:hover .news-image { transform: scale(1.02); }
        .news-indicators { display: flex; justify-content: center; margin-top: 2.5rem; gap: 1rem; }
        .news-indicator { width: 2.5rem; height: 2px; border-radius: 1px; border: none; background: #e5e5e5; cursor: pointer; transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); padding: 0; }
        .news-indicator.active { background: #1957a6; width: 4rem; }

        /* === [ENHANCED] PARTNER SLIDER STYLES START === */
        .partner-section {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-top: -5rem;
        }

        .partner-section .section-title {
            margin-bottom: 0;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .slider {
          width: 100%;
          overflow: hidden;
          padding: 2rem 0;
          position: relative;
          -webkit-mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
          mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
        }

        .slider:hover .slide-track {
          animation-play-state: paused;
        }

        .slide-track {
          display: flex;
          width: fit-content;
          animation-name: scroll;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          background-color:var(--accent-color);
          padding:1em;
        }

        .national-track { animation-duration: 30s; }
        .university-track { animation-duration: 45s; }
        .international-track { animation-duration: 25s; }

        .slide {
          height: 120px;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 0 40px;
        }

        .partner-logo {
          height: 120px; /* Increased logo height */
          width: auto;
          max-width: 250px;
          overflow: hidden;
          object-fit: contain;
          opacity: 0.8;
          transition: all 0.3s ease;
        }

        .slide:hover .partner-logo {
          filter: grayscale(0%);
          opacity: 1;
          transform: scale(1.1);
        }
        /* === PARTNER SLIDER STYLES END === */

        /* Story Section */
        .story-section { background: white; border-radius: 4px; overflow: hidden; box-shadow: 0 2px 20px rgba(0, 0, 0, 0.04); border: 1px solid rgba(0, 0, 0, 0.05); }
        .story-container { display: flex; }
        .story-image-section { flex: 1.5; position: relative; min-height: 500px; }
        .story-image { position: absolute; width: 100%; height: 100%; object-fit: cover; }
        .story-content { flex: 1; padding: 4rem; display: flex; flex-direction: column; justify-content: center; }
        .story-title { font-size: 1.75rem; font-weight: 600; color: #1a1a1a; margin-bottom: 1.5rem; line-height: 1.2; letter-spacing: -0.025em; }
        .story-text { color: #4a4a4a; line-height: 1.7; margin-bottom: 2.5rem; font-size: 1rem; }
        .story-button { display: inline-block; background: #1957a6; color: white; padding: 0.875rem 2rem; border-radius: 2px; text-decoration: none; font-weight: 500; transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); width: fit-content; font-size: 0.9rem; letter-spacing: 0.01em; }
        .story-button:hover { background: #174c91; transform: translateY(-2px); box-shadow: 0 8px 25px rgba(25, 87, 166, 0.3); }

        /* Timeline Section */
        .timeline-section { margin-top:5em; display: flex; flex-direction: column; }
        .timeline-container { background-color: white; border-radius: 4px; padding: 4rem 2rem; border: 1px solid rgba(0, 0, 0, 0.05); }
        .timeline-wrapper { max-width: 900px; margin: 0 auto; position: relative; }
        .timeline-line { position: absolute; left: 1rem; top: 0; bottom: 0; width: 2px; background: linear-gradient(to bottom, #1957a6, rgba(25, 87, 166, 0.3)); }
        .timeline-item { position: relative; padding-left: 3rem; margin-bottom: 4rem; }
        .timeline-item:last-child { margin-bottom: 0; }
        .timeline-dot { position: absolute; top: 1.5rem; left: calc(1rem - 5px); width: 12px; height: 12px; background: #1957a6; border-radius: 50%; border: 3px solid white; z-index: 2; box-shadow: 0 0 0 3px rgba(25, 87, 166, 0.2); }
        .timeline-card { position: relative; background: #fafafa; padding: 2rem; border-radius: 4px; border: 1px solid rgba(0, 0, 0, 0.05); transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
        .timeline-card:hover { transform: translateY(-4px); box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08); background: white; }
        .timeline-year { font-size: 1rem; font-weight: 600; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em; color:var(--secondary-color); }
        .timeline-title { font-size: 1.125rem; font-weight: 600; margin-bottom: 1rem; line-height: 1.3; color:var(--primary-color); }
        .timeline-title.primary { color: #1957a6; }
        .timeline-title.secondary { color: #d3612f; }
        .timeline-description { color: #4a4a4a; line-height: 1.6; margin-bottom: 1.5rem; font-size: 0.9rem; }
        .timeline-image { position: relative; height: 10rem; border-radius: 2px; overflow: hidden; }
        .timeline-img { position: absolute; width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }
        .timeline-card:hover .timeline-img { transform: scale(1.05); }
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
        /* Map Section */
        .map-section { display: flex; flex-direction: column; }
        .map-container { border-radius: 4px; overflow: hidden; box-shadow: 0 2px 20px rgba(0, 0, 0, 0.04); border: 1px solid rgba(0, 0, 0, 0.05); }
        .map-iframe { border: none; display: block; width: 100%; }

        /* === [ENHANCED] RESPONSIVE DESIGN === */

        /* --- DESKTOP FIRST (EXISTING STYLES) --- */
        @media (min-width: 993px) {
          .timeline-line { left: 50%; transform: translateX(-50%); }
          .timeline-item { padding-left: 0; }
          .timeline-item::after { content: ''; display: table; clear: both; }
          .timeline-dot { left: 50%; transform: translateX(-50%); }
          .timeline-content { width: calc(50% - 40px); position: relative; }
          .timeline-content.left { float: left; }
          .timeline-content.right { float: right; }
          .timeline-card::before { content: ''; position: absolute; top: 1.8rem; width: 0; height: 0; border: 8px solid transparent; transition: border-color 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
          .timeline-content.left .timeline-card::before { right: -16px; border-left-color: #fafafa; }
          .timeline-content.right .timeline-card::before { left: -16px; border-right-color: #fafafa; }
          .timeline-content .timeline-card:hover::before { border-left-color: white; border-right-color: white; }
        }

        /* --- LARGE TABLETS & SMALL LAPTOPS (1024px) --- */
        @media (max-width: 1024px) {
          .main-container { padding: 6rem 2rem; gap: 8rem; }
          .timeline-line { left: 1rem; }
          .timeline-dot { left: 0.625rem; }
          .timeline-content, .timeline-content.right { margin-left: 3rem; width: calc(100% - 3rem); }
          .story-container { flex-direction: column; }
          .story-content { padding: 3rem; }
          
          /* Hero adjustments for this breakpoint */
          .hero-content { max-width: 90%; }
          .hero-text-box { padding: 2rem; }
          .hero-text { font-size: 2rem; }
        }

        /* --- TABLETS (768px) --- */
        @media (max-width: 768px) {
          .main-container { padding: 4rem 1.5rem; gap: 6rem; }
          .section-title { font-size: 1.75rem; }
          
          /* Hero adjustments for tablets */
          .hero-section { height: 100vh; }
          .hero-content { width: 90%; bottom: 6rem; }
          .hero-text-box { padding: 2rem; }
          .hero-text { font-size: 2rem;  }
          .hero-control { width: 3rem; height: 3rem; }
          .hero-prev { left: 1.5rem; }
          .hero-next { right: 1.5rem; }
          .hero-indicators { bottom: 2.5rem; }

          .news-content { flex-direction: column; min-height: auto; }
          .news-text-section { padding: 2.5rem; }
          .news-image-section { min-height: 350px; }
          .news-title { font-size: 1.35rem; }

          .story-content { padding: 2.5rem; }
          .story-title { font-size: 1.6rem; }
          .timeline-container { padding: 3rem 1.5rem; }
        }

        /* --- MOBILE PHONES (480px) --- */
@media (max-width: 480px) {
  .main-container { padding: 3rem 1rem; gap: 5rem; }
  .section-title { font-size: 1.5rem; }
  
  /* Hero adjustments for mobile */
  .hero-section { height: 100vh; }

  /* Add this rule for the hero image */
  .hero-image {
    object-fit: contain; /* This fits the entire image, may create letterbox effect */
  }
  .hero-content { width: 92%; bottom: 5rem; margin-bottom:3em;}
  .hero-text-box { padding: 1.5rem; backdrop-filter: blur(5px); }
  .hero-text { font-size: 1.6rem;  }
  .hero-control { display: none; } /* Hide controls to save space */
  .hero-indicators { bottom: 2rem; }
  .hero-indicator { width: 2rem; }
  .hero-indicator.active { width: 3rem; }

  .news-text-section { padding: 2rem 1.5rem; }
  .news-title { font-size: 1.2rem; }
  .news-image-section { min-height: 280px; }

  .story-content { padding: 2rem 1.5rem; }
  .story-title { font-size: 1.4rem; }

  .timeline-card { padding: 1.5rem; }
  .timeline-image { height: 8rem; }
  .timeline-wrapper { max-width: 100%; }
  .timeline-line { left: 1rem; }
  .timeline-dot { left: calc(1rem - 5px); }
  .timeline-item { padding-left: 2.5rem; margin-bottom: 2rem; }
  .timeline-content.right, .timeline-content { margin-left: 0; width: 100%; }
}
      `}</style>
    </div>
  )
}