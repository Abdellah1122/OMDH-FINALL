'use client';

// Import our reusable components and Next.js features
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectHcrPage() {
  return (
    <>
      <Navbar />

     <main>
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Projet UNHCR</h1>
        <p className="hero-subtitle">Assistance et protection des réfugiés et demandeurs d&apos;asile</p>
        <p className="hero-description">Ce projet, mené par l&apos;OMDH en partenariat avec le HCR, vise à promouvoir la responsabilisation, l&apos;approche DGA (Âge, Genre, Diversité) et la participation communautaire. Il assure protection, soutien administratif et juridique, et plaidoyer, tout en garantissant une écoute active des personnes à travers des groupes de discussion et des réunions communautaires.</p>
      </div>
      <div className="ImgContainer">
        <Image src="/Images/unhcrr.png" alt="UNHCR Logo" width={500} height={400} style={{objectFit:'contain'}} />
      </div>
    </section>

    <div className="cont">
      <div className="Axes fade-in">
        <div className="timeline-horizontal">
          <div className="timeline-item fade-in delay-1">
            <div className="timeline-dot"></div>
            <div className="timeline-opposite">
              <h3 className="timeline-title">Axe 1 : Accès à la procédure d&apos;asile</h3>
            </div>
            <div className="timeline-content">
              <p className="timeline-text">Cette activité consiste à faciliter l&apos;accès à la procédure d&apos;asile au moyen d&apos;entretiens préliminaires, de la complétion de formulaires adaptés à chaque situation, et d&apos;un renvoi au bureau du HCR à Rabat. L&apos;ouverture d&apos;une antenne à Agadir permettra un meilleur service à la région Souss-Massa, évitant aux demandeurs d&apos;asile de longs déplacements. Les bureaux régionaux de l&apos;OMDH (Rabat, Casablanca, Tanger, Oujda, Nador et Agadir) sont ouverts quotidiennement pour accueillir, informer et orienter les personnes souhaitant demander l&apos;asile.</p>
            </div>
          </div>
          <div className="timeline-item fade-in delay-2">
            <div className="timeline-dot"></div>
            <div className="timeline-opposite">
              <h3 className="timeline-title">Axe 2 : Accès à la documentation civile</h3>
            </div>
            <div className="timeline-content">
              <p className="timeline-text">L&apos;OMDH assiste les réfugiés dans les formalités administratives, notamment l&apos;enregistrement des naissances, l&apos;obtention ou le renouvellement de permis de séjour, et la production de documents juridiques. Elle couvre une partie des coûts (transport, timbres) et a créé un poste d&apos;assistant dédié à la gestion financière et administrative des dossiers, ainsi qu&apos;à l&apos;accueil, au soutien et à la mise à jour des informations dans une base de données sécurisée.</p>
            </div>
          </div>
          <div className="timeline-item fade-in delay-3">
            <div className="timeline-dot"></div>
            <div className="timeline-opposite">
              <h3 className="timeline-title">Axe 3 : Enregistrement DSR en ligne</h3>
            </div>
            <div className="timeline-content">
              <p className="timeline-text">L&apos;OMDH facilite l&apos;enregistrement en ligne des demandes d&apos;asile auprès du HCR via ses bureaux d&apos;Oujda, Nador, Tanger, Casablanca et Agadir. Les demandeurs se rendent dans ces bureaux pour être accompagnés dans la procédure numérique. L&apos;unité DSR gère la planification des entretiens, tandis que l&apos;équipe locale assure la coordination, l&apos;assistance technique et l&apos;organisation logistique. Cette approche vise à rapprocher les services du HCR des populations éloignées, tout en garantissant un accès sécurisé et supervisé à la procédure d&apos;asile.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="OtherAxes fade-in">
        <div className="images">
          <div className="ImageContainer fade-in delay-1"><Image src="/Images/unhcr1.jpg" alt="Image du Projet UNHCR 1" width={300} height={200}/></div>
          <div className="ImageContainer fade-in delay-2"><Image src="/Images/unhcr2.jpg" alt="Image du Projet UNHCR 2" width={300} height={200}/></div>
          <div className="ImageContainer fade-in delay-3"><Image src="/Images/unhcr3.jpg" alt="Image du Projet UNHCR 3" width={300} height={200}/></div>
          <div className="ImageContainer fade-in delay-4"><Image src="/Images/unhcr4.jpg" alt="Image du Projet UNHCR 4" width={300} height={200}/></div>
        </div>
        <div className="VerticaleTimeline">
          <div className="Axe fade-in delay-1"><h2>Axe 4 : Soutien administratif et juridique</h2><p>Il s&apos;agit d&apos;accompagner activement les réfugiés et demandeurs d&apos;asile dans leurs démarches auprès des services de l&apos;administration marocaine : commissariats de police, arrondissements urbains et tribunaux. Cela concerne les procédures d&apos;obtention de documents tels que les actes de naissance, les actes de décès et la légalisation de documents, ainsi que les déclarations de perte, le dépôt de plaintes, les demandes d&apos;autorisation ou les jugements déclaratifs. L&apos;équipe du projet assure un suivi rapproché, rédige les recours nécessaires et guide les bénéficiaires à travers toutes les procédures légales et administratives, veillant au respect de leurs droits. Des indicateurs précis sont utilisés pour mesurer l&apos;impact de cette assistance, incluant le nombre de bénéficiaires aidés et le type de documents obtenus.</p></div>
          <div className="Axe fade-in delay-2"><h2>Axe 5 : Secrétariats des GTP</h2><p>L&apos;OMDH coordonne les GTP régionaux à Casablanca, Oujda et Tanger, et assure une coordination nationale à Rabat. Ces groupes offrent des plateformes de collaboration avec les organisations de la société civile pour améliorer l&apos;accès aux services, mutualiser les efforts humanitaires, renforcer les capacités des acteurs impliqués et partager les bonnes pratiques. Les GTP permettent également un plaidoyer local autour des droits humains, en particulier ceux des réfugiés. Cette coordination soutient la régionalisation de la Stratégie Nationale d&apos;Immigration et d&apos;Asile (SNIA) et contribue à une réponse humanitaire intégrée et cohérente.</p></div>
          <div className="Axe fade-in delay-3"><h2>Axe 6 : Protection contre le renvoi et l&apos;arrestation</h2><p>Cet aspect stratégique du projet consiste à prévenir de manière proactive les risques d&apos;incidents de protection impliquant des réfugiés et des demandeurs d&apos;asile, tels que les renvois forcés, le refoulement, l&apos;expulsion ou l&apos;arrestation arbitraire. Lorsqu&apos;un cas est signalé, l&apos;équipe du projet contacte immédiatement les autorités compétentes (Police, Gendarmerie Royale, Forces Auxiliaires) afin de faire valoir le statut de protection internationale des personnes concernées et d&apos;obtenir leur libération. Ces interventions s&apos;inscrivent dans le respect des engagements internationaux du Maroc et de la garantie des droits fondamentaux. Parallèlement, l&apos;OMDH mène des campagnes de sensibilisation ciblant les personnes relevant de sa compétence (PoCs) pour les encourager à détenir des documents valides, notamment l&apos;attestation de demande d&apos;asile ou le document « À qui de droit », afin de pouvoir les présenter en cas de contrôle. De plus, des sessions de renforcement des capacités sont organisées pour les agents des forces de l&apos;ordre afin de les informer de leurs responsabilités envers les personnes sous protection internationale et de promouvoir une application de la loi respectueuse des droits humains.</p></div>
          <div className="Axe fade-in delay-4"><h2>Axe 7 : Surveillance des frontières et des flux migratoires</h2><p>L&apos;OMDH organise régulièrement des visites de terrain le long des frontières orientales et méditerranéennes du Maroc pour surveiller les mouvements migratoires mixtes et détecter tout incident de protection. Les équipes, basées notamment à Oujda, Nador et Tanger, se déplacent dans des zones stratégiques telles que Jbalasfour, Sidi Yahya, Gala, Touissite, Bni Nsar, Fnideq et Belyounech pour observer les dynamiques locales, recueillir des informations actualisées et repérer toute évolution, comme les changements d&apos;infrastructures (barrières, barbelés) ou de routes migratoires, en particulier dans la région de Nador-Melilla. Ces missions donnent lieu à des rapports détaillés documentant les observations de terrain, les incidents de protection et les recommandations d&apos;action. En situation d&apos;urgence, les équipes signalent immédiatement les faits aux partenaires concernés. Ce mécanisme de surveillance contribue à une meilleure compréhension du contexte migratoire et à une adaptation rapide des responses humanitaires.</p></div>
        </div>
      </div>

      <div className="AdditionalAxes fade-in">
        <div className="wa fade-in delay-1"><h2>Axe 8 : Plaidoyer</h2><p>L&apos;OMDH organise des ateliers en partenariat avec les universités (Oujda, Casablanca), les forces de l&apos;ordre et l&apos;administration civile, touchant plus de 250 personnes (étudiants, officiers, caïds). Une campagne de communication numérique est également prévue pour sensibiliser au droit d&apos;asile et à la documentation, tout en appelant à une plus grande reconnaissance des droits humains fondamentaux.</p></div>
        <div className="wa fade-in delay-2"><h2>Axe 9 : Approche communautaire</h2><p>Les relais communautaires (arabophones et francophones) sont des acteurs clés dans l&apos;identification des besoins, la diffusion de l&apos;information et la sensibilisation. L&apos;OMDH prévoit d&apos;en recruter un nouveau à Agadir et d&apos;organiser des réunions régulières pour promouvoir le dialogue entre les relais et améliorer la connaissance du contexte migratoire local.</p></div>
        <div className="wa fade-in delay-3"><h2>Axe 10 : Protection sociale</h2><p>L&apos;objectif de ce dernier axe est d&apos;accompagner les réfugiés dans leur enregistrement auprès des registres sociaux (RNP, RSU), de faciliter l&apos;accès aux programmes de santé et d&apos;aide directe (AMO), et de suivre les évolutions des politiques sociales. Un assistant dédié assurera la mise en œuvre de ces actions et la sensibilisation des bénéficiaires à leurs droits sociaux.</p></div>
      </div>

      <div className="cta-section fade-in">
        <div className="cta-content">
          <h2 className="fade-in delay-1">Découvrez Nos Projets Passés</h2>
          <p className="fade-in delay-2">Explorez les initiatives et collaborations que nous avons entreprises pour créer un impact significatif.</p>
          <Link href="/projects" className="BtnPrimary">Découvrez Maintenant</Link>
        </div>
      </div>
    </div>
  </main>

      <Footer />
      
      <style jsx>{`
        

    .BtnPrimary {
        background-color: var(--primary-color);
        color: white;
        border: 1px solid var(--primary-color);
         font-size: 0.95rem;
        font-weight: 500;
        padding: 0.5rem 1.8rem;
        border-radius: var(--border-radius);
        border: 1px solid transparent;
        cursor: pointer;
        transition: var(--transition);
        letter-spacing: 0.5px;
    }

        .BtnPrimary:hover {
            background-color: var(--primary-dark);
            transform: translateY(-2px);
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        }

    .BtnSuc {
        background-color: var(--secondary-color);
        color: white;
        border: 1px solid var(--secondary-color);
    }

        .BtnSuc:hover {
            background-color: var(--secondary-light);
            transform: translateY(-2px);
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        }

    /* Custom styles for modern design */
    .containerrr {
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 20px;
    }

   
/* Hero Section */
        .hero-section {
          background: linear-gradient(135deg, #1957a6, #174c91);
          padding: 80px 0;
          position: relative;
          overflow: hidden;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: white;
        }

        .hero-section::before {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 300px;
          height: 300px;
          background-color: rgba(255, 255, 255, 0.05);
          border-radius: 50%;
          transform: translate(100px, -150px);
        }

        .hero-section::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 200px;
          height: 200px;
          background-color: rgba(255, 255, 255, 0.05);
          border-radius: 50%;
          transform: translate(-100px, 100px);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 600px;
          padding: 0 40px;
        }

        .hero-title {
          font-weight: 600;
          font-size: 2.5rem;
          margin-bottom: 15px;
          letter-spacing: -0.5px;
        }

        .hero-subtitle {
          font-weight: 300;
          font-size: 1.2rem;
          opacity: 0.9;
          margin-bottom: 20px;
        }

        .hero-description {
          line-height: 1.7;
          margin-bottom: 30px;
          font-weight: 300;
          font-size: 1rem;
        }

        .hero-image-container {
          position: relative;
          width: 400px;
          height: 300px;
          margin-right: 40px;
          z-index: 2;
        }

        .hero-image {
          border-radius: 10px;
          object-fit: cover;
        }
    
    /* Content container */
    .cont {
        display: flex;
        flex-direction: column;
        gap: 1em;
        justify-content: center;
        align-items: center;
        padding: 1em;
        max-width: 1400px;
        margin: 0 auto;
    }

    /* Timeline Section */
    .Axes {
        padding: 2em 1em;
        margin: 1em 0;
        background-color: white;
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);
        width: 100%;
    }

    /* Horizontal Timeline */
    .timeline-horizontal {
        display: flex;
        justify-content: space-between;
        position: relative;
        padding: 3rem 0;
        margin: 2rem 0;
        height: auto;
        min-height: 400px;
    }

        .timeline-horizontal::after {
            content: "";
            position: absolute;
            top: 100px;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: rgba(25, 87, 166, 0.3);
            z-index: 1;
        }

    .timeline-item {
        position: relative;
        width: 30%;
        z-index: 2;
        transition: transform 0.3s ease;
    }

        .timeline-item:hover {
            transform: translateY(-5px);
        }

    .timeline-dot {
        width: 20px;
        height: 20px;
        background-color: var(--primary-color);
        border-radius: 50%;
        position: absolute;
        top: 100px;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 3;
        border: 3px solid white;
        box-shadow: 0 0 0 3px rgba(25, 87, 166, 0.3);
    }

    .timeline-opposite {
        text-align: center;
        margin-bottom: 2rem;
        padding-bottom: 80px;
    }

    .timeline-title {
        font-family: var(--Poppins);
        font-weight: 600;
        font-size: 1.2em;
        color: var(--primary-color);
        margin-bottom: 0.5rem;
        position: relative;
        display: inline-block;
    }

        .timeline-title::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -5px;
            width: 0;
            height: 2px;
            background-color: var(--primary-color);
            transition: width 0.3s ease;
        }

    .timeline-item:hover .timeline-title::after {
        width: 100%;
    }

    .timeline-content {
        background-color: var(--accent-color);
        padding: 1.5rem;
        border-radius: var(--border-radius);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        border-left: 3px solid var(--primary-color);
        transition: all 0.3s ease;
        margin-top: 2rem;
    }

    .timeline-item:hover .timeline-content {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
    }

    .timeline-text {
        color: var(--text-dark);
        font-family: var(--Roboto);
        font-size: 0.95rem;
        line-height: 1.6;
    }

    /* Side-by-side layout with images and timeline */
    .OtherAxes {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        padding: 2rem;
        margin: 2rem 0;
        background-color: white;
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);
        width: 100%;
    }

    /* Images column */
    .images {
        flex: 0 0 30%;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        align-items: center;
        justify-content: space-around;
    }

    .ImageContainer {
        width: 100%;
        border-radius: var(--border-radius);
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        position: relative;
    }

        .ImageContainer:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .ImageContainer Image {
            width: 100%;
            height: auto;
            display: block;
            transition: transform 0.5s ease;
        }

        .ImageContainer:hover Image {
            transform: scale(1.05);
        }

        .ImageContainer::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to bottom, rgba(25, 87, 166, 0), rgba(25, 87, 166, 0.2));
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .ImageContainer:hover::after {
            opacity: 1;
        }

    .VerticaleTimeline {
        display: flex;
        flex-direction: column;
        padding: 1em;
        align-items: center;
        flex: 1;
    }

    .Axe {
        display: flex;
        width: 100%;
        text-align: center;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1em;
        margin-bottom: 2em;
        padding-bottom: 2em;
        border-bottom: 1px solid rgba(25, 87, 166, 0.1);
    }

        .Axe:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
        }

        .Axe h2 {
            font-family: var(--Poppins);
            font-weight: 600;
            font-size: 1.3em;
            color: var(--primary-color);
            position: relative;
            padding-bottom: 0.5em;
            width: 100%;
            text-align: left;
        }

            .Axe h2::after {
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                width: 50px;
                height: 3px;
                background-color: var(--primary-color);
            }

        .Axe p {
            font-family: var(--Roboto);
            line-height: 1.7;
            color: var(--text-medium);
            text-align: left;
            width: 100%;
        }

    .AdditionalAxes {
        display: flex;
        flex-direction: row;
        padding: 2em;
        gap: 0.5em;
        width: 100%;
    }

        .AdditionalAxes > * {
            flex: 1;
            padding: 1.5em;
            background-color: var(--accent-color);
            border-radius: var(--border-radius);
            min-height: 22em;
            display: flex;
            flex-direction: column;
            text-align: center;
            gap: 1em;
            justify-content: center;
            align-items: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

            .AdditionalAxes > *:hover {
                transform: translateY(-5px);
                box-shadow: var(--box-shadow);
            }

    .wa {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

        .wa h2 {
            font-family: var(--Poppins);
            font-weight: 600;
            font-size: 1.2em;
            color: var(--primary-color);
            margin-bottom: 1em;
            position: relative;
            padding-bottom: 0.5em;
        }

            .wa h2::after {
                content: "";
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
                width: 40px;
                height: 2px;
                background-color: var(--primary-color);
            }

        .wa p {
            font-family: var(--Roboto);
            line-height: 1.7;
            color: var(--text-medium);
            text-align: center;
        }

    .cta-section {
        background-color: var(--accent-color);
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);
        padding: 3em;
        text-align: center;
        margin-bottom: 3em;
        width: 100%;
    }

    .cta-content {
        max-width: 700px;
        margin: 0 auto;
    }

    .cta-section h2 {
        font-size: 2em;
        color: var(--text-dark);
        margin-bottom: 0.5em;
        font-family: var(--Poppins);
    }

    .cta-section p {
        font-size: 1.1em;
        line-height: 1.6;
        margin-bottom: 1.5em;
        color: var(--text-medium);
    }

    .cta-buttons {
        display: flex;
        gap: 1em;
        justify-content: center;
        flex-wrap: wrap;
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




/* Responsive adjustments */
@media (max-width: 992px) {
    .OtherAxes {
        flex-direction: column;
    }

    .images {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

    .ImageContainer {
        width: 45%;
    }

    .timeline-horizontal {
        flex-direction: column;
        height: auto;
        padding: 0;
    }

        .timeline-horizontal::after {
            width: 2px;
            height: 100%;
            top: 0;
            left: 20px;
        }

    .timeline-item {
        width: 100%;
        margin-bottom: 3rem;
        padding-left: 50px;
    }

    .timeline-dot {
        left: 20px;
        top: 0;
    }

    .timeline-opposite {
        text-align: left;
        padding-bottom: 0;
        margin-bottom: 1rem;
    }

    .timeline-content {
        margin-top: 0;
    }
}

@media (max-width: 768px) {
    .AdditionalAxes {
        flex-direction: column;
    }

        .AdditionalAxes > * {
            min-height: auto;
            padding: 2em;
        }

    .hero-title {
        font-size: 2em;
    }

    .hero-subtitle {
        font-size: 1.1em;
    }

    .ImageContainer {
        width: 100%;
    }
}

@media (max-width: 576px) {
    .hero-section {
        padding: 60px 0 80px;
        flex-direction:column-reverse;
        justify-content:center;
        align-items:center;
        gap:2em;
    }
    .ImgContainer{
        margin:0;
        padding:0;
    }
    .hero-title {
        font-size: 1.8em;
    }

    .hero-subtitle {
        font-size: 1em;
    }

    .cta-section {
        padding: 2em 1.5em;
    }

        .cta-section h2 {
            font-size: 1.6em;
        }
}

      `}</style>
    </>
  );
}