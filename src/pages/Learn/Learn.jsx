import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Learn.module.scss';

const lessons = [
  {
    id: 1,
    title: 'Začíname',
    description: 'Prvé kroky pri práci s epoxidovou živicou',
    icon: '/images/icons/icon-start.png',
  },
  {
    id: 2,
    title: 'Bezpečnosť',
    icon: '/images/icons/icon-safety.png',
    description: 'Bezpečnostné opatrenia pri práci',
  },
  {
    id: 3,
    title: 'O živici',
    description: 'Základné informácie o epoxidovej živici a jej vlastnostiach',
    icon: '/images/icons/icon-resin.png',
  },
  {
    id: 4,
    title: 'Využitie',
    description: 'Rôzne spôsoby využitia epoxidovej živice',
    icon: '/images/icons/icon-surface.png',
  },
  {
    id: 5,
    title: 'Materiály',
    description: 'Všetko o materiáloch potrebných pre prácu',
    icon: '/images/icons/icon-materials.png',
  },
  {
    id: 6,
    title: 'Pracovné povrchy',
    description: 'Ako pripraviť povrch pred aplikáciou',
    icon: '/images/icons/icon-layouts.png',
  },
  {
    id: 7,
    title: 'Farbivá',
    description: 'Použitie farbív a pigmentov',
    icon: '/images/icons/icon-colors.png',
  },
  {
    id: 8,
    title: 'Bubliny',
    description: 'Ako predchádzať bublinám a odstraňovať ich',
    icon: '/images/icons/icon-bubbles.png',
  },

  {
    id: 9,
    title: 'Oprava chýb',
    description: 'Riešenie bežných problémov',
    icon: '/images/icons/icon-repair.png',
  },
];

const Learn = () => {
  return (
    <div className='container'>
      <h1 className={styles.title}>Výučbové lekcie</h1>
      <p className={styles.subtitle}>
        Kompletný návod pre začiatočníkov aj pokročilých
      </p>

      <div className={styles.lessonsGrid}>
        {lessons.map(lesson => (
          <div key={lesson.id} className={styles.lessonCard}>
            <div className={styles.lessonTitleIcon}>
              <h3>{lesson.title}</h3>
              <img
                src={lesson.icon}
                alt='icon-resin'
                className={styles.lessonIcon}
              />
            </div>
            <p className={styles.description}>{lesson.description}</p>
            <Link to={`/learn/${lesson.id}`} className={styles.lessonButton}>
              Začať lekciu
            </Link>
          </div>
        ))}
      </div>

      <div className={styles.backLink}>
        <Link to='/'>Späť na hlavnú stránku</Link>
      </div>
    </div>
  );
};

export default Learn;
