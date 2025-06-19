"use client"

import Image from "next/image"

// Import your existing components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const leadershipTeam = [
  {
    id: 1,
    name: "Noufal Al-Baamari",
    name_ar: "نوفل البعمري",
    position: "Président",
    image: "/Membres/naoufal.jpg",
    level: "president",
  },
  {
    id: 2,
    name: "Ahmed Moufid",
    name_ar: "أحمد مفيد",
    position: "Vice-président",
    image: "/Membres/ahmad mofid.jpg",
    level: "vice-president",
  },
  {
    id: 3,
    name: "Houssam Haab",
    name_ar: "حسام هاب",
    position: "Trésorier",
    image: "/Membres/hab houssam.jpg",
    level: "vice-president",
  },
  {
    id: 4,
    name: "Reda Al-Filali Hammouz",
    name_ar: "رضا الفيلالي حموز",
    position: "Trésorier Adjoint",
    image: "/Membres/rida.jpg",
    level: "executive",
  },
  {
    id: 5,
    name: "Zineb Abu Al-Zohour",
    name_ar: "زينب أبو الزهور",
    position: "Secrétaire Générale",
    image: "/Membres/AbouZhor.jpg",
    level: "executive",
  },
  {
    id: 6,
    name: "Ahmed Hammoush",
    name_ar: "أحمد حموش",
    position: "Secrétaire Général Adjoint",
    image: "/Membres/ahmad.jpg",
    level: "executive",
  },
  {
    id: 7,
    name: "Abdeljalil Bado",
    name_ar: "عبد الجليل بادو",
    position: "Conseiller",
    image: "/Membres/bado.jpg",
    level: "member",
  },
  {
    id: 8,
    name: "Ahmed Regragui",
    name_ar: "أحمد الركراكي",
    position: "Conseiller",
    image: "/Membres/Ahmed rakraki.jpg",
    level: "member",
  },
  {
    id: 9,
    name: "Mohammed Ettaybi",
    name_ar: "محمد الطيبي",
    position: "Conseiller",
    image: "/Membres/tayebi mohammed.jpg",
    level: "member",
  },
  {
    id: 10,
    name: "Murad Hamdani",
    name_ar: "مراد حمداني",
    position: "Conseiller",
    image: "/Membres/mourad.jpg",
    level: "member",
  },
  {
    id: 11,
    name: "Amina El Gani",
    name_ar: "أمينة الگاني",
    position: "Conseillère",
    image: "/Membres/amina elgani.jpeg.jpg",
    level: "member",
  },
  {
    id: 12,
    name: "Fatima Sabahi",
    name_ar: "فاطمة صباحي",
    position: "Conseillère",
    image: "/Membres/FATIMA SABAHI.jpg",
    level: "member",
  },
  {
    id: 13,
    name: "Kamilia Boutamou",
    name_ar: "كاميليا بوتامو",
    position: "Conseillère",
    image: "/Membres/Kam.JPG",
    level: "member",
  },
  {
    id: 14,
    name: "Fadwa Amharesh",
    name_ar: "فدوى أمحارش",
    position: "Conseillère",
    image: "/Membres/fadwa.jpg",
    level: "member",
  },
  {
    id: 15,
    name: "Souad Hamidi",
    name_ar: "سعاد حميدي",
    position: "Conseillère",
    image: "/Membres/souad hamidi.jpg",
    level: "member",
  },
];

const teamMembers = [
  {
    id: 1,
    name: "Dalal BOUHAJBANE",
    name_ar: "دلال بوحجبان",
    position: "Chargée de Programmes",
    image: "/Membres/Dalal.jpg",
  },
  {
    id: 2,
    name: "Lamia SELLAK",
    name_ar: "لمياء السلاق",
    position: "Assistante Administrative et Financière",
    image: "/Membres/lamia.jpg",
  },
  {
    id: 3,
    name: "Mouad IMAM",
    name_ar: "معاذ إمام",
    position: "Responsable Suivi & Évaluation / Coordinateur National des GTPs",
    image: "/Membres/MouadImame.jpg",
  },
  {
    id: 4,
    name: "Hamza ABIA",
    name_ar: "حمزة أبية",
    position: "Assistant de Projet, Protection Sociale",
    image: "/placeholder.svg?height=280&width=250",
  },
  {
    id: 5,
    name: "Amal IDRISSI CHORFI",
    name_ar: "أمل الإدريسي الشرفي",
    position: "Assistante Financière (Documentation)",
    image: "/Membres/AMAL.jpg",
  },
];

