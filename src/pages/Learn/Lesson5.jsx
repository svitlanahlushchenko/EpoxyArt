import React from 'react';
import { Link } from 'react-router-dom';
import LessonHero from '../../components/Layout/LessonHero';
import styles from './Lesson5.module.scss';

const Lesson5 = () => {
  const materialCategories = [
    {
      title: 'Základné materiály',
      items: [
        {
          name: 'Epoxidová živica',
          description:
            'Rôzne typy podľa účelu použitia (pre nábytok, šperky, umelecké projekty)',
          tips: 'Vyberte podľa času vytvrdzovania a viskozity',
        },
        {
          name: 'Tvrdidlo',
          description: 'Vždy kompatibilné s konkrétnym typom živice',
          tips: 'Skladujte v suchu a chlade',
        },
      ],
    },
    {
      title: 'Pomôcky a náradie',
      items: [
        {
          name: 'Miešacie nádoby',
          description: 'Plastové s objemovými značkami, jednorazové',
          tips: 'Vždy s rezervou 30% objemu',
        },
        {
          name: 'Miešacie tyčinky',
          description: 'Drevené alebo plastové, s plochým koncom',
          tips: 'Na každý projekt nové',
        },
        {
          name: 'Váhy',
          description: 'Digitálne s presnosťou na 0,1g',
          tips: 'Pravidelne kalibrujte',
        },
      ],
    },
    {
      title: 'Ochranné prostriedky',
      items: [
        {
          name: 'Rukavice',
          description: 'Nitrileové, bez latexu',
          tips: 'Vždy používajte, aj pri malých projektoch',
        },
        {
          name: 'Respirátor',
          description: 'FFP2 alebo lepší, proti výparom',
          tips: 'Vymieňajte každé 2 hodiny',
        },
        {
          name: 'Ochranné okuliare',
          description: 'Kryjúce celé oči',
          tips: 'Nenahraditeľné pri práci s tvrdidlom',
        },
      ],
    },
    {
      title: 'Dekoračné materiály',
      items: [
        {
          name: 'Pigmenty a farby',
          description: 'Špeciálne pre epoxid, alkoholové farby',
          tips: 'Max. 5-7% objemu živice',
        },
        {
          name: 'Prírodné materiály',
          description: 'Sušené kvety, drevo, kamienky',
          tips: 'Dôkladne vysušiť pred použitím',
        },
        {
          name: 'Metalické efekty',
          description: 'Metalické prášky, fólie',
          tips: 'Používajte s mierou',
        },
      ],
    },
  ];

  const essentialTools = [
    {
      name: 'Teplovzdušná pištoľ',
      use: 'Odstraňovanie bublín',
      priceRange: '20-100€',
    },
    {
      name: 'Vákumová komora',
      use: 'Odvzdušňovanie veľkých množstiev',
      priceRange: '150-500€',
    },
    {
      name: 'Rotujúci stojan',
      use: 'Tvorba prsteňov a malých šperkov',
      priceRange: '30-150€',
    },
  ];

  return (
    <div className='container'>
      <div className='lessonContainer'>
        {/* Hero-секция */}
        <LessonHero
          title='Materiály a pomôcky'
          description='Všetko o materiáloch potrebných pre prácu s epoxidovou živicou'
        />

        {/* Основной контент */}
        <div className='content'>
          {/* Введение */}
          <section className='section'>
            <h2>Kompletný prehľad materiálov</h2>
            <div className='imageTextRow'>
              <img
                src='/images/materials-overview.png'
                alt='Materiály pre prácu s epoxidom'
                className='halfWidthImage'
                loading='lazy'
              />
              <div>
                <p>
                  Kvalitné materiály sú základom úspešného projektu. Nesprávny
                  výber môže kompromitovať celý výsledok. V tejto lekcii si
                  detailne prejdeme všetky potrebné komponenty a ich vlastnosti.
                </p>
                <p className='importantText'>
                  Vždy používajte materiály od overených výrobcov a dodržiavajte
                  bezpečnostné opatrenia.
                </p>
              </div>
            </div>
          </section>

          {/* Категории материалов */}
          {materialCategories.map((category, index) => (
            <section key={index} className='section'>
              <h2>{category.title}</h2>
              <div className={styles.materialsGrid}>
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className={styles.materialCard}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <div className={styles.tipBox}>
                      <strong>Tip: </strong>
                      {item.tips}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Дополнительные инструменты */}
          <section className='section'>
            <h2>Pokročilé nástroje a vybavenie</h2>
            <div className={styles.toolsTable}>
              <div className={styles.toolsHeader}>
                <div>Nástroj</div>
                <div>Primárne použitie</div>
                <div>Cenové rozpätie</div>
              </div>
              {essentialTools.map((tool, index) => (
                <div key={index} className={styles.toolRow}>
                  <div>
                    <strong>{tool.name}</strong>
                  </div>
                  <div>{tool.use}</div>
                  <div>{tool.priceRange}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Советы по хранению */}
          <section className='section'>
            <h2>Skladovanie materiálov</h2>
            <div className={styles.twoColumns}>
              <div>
                <h3>Základné pravidlá</h3>
                <ul className='list'>
                  <li>Uchovávajte v suchu pri teplote 15-25°C</li>
                  <li>Chráňte pred priamym slnečným žiarením</li>
                  <li>Udržiavajte pôvodné obaly tesne uzavreté</li>
                </ul>
              </div>
              <div>
                <h3>Životnosť materiálov</h3>
                <ul className='list'>
                  <li>Neotvorená živica: 6-12 mesiacov</li>
                  <li>Otvorená živica: 3-6 mesiacov</li>
                  <li>Pigmenty: 12-24 mesiacov</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Навигация */}
        <div className='navigation'>
          <Link to='/learn/4' className='backButton'>
            ← Späť na lekciu: Využitie
          </Link>
          <div className='buttonSpacer'></div>
          <Link to='/learn/6' className='nextButton'>
            Ďalšia lekcia: Pracovné povrchy →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Lesson5;
