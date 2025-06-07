// This MUST be the first line
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// STEP 1: Import the new CSS module
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };
  
  const closeMenu = () => {
      setIsMenuOpen(false);
      setOpenDropdown(null);
  }

  return (
    <>
      {/* STEP 2: Update all classNames to use the 'styles' object */}
      <nav className={`${styles.Nv} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles['logo-container']}> {/* Use bracket notation if class has a hyphen */}
          <Link href="/" className={styles['logo-link']}>
            <Image src="/omdhlogo2.png" alt="Logo" width={180} height={60} priority />
          </Link>
        </div>
        
        <div className={styles.NavBtns}>
          <div className={styles.dropdown}>
            <button className={styles.Btnss}>À propos de l'organisation <i className="bi bi-chevron-down"></i></button>
            <div className={styles['dropdown-content']}>
              <Link href="/about-us">Qui sommes-nous</Link>
              <Link href="/missions">Nos Missions</Link>
              <Link href="/presence">Présence nationale</Link>
              <Link href="/campaigns">Nos Campagnes</Link>
            </div>
          </div>
          <div className={styles.dropdown}>
            <button className={styles.Btnss}>Projets <i className="bi bi-chevron-down"></i></button>
            <div className={styles['dropdown-content']}>
              <Link href="/projects">Tous les projets</Link>
              <Link href="/project-hcr">Projet HCR</Link>
            </div>
          </div>
          <Link href="/team" className={styles.Btnss}>Notre Équipe</Link>
          <Link href="/editions" className={styles.Btnss}>Éditions</Link>
          <Link href="/contact" className={styles.Btnss}>Contact</Link>
        </div>

        <button className={styles['mobile-menu-toggle']} onClick={() => setIsMenuOpen(true)}>
          <i className="bi bi-list"></i>
        </button>
      </nav>

      <div 
        className={`${styles['mobile-nav-overlay']} ${isMenuOpen ? styles.active : ''}`}
        onClick={closeMenu}
      ></div>
      <div className={`${styles['mobile-nav-menu']} ${isMenuOpen ? styles.active : ''}`}>
        <button className={styles['mobile-menu-close']} onClick={closeMenu}>
          <i className="bi bi-x-lg"></i>
        </button>
        
        <div className={styles['mobile-dropdown']}>
          <button className={styles['mobile-dropdown-toggle']} onClick={() => toggleDropdown('about')}>
            <span>À propos de l'organisation</span>
            <i className={`bi ${openDropdown === 'about' ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
          </button>
          <div className={`${styles['mobile-dropdown-content']} ${openDropdown === 'about' ? styles.active : ''}`}>
            <Link href="/about-us" className={styles['mobile-dropdown-item']} onClick={closeMenu}>Qui sommes-nous</Link>
            <Link href="/missions" className={styles['mobile-dropdown-item']} onClick={closeMenu}>Missions</Link>
            <Link href="/presence" className={styles['mobile-dropdown-item']} onClick={closeMenu}>Présence nationale</Link>
            <Link href="/campaigns" className={styles['mobile-dropdown-item']} onClick={closeMenu}>Campagnes</Link>
          </div>
        </div>

        <div className={styles['mobile-dropdown']}>
            <button className={styles['mobile-dropdown-toggle']} onClick={() => toggleDropdown('projects')}>
                <span>Projets</span>
                <i className={`bi ${openDropdown === 'projects' ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
            </button>
            <div className={`${styles['mobile-dropdown-content']} ${openDropdown === 'projects' ? styles.active : ''}`}>
                <Link href="/projects" className={styles['mobile-dropdown-item']} onClick={closeMenu}>Tous les projets</Link>
                <Link href="/project-hcr" className={styles['mobile-dropdown-item']} onClick={closeMenu}>Projet HCR</Link>
            </div>
        </div>

        <Link href="/team" className={styles['mobile-nav-item']} onClick={closeMenu}>Équipe</Link>
        <Link href="/editions" className={styles['mobile-nav-item']} onClick={closeMenu}>Éditions</Link>
        <Link href="/contact" className={styles['mobile-nav-item']} onClick={closeMenu}>Contact</Link>
      </div>
    </>
  );
}