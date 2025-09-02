'use client';
// Note the ../../ because we are now two folders deep
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import { useState, useEffect } from "react"
import Link from 'next/link';

// New data for the updates/news section
const updatesData = [
  {
    "src": "/Album/n-1.jpg",
    "alt": "آخر المستجدات",
    
   
  },
  {
    "src": "/Album/n-2.jpg",
    "alt": "مستجدات حديثة",

 
  },
  {
    "src": "/Album/n-3.jpg",
    "alt": "أحدث الأخبار",
   
  },
   {
    "src": "/Album/n-4.jpg",
    "alt": "أحدث الأخبار",
   
   
  },
   {
    "src": "/Album/n-5.jpg",
    "alt": "أحدث الأخبار",
   
   
  },
   {
    "src": "/Album/n-6.jpg",
    "alt": "أحدث الأخبار",
 
   
  },
   {
    "src": "/Album/n-7.jpg",
    "alt": "أحدث الأخبار",
  
   
  },
   {
    "src": "/Album/n-8.jpg",
    "alt": "أحدث الأخبار",
   
   
  },
   {
    "src": "/Album/n-9.jpg",
    "alt": "أحدث الأخبار",
 
   
  },
   {
    "src": "/Album/n-10.jpg",
    "alt": "أحدث الأخبار",
  
   
  },
   {
    "src": "/Album/n-11.jpg",
    "alt": "أحدث الأخبار",
   
   
  },
  {
    "src": "/Album/n-12.jpg",
    "alt": "المستجدات الأخيرة",
    "date": "",
    "description": "    "
  }
];

// Previous photo album data for memory section
const photoMemoryData = [
  {
    "src": "/Album/6.jpg",
    "alt": "",
    "date": "",
    "description": ""
  },
  {
    "src": "/Album/7.jpg",
    "alt": "",
    "date": "",
    "description": ""
  },
  {
    "src": "/Album/8.jpg",
    "alt": "",
    "date": "",
    "description": ""
  },
  {
    "src": "/Album/9.jpg",
    "alt": "",
    "date": "",
    "description": ""
  },
  {
    "src": "/Album/10.jpg",
    "alt": "",
    "date": "",
    "description": ""
  },
  {
    "src": "/Album/11.jpg",
    "alt": "",
    "date": "",
    "description": ""
  },
  {
    "src": "/Album/14.jpg",
    "alt": "",
    "date": "",
    "description": ""
  },
  {
    "src": "/Album/15.jpg",
    "alt": "",
    "date": "",
    "description": ""
  },
  {
    "src": "/Album/16.jpg",
    "alt": "",
    "date": "",
    "description": ""
  },
  {
    "src": "/Album/17.jpg",
    "alt": "",
    "date": "",
    "description": ""
  },
  {
    "src": "/Album/19.jpg",
    "alt": "",
    "date": "",
    "description": ""
  },
  {
    "src": "/Album/20.jpg",
    "alt": "",
    "date": "",
    "description": ""
  },
  {
    "src": "/Album/21.jpg",
    "alt": "",
    "date": "",
    "description": ""
  },
  {
    "src": "/Album/22.jpg",
    "alt": "",
    "date": "",
    "description": ""
  },
  {
    "src": "/Album/23.jpg",
    "alt": "",
    "date": "",
    "description": ""
  }
];

