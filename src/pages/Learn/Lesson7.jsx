import React from 'react';
import { Link } from 'react-router-dom';
import LessonHero from '../../components/Layout/LessonHero';
import styles from './Lesson7.module.scss';

const Lesson7 = () => {
  const colorTypes = [
    {
      category: 'Liquidké pigmenty',
      image: '/images/alcohol-colors.png',
      items: [
        {
          name: 'Alkoholové farby',
          image: '/images/alcohol-ink.png',
          description: 'Vysoko koncentrované, vhodné pre jemné prechody',
          usage: '3-5% objemu živice',
          pros: 'Vynikajúca rozpustnosť, jemné prechody',
          cons: 'Môžu spôsobiť rýchlejšie tvrdnutie',
        },
        {
          name: 'Vodou riediteľné farby',
          image: '/images/water-colors.png',
          description: 'Lahko použiteľné, dostupné v širokej škále',
          usage: '5-10% objemu živice',
          pros: 'Dostupné, ľahké na miešanie',
          cons: 'Môžu vytvárať bubliny',
        },
      ],
    },
    {
      category: 'Pevné pigmenty',
      image: '/images/powder-pigments.png',
      items: [
        {
          name: 'Metalické prášky',
          image: '/images/metal-powder.png',
          description: 'Vytvárajú efekt kovového lesku',
          usage: '0.5-2% objemu živice',
          pros: 'Intenzívny lesk, stabilita',
          cons: 'Tendencia k sedimentácii',
        },
        {
          name: 'Perletové pigmenty',
          image: '/images/pearl-pigments.png',
          description: 'Vytvárajú duhové efekty a odlesky',
          usage: '1-3% objemu živice',
          pros: 'Unikátne optické efekty',
          cons: 'Nerovnomerné rozloženie',
        },
      ],
    },
    {
      category: 'Špeciálne efekty',
      image: '/images/special-effects.png',
      items: [
        {
          name: 'Fosforeskujúce pigmenty',
          image: '/images/glow-pigments.png',
          description: 'Svetielkujú v tme po nabití svetlom',
          usage: '10-20% objemu živice',
          pros: 'Dramatický vizuálny efekt',
          cons: 'Vyžadujú vysokú koncentráciu',
        },
        {
          name: 'Termochromné pigmenty',
          image: '/images/thermo-pigments.png',
          description: 'Menia farbu podľa teploty',
          usage: '5-15% objemu živice',
          pros: 'Interaktívny efekt',
          cons: 'Obmedzená životnosť',
        },
      ],
    },
  ];

  const mixingTechniques = [
    {
      name: 'Swirl technika',
      image: '/images/swirl-tech.png',
      description: 'Jemné premiešanie farieb pre efekt mramoru',
      steps: [
        'Pripravte si jednotlivé farebné nádoby',
        'Nalievať súčasne do hlavnej nádoby',
        'Premiešajte špáradlom jemnými pohybmi',
      ],
    },
    {
      name: 'Dirty pour',
      image: '/images/dirty-pour.png',
      description: 'Vrstvenie farieb v jednej nádobe pred vyliatím',
      steps: [
        'Nalievať farby vrstvy do jednej nádoby',
        'Nechajte ich čiastočne premiešať gravitáciou',
        'Vylejte na povrch jedným pohybom',
      ],
    },
    {
      name: 'Cells technika',
      image: '/images/cells-tech.png',
      description: 'Vytváranie bunkových štruktúr',
      steps: [
        'Použite silikónový olej (1-2 kvapky na farbu)',
        'Premiešajte špáradlom hore-dole',
        'Nechajte bunkám čas sa vytvoriť',
      ],
    },
  ];

  const problemSolving = [
    {
      problem: 'Farba bledne po vytvrdnutí',
      causes: [
        'Príliš nízka koncentrácia pigmentu',
        'Nekompatibilita farbiva s živicou',
        'Nesprávny pomer zložiek',
      ],
      solutions: [
        'Zvýšte množstvo pigmentu',
        'Vyskúšajte iný typ farbiva',
        'Presne dodržte návod na miešanie',
      ],
    },
    {
      problem: 'Nerovnomerné rozloženie pigmentu',
      causes: [
        'Nedostatočné miešanie',
        'Príliš rýchle tvrdnutie',
        'Nesprávna viskozita',
      ],
      solutions: [
        'Dôkladnejšie premiešajte',
        'Použite živicu s dlhším časom vytvrdzovania',
        'Upravte teplotu pracovného prostredia',
      ],
    },
  ];

  return (
    <div className='container'>
      <div className='lessonContainer'>
        <LessonHero
          title='Farbivá a pigmenty'
          description='Komplexný sprievodca používaním farbív v epoxidovej živici'
        />

        <div className='content'>
          {/* Úvod */}
          <section className='section'>
            <h2>Základy farbenia epoxidovej živice</h2>
            <div className='imageTextRow'>
              <img
                src='/images/coloring-basics.png'
                alt='Základy farbenia'
                loading='lazy'
                className='halfWidthImage'
              />
              <div>
                <p>
                  Farbenie epoxidovej živice otvára nekonečné možnosti
                  kreatívneho vyjadrenia. Správny výber pigmentov a techník
                  miešania môže dramaticky ovplyvniť výsledný efekt.
                </p>
                <p className='importantText'>
                  Nikdy nepresahujte odporúčané množstvo farbiva - mohlo by to
                  narušiť proces vytvrdzovania!
                </p>
              </div>
            </div>
          </section>

          {/* Typy farbív с изображениями */}
          {colorTypes.map((category, index) => (
            <section key={index} className='section'>
              <div className={styles.categoryHeader}>
                <h2>{category.category}</h2>
                <img
                  src={category.image}
                  alt={category.category}
                  loading='lazy'
                  className={styles.categoryImage}
                />
              </div>
              <div className={styles.colorGrid}>
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className={styles.colorCard}>
                    <div className={styles.colorImageContainer}>
                      <img
                        src={item.image}
                        alt={item.name}
                        loading='lazy'
                        className={styles.colorImage}
                      />
                    </div>
                    <div className={styles.colorContent}>
                      <h3>{item.name}</h3>
                      <p className={styles.description}>{item.description}</p>
                      <div className={styles.details}>
                        <div className={styles.detailItem}>
                          <strong>Odporúčané množstvo:</strong> {item.usage}
                        </div>
                        <div className={styles.detailItem}>
                          <strong>Výhody:</strong> {item.pros}
                        </div>
                        <div className={styles.detailItem}>
                          <strong>Nevýhody:</strong> {item.cons}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Techniky miešania с изображениями */}
          <section className='section'>
            <h2>Populárne techniky miešania farieb</h2>
            <div className={styles.techniquesGrid}>
              {mixingTechniques.map((tech, index) => (
                <div key={index} className={styles.techniqueCard}>
                  <div className={styles.techImageContainer}>
                    <img
                      src={tech.image}
                      alt={tech.name}
                      loading='lazy'
                      className={styles.techImage}
                    />
                  </div>
                  <div className={styles.techContent}>
                    <h3>{tech.name}</h3>
                    <p>{tech.description}</p>
                    <div className='techSteps'>
                      <h4>Postup:</h4>
                      <ol>
                        {tech.steps.map((step, i) => (
                          <li key={i}>{step}</li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Farby a teplota */}
          <section className='section'>
            <h2>Vplyv teploty na farbenie</h2>
            <div className={styles.twoColumns}>
              <div>
                <h3>Nízka teplota (15-20°C)</h3>
                <ul className='list'>
                  <li>Pomalšie tvrdnutie</li>
                  <li>Väčšia šanca na sedimentáciu</li>
                  <li>Jemnejšie prechody farieb</li>
                </ul>
              </div>
              <div>
                <h3>Vysoká teplota (25-30°C)</h3>
                <ul className='list'>
                  <li>Rýchlejšie tvrdnutie</li>
                  <li>Lepšie rozptýlenie pigmentov</li>
                  <li>Výraznejšie bunkové efekty</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Problémy a riešenia */}
          <section className='section'>
            <h2>Riešenie problémov s farbivami</h2>
            <div className={styles.problemsContainer}>
              {problemSolving.map((item, index) => (
                <div key={index} className={styles.problemCard}>
                  <h3 className={styles.problemTitle}>{item.problem}</h3>
                  <div className={styles.solutionColumns}>
                    <div>
                      <h4>Príčiny:</h4>
                      <ul>
                        {item.causes.map((cause, i) => (
                          <li key={i}>{cause}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4>Riešenia:</h4>
                      <ul>
                        {item.solutions.map((solution, i) => (
                          <li key={i}>{solution}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Bezpečnosť */}
          <section className='section'>
            <h2>Bezpečnostné pokyny</h2>
            <div className={styles.safetyGrid}>
              <div className={styles.safetyCard}>
                <h3>Osobná ochrana</h3>
                <ul>
                  <li>Vždy používajte rukavice</li>
                  <li>Respirátor pri práci s práškovými pigmentmi</li>
                  <li>Ochranné okuliare pri miešaní</li>
                </ul>
              </div>
              <div className={styles.safetyCard}>
                <h3>Skladovanie</h3>
                <ul>
                  <li>Uchovávajte v chlade a suchu</li>
                  <li>Chráňte pred priamym slnečným žiarením</li>
                  <li>Udržiavajte pôvodné obaly tesne uzavreté</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Navigation */}
        <div className='navigation'>
          <Link to='/learn/6' className='backButton'>
            ← Späť na lekciu: Pracovné povrchy
          </Link>
          <div className='buttonSpacer'></div>
          <Link to='/learn/8' className='nextButton'>
            Ďalšia lekcia: Bubliny →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Lesson7;
