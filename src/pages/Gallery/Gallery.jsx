import React, { useState } from 'react';
import LessonHero from '../../components/Layout/LessonHero';
import styles from './Gallery.module.scss';

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15; // 3 columns x 5 rows

  const galleryCategories = [
    {
      name: 'Umenie',
      items: [
        {
          id: 1,
          img: '/images/gallery/art-1.png',
          title: 'Abstraktná kompozícia',
        },
        {
          id: 2,
          img: '/images/gallery/art-2.png',
          title: 'Prírodná inšpirácia',
        },
        { id: 3, img: '/images/gallery/art-3.png', title: 'Nočná lampa' },
        { id: 4, img: '/images/gallery/art-4.png', title: 'Hodiny' },
        {
          id: 5,
          img: '/images/gallery/art-5.jpg',
          title: 'Podložky pod poháre',
        },
        {
          id: 6,
          img: '/images/gallery/art-6.jpg',
          title: 'Servírovacie dosky',
        },
        { id: 7, img: '/images/gallery/art-7.jpg', title: 'Pobrežná dioráma' },
        { id: 8, img: '/images/gallery/art-8.jpg', title: 'Podnos' },
      ],
    },
    {
      name: 'Šperky',
      items: [
        { id: 101, img: '/images/gallery/jewelry-1.png', title: 'Náhrdelník' },
        { id: 102, img: '/images/gallery/jewelry-2.png', title: 'Náušnice' },
        { id: 103, img: '/images/gallery/jewelry-3.png', title: 'Prsteň' },
        {
          id: 104,
          img: '/images/gallery/jewelry-4.jpg',
          title: 'Sponky do vlasov',
        },
        {
          id: 105,
          img: '/images/gallery/jewelry-5.jpg',
          title: 'Sada šperkov',
        },
        { id: 106, img: '/images/gallery/jewelry-6.jpg', title: 'Prstene' },
        { id: 107, img: '/images/gallery/jewelry-7.jpg', title: 'Prívesky' },
        {
          id: 108,
          img: '/images/gallery/jewelry-8.jpg',
          title: 'Sponky do vlasov',
        },
        {
          id: 109,
          img: '/images/gallery/jewelry-9.png',
          title: 'Náramok',
        },
      ],
    },
    {
      name: 'Nábytok',
      items: [
        {
          id: 201,
          img: '/images/gallery/furniture-1.png',
          title: 'Epoxidový stôl',
        },
        { id: 202, img: '/images/gallery/furniture-2.jpg', title: 'Stôl' },
        { id: 203, img: '/images/gallery/furniture-3.png', title: 'Stolička' },
        { id: 204, img: '/images/gallery/furniture-4.png', title: 'Posteľ' },
        { id: 205, img: '/images/gallery/furniture-5.png', title: 'Lampery' },
        {
          id: 206,
          img: '/images/gallery/furniture-6.jpg',
          title: 'Malý stolík',
        },
        {
          id: 207,
          img: '/images/gallery/furniture-7.jpg',
          title: 'Stolička',
        },
        {
          id: 208,
          img: '/images/gallery/furniture-8.png',
          title: 'Nočný stolík',
        },
      ],
    },
  ];

  const openImage = img => {
    setSelectedImage(img);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Calculate pagination
  const currentItems = galleryCategories[activeTab].items;
  const totalPages = Math.ceil(currentItems.length / itemsPerPage);
  const paginatedItems = currentItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleTabChange = index => {
    setActiveTab(index);
    setCurrentPage(1); // Reset to first page when changing tabs
  };

  return (
    <div className='container'>
      <div className={styles.galleryContainer}>
        <LessonHero
          title='Galéria projektov'
          description='Prehľad všetkých kategórií našich prác'
        />

        <div className={styles.content}>
          {/* Табы с категориями */}
          <div className={styles.tabs}>
            {galleryCategories.map((category, index) => (
              <button
                key={category.name}
                className={`${styles.tab} ${
                  activeTab === index ? styles.active : ''
                }`}
                onClick={() => handleTabChange(index)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Галерея изображений */}
          <div className={styles.galleryGrid}>
            {paginatedItems.map(item => (
              <div
                key={item.id}
                className={styles.galleryItem}
                onClick={() => openImage(item.img)}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className={styles.galleryImage}
                  loading='lazy'
                />
                <div className={styles.imageCaption}>
                  <p>{item.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Пагинация */}
          {totalPages > 1 && (
            <div className={styles.pagination}>
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                &lt;
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={currentPage === page ? styles.activePage : ''}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() =>
                  setCurrentPage(prev => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
              >
                &gt;
              </button>
            </div>
          )}
        </div>

        {/* Модальное окно для просмотра */}
        {selectedImage && (
          <div className={styles.modalOverlay} onClick={closeModal}>
            <div
              className={styles.modalContent}
              onClick={e => e.stopPropagation()}
            >
              <button className={styles.closeButton} onClick={closeModal}>
                ×
              </button>
              <img
                src={selectedImage}
                alt='Full size preview'
                className={styles.modalImage}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
