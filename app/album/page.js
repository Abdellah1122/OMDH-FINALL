'use client';
// Note the ../../ because we are now two folders deep
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import { useState, useEffect } from "react"
import Link from 'next/link';

const photoAlbumData = [
  {
    "src": "/Album/1.jpg",
    "alt": "",
    "date": "",
    "description": ""
  },
  {
    "src": "/Album/2.jpg",
    "alt": "",
    "date": "",
    "description": ""
  },
  {
    "src": "/Album/3.jpg",
    "alt": "",
    "date": "",
    "description": ""
  },
  {
    "src": "/Album/4.jpg",
    "alt": "",
    "date": "",
    "description": ""
  },
  {
    "src": "/Album/5.jpg",
    "alt": "",
    "date": "",
    "description": ""
  },
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
    "src": "/Album/12.jpg",
    "alt": "",
    "date": "",
    "description": ""
  },
  {
    "src": "/Album/13.jpg",
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
    "src": "/Album/18.jpg",
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
]


export default function ArticlePage() {
     const [currentHeroSlide, setCurrentHeroSlide] = useState(0)
    
      // Auto-advance hero carousel
      useEffect(() => {
        const timer = setInterval(() => {
          setCurrentHeroSlide((prev) => (prev + 1) % photoAlbumData.length)
        }, 6000)
        return () => clearInterval(timer)
      }, [])
      const nextHeroSlide = () => {
        setCurrentHeroSlide((prev) => (prev + 1) % photoAlbumData.length)
      }
    
      const prevHeroSlide = () => {
        setCurrentHeroSlide((prev) => (prev - 1 + photoAlbumData.length) % photoAlbumData.length)
      }
    

    return (
        <>
            <Navbar />
            <main className="page-main">
                <div className="album-container">
                    <div className="album-header">
                        <h1 className="album-title" style={{color:'var(--primary-color)'}}>OMDH : Un parcours marquant</h1>
                        <p className="album-subtitle">Une collection de moments mémorables et d&apos;étapes importantes de notre travail à travers le Maroc.</p>
                    </div>

                     <section className="hero-section">
                              <div className="hero-container">
                                {photoAlbumData.map((slide, index) => (
                                  <div key={index} className={`hero-slide ${index === currentHeroSlide ? "active" : ""}`}>
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
                                        <p className="hero-text">{slide.text}</p>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                    
                              {/* Carousel Controls */}
                              <button onClick={prevHeroSlide} className="hero-control hero-prev" aria-label="Previous slide">
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
                              <button onClick={nextHeroSlide} className="hero-control hero-next" aria-label="Next slide">
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
                                {photoAlbumData.map((_, index) => (
                                  <button
                                    key={index}
                                    onClick={() => setCurrentHeroSlide(index)}
                                    className={`hero-indicator ${index === currentHeroSlide ? "active" : ""}`}
                                    aria-label={`Go to slide ${index + 1}`}
                                  />
                                ))}
                              </div>
                    </section>

                    
                        <div className="photo-grid">
                            {photoAlbumData.map((photo, index) => (
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
        z-index:0;
          position: relative;
          height: 100vh;
          overflow: hidden;
          margin:5em 0em 10em 0em;
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
          transition: opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hero-slide.active {
          opacity: 1;
        }
  .hero-image {
          object-fit: cover;
          transform: scale(1.02);
          transition: transform 20s ease-out;
        }

        .hero-slide.active .hero-image {
          transform: scale(1);
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.1) 40%,
            rgba(0, 0, 0, 0.6) 100%
          );
        }

        .hero-content {
          position: absolute;
          bottom: 8rem;
          left: 50%;
          transform: translateX(-50%);
          width: 85%;
          max-width: 56rem;
          z-index: 10;
        }

        .hero-text-box {
          background: rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(5px);
          border-radius: 10px;
          padding: 2.5rem;
          text-align: center;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .hero-text {
          color: white;
          font-size: 1.125rem;
          font-weight: 400;
          line-height: 1.7;
          margin: 0;
          letter-spacing: 0.01em;
        }

        .hero-control {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border: none;
          border-radius: 50%;
          width: 3.5rem;
          height: 3.5rem;
          color: #333;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 20;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .hero-control:hover {
          background: rgba(255, 255, 255, 1);
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        }

        .hero-prev {
          left: 3rem;
        }

        .hero-next {
          right: 3rem;
        }

        .hero-indicators {
          position: absolute;
          bottom: 3rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 1rem;
          z-index: 20;
        }

        .hero-indicator {
          width: 2.5rem;
          height: 2px;
          border-radius: 1px;
          border: none;
          background: rgba(255, 255, 255, 0.4);
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 0;
        }

        .hero-indicator.active {
          background: rgba(255, 255, 255, 0.9);
          width: 4rem;
        }

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
                  color: #1a1a1a;
                  font-weight: 700;
                  margin: 0 0 12px;
                }
                
                .album-subtitle {
                    font-size: 1.15rem;
                    color: #777;
                    max-width: 550px;
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
                
                .empty-album-message {
                    text-align: center;
                    padding: 60px 20px;
                    background-color: #fff;
                    border: 1px dashed #e0e0e0;
                    border-radius: 12px;
                }
                
                .empty-album-message p {
                    margin: 0;
                    color: #888;
                    font-size: 1.1rem;
                }

                /* CTA Section Styles */
                .cta-section {
                    text-align: center;
                    background-color: var(--accent-color);
                    padding: 90px 40px;
                    margin:5em;
                    border-top: 1px solid #f0f0f0;
                }

                .cta-title {
                    font-size: 2.4rem;
                    color: #1a1a1a;
                    font-weight: 700;
                    margin: 0 0 12px;
                }

                .cta-subtitle {
                    font-size: 1.15rem;
                    color: #777;
                    margin-bottom: 45px;
                }
                
                .cta-buttons {
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                    flex-wrap: wrap;
                }

                .cta-button {
                    padding: 15px 32px;
                    border-radius: 8px;
                    font-size: 1rem;
                    font-weight: 600;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    border: 1px solid transparent;
                }

                .cta-button.primary {
                    background-color: #1a1a1a;
                    color: #fff;
                }

                .cta-button.primary:hover {
                    background-color: #000;
                    transform: translateY(-3px);
                    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                }
                
                .cta-button.secondary {
                    background-color: #fff;
                    color: #1a1a1a;
                    border-color: #e0e0e0;
                }

                .cta-button.secondary:hover {
                    border-color: #1a1a1a;
                    transform: translateY(-3px);
                }

                /* Responsive Adjustments */
                @media (max-width: 768px) {
                    .album-container, .cta-section {
                        padding: 60px 20px;
                    }
                    .album-title {
                        font-size: 2.2rem;
                    }
                    .photo-grid {
                        grid-template-columns: 1fr;
                        gap: 25px;
                    }
                }
            `}</style>
        </>
    );
}
