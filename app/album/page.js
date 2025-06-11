'use client';
// Note the ../../ because we are now two folders deep
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

const photoAlbumData = [
  {
    src: "/", // Add your image source here
    alt: "A serene landscape with a river and mountains at sunset.",
    date: "April 15, 2024",
    description: "Golden hour over the winding river, a perfect ending to a peaceful day.",
  },
  {
    src: "/",
    alt: "A sprawling cityscape viewed from above at dusk.",
    date: "May 2, 2024",
    description: "The city lights beginning to twinkle as day turns to night.",
  },
  {
    src: "/",
    alt: "A crowd of people enjoying an outdoor music festival.",
    date: "June 21, 2024",
    description: "Lost in the music and the energy of the summer festival.",
  },
  {
    src: "/",
    alt: "A person working on a laptop in a cozy, well-lit cafe.",
    date: "July 8, 2024",
    description: "Finding inspiration in the quiet corners of a favorite coffee shop.",
  },
  {
    src: "",
    alt: "A person standing on a cliff overlooking a vast mountain range.",
    date: "August 19, 2024",
    description: "On top of the world, breathing in the crisp mountain air.",
  },
  {
    src: "",
    alt: "A tranquil lake with a small boat, surrounded by mountains.",
    date: "September 5, 2024",
    description: "A quiet morning paddle on the still, reflective waters.",
  },
];


export default function ArticlePage() {
    // We only want to try and render photos that have a source URL.
    const photosWithSrc = photoAlbumData.filter(photo => photo.src);

    return (
        <>
            <Navbar />
            <main className="page-main">
                <div className="album-container">
                    <div className="album-header">
                        <h1 className="album-title" style={{color:'var(--primary-color)'}}>OMDH : Un parcours marquant</h1>
                        <p className="album-subtitle">Une collection de moments mémorables et d&apos;étapes importantes de notre travail à travers le Maroc.</p>
                    </div>

                    {photosWithSrc.length > 0 ? (
                        <div className="photo-grid">
                            {photosWithSrc.map((photo, index) => (
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
                    ) : (
                        <div className="empty-album-message">
                            <p>More memories coming soon.</p>
                        </div>
                    )}
                </div>

                <section className="cta-section">
                    <h2 className="cta-title">Prêt à avoir un impact ?</h2>
                    <p className="cta-subtitle">test test test</p>
                    <div className="cta-buttons">
                        <Link href="/missions" className="cta-button primary">
                            Missions
                        </Link>
                        <Link href="/contact" className="cta-button secondary">
                            Nous contacter
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />

            <style jsx>{`
                /* Page Styles */
                .page-main {
                    background-color: #fdfdfd;
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
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
