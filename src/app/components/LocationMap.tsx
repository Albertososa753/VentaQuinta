"use client";

import { useState } from "react";
import { MapPin, Clock, Shield } from "lucide-react";

const MapCard = () => {
  const [isLoading, setIsLoading] = useState(true);



  return (
    <div className="map-card-modern">
      {/* Header */}
      <div className="map-header">
        <div className="map-title-container">
          <MapPin className="map-icon" />
          <div>
            <h3 className="map-title">Ubicación</h3>
            <p className="map-subtitle">Consultar dirección exacta</p>
          </div>
        </div>
      </div>

      {/* Mapa embed */}
      <div
        className="map-container"
        style={{ position: "relative", width: "100%", height: "400px" }}
      >
        {isLoading && (
          <div className="map-skeleton">
            <div className="skeleton-content">
              <div className="skeleton-icon">
                <MapPin size={32} />
              </div>
              <div className="skeleton-text">Cargando mapa...</div>
              <div className="skeleton-pulse"></div>
            </div>
          </div>
        )}
        <iframe
          width="100%"
          height="400px"
          style={{ border: 0, borderRadius: "12px" }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3331.7293236108385!2d-60.28780492431234!3d-33.378131973418135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDIyJzQxLjMiUyA2MMKwMTcnMDYuOCJX!5e0!3m2!1ses-419!2sar!4v1753410017786!5m2!1ses-419!2sar"
          onLoad={() => setIsLoading(false)}
        />
      </div>

      {/* Información adicional */}
      <div className="location-info">
        <div className="info-row">
          <Clock className="info-icon" />
          <div className="info-content">
            <span className="info-label">Zona tranquila</span>
            <span className="info-description">Barrio residencial y seguro</span>
          </div>
        </div>
        <div className="info-row">
          <Shield className="info-icon" />
          <div className="info-content">
            <span className="info-label">Servicios disponibles</span>
            <span className="info-description">Agua, luz, gas, cloacas</span>
          </div>
        </div>
 
      </div>
    </div>
  );
};

export default MapCard;
