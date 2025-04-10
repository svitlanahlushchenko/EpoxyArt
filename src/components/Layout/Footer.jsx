import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#333',
        color: 'white',
        padding: '20px',
        marginTop: '50px',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
        }}
      >
        {/* Розділ контактів */}
        <div>
          <h3 style={{ color: '#3a7bd5' }}>Kontakt</h3>
          <p>Email: info@epoxyart.sk</p>
          <p>Telefón: +421 123 456 789</p>
        </div>

        {/* Розділ навігації */}
        <div>
          <h3 style={{ color: '#3a7bd5' }}>Rýchle odkazy</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '8px' }}>
              <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>
                Domov
              </Link>
            </li>
            <li style={{ marginBottom: '8px' }}>
              <Link
                to='/learn'
                style={{ color: 'white', textDecoration: 'none' }}
              >
                Výučba
              </Link>
            </li>
            <li style={{ marginBottom: '8px' }}>
              <Link
                to='/gallery'
                style={{ color: 'white', textDecoration: 'none' }}
              >
                Galéria
              </Link>
            </li>
          </ul>
        </div>

        {/* Розділ соціальних мереж */}
        <div>
          <h3 style={{ color: '#3a7bd5' }}>Sledujte nás</h3>
          <div
            style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}
          >
            <a href='https://facebook.com' style={{ color: 'white' }}>
              Facebook
            </a>
            <a href='https://instagram.com' style={{ color: 'white' }}>
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Копірайт */}
      <div
        style={{
          marginTop: '30px',
          paddingTop: '20px',
          borderTop: '1px solid #555',
        }}
      >
        <p>© {new Date().getFullYear()} EpoxyArt. Všetky práva vyhradené.</p>
      </div>
    </footer>
  );
};

export default Footer;
