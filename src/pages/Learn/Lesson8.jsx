import React from 'react';
import { Link } from 'react-router-dom';
import LessonHero from '../../components/Layout/LessonHero';
import styles from './Lesson8.module.scss';

const Lesson8 = () => {
  const preventionMethods = [
    {
      title: 'Pomalé miešanie',
      description: 'Miešajte živicu pomalými kruhovými pohybmi',
      image: '/images/slow-mixing.png',
      tips: 'Použite širokú miešaciu tyčinku',
    },
    {
      title: 'Odstávenie po miešaní',
      description: 'Nechajte živicu 2-3 minúty odstáť pred aplikáciou',
      image: '/images/resting-resin.png',
      tips: 'Ideálna teplota 20-25°C',
    },
    {
      title: 'Vhodná teplota',
      description: 'Pracujte pri teplote 20-25°C',
      image: '/images/temp-control.png',
      tips: 'Použite vyhrievanú podložku v chladnom prostredí',
    },
  ];

  const removalTechniques = [
    {
      title: 'Teplovzdušná pištoľ',
      description: 'Jemné ohrievanie povrchu živice',
      image: '/images/heat-gun.png',
      steps: [
        'Držte pištoľ 15-20 cm od povrchu',
        'Pohybujte sa v kruhových pohyboch',
        'Neprehrievajte jednotlivé miesta',
      ],
    },
    {
      title: 'Lievik',
      description: 'Odstraňovanie bublín špeciálnym lievikom',
      image: '/images/resin-torch.png',
      steps: [
        'Držte lievik 5-7 cm od povrchu',
        'Krátke pulzy 1-2 sekundy',
        'Pracujte rýchlo po celom povrchu',
      ],
    },
    {
      title: 'Vákumová komora',
      description: 'Odstránenie bublín podtlakom',
      image: '/images/vacuum-chamber.png',
      steps: [
        'Nalejte živicu do nádoby s rezervou',
        'Vytvorte podtlak 0.8-0.9 bar',
        'Udržujte 2-3 minúty',
      ],
    },
  ];

  const problemCases = [
    {
      problem: 'Bubliny po vytvrdnutí',
      image: '/images/bubbles-after-cure.png',
      causes: [
        'Príliš rýchle miešanie',
        'Nízka teplota prostredia',
        'Hlboké bubliny neodstránené',
      ],
      solutions: [
        'Dodatočné brúsenie a leštenie',
        'Aplikácia tenkej vrchnej vrstvy',
        'Použitie penetračného náteru',
      ],
    },
    {
      problem: 'Bubliny na povrchu',
      image: '/images/surface-bubbles.png',
      causes: [
        'Nedostatočné odstraňovanie',
        'Vysoká vlhkosť vzduchu',
        'Príliš hrubá vrstva',
      ],
      solutions: [
        'Opätovné prejdenie teplovzdušnou pištoľou',
        'Aplikácia rozprašovacieho laku',
        'Použitie tenších vrstiev',
      ],
    },
  ];

  return (
    <div className='container'>
      <div className='lessonContainer'>
        <LessonHero
          title='Bubliny v epoxidovej živici'
          description='Ako predchádzať bublinám a efektívne ich odstraňovať'
        />

        <div className='content'>
          {/* Úvod */}
          <section className='section'>
            <h2>Prečo vznikajú bubliny?</h2>
            <div className='imageTextRow'>
              <img
                src='/images/common-issues.png'
                alt='Tvorba bublín'
                className='halfWidthImage'
              />
              <div>
                <p>
                  Bubliny sú častým problémom pri práci s epoxidovou živicou.
                  Vznikajú počas miešania, chemickej reakcie alebo pri aplikácii
                  na povrch. Porozumenie ich vzniku je kľúčom k efektívnej
                  prevencii.
                </p>
                <p className='importantText'>
                  Malé bubliny sú prirodzenou súčasťou procesu, ale správnymi
                  technikami ich môžete minimalizovať.
                </p>
              </div>
            </div>
          </section>

          {/* Prevencia */}
          <section className='section'>
            <h2>Metódy prevencie bublín</h2>
            <div className={styles.methodsGrid}>
              {preventionMethods.map((method, index) => (
                <div key={index} className={styles.methodCard}>
                  <div className={styles.methodImageContainer}>
                    <img
                      src={method.image}
                      alt={method.title}
                      className={styles.methodImage}
                    />
                  </div>
                  <div className={styles.methodContent}>
                    <h3>{method.title}</h3>
                    <p>{method.description}</p>
                    <div className={styles.methodTip}>
                      <strong>Tip: </strong>
                      {method.tips}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Odstraňovanie */}
          <section className='section'>
            <h2>Techniky odstraňovania bublín</h2>
            <div className={styles.techniquesGrid}>
              {removalTechniques.map((tech, index) => (
                <div key={index} className={styles.techCard}>
                  <div className={styles.techImageContainer}>
                    <img
                      src={tech.image}
                      alt={tech.title}
                      className={styles.techImage}
                    />
                  </div>
                  <div className={styles.techContent}>
                    <h3>{tech.title}</h3>
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

          {/* Problémové prípady */}
          <section className='section'>
            <h2>Riešenie špecifických problémov</h2>
            <div className={styles.problemsGrid}>
              {problemCases.map((problem, index) => (
                <div key={index} className={styles.problemCard}>
                  <div className={styles.problemImageContainer}>
                    <img
                      src={problem.image}
                      alt={problem.problem}
                      className={styles.problemImage}
                    />
                    <h3>{problem.problem}</h3>
                  </div>
                  <div className={styles.problemSolution}>
                    <div className={styles.solutionColumn}>
                      <h4>Príčiny:</h4>
                      <ul>
                        {problem.causes.map((cause, i) => (
                          <li key={i}>{cause}</li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles.solutionColumn}>
                      <h4>Riešenia:</h4>
                      <ul>
                        {problem.solutions.map((solution, i) => (
                          <li key={i}>{solution}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Tipy */}
          <section className='section'>
            <h2>Pokročilé tipy a triky</h2>
            <div className={styles.tipsContainer}>
              <div className={styles.tipCard}>
                <img
                  src='/images/alcohol-spray.png'
                  alt='Postrek alkoholom'
                  className={styles.tipImage}
                />
                <div className={styles.tipContent}>
                  <h3>Postrek izopropylalkoholom</h3>
                  <p>
                    Jemný postrek alkoholom pomáha prasknúť bubliny na povrchu.
                    Použite rozprašovač s jemným rozptylom a alkohol s
                    koncentráciou 70-90%.
                  </p>
                </div>
              </div>
              <div className={styles.tipCard}>
                <img
                  src='/images/thin-layers.png'
                  alt='Tenké vrstvy'
                  className={styles.tipImage}
                />
                <div className={styles.tipContent}>
                  <h3>Aplikácia tenkých vrstiev</h3>
                  <p>
                    Namiesto jednej hrubej vrstvy aplikujte viacero tenkých
                    (2-3mm). Každú vrstvu nechajte čiastočne vytvrdnúť pred
                    aplikáciou ďalšej.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Navigation */}
        <div className='navigation'>
          <Link to='/learn/7' className='backButton'>
            ← Späť na lekciu: Farbivá
          </Link>
          <div className='buttonSpacer'></div>
          <Link to='/learn/9' className='nextButton'>
            Ďalšia lekcia: Oprava chýb →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Lesson8;
