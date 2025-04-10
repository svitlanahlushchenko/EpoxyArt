import React from 'react';
import { Link } from 'react-router-dom';
import LessonHero from '../../components/Layout/LessonHero';
import styles from './Lesson6.module.scss';

const Lesson6 = () => {
  const surfaceTypes = [
    {
      type: 'Drevo',
      preparation: [
        'Dôkladne obrústeť (zrnosť 120-180)',
        'Odstrániť prach a mastnotu',
        'Aplikovať základný náter pre epoxid',
      ],
      tips: 'Vlhkosť dreva by nemala presiahnuť 10%',
    },
    {
      type: 'Kov',
      preparation: [
        'Odstrániť oxidy brúsením',
        'Odmaštiť technickým liehom',
        'Zmatniť povrch jemným brúsením',
      ],
      tips: 'Nepoužívať silikónové odmašťovače',
    },
    {
      type: 'Plasty',
      preparation: [
        'Zmatniť povrch jemným brúskom',
        'Odstrániť statickú elektrinu',
        'Aplikovať špeciálny primer',
      ],
      tips: 'Vyskúšajte kompatibilitu na malom kúsku',
    },
    {
      type: 'Sklo',
      preparation: [
        'Odstrániť mastnotu čističom skla',
        'Aplikovať odlučovací prostriedok',
        'Ohreť na 30-35°C pre lepšiu adhéziu',
      ],
      tips: 'Použiť špeciálnu živicu pre sklo',
    },
  ];

  const commonProblems = [
    {
      problem: 'Nepriľnavosť',
      cause: 'Nedostatočná úprava povrchu',
      solution: 'Dôkladne odmastiť a obrúsiť',
    },
    {
      problem: 'Vzduchové bubliny',
      cause: 'Pórovitý povrch',
      solution: 'Použiť penetračný náter',
    },
    {
      problem: 'Nerovnomerné vytvrdnutie',
      cause: 'Rôzna teplota povrchu',
      solution: 'Predhriať celý povrch rovnomerne',
    },
  ];

  return (
    <div className='container'>
      <div className='lessonContainer'>
        <LessonHero
          title='Pracovné povrchy'
          description='Ako pripraviť povrch pred aplikáciou epoxidovej živice'
        />

        <div className='content'>
          {/* Úvodná sekcia */}
          <section className='section'>
            <h2>Základy prípravy povrchu</h2>
            <div className='imageTextRow'>
              <img
                src='/images/surface-preparation.png'
                alt='Príprava povrchu'
                className='halfWidthImage'
              />
              <div>
                <p>
                  Správna príprava povrchu je kľúčom k dokonalej adhézii a
                  trvanlivosti epoxidového náteru. Zanedbanie tohto kroku môže
                  viesť k odlupovaniu, bublinám a iným chybám.
                </p>
                <p className='importantText'>
                  Čas strávený prípravou povrchu sa mnohonásobne vráti v kvalite
                  výsledného produktu.
                </p>
              </div>
            </div>
          </section>

          {/* Typy povrchov */}
          <section className='section'>
            <h2>Príprava rôznych typov povrchov</h2>
            <div className={styles.surfaceGrid}>
              {surfaceTypes.map((surface, index) => (
                <div key={index} className={styles.surfaceCard}>
                  <h3>{surface.type}</h3>
                  <ul className={styles.preparationList}>
                    {surface.preparation.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ul>
                  <div className={styles.tipBox}>
                    <strong>Tip: </strong>
                    {surface.tips}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Nátery a priming */}
          <section className='section'>
            <h2>Špeciálne nátery a priming</h2>
            <div className={styles.twoColumns}>
              <div>
                <h3>Typy základových náterov</h3>
                <ul className={styles.list}>
                  <li>
                    <strong>Penetračné:</strong> Pre pórovité povrchy ako betón
                  </li>
                  <li>
                    <strong>Adhézne:</strong> Pre hladké povrchy ako sklo a kov
                  </li>
                  <li>
                    <strong>Vyrovnávacie:</strong> Pre nerovné drevené povrchy
                  </li>
                </ul>
              </div>
              <div>
                <h3>Aplikačné techniky</h3>
                <ul className={styles.list}>
                  <li>Štetcom pre malé plochy</li>
                  <li>Valčekom pre stredné plochy</li>
                  <li>Airless striekaním pre veľké plochy</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Problémy a riešenia */}
          <section className='section'>
            <h2>Bežné problémy a ich riešenia</h2>
            <div className={styles.problemsTable}>
              <div className={styles.tableHeader}>
                <div>Problém</div>
                <div>Príčina</div>
                <div>Riešenie</div>
              </div>
              {commonProblems.map((item, index) => (
                <div key={index} className={styles.tableRow}>
                  <div>
                    <strong>{item.problem}</strong>
                  </div>
                  <div>{item.cause}</div>
                  <div>{item.solution}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Kontrola kvality */}
          <section className='section'>
            <h2>Kontrola kvality povrchu</h2>
            <div className={styles.qualityCheck}>
              <div className={styles.checkItem}>
                <h3>Test čistoty</h3>
                <p>Použite bielu utierku - po prejdení musí zostať čistá</p>
              </div>
              <div className={styles.checkItem}>
                <h3>Test adhézie</h3>
                <p>Lepiaca páska by nemala odtrhnúť náter</p>
              </div>
              <div className={styles.checkItem}>
                <h3>Test vlhkosti</h3>
                <p>Vlhkosť dreva ≤10%, betónu ≤4%</p>
              </div>
            </div>
          </section>
        </div>

        {/* Navigation */}
        <div className='navigation'>
          <Link to='/learn/5' className='backButton'>
            ← Späť na lekciu: Materiály
          </Link>
          <div className='buttonSpacer'></div>
          <Link to='/learn/7' className='nextButton'>
            Ďalšia lekcia: Farbivá →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Lesson6;