export default function ArticlePage() {
    const [currentUpdatesSlide, setCurrentUpdatesSlide] = useState(0);

    // Auto-advance updates carousel
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentUpdatesSlide((prev) => (prev + 1) % updatesData.length)
        }, 6000)
        return () => clearInterval(timer)
    }, [])

    const nextUpdatesSlide = () => {
        setCurrentUpdatesSlide((prev) => (prev + 1) % updatesData.length)
    }

    const prevUpdatesSlide = () => {
        setCurrentUpdatesSlide((prev) => (prev - 1 + updatesData.length) % updatesData.length)
    }

    return (
        <>
            <Navbar />
            <main className="page-main" dir='rtl' lang='ar'>
                <div className="album-container">
                    {/* Updates Section */}
                    <div className="album-header">
                        <h1 className="album-title" style={{color:'var(--primary-color)'}}>معرض الصور</h1>
                        <p className="album-subtitle">آخر صور أنشطتنا وأعمالنا </p>
                    </div>

                    <section className="hero-section">
                        <div className="hero-container">
                            {updatesData.map((slide, index) => (
                                <div key={index} className={`hero-slide ${index === currentUpdatesSlide ? "active" : ""}`}>
                                    <Image
                                        src={slide.src}
                                        alt={slide.alt}
                                        fill
                                        className="hero-image"
                                        priority={index === 0}
                                    />
                                    <div className="hero-overlay" />
                                    <div className="hero-content">
                                        <div className="hero-text-box">
                                            <p className="hero-date">{slide.date}</p>
                                            <p className="hero-text">{slide.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Carousel Controls */}
                        <button onClick={prevUpdatesSlide} className="hero-control hero-prev" aria-label="Previous slide">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15 18L9 12L15 6"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                        <button onClick={nextUpdatesSlide} className="hero-control hero-next" aria-label="Next slide">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9 18L15 12L9 6"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>

                        {/* Slide Indicators */}
                        <div className="hero-indicators">
                            {updatesData.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentUpdatesSlide(index)}
                                    className={`hero-indicator ${index === currentUpdatesSlide ? "active" : ""}`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </section>

                    {/* Photo Memory Section */}
                    <div className="album-header">
                        <h1 className="album-title" style={{color:'var(--secondary-color)'}}>ذاكرة الصور</h1>
                        <p className="album-subtitle">مجموعة من اللحظات والإنجازات التاريخية  في جميع أنحاء المغرب.</p>
                    </div>
                        <div className="photo-grid">
                            {photoMemoryData.map((photo, index) => (
                                <div key={index} className="photo-item">
                                    <div className="image-wrapper">
                                        <Image src={photo.src} alt={photo.alt} layout="fill" objectFit="cover" />
                                    </div>
                                    <div className="photo-info">
                                        <p className="photo-date">{photo.date}</p>
                                        <p className="photo-description">{photo.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                </div>

            </main>
            <Footer />

            <style jsx>{`
                /* Page Styles */
                .page-main {
                    background-color: #fdfdfd;
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
                }
               
                /* Hero Section */
                .hero-section {
                    z-index: 0;
                    position: relative;
                    height: 90vh;
                    overflow: hidden;
                    border-radius: 12px;
                    margin-bottom: 70px;
                }
                .hero-container { position: relative; width: 100%; height: 100%; }
                .hero-slide { position: absolute; inset: 0; opacity: 0;overflow: hidden; transition: opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1); }
                .hero-slide.active { opacity: 1; }
                .hero-image {
                    object-fit: cover;
                    transition: transform 8s ease-out;
                }
                .hero-slide.active .hero-image { transform: scale(1.05); }
                .hero-overlay { position: absolute; inset: 0; background: linear-gradient( to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.1) 40%, rgba(0, 0, 0, 0.6) 100% ); }
                .hero-content { position: absolute; bottom: 8rem; left: 50%; transform: translateX(-50%); width: 85%; max-width: 56rem; z-index: 10; }
                .hero-text-box { background: rgba(0, 0, 0, 0.2); backdrop-filter: blur(5px); border-radius: 10px; padding: 2.5rem; text-align: center; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1); }
                .hero-date { color: rgba(255, 255, 255, 0.8); font-size: 0.9rem; font-weight: 400; margin: 0 0 1rem 0; text-transform: uppercase; letter-spacing: 1px; }
                .hero-text { color: white; font-size: 1.125rem; font-weight: 400; line-height: 1.7; margin: 0; letter-spacing: 0.01em; }
                .hero-control { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(10px); border: none; border-radius: 50%; width: 3.5rem; height: 3.5rem; color: #333; cursor: pointer; transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); display: flex; align-items: center; justify-content: center; z-index: 20; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); }
                .hero-control:hover { background: rgba(255, 255, 255, 1); transform: translateY(-50%) scale(1.1); box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15); }
                .hero-prev { left: 3rem; }
                .hero-next { right: 3rem; }
                .hero-indicators { position: absolute; bottom: 3rem; left: 50%; transform: translateX(-50%); display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem; z-index: 20; max-width: 80%; }
                .hero-indicator { width: 1.5rem; height: 3px; border-radius: 2px; border: none; background: rgba(255, 255, 255, 0.4); cursor: pointer; transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); padding: 0; }
                .hero-indicator.active { background: rgba(255, 255, 255, 1); width: 2.5rem; }

                .album-container {
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 80px 40px;
                }

                /* Header Styles */
                .album-header {
                    text-align: center;
                    margin-bottom: 70px;
                }

                .album-title {
                    font-size: 2.8rem;
                    font-weight: 700;
                    margin: 0 0 12px;
                }
                
                .album-subtitle {
                    font-size: 1.15rem;
                    color: #777;
                    max-width: 600px;
                    margin: 0 auto;
                    line-height: 1.7;
                }

                /* Photo Grid Styles */
                .photo-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
                    gap: 35px;
                }

                .photo-item {
                    background-color: #fff;
                    border: 1px solid #f0f0f0;
                    border-radius: 12px;
                    overflow: hidden;
                    transition: transform 0.35s ease, box-shadow 0.35s ease;
                    display: flex;
                    flex-direction: column;
                }

                .photo-item:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 12px 24px rgba(0,0,0,0.07);
                }

                .image-wrapper {
                    position: relative;
                    width: 100%;
                    padding-top: 75%; /* Aspect ratio 4:3 */
                    background-color: #f5f5f5;
                }

                /* Photo Info Styles */
                .photo-info {
                    padding: 25px;
                    flex-grow: 1;
                    /* Hide if no content */
                    display: ${photoMemoryData.some(p => p.date || p.description) ? 'block' : 'none'};
                }

                .photo-date {
                    font-size: 0.8rem;
                    color: #999;
                    margin: 0 0 10px 0;
                    text-transform: uppercase;
                    letter-spacing: 0.8px;
                    font-weight: 500;
                }

                .photo-description {
                    font-size: 1.05rem;
                    color: #333;
                    margin: 0;
                    line-height: 1.6;
                }

                /* === RESPONSIVE STYLES === */

                /* --- TABLETS (max-width: 992px) --- */
                @media (max-width: 992px) {
                    .photo-grid {
                        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    }
                    .album-title {
                        font-size: 2.5rem;
                    }
                    .hero-section {
                        height: 80vh;
                    }
                }

                /* --- SMALL TABLETS (max-width: 768px) --- */
                @media (max-width: 768px) {
                    .album-container {
                        padding: 60px 20px;
                    }
                    .album-header {
                        margin-bottom: 50px;
                    }
                    .album-title {
                        font-size: 2.2rem;
                    }
                    .photo-grid {
                        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                        gap: 25px;
                    }
                    
                    /* Hero adjustments */
                    .hero-section { height: 75vh; }
                    .hero-content { width: 90%; bottom: 6rem; }
                    .hero-text-box { padding: 2rem; }
                    .hero-text { font-size: 1rem; }
                    .hero-date { font-size: 0.8rem; }
                    .hero-control { width: 3rem; height: 3rem; }
                    .hero-prev { left: 1.5rem; }
                    .hero-next { right: 1.5rem; }
                    .hero-indicators { bottom: 2.5rem; gap: 0.5rem; }
                    .hero-indicator { width: 1rem; }
                    .hero-indicator.active { width: 2rem; }
                }

                /* --- MOBILE PHONES (max-width: 480px) --- */
                @media (max-width: 480px) {
                    .album-container {
                        padding: 40px 15px;
                    }
                    .album-title {
                        font-size: 1.8rem;
                    }
                    .album-subtitle {
                        font-size: 1rem;
                    }
                    .photo-grid {
                        /* Switch to a single column layout on small screens */
                        grid-template-columns: 1fr;
                        gap: 20px;
                    }
                    
                    /* Hero adjustments */
                    .hero-section { height: 60vh; }
                    .hero-control { display: none; } /* Hide controls on mobile */
                    .hero-content {
                        width: 92%;
                        bottom: 4rem;
                    }
                    .hero-text-box {
                        padding: 1.5rem;
                        backdrop-filter: blur(8px);
                    }
                    .hero-text { font-size: 0.9rem; }
                    .hero-date { font-size: 0.75rem; }
                    .hero-indicators { bottom: 1.5rem; }
                }
            `}</style>
        </>
    );
}