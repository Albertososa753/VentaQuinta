"use client";

import Head from "next/head";
import Nav from "../components/Nav";
import ImageSlider from "../components/ImageSlider";
import PhotoGallery from "../components/PhotoGallery";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { Ruler, Bath, Car, Navigation } from "lucide-react";
import MapCard from "../components/MapPhotoCard";
import PropertyDetails from "@/components/PropertyDescription";
import useIsMobile from "./hooks/useIsMobile";

export default function Home() {
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
  const latitude = "-33.378139"; // 33°22'41.3"S
  const longitude = "-60.285222"; // 60°17'06.8"W

  const openGoogleMaps = () => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`,
      "_blank"
    );
  };
  return (
    <>
      <Head>
        <title>
          Quinta en San Nicolás - Dueño Directo | Quinta en Venta San Nicolás
        </title>
        <meta
          name="description"
          content="Venta de quinta en San Nicolás. Dueño directo, sin intermediarios, 2000 m², pileta, galería cerrada, escritura inmediata. Ideal vivienda o inversión."
        />
        <meta
          name="keywords"
          content="quinta san nicolas, quinta san nicolas dueño directo, venta quinta san nicolas, quinta en venta dueño directo"
        />
        <meta
          name="google-site-verification"
          content="0TGkKSIGTn_Zw6It3mBplTGrqZ3B8vy8EVDhA2UQqjU"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Nav />

      <main>
        <ImageSlider images={sliderImages} excludeOnMobile={ocultarEnMobile} />

        <div className="property" id="inicio">
          <section>
            <div className="property-header">
              <h2>
                BARRIO LOS CEDROS, SAN NICOLÁS DE LOS ARROYOS - Consultar precio
              </h2>
            </div>

            <div className="property-features">
              <span className="feature">
                <Ruler size={18} /> 2000 M² de parque
              </span>
              <span className="feature">
                🌤️ Galería 15m x 4m con cerramiento Lona Cristal
              </span>
              <span className="feature">
                <Bath size={18} /> 1 Baño
              </span>
              <span className="feature">
                <Car size={18} /> Garage 2 Autos
              </span>
            </div>
          </section>

          <section className="property-container">
            {!isMobile && ( // Solo desktop muestra mapa acá
              <section id="descripcion" className="property-map">
                <MapCard />
                <button className="maps-button" onClick={openGoogleMaps}>
                  Ver en Google Maps <Navigation size={20} />
                </button>
              </section>
            )}

            <section className="property-gallery">
              <PhotoGallery images={sliderImages} />
            </section>
          </section>

          <div className="property-details-container">
            <PropertyDetails />

            {isMobile && ( // Solo móvil muestra mapa acá abajo de descripción
              <section id="descripcion" className="property-map">
                <MapCard />
                <button className="maps-button" onClick={openGoogleMaps}>
                  Ver en Google Maps <Navigation size={20} />
                </button>
              </section>
            )}

            <section id="contacto" className="seccion-contacto">
              <div className="contact-container">
                <h2>¿Te interesa esta propiedad?</h2>
                <p className="contact-subtitle">
                  Contactanos para más información o para coordinar una visita
                </p>
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
