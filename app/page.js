"use client"

import { useState, useEffect } from "react"
// Import your existing components
import Nav from "./components/Nav"
import Footer from "./components/Footer"



const heroSlides = [
  {
    image: "/Images/CandleInHand2.jpg",
    alt: "Kids",
    text: "Explorez nos dernières initiatives et découvrez en avant-première les événements impactants qui nous attendent. Rejoignez-nous dans la défense des droits humains et soyez parmi les premiers à nous soutenir pour le changement.",
  },
  {
    image: "/Images/Hands.jpg",
    alt: "Peace Pigeon",
    text: "Découvrez notre mission et voyez comment nous travaillons chaque jour pour défendre la dignité humaine, promouvoir la justice et créer un changement durable.",
  },
  {
    image: "/Images/CandleDarkBG2.jpg",
    alt: "Hand Solidarity",
    text: "Explorez tous nos projets et découvrez comment chaque initiative nous rapproche d'un monde où les droits humains sont respectés pour tous !",
  },
  {
    image: "/Images/omdhbg.jpg",
  },
]

const newsItems = [
  {
    date: "25-26-27 avril 2025",
    title: "12ème Conférence Nationale de l'OMDH sur les Droits Humains et le Changement Global",
    description:
      'تكرم المنظمة المغربية لحقوق الإنسان مؤسسيها والمساهمين فيها بدعوتهم للمشاركة في الندوات والجلسات الاftتاحية لمؤتمراتها. ويبحث مؤتمرها الوطني الثاني عشر في الرباط موضوع "فعالية حقوق الإنسان في مواجهة التحولات الدولية الراهنة"، ويبدأ بندوة حول الحقوق الاقتصادية والاجتماعية والثقافية في السياسة العامة.',
    image: "/Images/New Project.jpg",
    imageStyle: "special-padding",
  },
  {
    date: "6 mai 2025",
    title: "Conférence de Presse de l'OMDH sur les Résultats de la 12ème Conférence Nationale des Droits Humains",
    description:
      'في 6 مايو 2025، عقدت المنظمة المغربية لحقوق الإنسان مؤتمراً صحفياً في الرباط لعرض نتائج مؤتمرها الوطني الثاني عشر حول "فعالية حقوق الإنسان في مواجهة التحولات الدولية الراهنة". وتقاسمت الإدارة الاستنتاجات والتوصيات، وحللت السياقات الوطنية والدولية، وأجابت على أسئلة وسائل الإعلام حول مواقفها من التحديات الراهنة لحقوق الإنسان.',
    image: "/Images/News2.jpg",
  },
  {
    date: "18 mai 2025",
    title: "Le Conseil National de l'OMDH se Réunit Suite à la 12ème Conférence, Rend Hommage aux Êtres Chers Disparus",
    description:
      "في 18 مايو 2025، عقدت المنظمة المغربية لحقوق الإنسان الجلسة الأولى لمجلسها الوطني لوضع اللمسات الأخيرة على جدول أعمال مؤتمرها الوطني الثاني عشر. بدأ الاجتماع بالوقوف دقيقة صمت حدادًا على روح أنس بوعيش ووالدة الأستاذ عبد الرزاق وئام.",
    image: "/Images/News3.jpg",
  },
]

// Note: Using placeholder logos for demonstration
const natPart = [
      { name: "Partner 1", logo:"NatPartnaires/ensemble-contre-la-peine-de-mort-ecpm-morocco-417461.jpg" },
      { name: "Partner 2", logo: "NatPartnaires/images (1).jpeg"},
      { name: "Partner 3", logo: "NatPartnaires/images (1).png" },
      { name: "Partner 4", logo: "NatPartnaires/images (2).png" },
      { name: "Partner 5", logo: "NatPartnaires/images.jpeg" },
      { name: "Partner 6", logo: "NatPartnaires/images.png" },
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
      { name: "ECPM", logo: "IntPartnaires/28JUN-ECOSOC-LOGO-BLOG.png" },
      { name: "ECOSOC", logo: "IntPartnaires/Amnesty_International_logo.svg.png" },
      { name: "Amnesty International", logo: "IntPartnaires/LC-Logo-thumbnail-980x551-1-400x250.jpg" },
      { name: "LC", logo: "IntPartnaires/WORLD_REPORT_2023_OF_HUMAN_RIGHTS_WATCH_0.png" },
]

