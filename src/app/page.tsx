"use client";

import Head from "next/head";
import Nav from "./components/Nav";
import PhotoGallery from "./components/PhotoGallery";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import MapCard from "./components/LocationMap";
import PropertyDetails from "./components/PropertyDescription";
import useIsMobile from "./hooks/useIsMobile";
import PropertyHero from "./components/PropertyHero";
import PropertyHeader from "./components/PropertyHeader"; // lo usás si lo querés unificar
import "./styles/hero.css";
import "./styles/property-details-modern.css";
import "./styles/contact-modern.css";
import "./styles/photo-gallery-modern.css";
import "./styles/property-header-modern.css";
import "./styles/map-card-modern.css";
import "./styles/nav-modern.css";
import "./styles/footer-modern.css";

export default function HomePage() {
  const isMobile = useIsMobile();

  const sliderImages = [
    "/images/principal14.jpg",
    "/images/11.jpg",
    "/images/12.jpg",
    "/images/galeria.jpg",
    "/images/quinta3.jpg",
    "/images/quinta7.jpg",
    "/images/13.jpg",
    "/images/15.jpg",
    "/images/16.jpg",
    "/images/20.jpg",
  ];

  const ocultarEnMobile = [
    "/images/quinta3.jpg",
    "/images/12.jpg",
    "/images/13.jpg",
    "/images/quinta2.jpg",
    "/images/15.jpg",
  ];

  return (
    <>
      <Head>
        <title>Quinta en San Nicolás - Dueño Directo | Quinta en Venta San Nicolás</title>
        <meta
          name="description"
          content="Venta de quinta en San Nicolás. Dueño directo, sin intermediarios, 2000 m², pileta, galería cerrada, escritura inmediata. Ideal vivienda o inversión."
        />
        <meta
          name="keywords"
          content="quinta san nicolas, quinta san nicolas dueño directo, venta quinta san nicolas, quinta en venta dueño directo"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Nav />

      <main>
        <PropertyHero images={sliderImages} excludeOnMobile={ocultarEnMobile} />

        <div className="property" id="inicio">
          <PropertyHeader
           
          />

          <section className="property-container">
            <section className="property-gallery">
              <PhotoGallery images={sliderImages} />
            </section>

            {!isMobile && (
              <section id="descripcion" className="property-map">
                <MapCard />
              </section>
            )}
          </section>

          <div className="property-details-container">
            <PropertyDetails />

            {isMobile && (
              <section id="descripcion" className="property-map">
                <MapCard />
              </section>
            )}

            <section id="contacto" className="seccion-contacto">
              <div className="contact-container">
               
                <ContactForm />
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
