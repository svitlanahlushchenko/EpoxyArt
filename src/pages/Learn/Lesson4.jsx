import React from 'react';
import { Link } from 'react-router-dom';
import LessonHero from '../../components/Layout/LessonHero';
import styles from './Lesson4.module.scss';

const Lesson4 = () => {
  const applications = [
    {
      category: 'Umenie a dizajn',
      items: [
        {
          title: 'Obrazy a 3D umenie',
          description: 'Tvorba abstraktných obrazov, 3D efektov s predmetmi',
          image: '/images/art.png',
        },
        {
          title: 'Šperky',
          description: 'Náhrdelníky, náušnice, prstene s vloženými dekormi',
          image: '/images/jewelry.png',
        },
      ],
    },
    {
      category: 'Dizajn interiéru',
      items: [
        {
          title: 'Epoxidové podlahy',
          description: 'Odolné a estetické podlahové krytiny',
          image: '/images/floor.png',
        },
        {
          title: 'Jedálenské dosky',
          description: 'Unikátne kuchynské doplnky s drevenými vložkami',
          image: '/images/board.png',
        },
      ],
    },
    {
      category: 'Remeselníctvo',
      items: [
        {
          title: 'Nábytok',
          description: 'Moderné stoly, policové dosky s riečnymi efektmi',
          image: '/images/furniture.png',
        },
        {
          title: 'Dekoratívne predmety',
          description: 'Podložky pod poháre, hodiny, držiaky na kľúče',
          image: '/images/decor.png',
        },
      ],
    },
  ];

  return (
    <div className='container'>
      <div className='lessonContainer'>
        {/* Hero-секция */}
        <LessonHero
          title='Využitie epoxidovej živice'
          description='Rôzne spôsoby využitia v umení, dizajne a remeselníctve'
        />

        {/* Основной контент */}
        <div className='content'>
          {/* Введение */}
          <section className='section'>
            <h2>Univerzálny materiál pre rôzne projekty</h2>
            <div className='imageTextRow'>
              <img
                src='/images/epoxy-uses.png'
                alt='Využitie epoxidovej živice'
                className='halfWidthImage'
                loading='lazy'
              />
              <div>
                <p>
                  Epoxidová živica sa vďaka svojim unikátnym vlastnostiam
                  využíva v mnohých odvetviach. Jej schopnosť vytvoriť dokonale
                  hladký, trvanlivý a opticky čistý povrch otvára nekonečné
                  možnosti pre kreatívne projekty.
                </p>
                <p className='importantText'>
                  Pri výbere typu živice vždy zohľadnite konkrétne použitie -
                  nie všetky živice sú vhodné pre každý typ projektu.
                </p>
              </div>
            </div>
          </section>

          {/* Основные применения */}
          {applications.map((appCategory, index) => (
            <section key={index} className='section'>
              <h2>{appCategory.category}</h2>
              <div className={styles.applicationsGrid}>
                {appCategory.items.map((item, itemIndex) => (
                  <div key={itemIndex} className={styles.applicationCard}>
                    <div className={styles.applicationImageContainer}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className={styles.applicationImage}
                        loading='lazy'
                      />
                    </div>
                    <div className={styles.applicationContent}>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Советы по выбору */}
          <section className='section'>
            <h2>Ako vybrať správnu živicu pre váš projekt</h2>
            <div className={styles.twoColumns}>
              <div>
                <h3>Kritériá výberu</h3>
                <ul className='list'>
                  <li>
                    <strong>Hrúbka vrstvy:</strong> Pre hrubé odliatky špeciálne
                    typy
                  </li>
                  <li>
                    <strong>Čas vytvrdzovania:</strong> Rýchloschnúce vs. pomalé
                    typy
                  </li>
                  <li>
                    <strong>Farebné efekty:</strong> Prímesi a farby
                    kompatibilné s živicou
                  </li>
                </ul>
              </div>
              <div>
                <h3>Odporúčané značky</h3>
                <ul className='list'>
                  <li>
                    <strong>Pre umenie:</strong> ArtResin, Crystal Resin
                  </li>
                  <li>
                    <strong>Pre nábytok:</strong> ProMarine, Stone Coat
                  </li>
                  <li>
                    <strong>Pre šperky:</strong> EasyCast, Puduo
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Навигация */}
        <div className='navigation'>
          <Link to='/learn/3' className='backButton'>
            ← Späť na lekciu: O živici
          </Link>
          <div className='buttonSpacer'></div>
          <Link to='/learn/5' className='nextButton'>
            Ďalšia lekcia: Materiály →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Lesson4;
