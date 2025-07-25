"use client";

import {
  Ruler,
  Home,
  Bath,
  Car,
  Flame,
  Droplets,
  MapPin,
  Star,
  Sun,
  Waves,
  PanelTopClose,
  BrickWall,
} from "lucide-react";

export default function PropertyHeader() {
  const features = [
    { icon: Waves, text: "Pileta con bomba", highlight: true },
    {
      icon: PanelTopClose,
      text: "Galería cerrada 15 x 4m",
    },
    { icon: Ruler, text: "Parque 2000 m²", highlight: true },
    { icon: Home, text: "2 Dormitorios" },
    { icon: Bath, text: "1 Baño" },
    { icon: Car, text: "Garage 2 Autos" },
    { icon: Flame, text: "Hogar a leña y Split F/C" },
    { icon: Droplets, text: "2 pozos con bombas" },
    { icon: BrickWall, text: "Ladrillo visto" },
    { icon: Sun, text: "Muy buena iluminación" },
  ];

  return (
    <section className="property-header-modern">
      <div className="header-container">
        {/* Badge */}
        <div className="property-badge">
          <Star className="badge-icon" />
          <span>QUINTA EN VENTA</span>
        </div>

        {/* Title */}
        <div className="property-title-container">
          <div className="location-indicator">
            <MapPin className="location-icon" />
          </div>
          <h2 className="property-main-title">
            <span className="address-line">BARRIO LOS CEDROS</span>
            <span className="city-line">SAN NICOLÁS DE LOS ARROYOS</span>
            <span className="price-line">Consultar precio</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="features-grid-modern">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className={`feature-card ${
                  feature.highlight ? "highlight" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="feature-icon-container">
                  <IconComponent className="feature-icon" />
                </div>
                <span className="feature-text">{feature.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
