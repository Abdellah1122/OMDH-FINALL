'use client';

// Import our reusable components and Next.js features
// Note the ../../ path to go up two folders
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function PressReleasePage() {
  return (
    <>
      <Navbar />

      <main translate="no">
        <nav className="nav-breadcrumb">
          <div className="container">
            <div className="breadcrumb">
              <Link href="/" style={{color:'black',backgroundColor:'transparent' , border:'none'}}>Accueil</Link>
              <span>›</span>
              <Link href="/editions" style={{color:'black',backgroundColor:'transparent' , border:'none'}}>Editions</Link>
              <span>›</span>
              <span>Communiqué - Journée mondiale des réfugiés</span>
            </div>
          </div>
        </nav>

        <header className="article-header" dir="ltr" lang="fr">
          <div className="container">
            <div className="article-category">Communiqué</div>
            <h1 className="article-title">L&apos;Organisation marocaine des droits de l&apos;homme célèbre la Journée mondiale des réfugiés</h1>
            <p className="article-subtitle">Chaque année, le 20 juin, le monde célèbre la Journée mondiale des réfugiés, une journée qui vise à rendre hommage aux personnes contraintes de fuir leur pays pour échapper à la persécution et aux conflits.</p>
            <div className="article-meta">
              <div className="meta-item">
                <strong>Par L&apos;Organisation Marocaine des Droits Humains (OMDH)</strong>
              </div>
              <div className="meta-divider"></div>
              <div className="meta-item">
                20 Juin 2025
              </div>
            </div>
          </div>
        </header>

        <section className="article-hero">
          <div className="container">
            <div className="hero-image-wrapper">
              <Image src="/Images/Com.jpg" alt="Solidarité avec les réfugiés" className="hero-image" width={800} height={400} priority />
            </div>
          </div>
        </section>

        <article className="article-content" dir="ltr" lang="fr">
          <div className="container">
            <div className="content-body">
                <p className="lead-paragraph">Chaque année, le 20 juin, le monde célèbre la Journée mondiale des réfugiés, une journée qui vise à rendre hommage aux personnes contraintes de fuir leur pays pour échapper à la persécution et aux conflits et à exprimer la solidarité à leur égard afin de garantir leur droit à la sécurité et à la sûreté, et d&apos;attirer l&apos;attention de la communauté internationale sur leurs souffrances, dans le but de favoriser leur intégration économique, sociale et culturelle. </p>
                <p>L&apos;Organisation Marocaine des Droits Humains (OMDH), qui célèbre cette journée mondiale juste après la tenue de son douzième congrès national les 25, 26 et 27 avril 2025, rappelle et réaffirme ses positions de principe concernant les droits des migrants, des réfugiés et des demandeurs d&apos;asile, telles qu&apos;elles ont été exprimées dans la déclaration publique de son congrès. </p>

                <h2>-1- Au niveau international</h2>
                <p>L&apos;OMDH saisit cette occasion pour exprimer sa conscience des droits humains et humanitaires, face à l&apos;évolution actuelle de la situation mondiale en matière de recul de la protection des demandeurs d&apos;asile et des réfugiés, et de leur droit à jouir de manière effective, des droits fondamentaux qui leur sont reconnus dans la Convention relative au statut des réfugiés de 1951, et dans les conventions internationales et régionales pertinentes en matière de droits de l&apos;Homme, ainsi que dans le droit international humanitaire et coutumier, en particulier face à la montée des tendances extrémistes, des discours de haine et de discrimination en Europe et en Occident en général. </p>
                
                <h2>-2- Au niveau régional</h2>
                <p>L&apos;Organisation Marocaine des Droits Humains (OMDH), suit avec une vive inquiétude la situation dans plusieurs pays voisins, notamment en Algérie, en Tunisie et en Libye, où de graves et flagrantes violations des droits des réfugiés et des demandeurs d&apos;asile sont commises.  Les persécutions sécuritaires, les pratiques humiliantes, racistes et inhumaines, et les expulsions collectives vers des zones désertiques et inhabitées, n&apos;excluent ni femmes ni enfants, ni ceux qui ont besoin d&apos;une protection internationale, en violation flagrante de leurs obligations internationales en matière de droits humains, qu&apos;ils ont ratifiées en vertu des conventions internationales pertinentes. </p>

                <h2>-3- Au niveau national</h2>
                <p>L&apos;OMDH rappelle la situation géographique du Maroc, devenu une destination pour de nombreux réfugiés et demandeurs d&apos;asile, en particulier ceux en provenance des pays d&apos;Afrique subsaharienne, en raison de la situation régionale difficile et complexe et des violations des droits humains dont cette catégorie est victime dans les pays voisins.  Ainsi, l&apos;OMDH salue les initiatives positives prises par le Maroc en matière de gestion des questions d&apos;immigration et d&apos;asile, depuis la ratification d&apos;une série de conventions internationales relatives aux droits de l&apos;Homme, en passant par la Constitution marocaine de 2011, jusqu&apos;à la Stratégie Nationale d&apos;Immigration et d&apos;Asile (SNIA). </p>
                <p>Dans ce contexte, l&apos;OMDH réaffirme son engagement pour un plaidoyer responsable en faveur du respect des droits des réfugiés, sur la base des principes de l&apos;Organisation et de sa référence aux droits humains universels.  Ce plaidoyer s&apos;est renforcé avec son engagement depuis 2007 dans un partenariat significatif avec le Haut-Commissariat des Nations unies pour les réfugiés, afin de fournir une assistance juridique aux réfugiés et aux demandeurs d&apos;asile au Maroc, d&apos;établir un suivi de leur situation humanitaire et humaniste, et de surveiller toute violation, dont ils pourraient être victime, ce qui a renforcé les acquis de l&apos;Organisation en matière de la protection des réfugiés et de promotion de leurs droits au Maroc. </p>
                
                <h4>L&apos;Organisation Marocaine des Droits Humains (OMDH) appelle à :</h4>
                <div className="highlight-box">
                    <ul>
                          <li>La nécessité pour la communauté internationale d&apos;honorer ses engagements en matière de droits de l&apos;Homme et d&apos;aide humanitaire, et de partager la charge entre les États en matière de protection et d&apos;assistance aux réfugiés. </li>
                          <li>Que, le Haut Commissariat des Nations Unies pour les réfugiés assume son devoir humanitaire et défende les réfugiés et les demandeurs d&apos;asile dans les conditions difficiles qu&apos;ils traversent actuellement. </li>
                          <li>Prendre en considération les nouveaux défis liés à l&apos;asile, notamment les déplacements et les migrations résultant des changements climatiques et des catastrophes environnementales et naturelles. </li>
                          <li>Aligner la législation nationale sur le Pacte international relatif aux droits civils et politiques, ainsi que sur la Convention internationale sur la protection des droits de tous les travailleurs migrants et des membres de leur famille. </li>
                          <li>Accélérer la promulgation de la loi n° 66.17 relative à l&apos;asile et aux conditions d&apos;octroi de celui-ci. </li>
                          <li>Accélérer la refonte et la promulgation de la loi n° 72.17 relative à l&apos;entrée, au séjour à l&apos;immigration des étrangers au Royaume du Maroc. </li>
                          <li>Œuvrer pour la territorialisation de la Stratégie Nationale d&apos;Immigration et d&apos;Asile (SNIA), notamment au niveau de la Région, et évaluer ses résultats plus de dix ans après son lancement. </li>
                          <li>Mettre en place des mesures urgentes pour l&apos;intégration des réfugiés et garantir leur accès à tous leurs droits fondamentaux. </li>
                          <li>Renforcer les mécanismes de signalement et de protection des femmes réfugiées et demandeuses d&apos;asile, des enfants accompagnant les demandeurs d&apos;asile et des réfugiés victimes de violence. </li>
                          <li>Appliquer strictement les mécanismes juridiques contre tous les discours discriminatoires et racistes. </li>
                          <li>Intégrer les droits des migrants et des demandeurs d&apos;asile dans les programmes éducatifs afin d&apos;éliminer les stéréotypes négatifs. </li>
                          <li>Soutenir et impliquer les organisations de la société civile actives dans le domaine de la migration et de l&apos;asile. </li>
                          <li>Accélérer la délivrance de cartes de réfugié par le Bureau des apatrides et des réfugiés. </li>
                          <li>Faciliter et assouplir la procédure administrative de régularisation des réfugiés et leur octroi de cartes de séjour. </li>
                    </ul>
                </div>

                    <h4>Appels spécifiques :</h4>
                    <div className="highlight-box special-calls">
                        <ul>
                            <li>L&apos;OMDH appelle l&apos;État algérien à accorder aux habitants des camps de Tindouf tous les droits qui leur sont reconnus par la Convention de Genève de 1951, en particulier leur droit à la libre circulation, à la levée du blocus et à leur recensement. </li>
                            <li>L&apos;OMDH appelle le Haut-Commissariat des Nations Unies pour les réfugiés à procéder au recensement des habitants des camps de Tindouf et à assumer pleinement sa responsabilité légale de leur octroyer le statut de « réfugié ». </li>
                        </ul>
                    </div>

                    <p className="conclusion"><strong>Pour conclure,</strong> l&apos;Organisation Marocaine des Droits Humains (OMDH) affirme son engagement continu à fournir toutes formes d&apos;aide et de conseils juridiques, à protéger les droits de tous les réfugiés, en collaboration avec ses différents partenaires, à améliorer leur situation, à plaider en faveur de la réforme méliorative des différentes lois pertinentes, et à s&apos;ouvrir à toutes les parties prenantes intéressées et actives en la matière, afin de faire du Maroc un pays pionnier et une référence dans le domaine de la protection des droits des réfugiés et des demandeurs d&apos;asile. </p>

            </div>
          </div>
        </article>

        <section className="author-section">
          <div className="container">
            <div className="author-card" dir="ltr">
              <div className="author-avatar-wrapper">
                <Image src="/omdhlogo.png" alt="Logo de l'Organisation Marocaine des Droits Humains" className="author-avatar" width={80} height={80}/>
              </div>
              <div className="author-info">
                <h4>L&apos;Organisation Marocaine des Droits Humains (OMDH)</h4>
                <p className="author-title">Auteur du communiqué</p>
                <p className="author-bio">
                  Communiqué de presse publié à l&apos;occasion de la Journée mondiale des réfugiés pour réaffirmer la position de l&apos;organisation et appeler au respect et à la protection des droits des réfugiés et des demandeurs d&apos;asile. 
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        /* CSS Variables for consistent theming */
        :root {
          --primary-color: #1957a6;
          --primary-light: #e8f1fd;
          --primary-dark: #134080;
          --text-dark: #1a1a1a;
          --text-medium: #4a5568;
          --text-light: #718096;
          --light-bg: #f8fafc;
          --border-light: #e2e8f0;
          --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
          --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          --gradient-primary: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
          --gradient-light: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
        }

        /* Global container styling */
        .container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Enhanced breadcrumb navigation */
        .nav-breadcrumb {
          padding: 20px 0;
          background: var(--gradient-light);
          border-bottom: 1px solid var(--border-light);
          backdrop-filter: blur(10px);
        }

        .breadcrumb {
          font-size: 0.9rem;
          color: var(--text-medium);
          font-weight: 500;
        }

        .breadcrumb a {
          color: var(--primary-color);
          text-decoration: none;
          padding: 4px 8px;
          border-radius: 6px;
          transition: all 0.3s ease;
        }

        .breadcrumb a:hover {
          color: var(--primary-dark);
          background-color: var(--primary-light);
          transform: translateY(-1px);
        }

        .breadcrumb span {
          margin: 0 12px;
          color: var(--text-light);
          font-weight: 300;
        }

        /* Enhanced article header */
        .article-header {
          background: var(--gradient-light);
          padding: 60px 0 80px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .article-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 20%, rgba(25, 87, 166, 0.05) 0%, transparent 50%);
          pointer-events: none;
        }

        .article-category {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--primary-color);
          background: var(--primary-light);
          padding: 8px 20px;
          border-radius: 25px;
          margin-bottom: 24px;
          border: 2px solid rgba(25, 87, 166, 0.1);
          position: relative;
          z-index: 1;
          transition: all 0.3s ease;
        }

        .article-category:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .article-title {
          font-family: 'Poppins', 'system-ui', sans-serif;
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 24px;
          color: var(--text-dark);
          position: relative;
          z-index: 1;
          letter-spacing: -0.02em;
        }

        .article-subtitle {
          font-size: 1.2rem;
          color: var(--text-medium);
          max-width: 700px;
          margin: 0 auto 40px;
          line-height: 1.7;
          font-weight: 400;
          position: relative;
          z-index: 1;
        }

        .article-meta {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 24px;
          font-size: 0.95rem;
          position: relative;
          z-index: 1;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-medium);
          font-weight: 500;
        }

        .meta-divider {
          width: 2px;
          height: 20px;
          background: linear-gradient(to bottom, transparent, var(--border-light), transparent);
          border-radius: 1px;
        }

        /* Enhanced hero image section */
        .article-hero {
          margin: -40px auto 60px;
          max-width: 900px;
          padding: 0 24px;
          position: relative;
          z-index: 2;
        }

        .hero-image-wrapper {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: var(--shadow-xl);
          transition: all 0.4s ease;
        }

        .hero-image-wrapper:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .hero-image-wrapper::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(25, 87, 166, 0.1) 0%, transparent 50%);
          z-index: 1;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .hero-image-wrapper:hover::before {
          opacity: 1;
        }

        .hero-image {
          width: 100%;
          height: auto;
          max-height: 500px;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .hero-image-wrapper:hover .hero-image {
          transform: scale(1.05);
        }

        /* Enhanced article content */
        .article-content {
          background-color: #ffffff;
          padding: 80px 0;
          position: relative;
        }

        .content-body {
          font-size: 1.125rem;
          line-height: 1.8;
          color: var(--text-dark);
          font-weight: 400;
        }

        .lead-paragraph {
          font-size: 1.25rem;
          font-weight: 500;
          color: var(--text-dark);
          margin-bottom: 2.5rem;
          padding: 20px;
          background: var(--primary-light);
          border-radius: 12px;
          border-left: 4px solid var(--primary-color);
          position: relative;
        }

        .content-body p, .content-body li {
          margin-bottom: 1.75rem;
        }

        .content-body ul {
          padding-right: 24px;
          margin-bottom: 2rem;
          list-style: none;
        }

        .content-body ul li {
          position: relative;
          padding-right: 24px;
        }

        .content-body ul li::before {
          content: '✓';
          position: absolute;
          right: 0;
          color: var(--primary-color);
          font-weight: bold;
          font-size: 1.1em;
        }

        .content-body h2, .content-body h3, .content-body h4 {
          font-family: 'Poppins', 'system-ui', sans-serif;
          font-weight: 700;
          margin: 3rem 0 1.5rem;
          color: var(--text-dark);
          position: relative;
        }

        .content-body h2 {
          font-size: 2rem;
          color: var(--primary-color);
          padding-bottom: 12px;
          border-bottom: 3px solid var(--primary-light);
          margin-bottom: 2rem;
        }

        .content-body h3 {
          font-size: 1.6rem;
        }

        .content-body h4 {
          font-size: 1.3rem;
          color: var(--primary-color);
          margin-top: 2.5rem;
        }

        /* Enhanced highlight boxes */
        .highlight-box {
          background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
          border: 1px solid var(--border-light);
          border-right: 5px solid var(--primary-color);
          border-radius: 12px;
          padding: 32px;
          margin: 40px 0;
          box-shadow: var(--shadow-md);
          position: relative;
          transition: all 0.3s ease;
        }

        .highlight-box:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }

        .highlight-box::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 5px;
          height: 100%;
          background: var(--gradient-primary);
          border-radius: 0 12px 12px 0;
        }

        .special-calls {
          background: linear-gradient(135deg, var(--primary-light) 0%, #ffffff 100%);
          border-right-color: var(--primary-dark);
        }

        .special-calls::before {
          background: linear-gradient(to bottom, var(--primary-color), var(--primary-dark));
        }

        .highlight-box ul {
          margin: 0;
          padding-right: 0;
        }

        .highlight-box ul li {
          padding: 8px 0;
          border-bottom: 1px solid rgba(25, 87, 166, 0.1);
          transition: all 0.2s ease;
        }

        .highlight-box ul li:last-child {
          border-bottom: none;
        }

        .highlight-box ul li:hover {
          background-color: rgba(25, 87, 166, 0.05);
          border-radius: 8px;
          padding: 8px 12px;
          margin: 0 -12px;
        }

        .conclusion {
          font-size: 1.2rem;
          padding: 24px;
          background: var(--gradient-light);
          border-radius: 12px;
          border: 1px solid var(--border-light);
          margin-top: 3rem;
          font-weight: 500;
          line-height: 1.7;
        }

        /* Enhanced author section */
        .author-section {
          background: var(--gradient-light);
          padding: 60px 0;
          border-top: 1px solid var(--border-light);
        }

        .author-card {
          background: linear-gradient(135deg, #ffffff 0%, #fefefe 100%);
          border-radius: 20px;
          padding: 40px;
          display: flex;
          align-items: center;
          gap: 24px;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--border-light);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .author-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 80% 20%, rgba(25, 87, 166, 0.05) 0%, transparent 50%);
          pointer-events: none;
        }

        .author-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-xl);
        }

        .author-avatar-wrapper {
          position: relative;
          flex-shrink: 0;
        }

        .author-avatar-wrapper::before {
          content: '';
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          background: var(--gradient-primary);
          border-radius: 50%;
          z-index: -1;
        }

        .author-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
          background-color: white;
          padding: 4px;
          transition: transform 0.3s ease;
        }

        .author-card:hover .author-avatar {
          transform: scale(1.05);
        }

        .author-info {
          flex: 1;
          position: relative;
          z-index: 1;
        }

        .author-info h4 {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 8px;
        }

        .author-info .author-title {
          color: var(--primary-color);
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .author-info .author-bio {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--text-medium);
          font-weight: 400;
        }

        /* Responsive design improvements */
        @media (max-width: 768px) {
          .container {
            padding: 0 20px;
          }

          .article-header {
            padding: 40px 0 60px;
          }

          .article-title {
            font-size: 2rem;
          }

          .article-subtitle {
            font-size: 1.1rem;
          }

          .article-meta {
            flex-direction: column;
            gap: 12px;
          }

          .meta-divider {
            display: none;
          }

          .article-hero {
            margin: -30px auto 40px;
          }

          .content-body {
            font-size: 1.05rem;
          }

          .content-body h2 {
            font-size: 1.6rem;
          }

          .highlight-box {
            padding: 24px;
            margin: 30px 0;
          }

          .author-card {
            flex-direction: column;
            text-align: center;
            padding: 30px;
          }

          .author-avatar {
            width: 100px;
            height: 100px;
          }
        }

        /* Smooth scrolling and focus states */
        * {
          scroll-behavior: smooth;
        }

        *:focus {
          outline: 2px solid var(--primary-color);
          outline-offset: 2px;
        }

        /* Print styles */
        @media print {
          .nav-breadcrumb,
          .author-section {
            display: none;
          }
          
          .article-content {
            padding: 20px 0;
          }
          
          .highlight-box {
            break-inside: avoid;
          }
        }
      `}</style>
    </>
  );
}