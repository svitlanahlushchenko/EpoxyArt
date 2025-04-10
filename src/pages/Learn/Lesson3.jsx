import React from 'react';
import { Link } from 'react-router-dom';
import LessonHero from '../../components/Layout/LessonHero';
import styles from './Lesson3.module.scss';

const Lesson3 = () => {
  const advantages = [
    {
      title: 'Vynikajúca priľnavosť',
      description:
        'Dokáže priľnúť k väčšine materiálov vrátane dreva, kovu, skla a plastu.',
    },
    {
      title: 'Odolnosť',
      description:
        'Vysoká odolnosť voči chemikáliám, vode a mechanickému opotrebeniu.',
    },
    {
      title: 'Estetika',
      description: 'Kryštálovo čistý povrch po vytvrdnutí, možnosť farbenia.',
    },
    {
      title: 'Žiadne zmršťovanie',
      description: 'Pri vytvrdzovaní takmer nemení objem.',
    },
  ];

  const characteristics = [
    {
      title: 'Viskozita',
      value: '200-1000 mPa·s (závisí od typu)',
    },
    {
      title: 'Čas vytvrdnutia',
      value: '24-72 hodín (plná pevnosť za 7 dní)',
    },
    {
      title: 'Teplota aplikácie',
      value: '15-25°C (ideálne podmienky)',
    },
    {
      title: 'Pomer miešania',
      value: '2:1 alebo 1:1 (podľa typu)',
    },
  ];

  return (
    <div className='container'>
      <div className='lessonContainer'>
        {/* Hero-секция */}
        <LessonHero
          title='Epoxidová živica: Vlastnosti a výhody'
          description='Komplexný prehľad materiálu a jeho možností'
        />

        {/* Основной контент */}
        <div className='content'>
          {/* Секция 1 */}
          <section className='section'>
            <h2>Čo je epoxidová živica?</h2>
            <div className='imageTextRow'>
              <img
                src='/images/epoxy-chemistry.png'
                alt='Chemická štruktúra epoxidovej živice'
                className='halfWidthImage'
              />
              <div>
                <p>
                  Epoxidová živica je syntetický polymer, ktorý po zmiešaní s
                  tvrdidlom prechádza chemickou reakciou - polymerizáciou, čím
                  sa mení z kvapalného stavu na pevný.
                </p>
                <p className='importantText'>
                  Hlavnou prednosťou oproti iným živiciam je jej výnimočná
                  mechanická pevnosť a chemická odolnosť.
                </p>
              </div>
            </div>
          </section>

          {/* Секция 2 */}
          <section className='section'>
            <h2>Hlavné výhody epoxidovej živice</h2>
            <div className={styles.advantagesGrid}>
              {advantages.map((advantage, index) => (
                <div key={index} className={styles.advantageCard}>
                  <h3>{advantage.title}</h3>
                  <p>{advantage.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Секция 3 */}
          <section className='section'>
            <h2>Technické charakteristiky</h2>
            <div className={styles.characteristicsTable}>
              {characteristics.map((item, index) => (
                <div key={index} className={styles.characteristicRow}>
                  <div className={styles.characteristicTitle}>{item.title}</div>
                  <div className={styles.characteristicValue}>{item.value}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Секция 4 */}
          <section className='section'>
            <h2>Porovnanie s inými živicami</h2>
            <div className={styles.comparison}>
              <div className={styles.comparisonHeader}>
                <div>Vlastnosť</div>
                <div>Epoxidová</div>
                <div>Polyesterová</div>
                <div>Poliuretánová</div>
              </div>
              <div className={styles.comparisonRow}>
                <div>Pevnosť</div>
                <div className={styles.best}>Vynikajúca</div>
                <div>Dobrá</div>
                <div>Stredná</div>
              </div>
              <div className={styles.comparisonRow}>
                <div>Odolnosť</div>
                <div className={styles.best}>Vynikajúca</div>
                <div>Stredná</div>
                <div>Dobrá</div>
              </div>
              <div className={styles.comparisonRow}>
                <div>Cena</div>
                <div>Vysoká</div>
                <div className={styles.best}>Nízka</div>
                <div>Stredná</div>
              </div>
            </div>
          </section>
        </div>

        {/* Навигация */}
        <div className='navigation'>
          <Link to='/learn/2' className='backButton'>
            ← Späť na lekciu: Bezpečnostné pravidlá
          </Link>
          <div className='buttonSpacer'></div>
          <Link to='/learn/4' className='nextButton'>
            Ďalšia lekcia: Využitie →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Lesson3;
