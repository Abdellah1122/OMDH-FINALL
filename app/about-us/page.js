'use client';

// Import our reusable components and Next.js features
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

const timelineEvents = [
  {
    "year": "1988-1989",
    "title_fr": "Mahdi ELMANDJRA",
    "title_ar": "المرحوم الأستاذ المهدي المنجرة",
    "description": "أستاذ/جامعي",
    "type": "رئيس شرفي",
    "status": "المرحوم",
    "image": "/PastPres/1.JPG"
  },
  {
    "year": "1988-1989",
    "title_fr": "Omar AZZIMAN",
    "title_ar": "الأستاذ عمر عزيمان",
    "description": "محام/جامعي",
    "type": "",
    "status": "",
    "image": "/PastPres/2.JPG"
  },
  {
    "year": "1989-1991",
    "title_fr": "Khalid NACIRI",
    "title_ar": "المرحوم الأستاذ خالد الناصري",
    "description": "محام/جامعي",
    "type": "",
    "status": "المرحوم",
    "image": "/PastPres/3.JPG"
  },
  {
    "year": "1991-1992",
    "title_fr": "Ali OUMLIL",
    "title_ar": "الأستاذ علي أومليل",
    "description": "جامعي",
    "type": "",
    "status": "",
    "image": "/PastPres/4.JPG"
  },
  {
    "year": "1993-2000",
    "title_fr": "Abdelaziz BENNANI",
    "title_ar": "الأستاذ عبد العزيز بناني",
    "description": "محام",
    "type": "",
    "status": "",
    "image": "/PastPres/5.JPG"
  },
  {
    "year": "2000-2006",
    "title_fr": "Abdellah ELOUALLADI",
    "title_ar": "المرحوم الأستاذ عبد الله الولادي",
    "description": "محام",
    "type": "",
    "status": "المرحوم",
    "image": "/PastPres/6.JPG"
  },
  {
    "year": "2006-2012",
    "title_fr": "Amina BOUAYACH",
    "title_ar": "الأستاذة آمنة بوعياش",
    "description": "خبيرة التواصل المؤسساتي",
    "type": "",
    "status": "",
    "image": "/PastPres/7.JPG"
  },
  {
    "year": "2012-2015",
    "title_fr": "Mohamed NESHNASH",
    "title_ar": "الدكتور محمد النشناش",
    "description": "طبيب",
    "type": "",
    "status": "",
    "image": "/PastPres/8.JPG"
  },
  {
    "year": "2015-2022",
    "title_fr": "Boubkeur LARGOU",
    "title_ar": "الأستاذ بوبكر لركو",
    "description": "مفتش التعليم الثانوي التأهيلي",
    "type": "",
    "status": "",
    "image": "/PastPres/9.JPG"
  },
  {
    "year": "2022-2025",
    "title_fr": "El Hassan El IDRISSI",
    "title_ar": "الأستاذ الحسن الإدريس",
    "description": "إطار إداري",
    "type": "",
    "status": "",
    "image": "/PastPres/10.JPG"
  },
  
]
const timelineEvents2 = [
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
    "year": "1993",
    "title": "Reconnaissance internationale",
    "description": "L'OMDH devient membre de la Fédération Internationale pour les Droits Humains (FIDH), élargissant ainsi son influence et son accès aux forums internationaux des droits humains.",
    "image": "/Images/CandleInHand2.jpg",
    "type": "secondary"
  },
    {
    "year": "1997",
    "title": "Intégration Régionale",
    "description": "L'OMDH est devenu membre régulier du réseau EuroMed Rights, indiquant son engagement dans les cadres régionaux des droits humains.",
    "image": "/Images/blue.png",
    "type": "primary"
  },
  {
    "year": "2004",
    "title": "Justice et Réconciliation",
    "description": "L'OMDH joue un rôle clé au sein de l'Instance Équité et Réconciliation (IER) du Maroc, contribuant à la justice transitionnelle et aux efforts de recherche de la vérité.",
    "image": "/Images/Women.jpg",
    "type": "primary"
  },
  {
    "year": "2011",
    "title": "Printemps arabe et Réforme constitutionnelle",
    "description": "Lors des réformes constitutionnelles qui ont suivi les manifestations de 2011, l'OMDH plaide pour l'élargissement des protections des droits humains, l'indépendance judiciaire et l'égalité des sexes.",
    "image": "/Images/PA.jpg",
    "type": "secondary"
  },
    {
    "year": "2011",
    "title": "Alliance Anti-Torture",
    "description": "L'Organisation Marocaine des Droits Humains (OMDH) a travaillé en collaboration avec le Conseil National des Droits de l'Homme (CNDH) et l'Association pour la Prévention de la Torture (APT) pour promouvoir la approbation du Protocole facultatif à la Convention des Nations Unies contre la torture (OPCAT).",
    "image": "/Images/CNDH.jpg",
    "type": "secondary"
  },
  {
    "year": "2013",
    "title": "Condamnation de l'Injustice",
    "description": "L'OMDH a publié conjointement avec Ensemble Contre la Peine de Mort (ECPM) un rapport intitulé « Voyage au cimetière des vivants », qui analysait les conditions de détention des personnes condamnées à mort au Maroc.",
    "image": "/Images/DeathPenaltyAbolition.jpg",
    "type": "primary"
  },
  {
    "year": "2023",
    "title": "Plaidoyer national et Partenariats",
    "description": "L'OMDH renforce sa coopération avec les universités marocaines, les institutions civiles et les organisations internationales pour promouvoir l'éducation, les droits des femmes et les libertés civiles.",
    "image": "/Images/ChatGPT Image May 3, 2025, 05_09_56 PM.png",
    "type": "primary"
  },
  {
    "year": "Avril 2025",
    "title": "Solidarité avec Gaza",
    "description": "Lors de sa douzième conférence nationale, l'OMDH a exprimé sa solidarité avec le peuple palestinien et condamné l'agression israélienne en cours à Gaza, appelant à une intervention internationale.",
    "image": "/Images/gaza.jpg",
    "type": "primary"
  },
]
export default function AboutUsPage() {
  return (
    <>
      <Navbar />

      <main>
  <section className="about-section">
    <div className="about-container">
      <div className="about-header">
        <h1><span className="highlight">Établissement</span></h1>
        <p className="about-tagline">
         L&apos;Organisation Marocaine des Droits de l&apos;Homme (OMDH) est une association nationale non gouvernementale de défense des droits de l&apos;homme, dotée d&apos;un mandat général, dont l&apos;objectif est de protéger et de promouvoir les droits de l&apos;homme au Maroc. Fondée en 1988, son mandat repose sur les valeurs et principes du droit international et des chartes, déclarations et accords internationaux pertinents. C&apos;est une association d&apos;intérêt public dotée du statut consultatif auprès du Conseil économique et social des Nations Unies et membre actif et fondateur de nombreux réseaux nationaux et internationaux de défense des droits de l&apos;homme.
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
          <h2>Établissement</h2>
          <p>
          L&apos;Organisation Marocaine des Droits de l&apos;Homme (OMDH) est une association nationale non gouvernementale de défense des droits de l&apos;homme, dotée d&apos;un mandat général, qui se consacre à la protection et à la promotion des droits de l&apos;homme.          
          </p>
          <p>
          L&apos;organisation a été fondée sur le principe du pluralisme, par des individus appartenant à divers groupes culturels et politiques. Son indépendance vis-à-vis des pouvoirs publics et des mouvements idéologiques et politiques est un principe fondamental de son action en faveur des droits de l&apos;homme.        
          </p>
          <p>
            L&apos;OMDH poursuit son travail inlassable en matière de protection et de promotion des droits de l&apos;homme, en soutenant l&apos;État de droit, la séparation des pouvoirs et l&apos;indépendance de la justice, dans le but de consolider l&apos;État de droit.
          </p>

          <h2>Chemin d'action</h2>
          <p>
          Depuis sa création, l&apos;organisation a pour objectifs, dans le cadre de ses activités, de 
          </p>
          <p>
            - Diffuser et approfondir la connaissance des droits humains individuels et collectifs, sociaux, économiques, culturels, civils et politiques.
          </p>
           <p>
            - Promouvoir l&apos;éducation à la citoyenneté et l&apos;éducation aux droits humains à tous les niveaux de l&apos;enseignement.
          </p>
           <p>
            - Œuvrer à la promotion du respect de l&apos;État de droit en vue de sa consolidation.
          </p>
           <p>
            - Renforcer le pouvoir judiciaire, son indépendance et son intégrité.
          </p>
           <p>
            - Développer la législation marocaine et œuvrer à l&apos;abrogation des dispositions législatives et réglementaires portant atteinte aux libertés individuelles et collectives, ainsi que des textes incompatibles avec les normes internationales relatives aux droits humains.
          </p>
           <p>
            - Fournir des garanties effectives pour la mise en œuvre de ces droits et libertés.
          </p>
           <p>
            - Appeler à la ratification des traités internationaux relatifs aux droits humains et veiller au respect de l&apos;engagement du Maroc à soumettre des rapports sur la mise en œuvre des dispositions des accords ratifiés dans les délais impartis.
          </p>
           <p>
            - Renforcer les liens de solidarité nationale, arabe, africaine et internationale dans le domaine des droits humains.
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
              <span className="stat-number">+37</span>
              <span className="stat-label">Années de défense des droits humains</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">+100</span>
              <span className="stat-label">Campagnes de sensibilisation</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">+100</span>
              <span className="stat-label">Partenariats régionaux et locaux</span>
            </div>
            {/* 
            <div className="stat-item">
              <span className="stat-number">+10K</span>
              <span className="stat-label">Personnes sensibilisées par l&apos;éducation</span>
            </div>
            */}
          </div>

          <div className="cta-container">
            <Link href="/projects" className="BtnPrimary">Nos Projets</Link>
            <Link href="/contact" className="BtnSuc">Nous Contacter</Link>
          </div>
        </div>
      </div>

      <section className="timeline-section">
               <div className="section-header">
                 <h2 className="section-title">Découvrez Nos Étapes Clés</h2>
               </div>
     
               <div className="timeline-container">
                 <div className="timeline-wrapper">
                   <div className="timeline-line"></div>
     
                   {timelineEvents2.map((event, index) => (
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
             
      <section className="timeline-section" >
      <div className="section-header">
        <h2 className="section-title">Découvrez les personnalités qui ont présidées auparavant</h2>
      </div>

      <div className="timeline-container" translate='no'>
        <div className="timeline-wrapper">
          <div className="timeline-line"></div>

          {timelineEvents.map((event, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>

              <div className={`timeline-content ${index % 2 === 0 ? "left" : "right"}`}>
                <div className="timeline-card">
                  <div className={`timeline-year ${event.type}`}>{event.year}</div>
                  {/* Display French title */}
                  <h4 className={`timeline-title ${event.type}`}>{event.title_fr}</h4>
                  {/* Display Arabic title */}
                  {event.title_ar && <h5 className="timeline-title-ar">{event.title_ar}</h5>}
                  {/* Display description (profession in Arabic) */}
                  <p className="timeline-description">{event.description}</p>
                  <div className="timeline-image">
                    <Image
                      src={event.image || "/placeholder.svg?height=250&width=400"}
                      alt={event.title_fr} // Use French title for alt text
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
        /* Section Headers */
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: 2rem;
          font-weight: 600;
          color:var(--secondary-color);
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          letter-spacing: -0.025em;
          position: relative;
        }

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
        
        /* === [CORRECTED] TIMELINE CSS START === */
        
        .timeline-section {
          margin-top:5em;
          display: flex;
          flex-direction: column;
        }
        /* === STYLE FOR ADDED ARABIC CONTENT === */

          /* Style for the Arabic name (h5 tag) */
          .timeline-title-ar {
            font-family: 'Amiri', 'Noto Naskh Arabic', serif; /* A good font for Arabic */
            font-size: 1.25rem;  /* Slightly larger for readability */
            font-weight: 500;
            color: #333; /* Dark grey for a professional look */
            margin-top: -0.75rem; /* Reduce space below the French title */
            margin-bottom: 1rem;
            line-height: 1.5;
            direction: rtl; /* Ensure right-to-left text direction */
            text-align: right;
            overflow:hidden;
          }

          /* Adjustments for the description (profession in Arabic) */
          .timeline-description {
            font-family: 'Amiri', 'Noto Naskh Arabic', serif; /* Consistent Arabic font */
            font-size: 1rem;
            color: #555; /* Slightly lighter than the title */
            direction: rtl; /* Ensure right-to-left text direction */
            text-align: right;
            overflow:hidden;
          }

          /* Optional: Add a special style for the Honorary President's year text */
          .timeline-year.رئيس.شرفي {
              color: #d3612f; /* Example color to make it stand out */
              font-weight: 700;
          }

        .timeline-container {
          background: white;
          border-radius: 4px;
          padding: 4rem 2rem;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .timeline-wrapper {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
        }

        /* Base (Mobile) Styles */
        .timeline-line {
          position: absolute;
          left: 1rem;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, #1957a6, rgba(25, 87, 166, 0.3));
        }

        .timeline-item {
          position: relative;
          padding-left: 3rem; /* Space for content to clear the line */
          margin-bottom: 4rem;
        }
        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-dot {
          position: absolute;
          top: 1.5rem;
          left: calc(1rem - 5px); /* Position dot on the line */
          width: 12px;
          height: 12px;
          background: #1957a6;
          border-radius: 50%;
          border: 3px solid white;
          z-index: 2;
          box-shadow: 0 0 0 3px rgba(25, 87, 166, 0.2);
        }
        
        .timeline-card {
          position: relative;
          background: #fafafa;
          padding: 2rem;
          border-radius: 4px;
          border: 1px solid rgba(0, 0, 0, 0.05);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Desktop Alternating Styles */
        @media (min-width: 993px) {
          .timeline-line {
            left: 50%;
            transform: translateX(-50%);
          }

          .timeline-item {
            padding-left: 0; /* Reset mobile padding */
          }
          
          /* This is the container for the floated content */
          .timeline-item::after {
            content: '';
            display: table;
            clear: both;
          }

          .timeline-dot {
            left: 50%;
            transform: translateX(-50%);
          }

          .timeline-content {
            width: calc(50% - 40px);
            position: relative;
          }

          .timeline-content.left {
            float: left;
          }
          .timeline-content.right {
            float: right;
          }

          /* Arrows */
          .timeline-card::before {
            content: '';
            position: absolute;
            top: 1.8rem;
            width: 0;
            height: 0;
            border: 8px solid transparent;
            transition: border-color 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .timeline-content.left .timeline-card::before {
            right: -16px;
            border-left-color: #fafafa;
          }

          .timeline-content.right .timeline-card::before {
            left: -16px;
            border-right-color: #fafafa;
          }

          .timeline-content .timeline-card:hover::before {
            border-left-color: white;
            border-right-color: white;
          }
        }
        
        .timeline-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          background: white;
        }

        .timeline-year {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color:var(--secondary-color);

        }


        .timeline-title {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 1rem;
          line-height: 1.3;
          color:var(--primary-color);
        }

        .timeline-title.primary {
          color: #1957a6;
        }

        .timeline-title.secondary {
          color: #d3612f;
        }

        .timeline-description {
          color: #4a4a4a;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
        }

        .timeline-image {
          position: relative;
          height: 10rem;
          border-radius: 2px;
          overflow: hidden;
        }

        .timeline-img {
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .timeline-card:hover .timeline-img {
          transform: scale(1.05);
        }
        
        /* === TIMELINE CSS END === */

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
           /* Mobile timeline styles are now the default */
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
            .timeline-container {
            padding: 3rem 1.5rem;
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
            .timeline-card {
            padding: 1.5rem;
          }

          .timeline-image {
            height: 8rem;
          }
        }
      `}</style>
    </>
  );
}