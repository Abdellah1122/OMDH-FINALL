'use client';

// Note the ../../ path to go up two folders to find the components directory
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function ArticlePage() {
  return (
    <>
      <Navbar />

     <main  translate="no">
  <nav className="nav-breadcrumb">
    <div className="container">
      <div className="breadcrumb">
        <Link href="/"  style={{color:'black',backgroundColor:'transparent' , border:'none'}}>Accueil</Link>
        <span>›</span>
        <Link href="/editions"  style={{color:'black',backgroundColor:'transparent' , border:'none'}}>Editions</Link>
        <span>›</span>
        {/* FIX: Replaced typographic apostrophe */}
        <span>Naoufal Bouamri consacré à la tête de l&apos;OMDH</span>
      </div>
    </div>
  </nav>

  <header className="article-header">
    <div className="container">
      <div className="article-category">Actualité</div>
      {/* FIX: Replaced typographic apostrophe */}
      <h1 className="article-title">Naoufal Bouamri consacré à la tête de l&apos;OMDH</h1>
      <p className="article-subtitle">Libération – Mardi 29 Avril 2025</p>
      <div className="article-meta">
        <div className="meta-item">
          <strong>Par Libération</strong>
        </div>
        <div className="meta-divider"></div>
        <div className="meta-item">
          29 Avril 2025
        </div>
      </div>
    </div>
  </header>

  <section className="article-hero">
    <div className="container">
      <Image src="/Images/naoufal.jpg" alt="Naoufal Bouamri OMDH" className="hero-image" width={800} height={400} priority />
    </div>
  </section>

  <article className="article-content">
    <div className="container">
      <div className="content-body">
        {/* FIX: Replaced typographic apostrophes */}
        <p>Le 12e congrès national de l&apos;Organisation Marocaine des Droits Humains (OMDH) s&apos;est achevé dimanche dernier sur une note de renouveau, marquée par l&apos;élection de Naoufal Bouamri à la tête de cette ONG emblématique du paysage associatif national et international.</p>
        <p>Cette élection, intervenue dans un climat démocratique, alors que l&apos;OMDH s&apos;apprête à fêter ses 36 ans, incarne un tournant décisif dans la promotion des droits humains au Maroc.</p>
        <p>Les congressistes venus des quatre coins du Royaume ont pris part aux congrès et qui, par leur présence et leur engagement, ont largement contribué à renforcer cet ancrage national. Dans son allocution prononcée à l&apos;issue de son élection, Naoufal Bouamri a salué l&apos;engagement collectif de l&apos;ensemble des congressistes, saluant leur sens de la responsabilité :</p>
        
        {/* FIX: Replaced " with &quot; */}
        <blockquote>
          &quot;Mes remerciements vont à l&apos;ensemble des congressistes, à tous les membres du conseil national ainsi qu&apos;aux militantes et militants qui nous ont toujours accompagnés.&quot;
        </blockquote>

        {/* This part was already correct using French guillemets « » */}
        <p>Il a rappelé le rôle prépondérant joué par l’OMDH depuis sa création en 1988. « L’OMDH a joué un rôle fondamental dans le processus de justice transitionnelle et a contribué aux réformes en matière des droits humains sur les plans politique, économique et social. Son action s’est toujours caractérisée par une réflexion rationnelle et une vision claire, lui permettant d’exercer une influence décisive sur plusieurs aspects de ces processus, tout en restant fidèle à son engagement constant à défendre les droits humains. »</p>
        
        {/* FIX: Replaced typographic apostrophes */}
        <p>Naoufal Bouamri a également insisté sur la nécessité pour l&apos;OMDH de rester à l&apos;avant-garde du combat pour les droits humains au Maroc, tout en s&apos;adaptant aux mutations actuelles de la société et en renouvelant ses méthodes d&apos;action.</p>
        
        {/* FIX: Replaced " with &quot; */}
        <blockquote>
          &quot;Notre organisation doit rester à l&apos;avant-garde du combat pour les droits humains au Maroc, tout en s&apos;adaptant aux mutations de la société et en renouvelant ses méthodes d&apos;action.&quot;
        </blockquote>
      </div>
    </div>
  </article>
</main>

      <Footer />

      {/* Page-specific styles for the article template */}
      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Navigation */
        .nav-breadcrumb {
          padding: 20px 0;
          background-color: #ffffff;
          border-bottom: 1px solid #eeeeee;
        }
        .breadcrumb {
          font-size: 0.9rem;
          color: var(--text-medium);
        }
        .breadcrumb a {
          color: var(--primary-color);
          text-decoration: none;
          transition: var(--transition);
          padding: 0;
        }
        .breadcrumb a:hover {
          color: var(--primary-dark);
        }
        .breadcrumb span {
          margin: 0 8px;
          color: #ccc;
        }

        /* Article Header */
        .article-header {
          background-color: #ffffff;
          padding: 40px 0;
          text-align: center;
        }
        .article-category {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--primary-color);
          background: rgba(25, 87, 166, 0.08);
          padding: 6px 16px;
          border-radius: 20px;
          margin-bottom: 20px;
        }
        .article-title {
          font-family: 'Poppins', serif;
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 20px;
          color: var(--text-dark);
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }
        .article-subtitle {
          font-size: 1.1rem;
          color: var(--text-medium);
          max-width: 600px;
          margin: 0 auto 30px;
          line-height: 1.6;
        }
        .article-meta {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          font-size: 0.9rem;
          color: var(--text-medium);
          margin-bottom: 20px;
        }
        .meta-item {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .meta-divider {
          width: 1px;
          height: 16px;
          background-color: #eeeeee;
        }

        /* Hero Image */
        .article-hero {
          margin: 40px 0;
        }
        .hero-image {
          width: 100%;
          height: 400px;
          object-fit: cover;
          display: block;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        .image-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
          color: white;
          padding: 30px 20px 20px;
          font-size: 0.9rem;
          font-style: italic;
        }

        /* Article Content */
        .article-content {
          background-color: #ffffff;
          padding: 50px 0;
        }
        .content-body {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--text-dark);
        }
        .content-body p {
          margin-bottom: 24px;
        }
        .content-body h2 {
          font-family: 'Poppins', serif;
          font-size: 1.8rem;
          font-weight: 600;
          margin: 40px 0 20px;
          color: var(--text-dark);
          position: relative;
          padding-bottom: 10px;
        }
        .content-body h2::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 50px;
          height: 2px;
          background-color: var(--primary-color);
        }
        .content-body blockquote {
          border-left: 4px solid var(--primary-color);
          padding: 20px 30px;
          margin: 30px 0;
          background-color: var(--light-bg);
          font-style: italic;
          font-size: 1.05rem;
          border-radius: 0 8px 8px 0;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .article-title {
            font-size: 2rem;
          }
          .article-meta {
            flex-direction: column;
            gap: 10px;
          }
          .meta-divider {
            display: none;
          }
          .hero-image {
            height: 250px;
          }
          .content-body {
            font-size: 1rem;
          }
          .content-body h2 {
            font-size: 1.5rem;
          }
        }
        @media (max-width: 576px) {
          .container {
            padding: 0 15px;
          }
          .article-header {
            padding: 30px 0;
          }
          .article-title {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </>
  );
}