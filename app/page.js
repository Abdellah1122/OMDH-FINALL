"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

// Import your existing components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const heroSlides = [
  {
    image: "/Images/Kids.jpg",
    alt: "Kids",
    text: "Explorez nos dernières initiatives et découvrez en avant-première les événements impactants qui nous attendent. Rejoignez-nous dans la défense des droits humains et soyez parmi les premiers à nous soutenir pour le changement.",
  },
  {
    image: "/Images/Peace-Pigeon.jpg",
    alt: "Peace Pigeon",
    text: "Découvrez notre mission et voyez comment nous travaillons chaque jour pour défendre la dignité humaine, promouvoir la justice et créer un changement durable.",
  },
  {
    image: "/Images/Hand-solitarity.jpg",
    alt: "Hand Solidarity",
    text: "Explorez tous nos projets et découvrez comment chaque initiative nous rapproche d'un monde où les droits humains sont respectés pour tous !",
  },
  {
    image: "/Images/CandleInHand.jpg",
    alt: "Candle in Hand",
    text: "Explorez nos dernières initiatives et découvrez en avant-première les événements impactants qui nous attendent. Rejoignez-nous dans la défense des droits humains et soyez parmi les premiers à nous soutenir pour le changement.",
  },
]

const newsItems = [
  {
    date: "25-26-27 avril 2025",
    title: "12ème Conférence Nationale de l'OMDH sur les Droits Humains et le Changement Global",
    description:
      `تكرم المنظمة المغربية لحقوق الإنسان مؤسسيها والمساهمين فيها بدعوتهم للمشاركة في الندوات والجلسات الافتتاحية لمؤتمراتها. ويبحث مؤتمرها الوطني الثاني عشر في الرباط موضوع "فعالية حقوق الإنسان في مواجهة التحولات الدولية الراهنة"، ويبدأ بندوة حول الحقوق الاقتصادية والاجتماعية والثقافية في السياسة العامة.`,
    image: "/Images/New Project.jpg",
    imageStyle: "special-padding",
  },
  {
    date: "6 mai 2025",
    title: "Conférence de Presse de l'OMDH sur les Résultats de la 12ème Conférence Nationale des Droits Humains",
    description:
      `في 6 مايو 2025، عقدت المنظمة المغربية لحقوق الإنسان مؤتمراً صحفياً في الرباط لعرض نتائج مؤتمرها الوطني الثاني عشر حول "فعالية حقوق الإنسان في مواجهة التحولات الدولية الراهنة". وتقاسمت الإدارة الاستنتاجات والتوصيات، وحللت السياقات الوطنية والدولية، وأجابت على أسئلة وسائل الإعلام حول مواقفها من التحديات الراهنة لحقوق الإنسان.`,
    image: "/Images/News2.jpg",
  },
  {
    date: "18 mai 2025",
    title: "Le Conseil National de l'OMDH se Réunit Suite à la 12ème Conférence, Rend Hommage aux Êtres Chers Disparus",
    description:
      `في 18 مايو 2025، عقدت المنظمة المغربية لحقوق الإنسان الجلسة الأولى لمجلسها الوطني لوضع اللمسات الأخيرة على جدول أعمال مؤتمرها الوطني الثاني عشر. بدأ الاجتماع بالوقوف دقيقة صمت حدادًا على روح أنس بوعيش ووالدة الأستاذ عبد الرزاق وئام.`,
    image: "/Images/News3.jpg",
  },
]

