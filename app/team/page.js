"use client"

import Image from "next/image"

// Import your existing components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const leadershipTeam = [
  {
    id: 1,
    name: "Noufal Al-Baamari",
    position: "Président",
    image: "/placeholder.svg?height=350&width=320",
    level: "president",
  },
  {
    id: 2,
    name: "Ahmed Moufid",
    position: "Vice-président",
    image: "/placeholder.svg?height=350&width=320",
    level: "vice-president",
  },
  {
    id: 3,
    name: "Houssam Haab",
    position: "Trésorier",
    image: "/placeholder.svg?height=350&width=320",
    level: "vice-president",
  },
  {
    id: 4,
    name: "Reda Al-Filali Hammouz",
    position: "Trésorier Adjoint",
    image: "/placeholder.svg?height=350&width=320",
    level: "executive",
  },
  {
    id: 5,
    name: "Zineb Abu Al-Zohour",
    position: "Secrétaire Générale",
    image: "/placeholder.svg?height=350&width=320",
    level: "executive",
  },
  {
    id: 6,
    name: "Ahmed Hammoush",
    position: "Secrétaire Général Adjoint",
    image: "/placeholder.svg?height=350&width=320",
    level: "executive",
  },
  {
    id: 7,
    name: "Abdeljalil Bado",
    position: "",
    image: "/placeholder.svg?height=350&width=320",
    level: "member",
  },
  {
    id: 8,
    name: "Ahmed Regragui",
    position: "",
    image: "/placeholder.svg?height=350&width=320",
    level: "member",
  },
  {
    id: 9,
    name: "Mohammed Ettaybi",
    position: "",
    image: "/placeholder.svg?height=350&width=320",
    level: "member",
  },
  {
    id: 10,
    name: "Murad Hamdani",
    position: "",
    image: "/placeholder.svg?height=350&width=320",
    level: "member",
  },
  {
    id: 11,
    name: "Amina El Gani",
    position: "",
    image: "/placeholder.svg?height=350&width=320",
    level: "member",
  },
  {
    id: 12,
    name: "Fatima Sabah",
    position: "",
    image: "/placeholder.svg?height=350&width=320",
    level: "member",
  },
  {
    id: 13,
    name: "Kamelia Botbomo",
    position: "",
    image: "/placeholder.svg?height=350&width=320",
    level: "member",
  },
  {
    id: 14,
    name: "Fadwa Amharesh",
    position: "",
    image: "/placeholder.svg?height=350&width=320",
    level: "member",
  },
  {
    id: 15,
    name: "Souad Hamidi",
    position: "",
    image: "/placeholder.svg?height=350&width=320",
    level: "member",
  },
]

