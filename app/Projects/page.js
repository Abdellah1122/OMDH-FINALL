"use client"

import Image from "next/image"
import Link from "next/link"

// Import your existing components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const projects = [
  {
    id: 1,
    title: "Projet UNHCR",
    image: "/Images/unhcrr.png",
    description:
      "Le projet UNHCR, mené par l'OMDH avec le HCR, vise à promouvoir la responsabilisation, l'approche AGD et la participation communautaire. Il assure protection, soutien juridique et administratif, plaidoyer et écoute active à travers groupes de discussion et réunions. Des mécanismes de plainte renforcent la transparence.",
    link: "/project-hcr",
  },
  {
    id: 2,
    title: "Projet ECPM",
    image: "/Images/ECPM.jpg",
    description:
      "ECPM et l'OMDH mènent un projet de 36 mois pour promouvoir l'abolition de la peine de mort au Maroc et au Maghreb. Soutenu par l'AFD et la Délégation de l'UE au Maroc, il est mis en œuvre avec le CNDH. L'accord définit la coordination entre ECPM et l'OMDH pour les actions au Maroc en faveur des droits humains et du plaidoyer abolitionniste.",
    link: "#",
  },
  {
    id: 3,
    title: "Jeunesse Tolérante - Cideal",
    image: "/Images/Cideal.jpg",
    description:
      "Le document « Jeunesse Tolérante » met en lumière l'engagement historique du Maroc pour la diversité et la coexistence pacifique. Il explore l'impact des médias et des mutations sociales sur la jeunesse, en pointant les risques de marginalisation et d'exposition aux idéologies extrémistes faute d'inclusion sociale et culturelle.",
    link: "#",
  },
  {
    id: 4,
    title: "Projet Warakati",
    image: "/Images/Warakati.jpg",
    description:
      "Dans le cadre de son renforcement institutionnel, l'OMDH met en œuvre le projet « Promotion des droits des femmes et des enfants par l'accès à l'information et aux TIC », en partenariat avec l'Agence de Développement Social. Financé dans le cadre du projet Warakati, il est soutenu par le programme Iktidar du PNUD.",
    link: "#",
  },
]

export default function ProjectsPage() {
  return (
    <div className="projects-page">
      <Navbar />

      <main className="main-container">
        <section className="projects-section">
          <div className="section-header">
            <h1 className="page-title">Nos Derniers Projets</h1>
            <p className="page-description">
              Découvrez nos initiatives les plus récentes dédiées à la défense des droits humains et à la promotion de
              la justice. Des campagnes de plaidoyer aux programmes communautaires, nos projets visent à créer un impact
              durable, à autonomiser les individus et à générer un changement significatif. Restez informé et
              rejoignez-nous pour construire un monde plus juste et équitable.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <Link key={project.id} href={project.link} className="project-card" style={{color: 'var(--primary-color)',backgroundColor:'var(--accent-color)',border:'none'}}>
                <div className="project-image-container">
                  <Image
                    src={project.image || "/placeholder.svg?height=400&width=500"}
                    alt={project.title}
                    fill
                    className="project-image"
                  />
                  <div className="project-overlay">
                    <div className="project-content">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">{project.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        /* Global Styles */
        .projects-page {
          min-height: 100vh;
          background-color: #fafafa;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          color: #1a1a1a;
        }

        /* Main Container */
        .main-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 8rem 2rem 6rem;
        }

        /* Projects Section */
        .projects-section {
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        /* Section Header */
        .section-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .page-title {
          font-size: 2.5rem;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 2rem;
          letter-spacing: -0.025em;
          position: relative;
        }

        .page-title::after {
          content: '';
          position: absolute;
          bottom: -1rem;
          left: 50%;
          transform: translateX(-50%);
          width: 3rem;
          height: 3px;
          background: #1957a6;
        }

        .page-description {
          font-size: 1.125rem;
          line-height: 1.7;
          color: #4a4a4a;
          margin: 0;
        }

        /* Projects Grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        /* Project Card */
        .project-card {
          display: block;
          text-decoration: none;
          border-radius: 4px;
          overflow: hidden;
          background: white;
          border: 1px solid rgba(0, 0, 0, 0.05);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.04);
          background-color: transparent;
            border: none;
        }

        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
        }

        /* Project Image Container */
        .project-image-container {
          position: relative;
          width: 100%;
          height: 350px;
          overflow: hidden;
        }

        .project-image {
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .project-card:hover .project-image {
          transform: scale(1.05);
        }

        /* Project Overlay */
        .project-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.3) 40%,
            rgba(0, 0, 0, 0.8) 100%
          );
          display: flex;
          align-items: flex-end;
          padding: 2rem;
          opacity: 0;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        /* Project Content */
        .project-content {
          width: 100%;
          transform: translateY(1rem);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .project-card:hover .project-content {
          transform: translateY(0);
        }

        .project-title {
          color: white;
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          letter-spacing: -0.01em;
        }

        .project-description {
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.9rem;
          line-height: 1.6;
          margin: 0;
        }

        /* Alternative Hover Effect for Better UX */
        @media (hover: none) {
          .project-overlay {
            opacity: 1;
            background: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0) 0%,
              rgba(0, 0, 0, 0.2) 40%,
              rgba(0, 0, 0, 0.7) 100%
            );
          }

          .project-content {
            transform: translateY(0);
          }

          .project-title {
            font-size: 1.125rem;
          }

          .project-description {
            font-size: 0.85rem;
          }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .main-container {
            padding: 6rem 2rem 5rem;
          }

          .projects-grid {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
          }

          .project-image-container {
            height: 300px;
          }
        }

        @media (max-width: 768px) {
          .main-container {
            padding: 5rem 1.5rem 4rem;
          }

          .page-title {
            font-size: 2rem;
          }

          .page-description {
            font-size: 1rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .project-image-container {
            height: 280px;
          }

          .project-overlay {
            padding: 1.5rem;
          }

          .project-title {
            font-size: 1.125rem;
          }

          .project-description {
            font-size: 0.85rem;
          }
        }

        @media (max-width: 480px) {
          .main-container {
            padding: 4rem 1rem 3rem;
          }

          .page-title {
            font-size: 1.75rem;
          }

          .page-description {
            font-size: 0.95rem;
          }

          .project-image-container {
            height: 250px;
          }

          .project-overlay {
            padding: 1rem;
          }

          .project-title {
            font-size: 1rem;
          }

          .project-description {
            font-size: 0.8rem;
            line-height: 1.5;
          }
        }
      `}</style>
    </div>
  )
}