const timelineEvents = [
    {
    "year": "1988",
    "title": "Fondation de l'OMDH",
    "description": "L'Organisation Marocaine des Droits Humains (OMDH) a été officiellement fondée le 10 decembre 1988, à Agdal, Rabat, dans le but de sensibiliser aux droits humains et de défendre les victimes de violations.",
    "image": "/Images/HandsSolidarity.jpg",
    "type": "primary"
  },
  {
    "year": "Début 1989",
    "title": "Plaidoyer pour l'Amnistie",
    "description": "L'OMDH a lancé des appels à l'amnistie pour les prisonniers politiques et soumis des demandes de visite des prisons dans le cadre de ses efforts initiaux.",
    "image": "/Images/AmnestyInternational.jpg",
    "type": "secondary"
  },
  {
    "year": "2011",
    "title": "Printemps arabe et Réforme constitutionnelle",
    "description": "Lors des réformes constitutionnelles qui ont suivi les manifestations de 2011, l'OMDH plaide pour l'élargissement des protections des droits humains, l'indépendance judiciaire et l'égalité des sexes.",
    "image": "/Images/PA.jpg",
    "type": "secondary"
  },
  {
    "year": "Avril 2025",
    "title": "Solidarité avec Gaza",
    "description": "Lors de sa douzième conférence nationale, l'OMDH a exprimé sa solidarité avec le peuple palestinien et condamné l'agression israélienne en cours à Gaza, appelant à une intervention internationale.",
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

      <main style={{ marginTop: "-85px" }}>
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
                <div className="hero-overlay" />
               {/*  <div className="hero-content">
                  <div className="hero-text-box">
                    <p className="hero-text">{slide.text}</p>
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
              <h2 className="section-title">Actualités Récentes</h2>
            </div>
            <div className="news-container">
              <div className="news-card">
                <div className="news-content">
                  <div className="news-text-section">
                    <div className="news-date">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" /><path d="M16 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path d="M8 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path d="M3 10H21" stroke="currentColor" strokeWidth="1.5" /></svg>
                      <span>{newsItems[currentNewsSlide].date}</span>
                    </div>
                    <h3 className="news-title">{newsItems[currentNewsSlide].title}</h3>
                    <p className="news-description">{newsItems[currentNewsSlide].description}</p>
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
            <h2 className="section-title">Partenaires Nationaux</h2>
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
            <h2 className="section-title">Partenaires Universitaires</h2>
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
            <h2 className="section-title">Partenaires Internationaux</h2>
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
          <section className="story-section">
            <div className="story-container">
              <div className="story-image-section">
                <img src="/Images/Hands.jpg" alt="OMDH Story" className="story-image" />
              </div>
              <div className="story-content">
                <h3 className="story-title">OMDH : Plaidoyer pour la Justice et la Dignité Humaine</h3>
                <p className="story-text">
                  Au cœur de notre mission réside un engagement inébranlable envers la justice, l&apos;égalité et la protection des droits humains fondamentaux. Nous plaidons pour la dignité et les libertés de tous les individus, nous efforçant de créer un monde où chaque voix est entendue, chaque droit est respecté, et chaque personne est habilitée à vivre sans peur ni oppression.
                </p>
                <a href="/about-us" className="story-button">Explorez Plus</a>
              </div>
            </div>
          </section>

          {/* Timeline Section */}
          <section className="timeline-section">
            <div className="section-header">
              <h2 className="section-title">Découvrez Nos Étapes Clés</h2>
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

          {/* Map Section */}
          <section className="map-section">
            <div className="section-header">
              <h2 className="section-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Nous Trouver
              </h2>
            </div>
            <div className="map-container">
               <iframe
               //src
                width="100%"
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
        .hero-image { overflow: hidden;position: absolute; width: 100%; height: 100%; object-fit: cover; transform: scale(1.02); transition: transform 20s ease-out; }
        .hero-slide.active .hero-image { transform: scale(1); }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient( to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.1) 40%, rgba(0, 0, 0, 0.6) 100% ); }
        .hero-content { position: absolute; bottom: 8rem; left: 50%; transform: translateX(-50%); width: 85%; max-width: 56rem; z-index: 10; }
        .hero-text-box { background: rgba(0, 0, 0, 0.1); backdrop-filter: blur(3px); border-radius: 10px; padding: 2.5rem; text-align: center; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1); }
        .hero-text { color: white; font-size: 1.125rem; font-weight: 400; line-height: 1.7; margin: 0; letter-spacing: 0.01em; }
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
        
        /* Map Section */
        .map-section { display: flex; flex-direction: column; }
        .map-container { border-radius: 4px; overflow: hidden; box-shadow: 0 2px 20px rgba(0, 0, 0, 0.04); border: 1px solid rgba(0, 0, 0, 0.05); }
        .map-iframe { border: none; display: block; width: 100%; }

        /* === Responsive Design === */
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

        @media (max-width: 1200px) { .main-container { padding: 6rem 2rem; gap: 8rem; } }
        @media (max-width: 1024px) {
          .timeline-line { left: 1rem; }
          .timeline-dot { left: 0.625rem; }
          .timeline-content, .timeline-content.right { margin-left: 3rem; width: calc(100% - 3rem); }
          .story-container { flex-direction: column; }
          .story-content { padding: 3rem; }
        }

        @media (max-width: 768px) {
          .main-container { padding: 4rem 1.5rem; gap: 6rem; }
          .section-title { font-size: 1.5rem; }
          .hero-text { font-size: 1rem; }
          .hero-text-box { padding: 2rem; }
          .hero-content { width: 90%; bottom: 4rem; }
          .hero-control { width: 3rem; height: 3rem; }
          .hero-prev { left: 1.5rem; }
          .hero-next { right: 1.5rem; }
          .news-content { flex-direction: column; min-height: auto; }
          .news-text-section { padding: 2rem; }
          .news-title { font-size: 1.25rem; }
          .story-content { padding: 2rem; }
          .story-title { font-size: 1.5rem; }
          .timeline-container { padding: 3rem 1.5rem; }
        }

        @media (max-width: 480px) {
          .main-container { padding: 3rem 1rem; gap: 5rem; }
          .section-title { font-size: 1.25rem; }
          .hero-text { font-size: 0.9rem; }
          .hero-content { bottom: 3rem; }
          .news-text-section { padding: 1.5rem; }
          .story-content { padding: 1.5rem; }
          .timeline-card { padding: 1.5rem; }
          .timeline-image { height: 8rem; }
        }
      `}</style>
    </div>
  )
}
