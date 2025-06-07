"use client"

import Image from "next/image"
import Link from "next/link"

// Import your existing components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const officeData = [
  {
    id: 1,
    type: "hq",
    typeLabel: "Siège National",
    city: "Rabat",
    image: "/Images/Rabat.jpg",
    description:
      "Le siège principal de l'OMDH coordonne les initiatives nationales, le plaidoyer juridique et les programmes de coopération internationale. Établi en 1988, il demeure le cœur de la mission de l'organisation.",
    phone: ["+212 537 77 00 60", "+212 666 94 79 75"],
    email: "admin.omdh@omdh.ma",
    address: "8 , rue Ouargha , Résidence volubilis, appt 1 , Agdal /Rabat , Maroc",
  },
  {
    id: 2,
    type: "office",
    typeLabel: "Bureau Régional",
    city: "Casablanca",
    image: "/Images/casablanca.jpg",
    description:
      "Le bureau de Casablanca soutient les droits urbains, l'inclusion socio-économique et l'aide juridique aux populations vulnérables de la région métropolitaine.",
    phone: ["+212 762 59 86 79"],
    email: "farah.houmani@omdh.ma",
    address: "place pasteur 17 résidence BUILD PASTEUR 1er étage N°13",
  },
  {
    id: 3,
    type: "office",
    typeLabel: "Bureau Régional",
    city: "Agadir",
    image: "/Images/Agadir.jpg",
    description:
      "L'antenne d'Agadir traite des questions relatives aux droits amazighs, à la justice environnementale et au soutien des communautés rurales dans la région de Souss-Massa.",
    phone: ["+212 666 43 28 97"],
    email: "Oumaima.Lahmar@omdh.ma",
    address: "N° 22, 5e étage, Immeuble Moulak, rue Al Qadi Ayyad, zone industrielle, Agadir.",
  },
  {
    id: 4,
    type: "office",
    typeLabel: "Bureau Régional",
    city: "Oujda",
    image: "/Images/oujda.jpeg",
    description:
      "L'antenne d'Oujda se concentre sur les questions de migration, la coopération transfrontalière et les programmes d'éducation communautaire dans la région orientale du Maroc.",
    phone: ["+212 536 00 00 00"],
    email: "admin.omdh@omdh.ma",
    address: "Rue Ziyani, Quartier Elmahata, 1er étage",
  },
  {
    id: 5,
    type: "office",
    typeLabel: "Bureau Régional",
    city: "Tanger",
    image: "/Images/Tangier.jpg",
    description:
      "Situé dans le nord, le bureau de Tanger gère des programmes pour la jeunesse, des ateliers sur les droits humains et des initiatives de plaidoyer local en partenariat avec des groupes de la société civile.",
    phone: ["+212 539 00 00 00"],
    email: "admin.omdh@omdh.ma",
    address: "Rue de Fès N° 156, face au laboratoire Castilla",
  },
]

const statsData = [
  { number: "12", label: "Régions Actives" },
  { number: "5", label: "Bureaux Régionaux" },
  { number: "100+", label: "Bénévoles" },
  { number: "35+", label: "Années de Plaidoyer" },
]

const expansionPlans = [
  {
    icon: "🤝",
    title: "Sensibilisation Communautaire",
    description:
      "Nous visons à ouvrir de nouveaux bureaux de liaison communautaire dans les zones reculées pour assurer un meilleur accès au soutien juridique, à l'éducation aux droits humains et aux outils de participation civique.",
  },
  {
    icon: "🏫",
    title: "Éducation aux Droits Humains",
    description:
      "Des plans sont en cours pour collaborer avec les écoles et les universités à travers le Maroc afin de lancer des programmes éducatifs sur les droits humains, le devoir civique et les valeurs démocratiques.",
  },
  {
    icon: "📍",
    title: "Renforcement Régional",
    description:
      "Nous renforçons nos bureaux régionaux dans des villes comme Oujda, Tanger et Agadir pour soutenir le traitement des cas locaux, le reporting et les initiatives de plaidoyer.",
  },
  {
    icon: "🌐",
    title: "Partenariats Internationaux",
    description:
      "L'OMDH tisse de nouvelles alliances avec des organisations internationales de défense des droits humains pour échanger des connaissances, lancer des projets communs et amplifier notre voix sur la scène mondiale.",
  },
]