const partnerCategories = [
  {
    title: "Partenaires Internationaux",
    partners: [
      { name: "ECOSOC", logo: "/intPartnaires/28JUN-ECOSOC-LOGO-BLOG.png" },
      { name: "Amnesty International", logo: "/intPartnaires/Amnesty_International_logo.svg.png" },
      { name: "LC", logo: "/intPartnaires/LC-Logo-thumbnail-980x551-1-400x250.jpg" },
      { name: "Human Rights Watch", logo: "/intPartnaires/WORLD_REPORT_2023_OF_HUMAN_RIGHTS_WATCH_0.png" },
    ],
  },
  {
    title: "Partenaires Nationaux",
    partners: [
      { name: "ECPM", logo: "/NatPartnaires/ensemble-contre-la-peine-de-mort-ecpm-morocco-417461.jpg" },
      { name: "Partner 1", logo: "/NatPartnaires/images (1).jpeg" },
      { name: "Partner 2", logo: "/NatPartnaires/images (1).png" },
      { name: "Partner 3", logo: "/NatPartnaires/images (2).png" },
      { name: "Partner 4", logo: "/NatPartnaires/images.jpeg" },
      { name: "Partner 5", logo: "/NatPartnaires/images.png" },
    ],
  },
  {
    title: "Partenaires Universitaires",
    partners: [
      { name: "University 1", logo: "/UNIPartnaires/1631365508628.jpeg" },
      { name: "University 2", logo: "/UNIPartnaires/images (3).png" },
      { name: "University 3", logo: "/UNIPartnaires/images.jpeg" },
      { name: "UIZ", logo: "/UNIPartnaires/Logo-UIZ.jpg" },
      { name: "University 4", logo: "/UNIPartnaires/logo.png" },
      { name: "Cadi Ayyad", logo: "/UNIPartnaires/univ-cadi-ayyad-logo-900x420-1.png" },
      { name: "Mohammed V University", logo: "/UNIPartnaires/Mohammed_V_University_Logo.png" },
      { name: "Abdelmalek Essaadi", logo: "/UNIPartnaires/universite-abdelmalek-essaadi-900x420-1.png" },
      { name: "Hassan 1er", logo: "/UNIPartnaires/Universite-Hassan-1er-settat.png" },
    ],
  },
]

const timelineEvents = [
  {
    year: "1988",
    title: "Fondation de l'OMDH",
    description:
      "L'Organisation Marocaine des Droits Humains (OMDH) a été officiellement fondée le 28 mai 1988, à Agdal, Rabat, dans le but de sensibiliser aux droits humains et de défendre les victimes de violations.",
    image: "/Images/HandsSolidarity.jpg",
    type: "primary",
  },
  {
    year: "Début 1989",
    title: "Plaidoyer pour l'Amnistie",
    description:
      "L'OMDH a lancé des appels à l'amnistie pour les prisonniers politiques et soumis des demandes de visite des prisons dans le cadre de ses efforts initiaux.",
    image: "/Images/AmnestyInternational.jpg",
    type: "secondary",
  },
  {
    year: "1997",
    title: "Intégration Régionale",
    description:
      "L'OMDH est devenu membre régulier du réseau EuroMed Rights, indiquant son engagement dans les cadres régionaux des droits humains.",
    image: "/Images/blue.png",
    type: "primary",
  },
  {
    year: "2011",
    title: "Alliance Anti-Torture",
    description:
      "L'OMDH a collaboré avec le Conseil National des Droits de l'Homme (CNDH) et l'Association pour la Prévention de la Torture (APT) sur la ratification du Protocole Facultatif à la Convention des Nations Unies contre la Torture (OPCAT).",
    image: "/Images/CNDH.jpg",
    type: "secondary",
  },
  {
    year: "2013",
    title: "Condamnation de l'Injustice",
    description:
      "L'OMDH a publié conjointement avec Ensemble Contre la Peine de Mort (ECPM) un rapport intitulé « Voyage au cimetière des vivants », qui analysait les conditions de détention des personnes condamnées à mort au Maroc.",
    image: "/Images/DeathPenaltyAbolition.jpg",
    type: "primary",
  },
  {
    year: "Avril 2025",
    title: "Solidarité avec Gaza",
    description:
      "Lors de sa douzième conférence nationale, l'OMDH a exprimé sa solidarité avec le peuple palestinien et condamné l'agression israélienne en cours à Gaza, appelant à une intervention internationale.",
    image: "/Images/gaza.jpg",
    type: "primary",
  },
]

