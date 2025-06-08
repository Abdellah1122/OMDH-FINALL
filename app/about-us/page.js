'use client';

// Import our reusable components and Next.js features
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

// This is the functional component for your "About Us" page
export default function AboutUsPage() {
  return (
    <>
      <Navbar />

      <main>
  <section className="about-section">
    <div className="about-container">
      <div className="about-header">
        {/* FIX: l' replaced with l&apos; */}
        <h1>À propos de <span className="highlight">l&apos;OMDH</span></h1>
        <p className="about-tagline">
          {/* FIX: l', d', etc. replaced with &apos; equivalents */}
          Depuis sa création en 1988, l&apos;Organisation Marocaine des Droits Humains (OMDH) est un pilier de la défense, de la protection et de la promotion des droits humains au Maroc. Ancrée dans les principes d&apos;universalité, d&apos;indivisibilité et d&apos;interdépendance des droits, l&apos;OMDH plaide pour la dignité, l&apos;égalité et la justice pour tous.
        </p>
      </div>

      <div className="about-content">
        <div className="about-image">
          <Image src="/Images/candle White Background.jpg" alt="OMDH" width={600} height={700} style={{ objectFit: 'cover' }} />
          <div className="image-overlay">
            <span className="founded-year">Fondée en 1988</span>
          </div>
        </div>

        <div className="about-text">
          <h2>Qui sommes-nous</h2>
          <p>
            L&apos;Organisation Marocaine des Droits Humains (OMDH) est une association reconnue au niveau national, indépendante et démocratique, créée en 1988 par des défenseurs des droits humains engagés à respecter les normes internationales. Elle est ouverte à toutes les personnes qui partagent les valeurs de liberté, d&apos;égalité et de justice, sans aucune discrimination fondée sur le sexe, la langue, la religion ou l&apos;idéologie.
          </p>
          <p>
            L&apos;OMDH opère dans le cadre des conventions internationales des droits humains ratifiées par le Maroc et de la législation nationale. Elle se concentre sur la nature universelle, globale et complémentaire des droits civils, politiques, économiques, sociaux, culturels et environnementaux.
          </p>

          <h2>Notre parcours</h2>
          <p>
            L&apos;OMDH est née en réponse à un besoin national croissant d&apos;une organisation démocratique des droits humains qui unit les citoyens au-delà des clivages idéologiques. Au fil des décennies, elle s&apos;est développée pour devenir un vaste mouvement pour la justice, façonnant le débat public, influençant les politiques et apportant son soutien aux victimes de violations des droits humains.
          </p>
          <p>
            À travers son siège et ses sections régionales, l&apos;OMDH a constamment contribué aux grands débats et réformes nationaux. Elle a participé à la justice transitionnelle, à la modernisation du code pénal et à la protection des populations vulnérables, tout en restant fermement ancrée dans la société civile.
          </p>

          <h2>Notre mission</h2>
          <p>
            La mission de l&apos;OMDH est de promouvoir, protéger et étendre les droits humains au Maroc à travers un large éventail d&apos;actions comprenant le plaidoyer, l&apos;éducation, le soutien juridique, la réforme des politiques et les interventions sur le terrain. Elle s&apos;efforce d&apos;inculquer une culture fondée sur les droits parmi les citoyens et les institutions publiques.
          </p>
          <p>
            L&apos;organisation défend l&apos;indivisibilité des droits et se concentre sur des questions clés telles que la justice transitionnelle, l&apos;égalité des sexes, la protection des groupes vulnérables, la démocratie participative et l&apos;éducation aux droits humains.
          </p>

          <div className="stats-container">
            <div className="stat-item">
              <span className="stat-number">+35</span>
              <span className="stat-label">Années de défense des droits humains</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">+100</span>
              <span className="stat-label">Campagnes de plaidoyer et de sensibilisation</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">+40</span>
              <span className="stat-label">Partenariats régionaux et locaux</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">+10K</span>
              <span className="stat-label">Personnes sensibilisées par l&apos;éducation</span>
            </div>
          </div>

          <div className="cta-container">
            <Link href="/projects" className="BtnPrimary">Nos Projets</Link>
            <Link href="/contact" className="BtnSuc">Nous Contacter</Link>
          </div>
        </div>
      </div>

      <div className="timeline-section">
        <h2>Notre Histoire</h2>
        <div className="Sec">
          <div className="Projects">
            <div className="timeline-container">
              <div className="timeline-item timeline-left">
                <div className="timeline-content">
                  <div className="timeline-year primary">1988</div>
                  <div className="autoShow">
                    <div className="timeline-title primary">Fondation de l&apos;OMDH</div>
                  </div>
                  <div className="autoShow">
                    <div className="timeline-description">L&apos;Organisation Marocaine des Droits Humains (OMDH) a été officiellement fondée le 28 mai 1988, à Agdal, Rabat, dans le but de sensibiliser aux droits humains et de défendre les victimes de violations.</div>
                  </div>
                  <div className="autoShow">
                    <Image src="/Images/HandsSolidarity.jpg" alt="Hands Solidarity" width={400} height={250} style={{objectFit: 'cover', borderRadius: 'var(--border-radius)'}} />
                  </div>
                </div>
              </div>
              {/* Other timeline items... */}
              <div className="timeline-item timeline-right">
                <div className="timeline-content">
                  <div className="timeline-year secondary">1993</div>
                  <div className="autoShow">
                    <div className="timeline-title secondary">Reconnaissance internationale</div>
                  </div>
                  <div className="autoShow">
                    <div className="timeline-description">L&apos;OMDH devient membre de la Fédération Internationale pour les Droits Humains (FIDH), élargissant ainsi son influence et son accès aux forums internationaux des droits humains.</div>
                  </div>
                  <div className="autoShow">
                    <Image src="/Images/CandleInHand2.jpg" alt="Candle In Hand" width={400} height={250} style={{objectFit: 'cover', borderRadius: 'var(--border-radius)'}} />
                  </div>
                </div>
              </div>
              <div className="timeline-item timeline-left">
                <div className="timeline-content">
                  <div className="timeline-year primary">2004</div>
                  <div className="autoShow">
                    <div className="timeline-title primary">Justice et Réconciliation</div>
                  </div>
                  <div className="autoShow">
                    <div className="timeline-description">L&apos;OMDH joue un rôle clé au sein de l&apos;Instance Équité et Réconciliation (IER) du Maroc, contribuant à la justice transitionnelle et aux efforts de recherche de la vérité.</div>
                  </div>
                  <div className="autoShow">
                    <Image src="/Images/Women.jpg" alt="Women" width={400} height={250} style={{objectFit: 'cover', borderRadius: 'var(--border-radius)'}}/>
                  </div>
                </div>
              </div>
              <div className="timeline-item timeline-right">
                <div className="timeline-content">
                  <div className="timeline-year secondary">2011</div>
                  <div className="autoShow">
                    <div className="timeline-title secondary">Printemps arabe et Réforme constitutionnelle</div>
                  </div>
                  <div className="autoShow">
                    <div className="timeline-description">Lors des réformes constitutionnelles qui ont suivi les manifestations de 2011, l&apos;OMDH plaide pour l&apos;élargissement des protections des droits humains, l&apos;indépendance judiciaire et l&apos;égalité des sexes.</div>
                  </div>
                  <div className="autoShow">
                    <Image src="/Images/arabspring.jpeg" alt="Arab Spring" width={400} height={250} style={{objectFit: 'cover', borderRadius: 'var(--border-radius)'}}/>
                  </div>
                </div>
              </div>
              <div className="timeline-item timeline-left">
                <div className="timeline-content">
                  <div className="timeline-year primary">2023</div>
                  <div className="autoShow">
                    <div className="timeline-title primary">Plaidoyer national et Partenariats</div>
                  </div>
                  <div className="autoShow">
                    <div className="timeline-description">L&apos;OMDH renforce sa coopération avec les universités marocaines, les institutions civiles et les organisations internationales pour promouvoir l&apos;éducation, les droits des femmes et les libertés civiles.</div>
                  </div>
                  <div className="autoShow">
                    <Image src="/Images/ChatGPT Image May 3, 2025, 05_09_56 PM.png" alt="Partnerships" width={400} height={250} style={{objectFit: 'cover', borderRadius: 'var(--border-radius)'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="values-section">
        <h2>Nos valeurs fondamentales</h2>
        <p className="values-description">Nos valeurs constituent le fondement de notre mission et de nos actions. Elles représentent notre engagement indéfectible envers la justice, la dignité et les droits humains pour tous.</p>
        <div className="values-container">
          <div className="value-card">
            <div className="value-icon"><div className="icon-circle"><span>⚖️</span></div></div>
            <h3>Justice</h3>
            <p>Nous recherchons la justice à travers la réforme juridique, la responsabilisation et la défense des droits individuels et collectifs, garantissant l&apos;équité et la justice dans toute la société marocaine.</p>
          </div>
          <div className="value-card">
            <div className="value-icon"><div className="icon-circle"><span>🕊️</span></div></div>
            <h3>Dignité</h3>
            <p>Nous promouvons le respect de la dignité inhérente à chaque personne, en œuvrant pour éliminer la discrimination, l&apos;exclusion et la violence sous toutes ses formes.</p>
          </div>
          <div className="value-card">
            <div className="value-icon"><div className="icon-circle"><span>🤝</span></div></div>
            <h3>Solidarité</h3>
            <p>Nous collaborons avec les communautés, les organisations et les institutions pour construire une voix collective pour les droits humains et renforcer la participation de la société civile.</p>
          </div>
          <div className="value-card">
            <div className="value-icon"><div className="icon-circle"><span>📣</span></div></div>
            <h3>Plaidoyer</h3>
            <p>Nous participons activement au discours public, influençons les politiques et prenons des mesures concrètes pour protéger les droits humains et les libertés démocratiques.</p>
          </div>
        </div>
      </div>

      <div className="Partnairs">
        <h2>Découvrez tous nos partenaires !</h2>
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
            line-height: 1.6;
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
            flex: 1.5; /* Give text more space */
            min-width: 300px;
        }
        .about-text h2 {
            font-size: 1.8rem;
            color: var(--primary-color);
            margin-bottom: 1rem;
            font-family: var(--Poppins);
            position: relative;
            padding-bottom: 0.5rem;
        }
        .about-text h2::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 50px;
            height: 3px;
            background-color: var(--secondary-color);
            border-radius: 1.5px;
        }
        .about-text p {
            margin-bottom: 1.5rem;
            line-height: 1.7;
            color: var(--text-medium);
            font-size: 1.05rem;
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
            text-align: center;
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
        .timeline-section {
            margin: 5rem 0;
            position: relative;
            background: linear-gradient(135deg, var(--accent-color), rgba(232, 240, 237, 0.7));
            padding: 4rem 2rem;
            border-radius: var(--border-radius);
        }
        .timeline-section h2 {
            text-align: center;
            font-size: 2rem;
            color: var(--text-dark);
            margin-bottom: 3rem;
            font-family: var(--Poppins);
            position: relative;
            display: inline-block;
            width: 100%;
        }
        .timeline-section h2::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
            height: 3px;
            background-color: var(--secondary-color);
            border-radius: 1.5px;
        }
        .timeline-container {
            position: relative;
            max-width: 1000px;
            margin: 0 auto;
        }
        .timeline-container::after {
            content: '';
            position: absolute;
            width: 6px;
            background-color: var(--primary-color);
            top: 0;
            bottom: 0;
            left: 50%;
            margin-left: -3px;
            border-radius: 3px;
        }
        .timeline-item {
            padding: 10px 40px;
            position: relative;
            width: 50%;
            box-sizing: border-box;
        }
        .timeline-item::after {
            content: '';
            position: absolute;
            width: 20px;
            height: 20px;
            background-color: white;
            border: 4px solid var(--secondary-color);
            top: 15px;
            border-radius: 50%;
            z-index: 1;
        }
        .timeline-left {
            left: 0;
        }
        .timeline-right {
            left: 50%;
        }
        .timeline-left::after {
            right: -10px;
        }
        .timeline-right::after {
            left: -10px;
        }
        .timeline-content {
            padding: 20px;
            background-color: white;
            position: relative;
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
        }
        .timeline-content h3 {
            color: var(--primary-color);
            margin-bottom: 10px;
            font-family: var(--Poppins);
        }
        .timeline-content .date {
            display: inline-block;
            background-color: var(--accent-color);
            color: var(--primary-color);
            padding: 5px 10px;
            border-radius: 4px;
            font-size: 0.9rem;
            font-weight: 600;
            margin-bottom: 15px;
        }
        .timeline-content p {
            line-height: 1.6;
            color: var(--text-medium);
        }
        .timeline-year {
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 0.5em;
        }
        .timeline-year.primary {
            color: var(--primary-color);
        }
        .timeline-year.secondary {
            color: var(--secondary-color);
        }
        .timeline-title {
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 0.5em;
        }
        .timeline-title.primary {
            color: var(--primary-color);
        }
        .timeline-title.secondary {
            color: var(--secondary-color);
        }
        .timeline-description {
            color: var(--text-dark);
            line-height: 1.6;
            margin-bottom: 1em;
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
            padding: 2em;
            background-color: #f9f9f9;
            text-align: center;
            margin-top: 4rem;
        }
        .Partnairs h2 {
            font-size: 2rem;
            color: #333;
            margin-bottom: 1.5em;
        }
        .parts {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1.5em;
        }
        .ImgCont {
            width: 15em;
            height: 13em;
            background-color: white;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            border-radius: 1em;
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
        @media (max-width: 992px) {
          .timeline-container::after {
            left: 31px;
          }
          .timeline-item {
            width: 100%;
            padding-left: 70px;
            padding-right: 25px;
          }
          .timeline-item::after {
            left: 21px;
          }
          .timeline-right {
            left: 0%;
          }
        }
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
            min-width: 45%; /* Two items per row on tablet */
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
        }
      `}</style>
    </>
  );
}