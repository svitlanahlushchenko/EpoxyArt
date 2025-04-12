import React from 'react';
import { Link } from 'react-router-dom';
import LessonHero from '../../components/Layout/LessonHero';
import styles from './Lesson9.module.scss';

const Lesson9 = () => {
  const commonProblems = [
    {
      title: 'Nedostatočné vytvrdnutie',
      image: '/images/uncured-resin..png',
      symptoms: [
        'Živica zostáva lepkavá',
        'Mäkký povrch po 24 hodinách',
        'Viditeľné nerovnomernosti',
      ],
      causes: [
        'Nesprávny pomer zložiek',
        'Nízka teplota prostredia',
        'Príliš hrubá vrstva',
      ],
      solutions: [
        'Skontrolujte presnosť miešania',
        'Zvýšte teplotu na 22-25°C',
        'Odstráňte a naneste novú vrstvu',
      ],
    },
    {
      title: 'Žltnutie živice',
      image: '/images/yellowing-resin.png',
      symptoms: [
        'Žltý náter po čase',
        'Stratá priehľadnosť',
        'Nerovnomerné zafarbenie',
      ],
      causes: [
        'Vystavenie UV žiareniu',
        'Nekvalitná živica',
        'Reakcia s pigmentmi',
      ],
      solutions: [
        'Použite UV stabilizátory',
        'Vymeňte za kvalitnejšiu živicu',
        'Aplikujte UV ochranný lak',
      ],
    },
    {
      title: 'Oddeľovanie od povrchu',
      image: '/images/delamination.png',
      symptoms: [
        'Praskliny na okrajoch',
        'Odlupovanie živice',
        'Vzduchové vrstvy',
      ],
      causes: [
        'Nedostatočná príprava povrchu',
        'Kontaminácia povrchu',
        'Príliš rýchle vytvrdzovanie',
      ],
      solutions: [
        'Dôkladne obrústeť a odmastiť',
        'Použite primer pre epoxid',
        'Aplikujte tenšie vrstvy',
      ],
    },
  ];

  const repairTechniques = [
    {
      title: 'Oprava nedostatočného vytvrdnutia',
      image: '/images/repair-uncured.png',
      steps: [
        'Odstráňte nezatvrdnutú časť',
        'Dôkladne vyčistite povrch',
        'Naneste novú vrstvu živice',
        'Použite presný pomer zložiek',
      ],
      tools: ['Špachtľa', 'Stierka', 'Čistiace prostriedky'],
    },
    {
      title: 'Oprava žltnutia',
      image: '/images/repair-yellowing.png',
      steps: [
        'Jemne obrústeť povrch',
        'Aplikujte číru ochrannú vrstvu',
        'Pridajte UV stabilizátor',
        'Použite kvalitnejšiu živicu',
      ],
      tools: ['Brúsny papier 400-600', 'UV lak', 'Čistá živica'],
    },
    {
      title: 'Oprava odlupovania',
      image: '/images/repair-delamination.png',
      steps: [
        'Odstráňte odlupujúce sa časti',
        'Aplikujte adhézny primer',
        'Naneste novú vrstvu živice',
        'Nechajte pomalšie tvrdnúť',
      ],
      tools: ['Primer', 'Štetec', 'Teplovzdušná pištoľ'],
    },
  ];

  const preventionTips = [
    {
      title: 'Správne podmienky',
      tips: [
        'Teplota 20-25°C',
        'Vlhkosť pod 60%',
        'Stabilné prostredie bez prievanov',
      ],
    },
    {
      title: 'Kvalitné materiály',
      tips: ['Overené značky živíc', 'Čerstvé zložky', 'Kompatibilné pigmenty'],
    },
    {
      title: 'Testovanie',
      tips: [
        'Vždy testujte na malom vzorke',
        'Skúšajte nové techniky',
        'Vedzte si záznamy o pomeroch',
      ],
    },
  ];

  return (
    <div className='container'>
      <div className='lessonContainer'>
        <LessonHero
          title='Oprava chýb v epoxidovej živici'
          description='Riešenie bežných problémov a ako im predchádzať'
        />

        <div className='content'>
          {/* Úvod */}
          <section className='section'>
            <h2>Bežné problémy a ich identifikácia</h2>
            <div className='imageTextRow'>
              <img
                src='/images/bezne_problemy.png'
                alt='Bežné problémy'
                className='halfWidthImage'
                loading='lazy'
              />
              <div>
                <p>
                  Práca s epoxidovou živicou môže priniesť rôzne výzvy. Včasné
                  rozpoznanie problému a správny postup opravy môžu zachrániť
                  váš projekt pred úplným zničením.
                </p>
                <p className='importantText'>
                  Väčšinu chýb je možné opraviť, ale prevencia je vždy lepšia
                  ako oprava!
                </p>
              </div>
            </div>
          </section>

          {/* Bežné problémy */}
          <section className='section'>
            <h2>Najčastejšie problémy</h2>
            <div className={styles.problemsGrid}>
              {commonProblems.map((problem, index) => (
                <div key={index} className={styles.problemCard}>
                  <div className={styles.problemImageContainer}>
                    <img
                      src={problem.image}
                      alt={problem.title}
                      className={styles.problemImage}
                      loading='lazy'
                    />
                    <h3>{problem.title}</h3>
                  </div>
                  <div className={styles.problemDetails}>
                    <div className={styles.detailColumn}>
                      <h4>Príznaky:</h4>
                      <ul>
                        {problem.symptoms.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles.detailColumn}>
                      <h4>Príčiny:</h4>
                      <ul>
                        {problem.causes.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles.detailColumn}>
                      <h4>Riešenia:</h4>
                      <ul>
                        {problem.solutions.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Techniky opravy */}
          <section className='section'>
            <h2>Postupy opravy</h2>
            <div className={styles.techniquesGrid}>
              {repairTechniques.map((tech, index) => (
                <div key={index} className={styles.techCard}>
                  <div className={styles.techImageContainer}>
                    <img
                      src={tech.image}
                      alt={tech.title}
                      className={styles.techImage}
                      loading='lazy'
                    />
                  </div>
                  <div className={styles.techContent}>
                    <h3>{tech.title}</h3>
                    <div className='techSteps'>
                      <h4>Kroky:</h4>
                      <ol>
                        {tech.steps.map((step, i) => (
                          <li key={i}>{step}</li>
                        ))}
                      </ol>
                    </div>
                    <div className={styles.techTools}>
                      <h4>Potrebné nástroje:</h4>
                      <ul>
                        {tech.tools.map((tool, i) => (
                          <li key={i}>{tool}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Prevencia */}
          <section className='section'>
            <h2>Ako predchádzať problémom</h2>
            <div className={styles.preventionGrid}>
              {preventionTips.map((tip, index) => (
                <div key={index} className={styles.tipCard}>
                  <div className={styles.tipImageContainer}></div>
                  <div className={styles.tipContent}>
                    <h3>{tip.title}</h3>
                    <ul>
                      {tip.tips.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Záver */}
          <section className='section'>
            <h2>Záverečné rady</h2>
            <div className={styles.finalTips}>
              <div className={styles.finalTip}>
                <div>
                  <h3>Trpezlivosť je kľúč</h3>
                  <p>
                    Väčšina problémov s epoxidom vzniká z unáhlenosti. Dajte si
                    čas na prípravu, presné odmeranie a dodržte odporúčaný čas
                    vytvrdzovania.
                  </p>
                </div>
              </div>
              <div className={styles.finalTip}>
                <div>
                  <h3>Učte sa z chýb</h3>
                  <p>
                    Každý neúspech je príležitosťou naučiť sa niečo nové.
                    Vedecký prístup a dokumentácia vašich pokusov vám pomôžu
                    zlepšovať sa.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Navigation */}
        <div className='navigation'>
          <Link to='/learn/8' className='backButton'>
            ← Späť na lekciu: Bubliny
          </Link>
          <div className='buttonSpacer'></div>
          <Link to='/learn' className='nextButton'>
            Späť na prehľad lekcií →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Lesson9;