export default function HomePage() {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0)
  const [currentNewsSlide, setCurrentNewsSlide] = useState(0)

  // Auto-advance hero carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  // Auto-advance news carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentNewsSlide((prev) => (prev + 1) % newsItems.length)
    }, 7000)
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
      <Navbar />

      <main>
        {/* Hero Carousel */}
        <section className="hero-section">
          <div className="hero-container">
            {heroSlides.map((slide, index) => (
              <div key={index} className={`hero-slide ${index === currentHeroSlide ? "active" : ""}`}>
                <Image
                  src={slide.image || "/placeholder.svg?height=800&width=1200"}
                  alt={slide.alt}
                  fill
                  className="hero-image"
                  priority={index === 0}
                />
                <div className="hero-overlay" />
                <div className="hero-content">
                  <div className="hero-text-box">
                    <p className="hero-text">{slide.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Controls */}
          <button onClick={prevHeroSlide} className="hero-control hero-prev" aria-label="Previous slide">
            ‹
          </button>
          <button onClick={nextHeroSlide} className="hero-control hero-next" aria-label="Next slide">
            ›
          </button>

          {/* Slide Indicators */}
          <div className="hero-indicators">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentHeroSlide(index)}
                className={`hero-indicator ${index === currentHeroSlide ? "active" : ""}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </section>

        <div className="main-container">
          {/* News Section */}
          <section className="news-section">
            <div className="section-header">
              <h2 className="section-title">Actualités Récentes</h2>
              <div className="section-underline"></div>
            </div>

            <div className="news-container">
              <div className="news-card">
                <div className="news-content">
                  <div className="news-text-section">
                    <div className="news-date">
                      <span className="calendar-icon">📅</span>
                      {newsItems[currentNewsSlide].date}
                    </div>
                    <h3 className="news-title">{newsItems[currentNewsSlide].title}</h3>
                    <p className="news-description">{newsItems[currentNewsSlide].description}</p>
                  </div>
                  <div className={`news-image-section ${newsItems[currentNewsSlide].imageStyle || ""}`}>
                    <Image
                      src={newsItems[currentNewsSlide].image || "/placeholder.svg?height=500&width=600"}
                      alt={newsItems[currentNewsSlide].title}
                      fill
                      className="news-image"
                    />
                  </div>
                </div>
              </div>

              {/* News Indicators */}
              <div className="news-indicators">
                {newsItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentNewsSlide(index)}
                    className={`news-indicator ${index === currentNewsSlide ? "active" : ""}`}
                    aria-label={`Go to news ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Partners Sections */}
          {partnerCategories.map((category, categoryIndex) => (
            <section key={categoryIndex} className="partners-section">
              <div className="section-header">
                <h2 className="section-title">{category.title}</h2>
                <div className="section-underline"></div>
              </div>

              <div className="partners-container">
                <div className="partners-scroll">
                  {[...category.partners, ...category.partners].map((partner, index) => (
                    <div key={index} className="partner-item">
                      <Image
                        src={partner.logo || "/placeholder.svg?height=100&width=180"}
                        alt={partner.name}
                        width={180}
                        height={100}
                        className="partner-logo"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}

          {/* Our Story Section */}
          <section className="story-section">
            <div className="story-container">
              <div className="story-image-section">
                <Image src="/Images/Kids.jpg" alt="OMDH Story" fill className="story-image" />
              </div>
              <div className="story-content">
                <h3 className="story-title">OMDH : Plaidoyer pour la Justice et la Dignité Humaine</h3>
                <p className="story-text">
                  Au cœur de notre mission réside un engagement inébranlable envers la justice, l&apos;égalité et la
                  protection des droits humains fondamentaux. Nous plaidons pour la dignité et les libertés de tous les
                  individus, nous efforçant de créer un monde où chaque voix est entendue, chaque droit est respecté, et
                  chaque personne est habilitée à vivre sans peur ni oppression.
                </p>
                <Link href="/about-us" className="story-button">
                  Explorez Plus
                </Link>
              </div>
            </div>
          </section>

          {/* Timeline Section */}
          <section className="timeline-section">
            <div className="section-header">
              <h2 className="section-title">Découvrez Nos Étapes Clés</h2>
              <div className="section-underline"></div>
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

          {/* Map Section */}
          <section className="map-section">
            <div className="section-header">
              <h2 className="section-title">
                <span className="map-icon">📍</span>
                Nous Trouver
              </h2>
              <div className="section-underline"></div>
            </div>

            <div className="map-container">
              <iframe
                width="100%"
                height="600"
                title="OMDH Location"
                src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=8%20,%20rue%20Ouargha%20,%20R%C3%A9sidence%20volubilis,%20appt%201%20,%20Agdal%20/Rabat%C2%A0,%C2%A0Maroc+(OMDH%20)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
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
        .homepage {
          min-height: 100vh;
          background-color: #f5f5f5;
          font-family: 'Montserrat', sans-serif;
        }

        /* Hero Section */
        .hero-section {
          position: relative;
          height: 100vh;
          overflow: hidden;
        }

        .hero-container {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .hero-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }

        .hero-slide.active {
          opacity: 1;
        }

        .hero-image {
          object-fit: cover;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.3);
        }

        .hero-content {
          position: absolute;
          bottom: 5rem;
          left: 50%;
          transform: translateX(-50%);
          width: 80%;
          max-width: 64rem;
        }

        .hero-text-box {
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(8px);
          border-radius: 8px;
          padding: 2rem;
          text-align: center;
        }

        .hero-text {
          color: white;
          font-size: 1.25rem;
          font-weight: 500;
          line-height: 1.6;
          margin: 0;
        }

        .hero-control {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(8px);
          border: none;
          border-radius: 50%;
          width: 3rem;
          height: 3rem;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .hero-control:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .hero-prev {
          left: 1rem;
        }

        .hero-next {
          right: 1rem;
        }

        .hero-indicators {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.5rem;
        }

        .hero-indicator {
          width: 0.75rem;
          height: 0.75rem;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .hero-indicator.active {
          background: white;
        }

        /* Main Container */
        .main-container {
          max-width: 1500px;
          margin: 0 auto;
          padding: 4rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 6rem;
        }

        /* Section Headers */
        .section-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: bold;
          color: #2c3e50;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
        }

        .section-underline {
          width: 4rem;
          height: 4px;
          background-color: #d3612f;
          margin: 0 auto;
        }

        /* News Section */
        .news-section {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .news-container {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .news-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }

        .news-content {
          display: flex;
          min-height: 500px;
        }

        .news-text-section {
          flex: 1;
          padding: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 1.5rem;
        }

        .news-date {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: #6b7280;
          margin-bottom: 0.5rem;
        }

        .calendar-icon {
          font-size: 1rem;
        }

        .news-title {
          font-size: 1.75rem;
          font-weight: bold;
          color: #1957a6;
          line-height: 1.3;
          margin: 0;
        }

        .news-description {
          color: #4b5563;
          line-height: 1.6;
          margin: 0;
        }

        .news-image-section {
          flex: 1;
          position: relative;
          min-height: 300px;
        }

        .news-image-section.special-padding {
          padding: 2rem;
        }

        .news-image {
          object-fit: cover;
        }

        .news-image-section.special-padding .news-image {
          object-fit: contain;
        }

        .news-indicators {
          display: flex;
          justify-content: center;
          margin-top: 1.5rem;
          gap: 0.5rem;
        }

        .news-indicator {
          width: 0.75rem;
          height: 0.75rem;
          border-radius: 50%;
          border: none;
          background: #d1d5db;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .news-indicator.active {
          background: #1957a6;
        }

        /* Partners Section */
        .partners-section {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .partners-container {
          background: #e8f0ed;
          border-radius: 12px;
          padding: 2rem;
          overflow: hidden;
        }

        .partners-scroll {
          display: flex;
          animation: scroll 40s linear infinite;
          gap: 3rem;
        }

        .partners-scroll:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .partner-item {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 12rem;
          height: 6rem;
          filter: grayscale(100%);
          opacity: 0.8;
          transition: all 0.3s ease;
        }

        .partner-item:hover {
          filter: grayscale(0%);
          opacity: 1;
          transform: scale(1.1);
        }

        .partner-logo {
          max-height: 4rem;
          width: auto;
          object-fit: contain;
        }

        /* Story Section */
        .story-section {
          background: #e8f0ed;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .story-container {
          display: flex;
        }

        .story-image-section {
          flex: 3;
          position: relative;
          min-height: 400px;
        }

        .story-image {
          object-fit: cover;
        }

        .story-content {
          flex: 2;
          padding: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .story-title {
          font-size: 2.25rem;
          font-weight: bold;
          color: #2c3e50;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .story-text {
          color: #4b5563;
          line-height: 1.7;
          margin-bottom: 2rem;
          font-size: 1.125rem;
        }

        .story-button {
          display: inline-block;
          background: #1957a6;
          color: white;
          padding: 0.75rem 2rem;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          width: fit-content;
        }

        .story-button:hover {
          background: #174c91;
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        }

        /* Timeline Section */
        .timeline-section {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .timeline-container {
          background: #e8f0ed;
          border-radius: 16px;
          padding: 3rem;
        }

        .timeline-wrapper {
          max-width: 1000px;
          margin: 0 auto;
          position: relative;
        }

        .timeline-line {
          position: absolute;
          left: 2rem;
          top: 0;
          bottom: 0;
          width: 2px;
          background: #1957a6;
        }

        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
        }

        .timeline-dot {
          position: absolute;
          left: 1.5rem;
          top: 1.5rem;
          width: 1rem;
          height: 1rem;
          background: #1957a6;
          border-radius: 50%;
          border: 4px solid #e8f0ed;
          z-index: 2;
        }

        .timeline-content {
          margin-left: 4rem;
          width: calc(50% - 2rem);
        }

        .timeline-content.right {
          margin-left: calc(50% + 2rem);
        }

        .timeline-card {
          background: white;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .timeline-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
        }

        .timeline-year {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .timeline-year.primary {
          color: #1957a6;
        }

        .timeline-year.secondary {
          color: #d3612f;
        }

        .timeline-title {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .timeline-title.primary {
          color: #1957a6;
        }

        .timeline-title.secondary {
          color: #d3612f;
        }

        .timeline-description {
          color: #4b5563;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .timeline-image {
          position: relative;
          height: 12rem;
          border-radius: 6px;
          overflow: hidden;
        }

        .timeline-img {
          object-fit: cover;
        }

        /* Map Section */
        .map-section {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .map-icon {
          font-size: 2rem;
        }

        .map-container {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .map-iframe {
          border: none;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .timeline-line {
            left: 2rem;
          }

          .timeline-content,
          .timeline-content.right {
            margin-left: 4rem;
            width: calc(100% - 4rem);
          }
        }

        @media (max-width: 768px) {
          .main-container {
            padding: 2rem 1rem;
            gap: 4rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .hero-text {
            font-size: 1rem;
          }

          .hero-text-box {
            padding: 1.5rem;
          }

          .hero-content {
            width: 90%;
            bottom: 3rem;
          }

          .news-content {
            flex-direction: column;
            min-height: auto;
          }

          .news-text-section {
            padding: 2rem;
          }

          .news-image-section {
            height: 16rem;
          }

          .news-title {
            font-size: 1.5rem;
          }

          .story-container {
            flex-direction: column;
          }

          .story-content {
            padding: 2rem;
            text-align: center;
          }

          .story-title {
            font-size: 1.75rem;
          }

          .timeline-container {
            padding: 2rem 1rem;
          }

          .partner-item {
            width: 8rem;
            height: 4rem;
          }

          .partner-logo {
            max-height: 2.5rem;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 1.5rem;
          }

          .hero-text {
            font-size: 0.9rem;
          }

          .news-text-section {
            padding: 1.5rem;
          }

          .news-title {
            font-size: 1.25rem;
          }

          .story-content {
            padding: 1.5rem;
          }

          .story-title {
            font-size: 1.5rem;
          }

          .timeline-card {
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  )
}
