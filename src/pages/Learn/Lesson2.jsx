import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Lesson2.module.scss';
import LessonHero from '../../components/Layout/LessonHero';

const Lesson2 = () => {
  return (
    <div className='container'>
      <div className='lessonContainer'>
        {/* Hero-секция */}
        <LessonHero
          title='Bezpečnostné pravidlá pri práci s epoxidovou živicou'
          description='Ako chrániť seba a svoje okolie'
        />

        {/* Основний вміст */}
        <div className='content'>
          {/* Секція 1 */}
          <section className='section'>
            <h2>1. Osobné ochranné pomôcky</h2>
            <div className='imageTextRow'>
              <img
                src='/images/safety-gear.png'
                alt='Ochranné pomôcky'
                className='halfWidthImage'
                loading='lazy'
              />
              <div>
                <p className='importantText'>
                  Nikdy nepracujte s živicou bez základnej ochrany!
                </p>
                <ul className='list'>
                  <li>
                    <strong>Respirátor</strong> - certifikovaný FFP2 alebo
                    lepší, výmena každých 2 hodín
                  </li>
                  <li>
                    <strong>Nitrile rukavice</strong> - odolné voči chemikáliám,
                    bez latexu
                  </li>
                  <li>
                    <strong>Ochranné okuliare</strong> - kryjúce celé oči
                  </li>
                  <li>
                    <strong>Zástera alebo plášť</strong> - z nepremokavého
                    materiálu
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Секція 2 */}
          <section className='section'>
            <h2>2. Bezpečná príprava priestoru</h2>
            <div className='detailedSteps'>
              <div className={styles.step}>
                <h3>Vetranie</h3>
                <p>
                  <strong>Minimálne požiadavky:</strong> 10 výmen vzduchu za
                  hodinu
                  <br />
                  <strong>Riešenie:</strong> Prúdiaci vzduch cez otvorené okná +
                  odsávač pár
                  <br />
                  <strong>Test:</strong> Ak cítiť zápach, vetranie je
                  nedostatočné
                </p>
              </div>

              <div className={styles.step}>
                <h3>Povrchy a usporiadanie</h3>
                <p>
                  <strong>Pracovná plocha:</strong> Krytá nepremokavou fóliou
                  <br />
                  <strong>Usporiadanie:</strong> Všetky nástroje po ruke,
                  chemikálie stabilne
                  <br />
                  <strong>Bezpečná zóna:</strong> Minimálne 3m od pracoviska pre
                  jedlo/nápoje
                </p>
              </div>

              <div className={styles.step}>
                <h3>Núdzové vybavenie</h3>
                <p>
                  <strong>Povinné:</strong> Prvá pomoc, očné výplachové
                  prostriedky
                  <br />
                  <strong>Odstraňovanie:</strong> Absorbenty pre živice,
                  nehorľavý odpadkový kôš
                  <br />
                  <strong>Hasiaci prístroj:</strong> Chemický práškový typ ABC
                </p>
              </div>
            </div>
          </section>

          {/* Секція 3 */}
          <section className='section'>
            <h2>3. Práca s chemikáliami a čistenie</h2>
            <div className={styles.twoColumns}>
              <div>
                <h3>Bezpečné postupy:</h3>
                <ul className='list'>
                  <li>
                    <strong>Nekontaminácia:</strong> Nikdy nevracejte premiešanú
                    živicu späť do nádoby
                  </li>
                  <li>
                    <strong>Teplota:</strong> Skladujte pri 15-25°C, nikdy
                    neohrievajte priamo
                  </li>
                  <li>
                    <strong>Reakcia:</strong> Ak dôjde k prehriatiu, okamžite
                    opustite priestor
                  </li>
                </ul>
              </div>
              <div>
                <h3>Čistenie a likvidácia:</h3>
                <ul className='list'>
                  <li>
                    <strong>Nástroje:</strong> Čistite acetónom hneď po použití
                  </li>
                  <li>
                    <strong>Odpady:</strong> Tvrdnutý odpad - normálny kôš,
                    tekutý - nebezpečný odpad
                  </li>
                  <li>
                    <strong>Kontaminované textílie:</strong> Likvidujte ako
                    nebezpečný odpad
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Навігація */}
        <div className='navigation'>
          <Link to='/learn/1' className='backButton'>
            ← Späť na lekciu: Prvé kroky
          </Link>
          <div className='buttonSpacer'></div>
          <Link to='/learn/3' className='backButton'>
            Ďalšia lekcia: O živici →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Lesson2;
