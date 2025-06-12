// src/app/page.tsx
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ContactForm from '../components/ContactForm';
import ImageGallery from '../components/ImageGallery';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Venta Quinta San Nicolás | Dueño Directo | Apta Crédito</title>
        <meta name="description" content="Venta de quinta en San Nicolás de los Arroyos. Dueño directo, con pileta, galería, parque, y escritura al día. Zona tranquila, lista para habitar." />
      </Head>

      <a href="#contacto" className={styles.contactButton}>Contactar</a>

      <header className={styles.header}>
        <div className={styles.logo}>Venta Quinta</div>
        <nav className={styles.nav}>
          <a href="#galeria">Galería</a>
          <a href="#descripcion">Descripción</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <div className={styles.mainLayout}>
        <div className={styles.galleryContainer}>
          <ImageGallery />
        </div>

        <div className={styles.infoContainer}>
          <section className={styles.hero}>
            <div className={styles.details}>
              <h1>Quinta en San Nicolás de los Arroyos</h1>
              <p className={styles.subheading}>Barrio Los Cedros - Consultar precio</p>
              <div className={styles.tags}>
                <span>📍 San Nicolás, Buenos Aires</span>
                <span>📐 40x50m</span>
                <span>✅ Escritura al día</span>
                <span>🛏️ 2 Dormitorios</span>
                <span>🛁 1 Baño</span>
                <span>🌞 Orientación Este</span>
                <span>🏡 Dueño directo</span>
              </div>
              <p>
                Venta de quinta por dueño directo. Casa con pileta, parque, cochera, portón automático y galería con parillero.
                Ideal para descanso o vivienda permanente. Dueño directo, sin comisiones. Zona tranquila con acceso rápido a la ruta.
              </p>
            </div>
            <div className={styles.mapContainer}>
              <iframe
                title="Ubicación de la quinta"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.120569016248!2d-58.41730968477001!3d-34.71145128042911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc642376ef1e3%3A0x3be24b02e3b4b8d!2sBarrio%20Los%20Cedros!5e0!3m2!1ses-419!2sar!4v1718064983055!5m2!1ses-419!2sar"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </section>
        </div>
      </div>

      <section className={styles.section}>
        <h2>Características destacadas</h2>
        <ul className={styles.featuresList}>
          <li>✔ Dueño directo, sin comisiones</li>
          <li>✔ Apta crédito y escritura al día</li>
          <li>✔ Pileta nueva con bomba sumergible</li>
          <li>✔ Parque con riego automático</li>
          <li>✔ Galería con parillero y toldos lona cristal</li>
          <li>✔ Cochera doble y portón automático</li>
          <li>✔ Seguridad: 8 cámaras, rejas y mosquiteros</li>
          <li>✔ Conexión a internet, cable y todos los servicios</li>
        </ul>
      </section>

      <section id="descripcion" className={styles.section}>
        <h2>Descripción Completa</h2>
        <p>
          Venta de hermosa quinta por dueño directo en San Nicolás. Compuesta por dos dormitorios, cocina-comedor, baño completo.
          Construcción con doble pared, cámara de aire, revestida con ladrillo y Cetol. Ventanas de aluminio, mosquiteros y rejas.
        </p>
        <p>
          Galería cubierta con toldos de lona cristal, pileta de 10x5m construida en 2019, bomba sumergible nueva (2023), pozo adicional
          con bomba centrifuga Czerweny para riego. Incluye depósito, lavadero, internet, cable, 8 cámaras de seguridad.
        </p>
      </section>

      <section id="contacto" className={styles.section}>
        <h2>¿Te interesa esta propiedad?</h2>
        <ContactForm />
      </section>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Venta de Quinta en San Nicolás - Barrio Los Cedros | Dueño Directo</p>
      </footer>
    </div>
  );
}
