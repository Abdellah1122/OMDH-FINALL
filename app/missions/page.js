// We use 'use client' because this page uses the <style jsx> feature.
'use client';

// Import our reusable components and Next.js features
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

// This is the functional component for your "Missions" page
export default function MissionsPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-title">
              {/* FIX: Replaced l' with l&apos; */}
              <h1>Notre Mission à l&apos;OMDH</h1>
            </div>
            <div className="hero-description">
              {/* FIX: Replaced L' with L&apos; and l' with l&apos; */}
              <p>L&apos;Organisation Marocaine des Droits Humains (OMDH) se consacre aux principes universels des droits humains. Nous nous efforçons de promouvoir et de protéger les libertés fondamentales, d&apos;assurer l&apos;état de droit et de soutenir les victimes de violations à travers le Maroc et au-delà.</p>
              <Link href="/about-us" className="btn-secondary">Découvrir Nos Actions</Link>
            </div>
          </div>
          <div className="hero-image">
            <Image src="/Images/Hands.jpg" alt="Solidarité et Action pour les Droits Humains" width={800} height={600} style={{ objectFit: 'cover', minHeight: '400px', width: '100%' }} />
          </div>
        </section>

        {/* Main Content */}
        <div className="main-content">
          {/* Missions Grid */}
          <section className="missions-section">
            <div className="missions-grid">
              <div className="mission-card">
                <h4>Promouvoir et Protéger les Droits Humains</h4>
                {/* FIX: Replaced l' with l&apos; */}
                <p>Œuvrer pour la promotion, la jouissance et l&apos;exercice des droits humains et des libertés fondamentales, individuelles et collectives, sans discrimination, sur la base des normes universelles.</p>
              </div>

              <div className="mission-card">
                <h4>Surveiller et Signaler les Violations</h4>
                {/* FIX: Replaced d' with d&apos; */}
                <p>Surveiller activement, exposer, signaler et traiter toutes les violations des droits humains, en publiant des communiqués de presse et des rapports d&apos;enquête.</p>
              </div>

              <div className="mission-card">
                {/* FIX: Replaced l' with l&apos; */}
                <h4>Plaider pour l&apos;État de Droit</h4>
                {/* FIX: Replaced l' with l&apos; (multiple times) */}
                <p>Revendiquer le respect constant des droits humains, l&apos;établissement et la consolidation de l&apos;état de droit, la séparation des pouvoirs et le renforcement de l&apos;indépendance et de l&apos;impartialité du pouvoir judiciaire.</p>
              </div>

              <div className="mission-card">
                {/* FIX: Replaced l' with l&apos; */}
                <h4>Éducation et Culture des Droits Humains</h4>
                {/* FIX: Replaced l' with l&apos; */}
                <p>Diffuser la culture des droits humains, poursuivre l&apos;éducation à la citoyenneté et sensibiliser la société marocaine et la communauté internationale au respect de ces droits.</p>
              </div>

              <div className="mission-card">
                <h4>Normes Internationales et Harmonisation</h4>
                {/* FIX: Replaced l' with l&apos; */}
                <p>Appeler à la ratification des instruments et normes internationaux relatifs aux droits humains, assurer l&apos;harmonisation des lois nationales avec ces conventions et défendre la primauté des normes internationales.</p>
              </div>

              <div className="mission-card">
                <h4>Soutenir les Victimes de Violations</h4>
                {/* FIX: Replaced se constituant with se constituant (no change needed here, just checking) */}
                <p>Fournir assistance, conseil et soutien par tous les moyens légaux aux victimes de violations des droits humains, en se constituant potentiellement partie civile dans les affaires judiciaires.</p>
              </div>
            </div>
          </section>

          {/* Timeline Section */}
          <section className="timeline-section">
            <div className="timeline-header">
              {/* FIX: Replaced d' with d&apos; */}
              <h2>Nos Activités Clés et Domaines d&apos;Intervention</h2>
              {/* FIX: Replaced l' with l&apos; */}
              <p>Notre travail couvre divers domaines cruciaux, se concentrant sur le plaidoyer, le soutien juridique, l&apos;éducation et la coopération internationale pour défendre les normes des droits humains.</p>
            </div>

            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4 className="timeline-title">Publier et Diffuser des Informations</h4>
                  {/* FIX: Replaced d' with d&apos; */}
                  <p className="timeline-description">Publier des données, des périodiques, des rapports thématiques (par exemple, sur les élections, la torture) et d&apos;autres documents relatifs aux questions et situations des droits humains.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4  className="timeline-title">Action auprès des législateurs politiques</h4>
                  {/* FIX: Replaced d' with d&apos; */}
                  <p className="timeline-description">
                  Interpeller les responsables politiques pour garantir le respect des droits humains et promouvoir des réformes législatives.   </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4  className="timeline-title">Coopération Nationale et Internationale</h4>
                  <p className="timeline-description">Renforcer la solidarité nationale et coopérer/coordonner avec les associations et institutions aux niveaux national, régional et international sur les questions relatives aux droits humains.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4  className="timeline-title">Publier des Rapports Parallèles</h4>
                  <p className="timeline-description">Publier des rapports parallèles aux soumissions gouvernementales sous la supervision des comités compétents des organes de traités des Nations Unies.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4 className="timeline-title">Organiser des Événements</h4>
                  {/* FIX: Replaced d' with d&apos; (twice) */}
                  <p className="timeline-description">Organiser des séminaires, des conférences, des galeries d&apos;art et d&apos;autres expositions pour sensibiliser et débattre des sujets relatifs aux droits humains.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />

      {/* This <style jsx> block contains ONLY the CSS needed for THIS page's content */}
      <style jsx>{`
        /* Button Styles */
        .btn-primary {
          background-color: var(--primary-color);
          color: white;
          border: 1px solid var(--primary-color);
        }
        .btn-primary:hover {
          background-color: var(--primary-dark);
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        }
        .btn-secondary {
          background-color: var(--secondary-color);
          color: white;
          border: 1px solid var(--secondary-color);
          text-decoration: none; /* Add this for Links */
        }
        .btn-secondary:hover {
          background-color: #c0562a; /* Darken secondary color */
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        }

        /* Hero Section */
        .hero-section {
          display: flex;
          flex-direction: row;
          gap: 2em; /* Reduced gap */
          padding: 0;
          background-color: var(--accent-color);
          min-height: 500px;
          align-items: center;
          overflow: hidden;
        }
        .hero-content {
          display: flex;
          flex-direction: column;
          padding: 2em;
          justify-content: center;
          align-items: center;
          gap: 2em;
          flex: 1;
        }
        .hero-title h1 {
          font-family: "Poppins", sans-serif;
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--primary-dark);
          text-align: center;
          margin-bottom: 1rem;
        }
        .hero-description {
          display: flex;
          flex-direction: column;
          text-align: center;
          justify-content: center;
          align-items: center;
          gap: 1.5em;
        }
        .hero-description p {
          font-family: "Roboto", sans-serif;
          font-size: 1.1rem;
          line-height: 1.7;
          color: var(--text-medium);
          max-width: 600px;
        }
        .hero-image {
          flex: 0 0 45%;
          align-self: stretch;
        }
        
        /* Main Content */
        .main-content {
          display: flex;
          flex-direction: column;
          gap: 3em;
          padding: 3em 2em;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Missions Grid */
        .missions-section {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 2em;
        }
        .missions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5em;
          width: 100%;
        }
        .mission-card {
          background-color: white;
          padding: 1.5em;
          border-radius: var(--border-radius);
          box-shadow: var(--box-shadow);
          display: flex;
          flex-direction: column;
          gap: 0.8em;
          transition: var(--transition);
        }
        .mission-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }
        .mission-card h4 {
          color: var(--primary-color);
          font-family: "Poppins", sans-serif;
          font-size: 1.15rem;
          margin-bottom: 0.3em;
          font-weight: 600;
        }
        .mission-card p {
          color: var(--text-medium);
          font-family: "Roboto", sans-serif;
          line-height: 1.6;
          font-size: 0.95rem;
        }

        /* Timeline Section */
        .timeline-section {
          width: 100%;
          padding: 3em 2em;
          background-color: white;
          border-radius: var(--border-radius);
          box-shadow: var(--box-shadow);
          position: relative;
          overflow: hidden;
        }
        .timeline-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 6px;
          background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
        }
        .timeline-header {
          text-align: center;
          margin-bottom: 3em;
        }
        .timeline-header h2 {
          color: var(--primary-dark);
          font-family: "Poppins", sans-serif;
          font-size: 2rem;
          margin-bottom: 0.8em;
          position: relative;
          display: inline-block;
        }
        .timeline-header h2::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background-color: var(--secondary-color);
        }
        .timeline-header p {
          color: var(--text-medium);
          max-width: 800px;
          margin: 0 auto;
          font-size: 1.05rem;
          line-height: 1.7;
        }
        .timeline {
          position: relative;
          padding: 2em 0;
        }
        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background-color: var(--primary-color);
          transform: translateX(-50%);
        }
        .timeline-item {
          position: relative;
          margin-bottom: 3em;
          width: 100%;
        }
        .timeline-item:nth-child(odd) .timeline-content {
          margin-left: 0;
          margin-right: 55%;
          text-align: right;
        }
        .timeline-item:nth-child(even) .timeline-content {
          margin-left: 55%;
          margin-right: 0;
          text-align: left;
        }
        .timeline-content {
          background-color: #f8f9fa;
          padding: 1.5em;
          border-radius: var(--border-radius);
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
          transition: var(--transition);
          position: relative;
        }
        .timeline-content:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        .timeline-item:nth-child(odd) .timeline-content {
          border-left: 4px solid var(--primary-color);
        }
        .timeline-item:nth-child(even) .timeline-content {
          border-right: 4px solid var(--secondary-color);
        }
        .timeline-dot {
          position: absolute;
          left: 50%;
          top: 1.5em;
          width: 16px;
          height: 16px;
          background-color: var(--primary-color);
          border-radius: 50%;
          transform: translateX(-50%);
          box-shadow: 0 0 0 4px rgba(25, 87, 166, 0.2);
          z-index: 2;
        }
        .timeline-title {
          color: var(--primary-dark);
          font-family: "Poppins", sans-serif;
          font-size: 1.2rem;
          margin-bottom: 0.6em;
          font-weight: 600;
        }
        .timeline-description {
          color: var(--text-medium);
          font-family: "Roboto", sans-serif;
          line-height: 1.6;
        }
        
        /* Responsive */
        @media (max-width: 992px) {
            .hero-section {
              flex-direction: column;
              padding: 2em 1em;
            }
            .hero-image {
                display: none; /* Hide image on smaller screens for this layout */
            }
        }
        @media (max-width: 768px) {
          .timeline::before {
            left: 20px;
          }
          .timeline-item:nth-child(odd) .timeline-content,
          .timeline-item:nth-child(even) .timeline-content {
            margin-left: 40px;
            margin-right: 0;
            text-align: left;
            width: calc(100% - 40px);
          }
          .timeline-item:nth-child(even) .timeline-content {
            border-right: none;
            border-left: 4px solid var(--secondary-color);
          }
          .timeline-dot {
            left: 20px;
          }
        }
      `}</style>
    </>
  );
}