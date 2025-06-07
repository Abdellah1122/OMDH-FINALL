'use client';

// No form on this version, so we don't need useState
// Import our reusable components and Next.js features
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link'; // Import Link for the CTA button

export default function ContactPage() {
  return (
    <>
      <Navbar />

    <main>
    <div className="main-container">
      {/* Hero Section */}
      <section className="hero-section auto-show">
        <div className="hero-image">
          <Image src="/Images/Sm.jpg" alt="OMDH Contact" className="floating" width={400} height={400} style={{ borderRadius: 'var(--border-radius)'}} />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Contactez-Nous</h1>
          <p className="hero-description">
            {/* FIX: Replaced N'hésitez with N&apos;hésitez */}
            N&apos;hésitez pas à nous contacter pour toute question ou assistance. 
            Nous sommes là pour vous aider et répondre à vos préoccupations concernant les droits humains.
          </p>
          <div className="social-section">
            <p style={{ fontWeight: 600, color: 'var(--text-dark)', marginBottom: '1em' }}>
              Suivez-nous sur les réseaux sociaux :
            </p>
            <div className="social-buttons">
              <a href="https://www.linkedin.com/company/omdh-morocco" target="_blank" rel="noopener noreferrer" className="social-btn linkedin" title="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://www.facebook.com/OMDH.Morocco" target="_blank" rel="noopener noreferrer" className="social-btn facebook" title="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://twitter.com/OMDH_Morocco" target="_blank" rel="noopener noreferrer" className="social-btn twitter" title="Twitter/X">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="https://www.instagram.com/omdh_morocco" target="_blank" rel="noopener noreferrer" className="social-btn instagram" title="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="section">
        <div className="auto-show">
          <h2>Retrouvez-nous</h2>
        </div>
        
        <div className="contact-info auto-show">
          <div className="contact-cards">
            <div className="contact-card auto-show">
              <i className="bi bi-geo-alt-fill"></i>
              <div>
                <p><strong>Adresse</strong></p>
                <p className="contact-value">
                  8, rue Ouargha,<br />
                  Résidence Volubilis, appt 1,<br />
                  Agdal / Rabat,<br />
                  Maroc
                </p>
              </div>
            </div>
            
            <div className="contact-card auto-show">
              <i className="bi bi-telephone-fill"></i>
              <div>
                <p><strong>Téléphone Principal</strong></p>
                <p className="contact-value">
                  <a href="tel:+212537770060" style={{color: 'var(--primary-color)', textDecoration: 'none'}}>
                    +212 537 77 00 60
                  </a>
                </p>
              </div>
            </div>
            
            <div className="contact-card auto-show">
              <i className="bi bi-phone-fill"></i>
              <div>
                <p><strong>Mobile</strong></p>
                <p className="contact-value">
                  <a href="tel:+212666947975" style={{color: 'var(--primary-color)', textDecoration: 'none'}}>
                    +212 666 94 79 75
                  </a>
                </p>
              </div>
            </div>
            
            <div className="contact-card auto-show">
              <i className="bi bi-envelope-fill"></i>
              <div>
                <p><strong>Email</strong></p>
                <p className="contact-value">
                  <a href="mailto:admin.omdh@omdh.ma" style={{color: 'var(--primary-color)', textDecoration: 'none'}}>
                    admin.omdh@omdh.ma
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section">
        <div className="map-section auto-show">
          <div className="map-container">
            <iframe 
              src="https://maps.google.com/maps?q=8%20rue%20Ouargha,%20R%C3%A9sidence%20Volubilis,%20appt%201,%20Agdal%20/%20Rabat,%20Maroc&t=&z=15&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="OMDH Location - 8 rue Ouargha, Résidence Volubilis, Agdal, Rabat, Maroc">
            </iframe>
          </div>
        </div>
      </section>
    </div>
  </main>

      <Footer />
      
      {/* All page-specific styles are here */}
      <style jsx>{`
        .main-container {
          display: flex;
          flex-direction: column;
          gap: 3em;
          padding: 2em;
          max-width: 1400px;
          margin: 2rem auto;
        }
        .section {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 2em 0;
          gap: 2em;
        }
        .hero-section {
          display: flex;
          flex-direction: row;
          gap: 4em;
          padding: 3em 2em;
          background: linear-gradient(135deg, var(--accent-color), rgba(232, 240, 237, 0.7));
          border-radius: var(--border-radius);
          box-shadow: var(--box-shadow);
          position: relative;
          overflow: hidden;
          align-items: center;
        }
        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--primary-color), var(--secondary-color), var(--primary-color));
        }
        .hero-image {
          flex: 1;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .hero-content {
          flex: 1.5;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 1.5em;
          text-align: center;
          padding: 1em;
        }
        .hero-title {
          font-family: 'Poppins', sans-serif;
          font-size: 2.8rem;
          font-weight: 700;
          color: var(--primary-dark);
          margin-bottom: 0.5rem;
          position: relative;
        }
        .hero-title::after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, var(--secondary-color), var(--primary-color));
          border-radius: 2px;
        }
        .hero-description {
          font-size: 1.1rem;
          color: var(--text-medium);
          margin-bottom: 1em;
          line-height: 1.7;
          max-width: 600px;
        }
        .social-buttons {
          display: flex;
          gap: 1em;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }
        .social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          text-decoration: none;
          color: white;
          font-size: 1.2rem;
          transition: var(--transition);
          position: relative;
          overflow: hidden;
          padding: 0; /* Override default 'a' padding */
        }
        .social-btn:hover {
            transform: translateY(-5px) scale(1.1);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }
        .social-btn.linkedin {
            background: linear-gradient(135deg, #0077b5, #005885);
        }
        .social-btn.facebook {
            background: linear-gradient(135deg, #1877f2, #0d5aa7);
        }
        .social-btn.twitter {
            background: linear-gradient(135deg, #1da1f2, #0d8bd9);
        }
        .social-btn.instagram {
            background: linear-gradient(135deg, #e4405f, #833ab4, #fd1d1d);
        }
        h2 {
          font-family: 'Poppins', sans-serif;
          font-size: 2.5rem;
          font-weight: 600;
          color: var(--primary-dark);
          text-align: center;
          margin-bottom: 1em;
          position: relative;
        }
        h2::after {
          content: "";
          display: block;
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, var(--secondary-color), var(--primary-color));
          margin: 15px auto 0;
          border-radius: 2px;
        }
        .contact-info {
          background: linear-gradient(135deg, var(--accent-color), rgba(232, 240, 237, 0.8));
          width: 100%;
          max-width: 1200px;
          padding: 3em 2em;
          border-radius: var(--border-radius);
          box-shadow: var(--box-shadow);
        }
        .contact-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2em;
          width: 100%;
        }
        .contact-card {
          background: white;
          padding: 2em;
          border-radius: var(--border-radius);
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 1em;
          text-align: center;
          transition: var(--transition);
          border-top: 4px solid var(--primary-color);
        }
        .contact-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
            border-top-color: var(--secondary-color);
        }
        .contact-card i {
          font-size: 2.5rem;
          color: var(--primary-color);
          margin-bottom: 0.5em;
        }
        .contact-card p {
          font-size: 1rem;
          color: var(--text-dark);
          line-height: 1.6;
          font-weight: 500;
          margin: 0;
        }
        .contact-card .contact-value {
            color: var(--text-medium);
            font-weight: 400;
        }
        .map-section {
          width: 100%;
          max-width: 1200px;
          border-radius: var(--border-radius);
          overflow: hidden;
          box-shadow: var(--box-shadow);
        }
        .map-container {
          width: 100%;
          height: 500px;
        }
        .map-container iframe {
          width: 100%;
          height: 100%;
          border: none;
        }

        /* Animations */
        .auto-show {
          opacity: 1; /* Keep visible by default */
        }
        .floating {
            animation: floating 4s ease-in-out infinite;
        }
        @keyframes floating {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
        }
      `}</style>
    </>
  );
}