'use client';

// Import our reusable components and Next.js features
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function CampaignsPage() {
  return (
    <>
      <Navbar />

    <main>
    <section className="initiatives-section">
      <div className="initiatives-container">
        <div className="initiatives-header">
          <h1>Nos <span className="highlight">Initiatives et Réalisations</span></h1>
          {/* FIX: Replaced l' with l&apos; */}
          <p className="initiatives-tagline">Depuis des décennies, l&apos;Organisation Marocaine des Droits Humains (OMDH) est à l&apos;avant-garde de la défense des droits humains au Maroc, impulsant des changements significatifs à travers des initiatives stratégiques, un plaidoyer persistant et un engagement communautaire.</p>
        </div>

        <div className="impact-stats">
          <div className="stat-card">
            <div className="stat-number">1,000+</div>
            <div className="stat-label">Prisonniers Politiques Libérés</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">35+</div>
            <div className="stat-label">Années de Plaidoyer</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">100+</div>
            <div className="stat-label">Rapports sur les Droits Humains</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">10,000+</div>
            <div className="stat-label">Jeunes Éduqués</div>
          </div>
        </div>

        <div className="timeline-section">
          <div className="timeline-line"></div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-image">
                <Image src="/Images/DeathPenaltyAbolition.jpg" alt="Campagne pour l'abolition de la peine de mort" width={500} height={200} />
              </div>
              <div className="timeline-text">
                <span className="timeline-date">Depuis les années 1990</span>
                <h3>Abolition de la Peine de Mort</h3>
                {/* FIX: Replaced multiple apostrophes */}
                <p>L&apos;OMDH est à l&apos;avant-garde de la lutte pour l&apos;abolition de la peine de mort au Maroc. Grâce à un plaidoyer persistant, des partenariats avec des coalitions internationales et une mobilisation publique, elle a créé un élan en faveur d&apos;une réforme législative...</p>
                <div className="timeline-footer">
                  <span className="location-tag">À l&apos;échelle nationale</span>
                </div>
              </div>
            </div>
          </div>

          {/* Repeat for other timeline items */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-image">
                <Image src="/Images/Prisonners.jpeg" alt="Soutien aux prisonniers politiques" width={500} height={200} />
              </div>
              <div className="timeline-text">
                <span className="timeline-date">Fin des années 1980</span>
                <h3>Soutien aux Prisonniers Politiques</h3>
                <p>Durant une période de répression politique intense, l&apos;OMDH a joué un rôle crucial dans la documentation et la dénonciation de la détention de militants politiques et de dissidents...</p>
                <div className="timeline-footer">
                  <span className="location-tag">À l&apos;échelle nationale</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-image">
                <Image src="/Images/wOMENrIGHT.jpg" alt="Plaidoyer pour les droits des femmes" width={500} height={200} />
              </div>
              <div className="timeline-text">
                <span className="timeline-date">En cours</span>
                <h3>Plaidoyer pour les Droits des Femmes</h3>
                <p>L&apos;OMDH a défendu les droits des femmes marocaines en poussant à des réformes du code de la famille, en luttant contre la violence basée sur le genre et en plaidant pour l&apos;égalité des chances...</p>
                <div className="timeline-footer">
                  <span className="location-tag">À l&apos;échelle nationale</span>
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-image">
                <Image src="/Images/Awarness.jpg" alt="Éducation des jeunes aux droits humains" width={500} height={200} />
              </div>
              <div className="timeline-text">
                <span className="timeline-date">En cours</span>
                <h3>Éducation des Jeunes aux Droits Humains</h3>
                <p>Convaincue que le changement commence par la jeunesse, l&apos;OMDH mène des programmes éducatifs à travers le Maroc pour inculquer un profond respect des droits humains aux jeunes générations...</p>
                <div className="timeline-footer">
                  <span className="location-tag">À l&apos;échelle nationale</span>
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-image">
                <Image src="/Images/ChildMariage.jpeg" alt="Campagne contre le mariage des mineurs" width={500} height={200} />
              </div>
              <div className="timeline-text">
                <span className="timeline-date">2019</span>
                <h3>Campagne contre le Mariage des Mineurs</h3>
                <p>L&apos;OMDH a lancé une campagne nationale vigoureuse pour mettre fin au mariage des enfants, en soulignant ses conséquences psychologiques, sociales et juridiques...</p>
                <div className="timeline-footer">
                  <span className="location-tag">À l&apos;échelle nationale</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NOTE: The single quotes in the style attribute are part of JS syntax and are NOT changed. */}
        <h2 style={{ textAlign: 'center', marginTop: '5rem', fontSize: '2rem', color: 'var(--text-dark)', fontFamily: 'var(--Poppins)' }}>Autres Initiatives Clés</h2>
        <div className="initiatives-grid">
          {/* Initiative Cards Here */}
            <div className="initiative-card">
              <div className="initiative-image">
                  <Image src="/Images/freedomeofspech.jpg" alt="Liberté d'expression" width={400} height={200} />
              </div>
              <div className="initiative-content">
                  <span className="initiative-category">Liberté & Justice</span>
                  <h3>Défense de la Liberté d&apos;Expression</h3>
                  <p>L&apos;OMDH se tient comme un défenseur inébranlable des journalistes, artistes et citoyens confrontés à la censure ou au harcèlement judiciaire...</p>
                  <div className="initiative-footer">
                      <span className="initiative-date">En cours</span>
                  </div>
              </div>
            </div>
          <div className="initiative-card">
            <div className="initiative-image">
                <Image src="/Images/humainrightreporting.jpg" alt="Documentation des droits humains" width={400} height={200}/>
            </div>
            <div className="initiative-content">
                <span className="initiative-category">Plaidoyer</span>
                <h3>Documentation et Rapports sur les Droits Humains</h3>
                <p>Grâce à des enquêtes de terrain méticuleuses, des entretiens et des analyses juridiques, l&apos;OMDH produit des rapports détaillés...</p>
                <div className="initiative-footer">
                    <span className="initiative-date">En cours</span>
                </div>
            </div>
          </div>
          <div className="initiative-card">
            <div className="initiative-image">
                <Image src="/Images/Parlement.png" alt="Conférences et débats publics" width={400} height={200}/>
            </div>
            <div className="initiative-content">
                <span className="initiative-category">Éducation</span>
                <h3>Conférences et Débats Publics</h3>
                <p>L&apos;OMDH organise des débats publics inclusifs et des conférences académiques pour mettre en lumière les questions des droits humains...</p>
                <div className="initiative-footer">
                    <span className="initiative-date">En cours</span>
                </div>
            </div>
          </div>
            <div className="initiative-card">
              <div className="initiative-image">
                  <Image src="/Images/9.jpg" alt="Partenariats internationaux" width={400} height={200}/>
              </div>
              <div className="initiative-content">
                  <span className="initiative-category">Plaidoyer</span>
                  <h3>Partenariats Internationaux pour les Droits Humains</h3>
                  <p>L&apos;OMDH collabore avec des organismes internationaux tels que l&apos;ONU, Amnesty International et la Coalition Mondiale Contre la Peine de Mort...</p>
                  <div className="initiative-footer">
                      <span className="initiative-date">En cours</span>
                  </div>
              </div>
            </div>
            <div className="initiative-card">
              <div className="initiative-image">
                  <Image src="/Images/Suppport.jpg" alt="Soutien aux victimes" width={400} height={200}/>
              </div>
              <div className="initiative-content">
                  <span className="initiative-category">Liberté & Justice</span>
                  <h3>Soutien aux Victimes de Violations des Droits Humains</h3>
                  <p>Au-delà du plaidoyer, l&apos;OMDH offre un soutien direct aux victimes d&apos;abus — qu&apos;il s&apos;agisse de survivants de torture, de familles de personnes disparues ou de femmes confrontées à la violence...</p>
                  <div className="initiative-footer">
                      <span className="initiative-date">En cours</span>
                  </div>
              </div>
            </div>
        </div>

        <div className="cta-section">
          <h2>Rejoignez Notre Mouvement pour les Droits Humains</h2>
          <p className="cta-description">Ensemble, nous pouvons construire un Maroc où les droits humains sont respectés, protégés et réalisés pour tous. Votre soutien rend notre travail possible.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="cta-btn secondary">Soutenez Notre Travail</Link>
          </div>
        </div>
      </div>
    </section>
  </main>

      <Footer />

      <style jsx>{`
        /* --- Initiatives Page Styles --- */
        .initiatives-section {
            padding: 5rem 2rem;
            background-color: var(--light-bg);
        }
        .initiatives-container {
            max-width: 1400px;
            margin: 0 auto;
        }
        .initiatives-header {
            text-align: center;
            margin-bottom: 4rem;
        }
        .initiatives-header h1 {
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--text-dark);
            margin-bottom: 1rem;
        }
        .initiatives-header h1::after {
            content: '';
            display: block;
            margin: 0.5rem auto 0;
            width: 80px;
            height: 4px;
            background-color: var(--secondary-color);
            border-radius: 2px;
        }
        .highlight {
            color: var(--primary-color);
        }
        .initiatives-tagline {
            font-size: 1.2rem;
            color: var(--text-medium);
            max-width: 800px;
            margin: 2rem auto 0;
            line-height: 1.6;
        }

        /* Impact Stats */
        .impact-stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
            margin: 3rem 0;
        }
        .stat-card {
            background-color: white;
            padding: 2rem;
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            text-align: center;
            transition: var(--transition);
        }
        .stat-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
        }
        .stat-number {
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--primary-color);
            margin-bottom: 0.5rem;
        }
        .stat-label {
            color: var(--text-medium);
            font-size: 1rem;
            font-weight: 500;
        }

        /* Timeline Section */
        .timeline-section {
            position: relative;
            margin: 4rem 0;
            padding-bottom: 2rem;
        }
        .timeline-line {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 50%;
            width: 4px;
            background-color: #e0e0e0;
            transform: translateX(-50%);
        }
        .timeline-item {
            position: relative;
            margin-bottom: 5rem;
            width: 100%;
        }
        .timeline-item:last-child {
            margin-bottom: 0;
        }
        .timeline-dot {
            position: absolute;
            left: 50%;
            top: 30px;
            width: 20px;
            height: 20px;
            background-color: var(--secondary-color);
            border: 4px solid white;
            border-radius: 50%;
            transform: translateX(-50%);
            z-index: 2;
        }
        .timeline-content {
            width: 45%;
            background-color: white;
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            padding: 0;
            position: relative;
            transition: var(--transition);
            overflow: hidden;
        }
        .timeline-content:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }
        .timeline-item:nth-child(even) .timeline-content {
            float: right;
        }
        .timeline-item:nth-child(odd) .timeline-content {
            float: left;
        }
        .timeline-item::after { /* Clear floats */
            content: "";
            display: table;
            clear: both;
        }
        .timeline-image {
            width: 100%;
            height: 200px;
            overflow: hidden;
        }
        .timeline-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }
        .timeline-content:hover .timeline-image img {
            transform: scale(1.05);
        }
        .timeline-text {
            padding: 1.5rem;
        }
        .timeline-date {
            display: inline-block;
            background-color: var(--accent-color);
            color: var(--primary-color);
            padding: 0.3rem 0.8rem;
            border-radius: 4px;
            font-size: 0.9rem;
            font-weight: 600;
            margin-bottom: 0.8rem;
        }
        .timeline-text h3 {
            color: var(--primary-color);
            margin-bottom: 0.8rem;
            font-size: 1.3rem;
        }
        .timeline-text p {
            color: var(--text-medium);
            line-height: 1.6;
            margin-bottom: 1rem;
        }
        .timeline-footer {
            display: flex;
            margin-top: 1.5rem;
            border-top: 1px solid var(--accent-color);
            padding-top: 1rem;
        }
        .location-tag {
            display: inline-flex;
            align-items: center;
            background-color: #e9ecef;
            padding: 0.3rem 0.8rem;
            border-radius: 20px;
            font-size: 0.8rem;
            color: var(--text-medium);
        }
        .location-tag::before {
            content: '📍';
            margin-right: 0.3rem;
        }

        /* Initiatives Grid */
        .initiatives-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 2rem;
            margin: 3rem 0;
        }
        .initiative-card {
            background-color: white;
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            overflow: hidden;
            transition: var(--transition);
            height: 100%;
            display: flex;
            flex-direction: column;
        }
        .initiative-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }
        .initiative-image {
            height: 200px;
            overflow: hidden;
        }
        .initiative-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }
        .initiative-card:hover .initiative-image img {
            transform: scale(1.05);
        }
        .initiative-content {
            padding: 1.5rem;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
        }
        .initiative-category {
            display: inline-block;
            background-color: var(--accent-color);
            color: var(--primary-color);
            padding: 0.3rem 0.8rem;
            border-radius: 4px;
            font-size: 0.9rem;
            font-weight: 600;
            margin-bottom: 0.8rem;
            align-self: flex-start;
        }
        .initiative-content h3 {
            color: var(--primary-color);
            margin-bottom: 0.8rem;
            font-size: 1.3rem;
        }
        .initiative-content p {
            color: var(--text-medium);
            line-height: 1.6;
            margin-bottom: 1.5rem;
            flex-grow: 1;
        }
        .initiative-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: auto;
            border-top: 1px solid var(--accent-color);
            padding-top: 1rem;
        }
        .initiative-date {
            font-size: 0.9rem;
            color: var(--text-medium);
        }

        /* CTA Section */
        .cta-section {
            margin-top: 5rem;
            padding: 4rem 2rem;
            background-color: var(--primary-color);
            border-radius: var(--border-radius);
            text-align: center;
            color: white;
        }
        .cta-section h2 {
            font-size: 2rem;
            margin-bottom: 1rem;
        }
        .cta-description {
            max-width: 800px;
            margin: 0 auto 2rem;
            line-height: 1.7;
            opacity: 0.9;
        }
        .cta-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
        }
        .cta-btn {
            padding: 0.8rem 2rem;
            border-radius: var(--border-radius);
            font-weight: 600;
            cursor: pointer;
            transition: var(--transition);
            text-decoration: none;
        }
        .cta-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        .cta-btn.secondary {
            background-color: transparent;
            color: white;
            border: 2px solid white;
        }
        
        /* Responsive */
        @media (max-width: 992px) {
            .timeline-line {
                left: 20px;
            }
            .timeline-dot {
                left: 20px;
            }
            .timeline-content {
                width: calc(100% - 40px);
                float: right;
                margin-left: 40px !important;
            }
            .timeline-item:nth-child(odd) .timeline-content, 
            .timeline-item:nth-child(even) .timeline-content {
                float: none;
            }
        }
      `}</style>
    </>
  );
}