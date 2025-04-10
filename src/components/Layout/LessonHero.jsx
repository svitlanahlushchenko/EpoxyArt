import React from 'react';
import styles from './LessonHero.module.scss';

const LessonHero = ({
  title,
  description,
  backgroundImage = '/images/hero-photo.png',
}) => {
  return (
    <div
      className={styles.hero}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${backgroundImage})`,
      }}
    >
      <div className={styles.heroContent}>
        <h1>{title}</h1>
        <p className={styles.subtitle}>{description}</p>
      </div>
    </div>
  );
};

export default LessonHero;