const teamMembers = [
  {
    id: 1,
    name: "Dalal BOUHAJBANE",
    position: "Chargée de Programmes",
    image: "/placeholder.svg?height=280&width=250",
  },
  {
    id: 2,
    name: "Lamia SELLAL",
    position: "Assistante Administrative et Financière",
    image: "/placeholder.svg?height=280&width=250",
  },
  {
    id: 3,
    name: "Mouad IMAM",
    position: "Responsable Suivi & Évaluation / Coordinateur National des GTPs",
    image: "/placeholder.svg?height=280&width=250",
  },
  {
    id: 4,
    name: "Hamza ABIA",
    position: "Assistant de Projet, Protection Sociale",
    image: "/placeholder.svg?height=280&width=250",
  },
  {
    id: 5,
    name: "Amal IDRISSI CHORFI",
    position: "Assistante Financière (Documentation)",
    image: "/placeholder.svg?height=280&width=250",
  },
]

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
          <div className="hero-pattern"></div>
          <div className="hero-accent"></div>
          <div className="hero-decoration"></div>
          <div className="container">
            <div className="hero-content">
              <span className="hero-subtitle-top">Rencontrez Notre Équipe</span>
              <h1 className="hero-title">
                Les visages derrière notre <span>mission</span>
              </h1>
              <p className="hero-subtitle">
                Une équipe passionnée et dévouée travaillant sans relâche pour protéger et assister les réfugiés et
                demandeurs d'asile au Maroc.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <div className="decoration-circle decoration-circle-1"></div>
          <div className="decoration-circle decoration-circle-2"></div>
          <div className="container">
            {/* Leadership Team */}
            <div className="leadership-team">
              <div className="section-header">
                <span className="section-subtitle">Leadership</span>
                <h2 className="section-title">Notre Leadership</h2>
                <p className="section-description">
                  L'équipe de direction qui guide notre organisation avec vision et détermination.
                </p>
              </div>

              {/* President */}
              <div className="team-row">
                {president.map((member) => (
                  <div key={member.id} className="team-member">
                    <div className="member-image">
                      <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="member-img" />
                    </div>
                    <div className="member-info">
                      <h3 className="member-name">{member.name}</h3>
                      <p className="member-position">{member.position}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Vice Presidents */}
              <div className="team-row">
                {vicePresidents.map((member) => (
                  <div key={member.id} className="team-member">
                    <div className="member-image">
                      <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="member-img" />
                    </div>
                    <div className="member-info">
                      <h3 className="member-name">{member.name}</h3>
                      <p className="member-position">{member.position}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Executives */}
              <div className="team-row">
                {executives.map((member) => (
                  <div key={member.id} className="team-member">
                    <div className="member-image">
                      <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="member-img" />
                    </div>
                    <div className="member-info">
                      <h3 className="member-name">{member.name}</h3>
                      <p className="member-position">{member.position}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Members in rows of 3 */}
              {memberRows.map((row, rowIndex) => (
                <div key={rowIndex} className="team-row">
                  {row.map((member) => (
                    <div key={member.id} className="team-member">
                      <div className="member-image">
                        <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="member-img" />
                      </div>
                      <div className="member-info">
                        <h3 className="member-name">{member.name}</h3>
                        <p className="member-position">{member.position}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Team Members */}
            <div className="team-members">
              <div className="section-header">
                <span className="section-subtitle">Membres de l'Équipe</span>
                <h2 className="section-title">Notre Équipe Complète</h2>
                <p className="section-description">
                  Des membres dévoués qui contribuent chaque jour au succès de notre mission.
                </p>
              </div>

              <div className="team-grid">
                {teamMembers.map((member) => (
                  <div key={member.id} className="team-member">
                    <div className="member-image grid-image">
                      <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="member-img" />
                    </div>
                    <div className="member-info">
                      <h3 className="member-name">{member.name}</h3>
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
          background-color: #f5f5f5;
          font-family: 'Montserrat', sans-serif;
        }

        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
        }

        /* Hero Section */
        .hero-section {
          position: relative;
          padding: 120px 0 100px;
          background-color: white;
          overflow: hidden;
        }

        .hero-pattern {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(circle at 20% 30%, rgba(25, 87, 166, 0.05) 0%, transparent 8%),
            radial-gradient(circle at 80% 40%, rgba(25, 87, 166, 0.05) 0%, transparent 8%),
            radial-gradient(circle at 40% 80%, rgba(25, 87, 166, 0.05) 0%, transparent 8%),
            radial-gradient(circle at 70% 90%, rgba(25, 87, 166, 0.05) 0%, transparent 8%);
          background-size: 120% 120%;
          opacity: 0.8;
        }

        .hero-accent {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: linear-gradient(90deg, #1957a6, #2968b7, #1957a6);
          background-size: 200% 100%;
          animation: gradient-shift 8s ease infinite;
        }

        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
        }

        .hero-subtitle-top {
          font-weight: 500;
          font-size: 0.9em;
          text-transform: uppercase;
          letter-spacing: 3px;
          color: #1957a6;
          margin-bottom: 15px;
          display: inline-block;
          position: relative;
          padding-left: 40px;
        }

        .hero-subtitle-top::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          width: 30px;
          height: 1px;
          background-color: #1957a6;
        }

        .hero-title {
          font-weight: 700;
          font-size: 3.5em;
          line-height: 1.1;
          margin-bottom: 25px;
          color: #2c3e50;
          position: relative;
        }

        .hero-title span {
          color: #1957a6;
          position: relative;
          display: inline-block;
        }

        .hero-title span::after {
          content: '';
          position: absolute;
          bottom: 5px;
          left: 0;
          width: 100%;
          height: 8px;
          background-color: rgba(255, 215, 0, 0.3);
          z-index: -1;
        }

        .hero-subtitle {
          font-weight: 400;
          font-size: 1.1em;
          line-height: 1.7;
          color: #546e7a;
          max-width: 600px;
          margin-bottom: 40px;
        }

        .hero-decoration {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 300px;
          height: 300px;
          border: 15px solid rgba(25, 87, 166, 0.05);
          border-radius: 50%;
          z-index: 1;
        }

        .hero-decoration::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 150px;
          height: 150px;
          border: 2px solid rgba(25, 87, 166, 0.1);
          border-radius: 50%;
        }

        /* Team Section */
        .team-section {
          padding: 80px 0;
          position: relative;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
          position: relative;
        }

        .section-subtitle {
          font-weight: 500;
          font-size: 0.9em;
          text-transform: uppercase;
          letter-spacing: 3px;
          color: #1957a6;
          margin-bottom: 15px;
        }

        .section-title {
          font-weight: 700;
          font-size: 2.2em;
          color: #2c3e50;
          margin-bottom: 20px;
          position: relative;
          display: inline-block;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 2px;
          background-color: #1957a6;
        }

        .section-description {
          font-weight: 400;
          font-size: 1em;
          color: #546e7a;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* Leadership Team */
        .leadership-team {
          margin-bottom: 80px;
          position: relative;
        }

        .leadership-team::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(25, 87, 166, 0.1), transparent);
        }

        .team-row {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 40px;
          margin-bottom: 60px;
          position: relative;
        }

        .team-row:last-child {
          margin-bottom: 0;
        }

        /* Team Member Card */
        .team-member {
          background-color: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          width: 100%;
          max-width: 320px;
          position: relative;
        }

        .team-member:hover {
          transform: translateY(-15px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .member-image {
          width: 100%;
          height: 350px;
          overflow: hidden;
          position: relative;
        }

        .member-image.grid-image {
          height: 280px;
        }

        .member-image::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, transparent 70%, rgba(0, 0, 0, 0.4));
        }

        .member-img {
          object-fit: cover;
          transition: transform 0.8s ease;
        }

        .team-member:hover .member-img {
          transform: scale(1.08);
        }

        .member-info {
          padding: 25px;
          text-align: center;
          position: relative;
        }

        .member-info::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 3px;
          background-color: #1957a6;
          border-radius: 3px;
        }

        .member-name {
          font-weight: 600;
          font-size: 1.4em;
          color: #2c3e50;
          margin-bottom: 8px;
        }

        .member-position {
          font-weight: 500;
          font-size: 0.9em;
          color: #1957a6;
          margin-bottom: 15px;
          letter-spacing: 0.5px;
        }

        /* Team Grid */
        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 30px;
          position: relative;
        }

        .team-grid .team-member {
          max-width: none;
        }

        /* Decorative Elements */
        .decoration-circle {
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background-color: rgba(25, 87, 166, 0.03);
          z-index: -1;
        }

        .decoration-circle-1 {
          top: -150px;
          left: -150px;
        }

        .decoration-circle-2 {
          bottom: -100px;
          right: -150px;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .hero-decoration {
            display: none;
          }

          .container {
            padding: 0 15px;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 80px 0 60px;
          }

          .hero-title {
            font-size: 2.5em;
          }

          .hero-subtitle {
            font-size: 1em;
          }

          .team-section {
            padding: 60px 0;
          }

          .section-title {
            font-size: 1.8em;
          }

          .team-row {
            gap: 20px;
          }

          .team-member {
            max-width: 280px;
          }

          .member-image {
            height: 300px;
          }

          .member-image.grid-image {
            height: 250px;
          }

          .team-grid {
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 20px;
          }
        }

        @media (max-width: 576px) {
          .hero-section {
            padding: 60px 0 40px;
          }

          .hero-title {
            font-size: 2em;
          }

          .hero-subtitle-top {
            font-size: 0.8em;
            padding-left: 30px;
          }

          .hero-subtitle-top::before {
            width: 20px;
          }

          .team-section {
            padding: 40px 0;
          }

          .section-header {
            margin-bottom: 40px;
          }

          .leadership-team {
            margin-bottom: 60px;
          }

          .team-row {
            gap: 15px;
          }

          .team-member {
            max-width: 100%;
          }

          .member-image {
            height: 250px;
          }

          .member-image.grid-image {
            height: 220px;
          }

          .member-info {
            padding: 20px;
          }

          .member-name {
            font-size: 1.2em;
          }

          .member-position {
            font-size: 0.85em;
          }

          .team-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}
