// src/components/ImageGallery.tsx
"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const images = [
  { src: '/images/quinta1.jpg', alt: 'Vista frontal de la quinta' },
  { src: '/images/quinta2.jpg', alt: 'Pileta y parque' },
  { src: '/images/quinta3.jpg', alt: 'Interior de la casa' },
  { src: '/images/quinta4.jpg', alt: 'Galería con toldos' },
  { src: '/images/quinta5.jpg', alt: 'Vista aérea del terreno' },
];

export default function ImageGallery() {
  const [selected, setSelected] = useState(0);
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="galeria" className={styles.section}>
      <h2>Galería de Imágenes</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <div
          className={styles.imageMain}
          style={{ flex: '3 1 0', cursor: 'pointer' }}
          onClick={() => setShowModal(true)}
        >
          <Image
            src={images[selected].src}
            alt={images[selected].alt}
            width={800}
            height={500}
            layout="responsive"
            style={{ borderRadius: '12px' }}
          />
        </div>

        <div
          className={styles.thumbnailList}
          style={{ flex: '1 1 0', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
        >
          {images.map((img, index) => (
            <Image
              key={index}
              src={img.src}
              alt={img.alt}
              width={120}
              height={80}
              onClick={() => setSelected(index)}
              style={{
                borderRadius: '8px',
                cursor: 'pointer',
                border: selected === index ? '3px solid #0070f3' : '2px solid transparent',
                objectFit: 'cover',
              }}
            />
          ))}
        </div>
      </div>

      {showModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 2000,
          }}
          onClick={() => setShowModal(false)}
        >
          <div style={{ position: 'relative', width: '90%', maxWidth: '800px' }}>
            <button
              onClick={() => setShowModal(false)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                fontWeight: 'bold',
                fontSize: '18px',
                cursor: 'pointer',
              }}
            >
              ×
            </button>
            <Image
              src={images[selected].src}
              alt={images[selected].alt}
              width={1200}
              height={800}
              layout="responsive"
              style={{ borderRadius: '8px' }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
