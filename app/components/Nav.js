"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"

const aboutItems = [
  { href: "/about-us", label: "Qui sommes-nous" },
  { href: "/missions", label: "Nos Missions" },
  { href: "/presence", label: "Présence nationale" },
  { href: "/campaigns", label: "Nos Campagnes" },
]

const projectItems = [
  { href: "/Projects", label: "Tous les projets" },
  { href: "/project-hcr", label: "Projet HCR" },
]

const mainNavItems = [
  { href: "/team", label: "Notre Équipe" },
  { href: "/editions", label: "Les Éditions" },
  { href: "/album", label: "Album" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 })
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false)
  const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(false)

  const aboutButtonRef = useRef(null)
  const projectsButtonRef = useRef(null)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      if (openDropdown) {
        setOpenDropdown(null)
      }
    }

    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !aboutButtonRef.current?.contains(event.target) &&
        !projectsButtonRef.current?.contains(event.target)
      ) {
        setOpenDropdown(null)
      }
    }

    const handleResize = () => {
      if (openDropdown) {
        setOpenDropdown(null)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mousedown", handleClickOutside)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
      window.removeEventListener("resize", handleResize)
    }
  }, [openDropdown])

  const calculateDropdownPosition = (buttonRef) => {
    if (!buttonRef.current) return { top: 0, left: 0 }

    const rect = buttonRef.current.getBoundingClientRect()
    const scrollY = window.scrollY

    return {
      top: rect.bottom + scrollY + 8,
      left: rect.left,
    }
  }

  const toggleDropdown = (dropdownName) => {
    if (openDropdown === dropdownName) {
      setOpenDropdown(null)
    } else {
      const buttonRef = dropdownName === "about" ? aboutButtonRef : projectsButtonRef
      const position = calculateDropdownPosition(buttonRef)
      setDropdownPosition(position)
      setOpenDropdown(dropdownName)
    }
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setOpenDropdown(null)
    setIsMobileAboutOpen(false)
    setIsMobileProjectsOpen(false)
  }

  const toggleMobileDropdown = (section) => {
    if (section === "about") {
      setIsMobileAboutOpen(!isMobileAboutOpen)
    } else if (section === "projects") {
      setIsMobileProjectsOpen(!isMobileProjectsOpen)
    }
  }

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        {/* Logo */}
        <div className="logo-container">
          <Link href="/" className="logo-link" style={{color: 'white',backgroundColor:'transparent',border:'none', textDecoration: 'none'}}>
            {/* The logo size is increased here */}
            <Image src="/Logo.png" alt="Logo" width={50} height={50} priority />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-buttons">
          {/* About Dropdown */}
          <div className="dropdown-wrapper">
            <button
              ref={aboutButtonRef}
              className={`nav-btn ${openDropdown === "about" ? "active" : ""}`}
              onClick={() => toggleDropdown("about")}
              aria-expanded={openDropdown === "about"}
            >
              <span>À propos de l&apos;organisation</span>
              <svg
                className={`chevron ${openDropdown === "about" ? "rotated" : ""}`}
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                style={{color: 'white',backgroundColor:'transparent',border:'none', textDecoration: 'none'}}
              >
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Projects Dropdown */}
          <div className="dropdown-wrapper">
            <button
              ref={projectsButtonRef}
              className={`nav-btn ${openDropdown === "projects" ? "active" : ""}`}
              onClick={() => toggleDropdown("projects")}
              aria-expanded={openDropdown === "projects"}
            >
              <span>Projets</span>
              <svg
                className={`chevron ${openDropdown === "projects" ? "rotated" : ""}`}
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                style={{color: 'white',backgroundColor:'transparent',border:'none', textDecoration: 'none'}}
              >
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Main Navigation Items */}
          {mainNavItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-btn" style={{color: 'white',backgroundColor:'transparent',border:'none', textDecoration: 'none'}}>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="mobile-menu-toggle" onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </nav>

      {/* Global Dropdown Portal */}
      {openDropdown && (
        <div
          ref={dropdownRef}
          className="global-dropdown"
          style={{
            top: `${dropdownPosition.top}px`,
            left: `${dropdownPosition.left}px`,
          }}
        >
          <div className="dropdown-content">
            {openDropdown === "about" && aboutItems.map((item) => (
              <Link key={item.href} href={item.href} className="dropdown-item" onClick={() => setOpenDropdown(null)} style={{color: 'black',backgroundColor:'transparent',border:'none', textDecoration: 'none'}} >
                {item.label}
              </Link>
            ))}
            {openDropdown === "projects" && projectItems.map((item) => (
              <Link key={item.href} href={item.href} className="dropdown-item" onClick={() => setOpenDropdown(null)} style={{color: 'black',backgroundColor:'transparent',border:'none', textDecoration: 'none'}}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      <div className={`mobile-nav-overlay ${isMenuOpen ? "active" : ""}`} onClick={closeMenu} />

      {/* Mobile Menu */}
      <div className={`mobile-nav-menu ${isMenuOpen ? "active" : ""}`}>
        <div className="mobile-menu-header">
          <span className="mobile-menu-title"></span>
          <button className="mobile-menu-close" onClick={closeMenu} aria-label="Close menu">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="mobile-menu-content">
          {/* Mobile About Section */}
          <div className="mobile-dropdown">
            <button
              className="mobile-dropdown-toggle"
              onClick={() => toggleMobileDropdown("about")}
              aria-expanded={isMobileAboutOpen}
            >
              <span>À propos de l&apos;organisation</span>
              <svg
                className={`chevron ${isMobileAboutOpen ? "rotated" : ""}`}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className={`mobile-dropdown-content ${isMobileAboutOpen ? "active" : ""}`}>
              {aboutItems.map((item) => (
                <Link key={item.href} href={item.href} className="mobile-dropdown-item" onClick={closeMenu} style={{color: 'black',backgroundColor:'transparent',border:'none', textDecoration: 'none'}}  >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Projects Section */}
          <div className="mobile-dropdown">
            <button
              className="mobile-dropdown-toggle"
              onClick={() => toggleMobileDropdown("projects")}
              aria-expanded={isMobileProjectsOpen}
            >
              <span>Projets</span>
              <svg
                className={`chevron ${isMobileProjectsOpen ? "rotated" : ""}`}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className={`mobile-dropdown-content ${isMobileProjectsOpen ? "active" : ""}`}>
              {projectItems.map((item) => (
                <Link key={item.href} href={item.href} className="mobile-dropdown-item" onClick={closeMenu} style={{color: 'black',backgroundColor:'transparent',border:'none', textDecoration: 'none'}}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Main Navigation */}
          {mainNavItems.map((item) => (
            <Link key={item.href} href={item.href} className="mobile-nav-item" onClick={closeMenu} style={{color: 'black',backgroundColor:'transparent',border:'none', textDecoration: 'none'}}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
       * {
    box-sizing: border-box;
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 6rem;
    position: sticky;
    top: 0;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.2); /* Soft black background */
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border-bottom: 1px solid transparent;
    backdrop-filter: blur(5px);
  }

  .navbar.scrolled {
    background-color: rgba(0, 0, 0, 0.6); /* Slightly darker when scrolled */
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    padding: 0.75rem 6rem;
  }

       .logo-container {
      width: 100px;
      height: 52px; /* Adjusted height to maintain aspect ratio with new width if needed */
      display: flex;
      align-items: center;
      justify-content: center; /* Center the logo within the container if needed */
      overflow:hidden;
    }

    .logo-container .logo-link {
      display: block; /* Changed to block to allow the image to fill the container */
      width: 100%;
      height: 100%;
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
     
      }

    .logo-container .logo-link:hover {
      transform: scale(1.02);
    }
        .nav-buttons {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }

        .dropdown-wrapper {
          position: relative;
        }

        .nav-btn {
          background: transparent !important;
          border: none !important;
          font-size: 0.95rem;
          font-weight: 500;
          padding: 0.75rem 1.25rem;
          cursor: pointer;
          color: #374151;
          text-decoration: none;
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          border-radius: 8px;
          white-space: nowrap;
          letter-spacing: -0.01em;
        }

        .nav-btn:hover,
        .nav-btn.active {
          color: #1f2937;
          background-color: rgba(0, 0, 0, 0.04);
        }

        .nav-btn span {
          transition: transform 0.2s ease;
        }

        .nav-btn:hover span {
          transform: translateY(-1px);
        }

        .chevron {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0.6;
        }

        .chevron.rotated {
          transform: rotate(180deg);
          opacity: 1;
        }

        .global-dropdown {
          position: absolute;
          z-index: 9999;
          animation: dropdownSlideIn 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes dropdownSlideIn {
          from {
            opacity: 0;
            transform: translateY(-8px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .dropdown-content {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          min-width: 280px;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          border-radius: 16px;
          padding: 0.5rem;
          border: 1px solid rgba(0, 0, 0, 0.06);
          display: flex;
          flex-direction: column;
        }

        .dropdown-item {
          display: block;
          padding: 0.875rem 1rem;
          color: #374151;
          text-decoration: none;
          background: transparent;
          border: none;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          font-weight: 500;
          font-size: 0.9rem;
          border-radius: 10px;
          position: relative;
          background: transparent !important;
          border: none !important;
          letter-spacing: -0.01em;
        }

        .dropdown-item:hover {
          background-color: rgba(0, 0, 0, 0.04);
          color: #1f2937;
          transform: translateX(4px);
        }

        .dropdown-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 0 2px 2px 0;
          transition: width 0.2s ease;
        }

        .dropdown-item:hover::before {
          width: 3px;
        }

        .mobile-menu-toggle {
          display: none;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 8px;
          transition: all 0.2s ease;
          color: #374151;
        }

        .mobile-menu-toggle:hover {
          background-color: rgba(0, 0, 0, 0.04);
          color: #1f2937;
        }

        .mobile-nav-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(4px);
          z-index: 9998;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .mobile-nav-overlay.active {
          opacity: 1;
          visibility: visible;
        }

        .mobile-nav-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 360px;
          max-width: 90vw;
          height: 100vh;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          z-index: 9999;
          transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow-y: auto;
          border-left: 1px solid rgba(0, 0, 0, 0.06);
        }

        .mobile-nav-menu.active {
          right: 0;
        }

        .mobile-menu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 1.5rem 1rem 1.5rem;
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        }

        .mobile-menu-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1f2937;
          letter-spacing: -0.02em;
        }

        .mobile-menu-close {
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 8px;
          transition: all 0.2s ease;
          color: #6b7280;
        }

        .mobile-menu-close:hover {
          background-color: rgba(0, 0, 0, 0.04);
          color: #374151;
        }

        .mobile-menu-content {
          padding: 1rem 0;
          display: flex;
          flex-direction: column;
        }

        .mobile-nav-item,
        .mobile-dropdown-toggle {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 1.125rem 1.5rem;
          background: transparent;
          border: none;
          cursor: pointer;
          color: #374151;
          font-size: 1rem;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          letter-spacing: -0.01em;
        }

        .mobile-nav-item:hover,
        .mobile-dropdown-toggle:hover {
          background-color: rgba(0, 0, 0, 0.04);
          color: #1f2937;
        }

        .mobile-dropdown {
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        }

        .mobile-dropdown:last-of-type {
          border-bottom: none;
        }

        .mobile-dropdown-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          background-color: rgba(0, 0, 0, 0.02);
          display: flex;
          flex-direction: column;
        }

        .mobile-dropdown-content.active {
          max-height: 400px;
        }

        .mobile-dropdown-item {
          display: block;
          width: 100%;
          padding: 1rem 2.5rem;
          background: transparent;
          color: #6b7280;
          font-size: 0.9rem;
          text-decoration: none;
          border: none;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          font-weight: 400;
          letter-spacing: -0.01em;
        }

        .mobile-dropdown-item:hover {
          background-color: rgba(0, 0, 0, 0.04);
          color: #374151;
          padding-left: 3rem;
        }

        @media (max-width: 1200px) {
          .navbar {
            padding: 1rem 3rem;
          }
          .navbar.scrolled {
            padding: 0.75rem 3rem;
          }
        }

        @media (max-width: 992px) {
          .nav-buttons {
            display: none;
          }
          .mobile-menu-toggle {
            display: block;
          }
          .navbar {
            padding: 1rem 2rem;
          }
          .navbar.scrolled {
            padding: 0.75rem 2rem;
          }
        }

        @media (max-width: 480px) {
          .navbar {
            padding: 1rem 1.5rem;
          }
          .navbar.scrolled {
            padding: 0.75rem 1.5rem;
          }
          .mobile-nav-menu {
            max-width: 95vw;
          }
        }
          /* Make sure text stays visible on dark bg */
  .nav-btn span,
  .nav-btn svg,
  .mobile-nav-item,
  .dropdown-item,
  .mobile-dropdown-item {
    color: white !important;
  }
      `}</style>
    </>
  )
}