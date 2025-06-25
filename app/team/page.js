"use client"

import Image from "next/image"

// Import your existing components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const leadershipTeam = [
  {
    id: 1,
    name: "Naoufal BOUAMRI",
    name_ar: "نوفل البعمري",
    position: "Président",
    statu: "محام",
    statu_ar: "Avocat",
    image: "/Membres/naoufal.jpg",
    level: "president",
  },
  {
    id: 2,
    name: "Ahmed MOUFID",
    name_ar: " أحمد مفيد",
    position: "Vice-président",
    statu: "أستاذ باحث",
    statu_ar: "Professeur chercheur",
    image: "/Membres/ahmad mofid.jpg",
    level: "vice-president",
  },
  {
    id: 3,
    name: "Hossam HAB",
    name_ar: "حسام هاب",
    position: "Trésorier",
    statu: "موظف",
    statu_ar: "Employé",
    image: "/Membres/hab houssam.jpg",
    level: "vice-president",
  },
  {
    id: 4,
    name: "RIDA El FILALI HAMOZ",
    name_ar: "رضا الفيلالي حموز ",
    position: "Trésorier Adjoint",
    statu: "ذ. جامعي",
    statu_ar: "Professeur universitaire",
    image: "/Membres/rida.jpg",
    level: "executive",
  },
  {
    id: 5,
    name: "Zineb ABOUZZOUHOUR",
    name_ar: "زينب أبو الزهور",
    position: "Secrétaire Générale",
    statu: "مستشارة",
    statu_ar: "Conseillère",
    image: "/Membres/AbouZhor.jpg",
    level: "executive",
  },
  {
    id: 6,
    name: "AHMED HAMOUCH",
    name_ar: "أحمد حموش",
    position: "Secrétaire Général Adjoint",
    statu: "محام",
    statu_ar: "Avocat",
    image: "/Membres/ahmad.jpg",
    level: "executive",
  },
  {
    id: 7,
    name: "Abdeljalil BADDOU",
    name_ar: "عبد الجليل بادو ",
    position: "Conseiller",
    statu: "أستاذ جامعي",
    statu_ar: "Professeur d'université",
    image: "/Membres/bado.jpg",
    level: "member",
  },
  {
    id: 8,
    name: "Ahmed RAKRAKI",
    name_ar: "أحمد الرقراقي",
    position: "Conseiller",
    statu: "أستاذ سابق",
    statu_ar: "Ancien enseignant",
    image: "/Membres/Ahmed rakraki.jpg",
    level: "member",
  },
  {
    id: 9,
    name: "Mohamed TAYEBI",
    name_ar: "محمد الطيبي",
    position: "Conseiller",
    statu: "ذ. جامعي",
    statu_ar: "Professeur universitaire",
    image: "/Membres/tayebi mohammed.jpg",
    level: "member",
  },
  {
    id: 10,
    name: "Mourad HAMDANI",
    name_ar: "مراد الحمداني",
    position: "Conseiller",
    statu: "أستاذ",
    statu_ar: "Professeur",
    image: "/Membres/mourad.jpg",
    level: "member",
  },
  {
    id: 11,
    name: "Amina ELGANI",
    name_ar: "أمينة الكاني",
    position: "Conseillère",
    statu: "ذة. متقاعدة",
    statu_ar: "Professeure à la retraite",
    image: "/Membres/amina elgani.jpeg.jpg",
    level: "member",
  },
  {
    id: 12,
    name: "Fatima SABAHI",
    name_ar: "فاطمة صباحي",
    position: "Conseillère",
    statu: "أستاذة",
    statu_ar: "Professeure",
    image: "/Membres/FATIMA SABAHI.jpg",
    level: "member",
  },
  {
    id: 13,
    name: "Kamilia BOUTAMOU",
    name_ar: "كاميليا بوطمو",
    position: "Conseillère",
    statu: "محامية",
    statu_ar: "Avocate",
    image: "/Membres/WhatsApp Image 2025-06-19 at 01.42.51_d4f6c485.jpg",
    level: "member",
  },
  {
    id: 14,
    name: "Fadwa AMHARECH",
    name_ar: "فدوى امحارش",
    position: "Conseillère",
    statu: "مكلفة بمشاريع الوكالة البلجيكية للتعاون الدولي",
    statu_ar: "Chargée de projets à l'Agence belge de coopération internationale",
    image: "/Membres/fadwa.jpg",
    level: "member",
  },
  {
    id: 15,
    name: "Souad HAMIDI",
    name_ar: "سعاد حميدي",
    position: "Conseillère",
    statu: "ذة. جامعية",
    statu_ar: "Professeure d'université",
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
          Une équipe passionnée et dévouée travaillant sans relâche.
        </p>
      </div>
    </div>
  </section>

  <section className="team-section">
    <div className="container" >
      {/* Leadership Team */}
      <div className="leadership-team">
        <div className="section-header">
          <span className="section-subtitle"></span>
          <h2 className="section-title">Notre Bureau Exécutif</h2>
          <p className="section-description">
            L&apos;équipe de direction qui guide notre organisation avec vision et détermination.
          </p>
        </div>

        {/* President */}
        {president.length > 0 && (
          <div className="team-level" translate="no">
            <div className="team-row">
              {president.map((member) => (
                <div key={member.id} className="team-member">
                  <div className="member-image">
                    <Image src={member.image || "/placeholder.svg"} alt={`${member.name} / ${member.name_ar}`} fill style={{ objectFit: 'cover' }} />
                  </div>
                  <div className="member-info">
                    <h3 className="member-name">{member.name}</h3>
                    <h4 className="member-name-ar">{member.name_ar}</h4>
                    <p className="member-position">{member.position}</p>
                    <div className="member-status">
                      <p>{member.statu_ar}</p>
                      <p>{member.statu}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Vice Presidents */}
        {vicePresidents.length > 0 && (
          <div className="team-level" translate="no">
            <div className="team-row">
              {vicePresidents.map((member) => (
                <div key={member.id} className="team-member">
                  <div className="member-image">
                    <Image src={member.image || "/placeholder.svg"} alt={`${member.name} / ${member.name_ar}`} fill style={{ objectFit: 'cover' }} />
                  </div>
                  <div className="member-info">
                    <h3 className="member-name">{member.name}</h3>
                    <h4 className="member-name-ar">{member.name_ar}</h4>
                    <p className="member-position">{member.position}</p>
                     <div className="member-status">
                      <p>{member.statu_ar}</p>
                      <p>{member.statu}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Executives */}
        {executives.length > 0 && (
          <div className="team-level" translate="no">
            <div className="team-row">
              {executives.map((member) => (
                <div key={member.id} className="team-member">
                  <div className="member-image">
                    <Image src={member.image || "/placeholder.svg"} alt={`${member.name} / ${member.name_ar}`} fill style={{ objectFit: 'cover' }} />
                  </div>
                   <div className="member-info">
                    <h3 className="member-name">{member.name}</h3>
                    <h4 className="member-name-ar">{member.name_ar}</h4>
                    <p className="member-position">{member.position}</p>
                     <div className="member-status">
                      <p>{member.statu_ar}</p>
                      <p>{member.statu}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Members */}
        {members.length > 0 && (
          <div className="team-level" translate="no">
             <div className="section-header">
               <h2 className="section-title">Nos Conseillers</h2>
            </div>
            {memberRows.map((row, rowIndex) => (
              <div key={rowIndex} className="team-row">
                {row.map((member) => (
                  <div key={member.id} className="team-member">
                    <div className="member-image">
                      <Image src={member.image || "/placeholder.svg"} alt={`${member.name} / ${member.name_ar}`} fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div className="member-info">
                        <h3 className="member-name">{member.name}</h3>
                        <h4 className="member-name-ar">{member.name_ar}</h4>
                        <p className="member-position">{member.position}</p>
                         <div className="member-status">
                            <p>{member.statu_ar}</p>
                            <p>{member.statu}</p>
                        </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
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
    max-width: 1200px; /* Increased max-width for better spacing */
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
    font-weight: 700; /* Bolder title */
    line-height: 1.2;
    margin-bottom: 20px;
    color: #222;
  }

  .hero-title span {
    color: var(--primary-color); /* Use a variable for primary color */
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
    font-size: 2.4rem; /* Larger section title */
    font-weight: 600;
    color: #333;
    margin-bottom: 15px;
  }
  
  .section-title:not(:first-child) {
     margin-top: 40px;
  }


  .section-description {
    font-size: 1rem;
    color: #666;
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;
  }

  .team-level {
    margin-bottom: 40px;
  }

  /* Team Row */
  .team-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px; /* Increased gap */
    margin-bottom: 20px;
  }

  /* Team Member Card */
  .team-member {
    background-color: #fff;
    border-radius: 12px; /* Smoother corners */
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.07);
    overflow: hidden;
    width: 300px; /* Slightly wider card */
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .team-member:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  }

  .member-image {
    position: relative;
    width: 100%;
    height: 320px;
    background-color: #eee;
  }

  /* Member Info section */
  .member-info {
    padding: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    flex-grow: 1; /* Allows info to fill space */
    justify-content: center;
  }

  .member-name {
    font-size: 1.25rem;
    font-weight: 600;
    color: #222;
    margin: 0;
  }

  .member-name-ar {
    font-size: 1.2rem;
    font-weight: 500;
    color: #444;
    margin: 4px 0 10px 0;
    direction: rtl; /* Right-to-left for Arabic text */
    font-family: 'Almarai', sans-serif; /* Example Arabic font */
  }

  .member-position {
    font-size: 0.95rem;
    color: var(--primary-color);
    font-weight: 500;
    margin: 0 0 12px 0;
  }
  
  .member-status {
    margin-top: auto; /* Pushes status to the bottom */
    padding-top: 10px;
    border-top: 1px solid #f0f0f0;
    font-size: 0.9rem;
    color: #777;
    line-height: 1.5;
  }
  
   .member-status p {
     margin: 2px 0;
   }
   
   .member-status p:last-child {
      direction: rtl;
      font-family: 'Almarai', sans-serif;
   }


  /* Responsive Design */
  @media (max-width: 992px) {
    .team-member {
        width: 280px;
    }
  }
  
  @media (max-width: 768px) {
    .hero-title {
      font-size: 2.2rem;
    }
    .section-title {
      font-size: 2rem;
    }
    .team-member {
      width: 320px; /* Allow more space on tablets */
    }
    .team-row {
      gap: 25px;
    }
  }

  @media (max-width: 576px) {
    .container {
      width: 95%;
      padding: 0 15px;
    }
    .hero-title {
      font-size: 2rem;
    }
    .team-member {
      width: 100%; /* Full width on small screens */
      max-width: 340px; /* Max-width to avoid being too wide */
    }
    .team-row {
      gap: 20px;
    }
  }
`}</style>
    </div>
  )
}