import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  // Закриття меню при кліку поза межами
  useEffect(() => {
    const handleClickOutside = e => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to='/' className={styles.logoLink}>
          <img
            src='/images/logo.png'
            alt='EpoxyArt Logo'
            className={styles.logoImage}
          />
          <span className={styles.logoText}>EpoxyArt</span>
        </NavLink>

        <button className={styles.burger} onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </button>

        <ul
          className={`${styles.menu} ${menuOpen ? styles.open : ''}`}
          ref={menuRef}
        >
          <li>
            <NavLink
              to='/'
              className={styles.link}
              onClick={() => setMenuOpen(false)}
            >
              Domov
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/learn'
              className={styles.link}
              onClick={() => setMenuOpen(false)}
            >
              Výuka
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/gallery'
              className={styles.link}
              onClick={() => setMenuOpen(false)}
            >
              Galéria
            </NavLink>
          </li>
          <li>
            <button
              className={styles.closeButton}
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