// Group leadership by levels
const getLeadershipByLevel = (level) => {
  return leadershipTeam.filter((member) => member.level === level)
}

export default function TeamPage() {
  const president = getLeadershipByLevel("president")
  const vicePresidents = getLeadershipByLevel("vice-president")
  const executives = getLeadershipByLevel("executive")
  const members = getLeadershipByLevel("member")

  // Group members into rows of 3
  const memberRows = []
  for (let i = 0; i < members.length; i += 3) {
    memberRows.push(members.slice(i, i + 3))
  }

  return (
    <div className="team-page">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <span className="hero-subtitle-top">Rencontrez Notre Équipe</span>
              <h1 className="hero-title">
                Les visages derrière notre <span>mission</span>
              </h1>
              <p className="hero-subtitle">
                Une équipe passionnée et dévouée travaillant sans relâche pour protéger et assister les réfugiés et
                demandeurs d&apos;asile au Maroc.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <div className="container">
            {/* Leadership Team */}
            <div className="leadership-team">
              <div className="section-header">
                <span className="section-subtitle">Leadership</span>
                <h2 className="section-title">Notre Leadership</h2>
                <p className="section-description">
                  L&apos;équipe de direction qui guide notre organisation avec vision et détermination.
                </p>
              </div>

              {/* President */}
              {president.length > 0 && (
                <div className="team-level">
                  <div className="team-row">
                    {president.map((member) => (
                      <div key={member.id} className="team-member">
                        <div className="member-image">
                          <Image src={member.image || "/placeholder.svg"} alt={`${member.name} / ${member.name_ar}`} fill className="member-img" />
                        </div>
                        <div className="member-info">
                          <h3 className="member-name">{`${member.name} / ${member.name_ar}`}</h3>
                          <p className="member-position">{member.position}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Vice Presidents */}
              {vicePresidents.length > 0 && (
                <div className="team-level">
                  <div className="team-row">
                    {vicePresidents.map((member) => (
                      <div key={member.id} className="team-member">
                        <div className="member-image">
                          <Image src={member.image || "/placeholder.svg"} alt={`${member.name} / ${member.name_ar}`} fill className="member-img" />
                        </div>
                        <div className="member-info">
                          <h3 className="member-name">{`${member.name} / ${member.name_ar}`}</h3>
                          <p className="member-position">{member.position}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Executives */}
              {executives.length > 0 && (
                <div className="team-level">
                  <div className="team-row">
                    {executives.map((member) => (
                      <div key={member.id} className="team-member">
                        <div className="member-image">
                          <Image src={member.image || "/placeholder.svg"} alt={`${member.name} / ${member.name_ar}`} fill className="member-img" />
                        </div>
                        <div className="member-info">
                          <h3 className="member-name">{`${member.name} / ${member.name_ar}`}</h3>
                          <p className="member-position">{member.position}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Members */}
              {members.length > 0 && (
                <div className="team-level">
                  <h3 className="level-title">.</h3>
                  {memberRows.map((row, rowIndex) => (
                    <div key={rowIndex} className="team-row">
                      {row.map((member) => (
                        <div key={member.id} className="team-member member-no-position">
                          <div className="member-image">
                            <Image src={member.image || "/placeholder.svg"} alt={`${member.name} / ${member.name_ar}`} fill className="member-img" />
                          </div>
                          <div className="member-info">
                            <h3 className="member-name">{`${member.name} / ${member.name_ar}`}</h3>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Team Members */}
            <div className="team-members">
              <div className="section-header">
                <span className="section-subtitle">Équipe</span>
                <h2 className="section-title">Notre Équipe Complète</h2>
                <p className="section-description">
                  Des membres dévoués qui contribuent chaque jour au succès de notre mission.
                </p>
              </div>

              <div className="team-grid">
                {teamMembers.map((member) => (
                  <div key={member.id} className="team-member grid-member">
                    <div className="member-image grid-image">
                      <Image src={member.image || "/placeholder.svg"} alt={`${member.name} / ${member.name_ar}`} fill className="member-img" />
                    </div>
                    <div className="member-info">
                      <h3 className="member-name">{`${member.name} / ${member.name_ar}`}</h3>
                      <p className="member-position">{member.position}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        /* Global Styles */
        .team-page {
          min-height: 100vh;
          background-color: #f9f9f9;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #333;
        }

        .container {
          width: 90%;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Hero Section */
        .hero-section {
          padding: 100px 0;
          background-color: #fff;
          text-align: center;
        }

        .hero-content {
          max-width: 700px;
          margin: 0 auto;
        }

        .hero-subtitle-top {
          font-size: 0.9rem;
          color: #555;
          margin-bottom: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .hero-title {
          font-size: 2.8rem;
          font-weight: 600;
          line-height: 1.2;
          margin-bottom: 20px;
          color: #222;
        }

        .hero-title span {
          color:var(--primary-color);
        }

        .hero-subtitle {
          font-size: 1.1rem;
          color: #666;
          line-height: 1.6;
        }

        /* Team Section */
        .team-section {
          padding: 80px 0;
          background-color: #f9f9f9;
        }

        .section-header {
          text-align: center;
          margin-bottom: 50px;
          
        }

        .section-subtitle {
          font-size: 0.85rem;
          color: #777;
          margin-bottom: 8px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .section-title {
          font-size: 2.2rem;
          font-weight: 500;
          color: #222;
          margin-bottom: 15px;
          color:var(--primary-color);
        }

        .section-description {
          font-size: 1rem;
          color: #666;
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto;
        }

        .team-level {
          margin-bottom: 60px;
        }

        .level-title {
          font-size: 1.5rem;
          font-weight: 500;
          color: #333;
          margin-bottom: 20px;
          text-align: center;
        }

        .leadership-team > .section-header,
        .team-members > .section-header {
          margin-bottom: 40px;
        }

        /* Team Row */
        .team-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          margin-bottom: 40px;
        }

        .team-row:last-child {
          margin-bottom: 0;
        }

        /* Team Member Card */
        .team-member {
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          overflow: hidden;
          width: 280px;
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        }

        .team-member:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .member-image {
          position: relative;
          width: 100%;
          height: 300px;
          overflow: hidden;
          background-color: #eee;
        }

        .member-image.grid-image {
          height: 250px;
        }

        .member-img {
          object-fit: cover;
          transition: opacity 0.2s ease-in-out;
        }

        .member-info {
          padding: 20px;
          text-align: center;
        }

        .member-name {
          font-size: 1.2rem;
          font-weight: 500;
          color: #222;
          margin-bottom: 5px;
        }

        .member-position {
          font-size: 0.9rem;
          color: #555;
          margin-bottom: 0;
        }

        .team-member.member-no-position .member-info {
          padding: 25px;
        }

        .team-member.member-no-position .member-position {
          display: none;
        }

        /* Team Grid */
        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 30px;
        }

        .team-grid .team-member {
          width: 100%;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.2rem;
          }
          .team-member {
            width: 220px;
          }
          .team-grid {
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 20px;
          }
          .level-title {
            font-size: 1.3rem;
          }
        }

        @media (max-width: 576px) {
          .hero-title {
            font-size: 1.8rem;
          }
          .hero-subtitle {
            font-size: 1rem;
          }
          .team-member {
            width: 100%;
          }
          .team-row {
            gap: 15px;
          }
          .team-grid {
            grid-template-columns: 1fr;
          }
          .level-title {
            font-size: 1.2rem;
          }
          .section-header {
            margin-bottom: 30px;
          }
        }
      `}</style>
    </div>
  )
}