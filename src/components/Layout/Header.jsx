import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to='/' className='logoLink'>
          <img
            src='/images/logo.png'
            alt='EpoxyArt Logo'
            className='logoImage'
          />
          <span className='logoText'>EpoxyArt</span>
        </NavLink>

        <ul className={styles.menu}>
          <li>
            <NavLink to='/' className={styles.link}>
              Domov
            </NavLink>
          </li>
          <li>
            <NavLink to='/learn' className={styles.link}>
              Výuka
            </NavLink>
          </li>
          <li>
            <NavLink to='/gallery' className={styles.link}>
              Galéria
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
