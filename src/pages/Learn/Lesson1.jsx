import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Lesson1.module.scss';
import LessonHero from '../../components/Layout/LessonHero';

const Lesson1 = () => {
  return (
    <div className='container'>
      <div className='lessonContainer'>
        {/* Hero-секция */}
        <LessonHero
          title='Prvé kroky pri práci s epoxidovou živicou'
          description='Detailný návod pre správne začiatky'
        />

        {/* Основний вміст */}
        <div className='content'>
          {/* Секція 1 */}
          <section className='section'>
            <h2>1. Príprava materiálov</h2>
            <div className='imageTextRow'>
              <img
                src='/images/start.png'
                alt='Základné pomôcky'
                className='halfWidthImage'
                loading='lazy'
              />
              <div>
                <p className='importantText'>
                  Vždy pracujte v dobre vetranom priestore s teplotou 20-25°C.
                </p>
                <ul className='list'>
                  <li>
                    <strong>Epoxidová živica + tvrdidlo</strong> - skontrolujte
                    dátum spotreby
                  </li>
                  <li>
                    <strong>Presné váhy</strong> - odchýlka max. ±1g
                  </li>
                  <li>
                    <strong>Miešacia nádoba</strong> - plastová s objemom o 30%
                    väčším ako plánované množstvo
                  </li>
                  <li>
                    <strong>Ochranné pomôcky</strong> - nitrilové rukavice,
                    respirátor FFP2, ochranné okuliare
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Секція 2 */}
          <section className='section'>
            <h2>2. Detailný postup miešania</h2>
            <div className={styles.detailedSteps}>
              <div className={styles.step}>
                <h3>Krok 1: Odmeranie zložiek</h3>
                <p>
                  <strong>Pomer:</strong> Presne podľa návodu výrobcu (typicky
                  2:1 alebo 1:1)
                  <br />
                  <strong>Technika:</strong> Najprv nalejte živicu, potom
                  tvrdidlo
                  <br />
                  <strong>Chyby:</strong> Nepresné odváženie spôsobí nekvalitné
                  vytvrdnutie
                </p>
              </div>

              <div className={styles.step}>
                <h3>Krok 2: Technika miešania</h3>
                <p>
                  <strong>Čas:</strong> Minimálne 5 minút pre malé množstvá
                  <br />
                  <strong>Spôsob:</strong> Miešajte pomaly širokými pohybmi po
                  stranách nádoby
                  <br />
                  <strong>Kontrola:</strong> Žiadne pruhy ani nezmesené časti na
                  dne
                </p>
              </div>

              <div className={styles.step}>
                <h3>Krok 3: Odstránenie bublín</h3>
                <p>
                  <strong>Počkanie:</strong> 2-3 minúty po zmiešaní
                  <br />
                  <strong>Nástroje:</strong> Teplovzdušná pištoľ (50-60°C) alebo
                  lievik
                  <br />
                  <strong>Tip:</strong> Pre veľké projekty použite vákumovú
                  komoru
                </p>
              </div>
            </div>
          </section>

          {/* Секція 3 */}
          <section className='section'>
            <h2>3. Aplikácia a vytvrdzovanie</h2>
            <div className={styles.twoColumns}>
              <div>
                <h3>Techniky aplikácie:</h3>
                <ul className='list'>
                  <li>
                    <strong>Liatie:</strong> Pre formy a hladké povrchy
                  </li>
                  <li>
                    <strong>Štetec:</strong> Pre tenké vrstvy a impregnáciu
                  </li>
                  <li>
                    <strong>Rozprašovanie:</strong> Vyžaduje špeciálnu živicu
                  </li>
                </ul>
              </div>
              <div>
                <h3>Podmienky vytvrdzovania:</h3>
                <ul className='list'>
                  <li>
                    <strong>Čas:</strong> 24-72 hodín podľa typu
                  </li>
                  <li>
                    <strong>Teplota:</strong> Konštantných 20-25°C
                  </li>
                  <li>
                    <strong>Prach:</strong> Zakryte projekt kartónom
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Навігація */}
        <div className='navigation'>
          <Link to='/learn' className='backButton'>
            ← Späť na zoznam lekcií
          </Link>
          <div className='buttonSpacer'></div>
          <Link to='/learn/2' className='nextButton'>
            Ďalšia lekcia: Bezpečnostné pravidlá →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Lesson1;
