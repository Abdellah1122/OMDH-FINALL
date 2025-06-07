// components/Footer.js

'use client';

import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import styles from './Footer.module.css';
import { useEffect } from 'react'; // Make sure useEffect is imported

export default function Footer() {

  const changeLanguage = (langCode) => {
    // ... your existing changeLanguage function is perfect, no changes needed here
    document.documentElement.lang = langCode;
    document.documentElement.dir = (langCode === 'ar') ? 'rtl' : 'ltr';

    if (langCode === 'fr') {
      let frame = document.getElementsByClassName('goog-te-banner-frame')[0];
      if (frame) {
        let frameDoc = frame.contentDocument || frame.contentWindow.document;
        let restore = frameDoc.getElementsByTagName('button')[0];
        if (restore) {
          restore.click();
          return;
        }
      }
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.' + window.location.hostname;
    } else {
      let domain = window.location.hostname;
      document.cookie = `googtrans=/fr/${langCode}; path=/; domain=${domain}`;
      document.cookie = `googtrans=/fr/${langCode}; path=/;`;
    }

    setTimeout(() => { location.reload(); }, 100);
  };
  
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({
        pageLanguage: 'fr',
        includedLanguages: 'en,es,ar,fr',
        autoDisplay: false,
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        gaTrack: true
      }, 'google_translate_element');
    };
  }, []);

  // --- NEW JAVASCRIPT HIDING LOGIC ---
  // This effect will run repeatedly to ensure the Google Translate widget stays hidden.
  useEffect(() => {
    const hideGoogleTranslate = () => {
      const bannerFrame = document.querySelector('.goog-te-banner-frame');
      if (bannerFrame) {
        bannerFrame.style.display = 'none';
        bannerFrame.style.visibility = 'hidden';
      }

      const translateElement = document.getElementById('google_translate_element');
      if (translateElement) {
          // This hides the actual dropdown/widget if it renders outside the buttons
        translateElement.style.display = 'none';
        translateElement.style.visibility = 'hidden';
      }
      
      // Also reset body top position
      document.body.style.top = '0px';
    };

    // Run the hiding function on an interval to catch the widget when it appears
    const intervalId = setInterval(hideGoogleTranslate, 100);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // The empty array means this effect runs once when the component mounts

  return (
    <>
      <footer className={styles.Footerr}>
        {/* ... All your existing footer JSX goes here ... */}
        {/* No changes needed to the JSX part */}
        <div className={styles.hh}>
          <div className={styles.Left}>
            <div className={styles.Logo}>
              <Image src="/omdhlogo.png" alt="OMDH Logo" width={250} height={100} />
            </div>
            <div className={styles.Omdh}>
              <p className={styles['translatable-text']}>
                {/* FIX: Replaced L' with L' */}
                <span translate="yes">L&apos;Organisation Marocaine des Droits Humains (OMDH) est une organisation de défense des droits humains distinguée et engagée, dédiée à traiter des questions cruciales telles que la détention politique, la torture et la promotion de la sensibilisation aux droits humains.</span>               </p>
            </div>
          </div>
          <div className={styles.Center}>
            <h2 translate="yes">Liens</h2>
            <Link href="/contact" className={styles.cnt}><i className="bi bi-telephone-fill"></i><span>Nous Contacter</span></Link>
            <Link href="/missions" className={styles.cnt}><i className="bi bi-kanban"></i><span>Notre Mission</span></Link>
            <Link href="/projects" className={styles.cnt}><i className="bi bi-card-checklist"></i><span>Nos Projets</span></Link>
            <Link href="/team" className={styles.cnt}><i className="bi bi-people-fill"></i><span>Notre Équipe</span></Link>
          </div>
          <div className={styles.Right}>
            <h2 translate="yes">Contactez-nous</h2>
            <div className={styles.Contact}>
              <div className={styles.cnt}>
                <i className="bi bi-geo"></i>
                <p translate="yes">8, rue Ouargha, Résidence Volubilis, appt 1, Agdal / Rabat, Maroc</p>
              </div>
              <div className={styles.cnt}><i className="bi bi-telephone-fill"></i><p className={styles['no-translate']}>+212 537 77 00 60</p></div>
              <div className={styles.cnt}><i className="bi bi-envelope"></i><p className={styles['no-translate']}>admin.omdh@omdh.ma</p></div>
              <div className={styles.btns}>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a>
                <a href="https://www.x.com/" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter-x"></i></a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.AfterFooter}>
          <p className={styles['no-translate']}>© 2025 OMDH - <span translate="yes">Tous droits réservés</span></p>
          
          <div id="language-selector" className={styles['language-selector']}>
            <button onClick={() => changeLanguage('en')}>English</button> |
            <button onClick={() => changeLanguage('es')}>Español</button> |
            <button onClick={() => changeLanguage('ar')}>العربية</button> |
            <button onClick={() => changeLanguage('fr')}>Français</button>
          </div>
          
          <div id="google_translate_element"></div>
        </div>
      </footer>

      <Script 
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" 
        strategy="afterInteractive" 
      />
    </>
  );
}