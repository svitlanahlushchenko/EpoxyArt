import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';

const Home = () => {
  const benefits = [
    {
      title: '100% ručná práca',
      text: 'Každý kus je unikátny a vyrobený s maximálnou starostlivosťou',
      icon: '/images/icons/icon-handmade.png',
    },
    {
      title: 'Eko materiály',
      text: 'Používame šetrné zložky bez toxických látok',
      icon: '/images/icons/icon-eco.png',
    },
    {
      title: 'Dlhodobá výdrž',
      text: 'Výrobky odolné voči poškodeniu a vode',
      icon: '/images/icons/icon-safe.png',
    },
  ];

  const inspirationItems = [
    {
      name: 'ai-night-room.webp',
      title: 'Moderný epoxidový stôl',
      technique: 'Technika "rieka"',
    },
    {
      name: 'pendant.png',
      title: 'Šperky s kvetinami',
      technique: 'Inklúzie prírodných materiálov',
    },
    {
      name: 'ai-plate.webp',
      title: 'Dekoračné dosky',
      technique: 'Geometrické vzory',
    },
  ];

  return (
    <div className='container'>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Školenia práce s epoxidovou živicou pre každého</h1>
          <p className={styles.heroSubtitle}>
            Od základov po pokročilé techniky
          </p>
          <Link to='/learn' className={styles.ctaButton}>
            Pozrieť viac
          </Link>
        </div>
        <img
          src='/images/my-clock.jpg'
          alt='Ukážka epoxidového výrobku'
          className={styles.heroImage}
        />
      </section>

      {/* Benefits Section */}
      <section className={styles.benefits}>
        <h2>Výhody epoxidovej živice pre tvorivú prácu</h2>
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.benefitCard}>
              <img
                src={benefit.icon}
                alt={benefit.title}
                className={styles.benefitIcon}
              />
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Inspiration Section */}
      <section className={styles.inspiration}>
        <h2>Inšpiratívne nápady</h2>
        <p className={styles.sectionDescription}>
          Preskúmajte rôzne techniky a štýly pre vašu tvorbu
        </p>
        <div className={styles.galleryGrid}>
          {inspirationItems.map((item, index) => (
            <div key={index} className={styles.inspirationCard}>
              <img
                src={`/images/${item.name}`}
                alt={item.title}
                className={styles.galleryImage}
              />
              <div className={styles.imageOverlay}>
                <h3>{item.title}</h3>
                <p>{item.technique}</p>
              </div>
            </div>
          ))}
        </div>
        <Link to='/gallery' className={styles.secondaryButton}>
          Zobraziť viac nápadov
        </Link>
      </section>
    </div>
  );
};

export default Home;