export default function PresencePage() {
  return (
    <div className="presence-page">
      <Navbar />

      <main>
        <section className="presence-section">
          <div className="presence-container">
            {/* Header */}
            <div className="presence-header">
              <h1>
                Notre <span className="highlight">Présence Nationale</span>
              </h1>
              <p className="presence-tagline">
                Depuis sa création, l'OMDH a étendu sa présence à travers le Maroc pour plaider en faveur des droits
                humains, promouvoir la justice et engager les communautés à travers le royaume.
              </p>
            </div>

            {/* Map Section */}
            <div className="world-map-section">
              <div className="world-map-container">
                <Image src="/Images/Map_Morocco.jpg" alt="Carte du Maroc" fill className="world-map" />
                <div className="map-legend">
                  <div className="legend-item">
                    <div className="legend-color hq"></div>
                    <span className="legend-text">Siège National</span>
                  </div>
                  <div className="legend-item">
                    <div className="legend-color office"></div>
                    <span className="legend-text">Antennes Régionales</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="global-stats">
              {statsData.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Regional Presence */}
            <div className="regional-presence">
              <div className="timeline-header">
                <h2>Présence Régionale</h2>
                <p className="timeline-description">
                  Découvrez nos bureaux locaux et notre engagement communautaire à travers le Maroc
                </p>
              </div>

              <div className="office-grid">
                {officeData.map((office) => (
                  <div key={office.id} className="office-card">
                    <div className="office-image">
                      <Image
                        src={office.image || "/placeholder.svg?height=200&width=400"}
                        alt={`Bureau de ${office.city}`}
                        fill
                        className="office-img"
                      />
                    </div>
                    <div className="office-info">
                      <span className={`office-type ${office.type}`}>{office.typeLabel}</span>
                      <h3>{office.city}</h3>
                      <p>{office.description}</p>
                      <div className="office-contact">
                        {office.phone.map((phone, index) => (
                          <div key={index} className="contact-item phone">
                            {phone}
                          </div>
                        ))}
                        <div className="contact-item email">{office.email}</div>
                        <div className="contact-item address">{office.address}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Future Expansion */}
            <div className="future-expansion">
              <h2>Perspectives d&apos;Avenir</h2>
              <p>
                Dans le cadre de notre engagement continu à défendre et promouvoir les droits humains à travers le
                Maroc, l&apos;OMDH prépare des initiatives stratégiques pour renforcer notre présence locale et approfondir
                notre impact dans les régions mal desservies.
              </p>

              <div className="expansion-grid">
                {expansionPlans.map((plan, index) => (
                  <div key={index} className="expansion-card">
                    <div className="expansion-icon">{plan.icon}</div>
                    <h3>{plan.title}</h3>
                    <p>{plan.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="cta-section">
              <h2>Rejoignez Notre Réseau Mondial</h2>
              <p className="presence-tagline">
                Intéressé(e) par un partenariat avec nous ou par l&apos;exploration d&apos;opportunités de carrière dans l&apos;un de
                nos sites à travers le monde ?
              </p>
              <div className="cta-container">
                <Link href="/contact" className="btn-primary">
                  Nous Contacter
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Opportunités de Carrière
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        /* Global Styles */
        .presence-page {
          min-height: 100vh;
          background-color: #f5f5f5;
          font-family: 'Montserrat', sans-serif;
        }

        /* Presence Section */
        .presence-section {
          padding: 5rem 2rem;
          background-color: #f5f5f5;
        }

        .presence-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        /* Header */
        .presence-header {
          text-align: center;
          margin-bottom: 3rem;
          position: relative;
        }

        .presence-header h1 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 1rem;
          position: relative;
          display: inline-block;
        }

        .presence-header h1::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background-color: #d3612f;
          border-radius: 2px;
        }

        .highlight {
          color: #1957a6;
        }

        .presence-tagline {
          font-size: 1.2rem;
          color: #546e7a;
          max-width: 800px;
          margin: 2rem auto;
          line-height: 1.6;
        }

        /* Map Section */
        .world-map-section {
          margin-bottom: 5rem;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .world-map-container {
          position: relative;
          width: 100%;
          height: 40rem;
          background-color: white;
          border-radius: 6px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
          overflow: hidden;
        }

        .world-map {
          object-fit: contain;
        }

        .map-legend {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background-color: white;
          padding: 1rem;
          border-radius: 6px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
          z-index: 2;
        }

        .legend-item {
          display: flex;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .legend-item:last-child {
          margin-bottom: 0;
        }

        .legend-color {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          margin-right: 0.5rem;
        }

        .legend-color.hq {
          background-color: #d3612f;
        }

        .legend-color.office {
          background-color: #1957a6;
        }

        .legend-text {
          font-size: 0.8rem;
          color: #546e7a;
        }

        /* Statistics */
        .global-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          margin: 3rem 0;
        }

        .stat-card {
          flex: 1;
          min-width: 200px;
          background-color: white;
          padding: 2rem;
          border-radius: 6px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1957a6;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: #546e7a;
          font-size: 1rem;
          font-weight: 500;
        }

        /* Regional Presence */
        .regional-presence {
          margin: 5rem 0;
        }

        .timeline-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .timeline-header h2 {
          font-size: 2rem;
          color: #2c3e50;
          margin-bottom: 1rem;
          position: relative;
          display: inline-block;
          padding-bottom: 0.5rem;
        }

        .timeline-header h2::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background-color: #d3612f;
          border-radius: 1.5px;
        }

        .timeline-description {
          max-width: 800px;
          margin: 0 auto;
          color: #546e7a;
          line-height: 1.7;
          text-align: center;
        }

        /* Office Grid */
        .office-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }

        .office-card {
          background-color: white;
          border-radius: 6px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .office-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
        }

        .office-image {
          height: 200px;
          overflow: hidden;
          position: relative;
        }

        .office-img {
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .office-card:hover .office-img {
          transform: scale(1.05);
        }

        .office-info {
          padding: 1.5rem;
        }

        .office-type {
          display: inline-block;
          background-color: #e8f0ed;
          color: #1957a6;
          padding: 0.3rem 0.8rem;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 0.8rem;
        }

        .office-type.hq {
          background-color: #ffeaa7;
          color: #2c3e50;
        }

        .office-info h3 {
          color: #1957a6;
          margin-bottom: 0.8rem;
          font-size: 1.25rem;
        }

        .office-info p {
          color: #546e7a;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .office-contact {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid #e8f0ed;
        }

        .contact-item {
          display: flex;
          align-items: center;
          margin-bottom: 0.5rem;
          color: #546e7a;
          font-size: 0.9rem;
        }

        .contact-item:last-child {
          margin-bottom: 0;
        }

        .contact-item::before {
          margin-right: 0.5rem;
          font-size: 1rem;
        }

        .contact-item.phone::before {
          content: '📞';
        }

        .contact-item.email::before {
          content: '✉️';
        }

        .contact-item.address::before {
          content: '📍';
        }

        /* Future Expansion */
        .future-expansion {
          margin: 5rem 0;
          background-color: white;
          padding: 3rem;
          border-radius: 6px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
          text-align: center;
        }

        .future-expansion h2 {
          font-size: 2rem;
          color: #2c3e50;
          margin-bottom: 1rem;
        }

        .future-expansion p {
          color: #546e7a;
          line-height: 1.7;
          max-width: 800px;
          margin: 0 auto 2rem;
        }

        .expansion-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .expansion-card {
          background-color: #f5f5f5;
          border-radius: 6px;
          padding: 2rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .expansion-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
        }

        .expansion-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .expansion-card h3 {
          color: #1957a6;
          margin-bottom: 1rem;
          font-size: 1.125rem;
        }

        .expansion-card p {
          color: #546e7a;
          line-height: 1.6;
          font-size: 0.95rem;
          margin-bottom: 0;
        }

        /* Call to Action */
        .cta-section {
          margin-top: 5rem;
          text-align: center;
        }

        .cta-section h2 {
          font-size: 2rem;
          color: #2c3e50;
          margin-bottom: 1rem;
        }

        .cta-container {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-top: 2rem;
        }

        .btn-primary, .btn-secondary {
          display: inline-block;
          padding: 0.75rem 2rem;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }

        .btn-primary {
          background-color: #1957a6;
          color: white;
          border-color: #1957a6;
        }

        .btn-primary:hover {
          background-color: #174c91;
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        }

        .btn-secondary {
          background-color: #d3612f;
          color: white;
          border-color: #d3612f;
        }

        .btn-secondary:hover {
          background-color: #b8541f;
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        }

        /* Responsive Design */
        @media (max-width: 992px) {
          .world-map-container {
            height: 400px;
          }

          .map-legend {
            position: static;
            margin-top: 1rem;
            width: fit-content;
          }
        }

        @media (max-width: 768px) {
          .presence-section {
            padding: 3rem 1.5rem;
          }

          .presence-header h1 {
            font-size: 2rem;
          }

          .presence-tagline {
            font-size: 1rem;
          }

          .timeline-header h2,
          .future-expansion h2,
          .cta-section h2 {
            font-size: 1.8rem;
          }

          .stat-card {
            min-width: 100%;
          }

          .world-map-container {
            height: 300px;
          }

          .cta-container {
            flex-direction: column;
            align-items: center;
          }

          .btn-primary, .btn-secondary {
            width: 100%;
            max-width: 300px;
          }
        }

        @media (max-width: 576px) {
          .presence-section {
            padding: 2rem 1rem;
          }

          .presence-header h1 {
            font-size: 1.8rem;
          }

          .world-map-container {
            height: 250px;
          }

          .office-grid {
            grid-template-columns: 1fr;
          }

          .expansion-grid {
            grid-template-columns: 1fr;
          }

          .future-expansion {
            padding: 2rem 1rem;
          }
        }
      `}</style>
    </div>
  )
}
