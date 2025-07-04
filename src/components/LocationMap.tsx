"use client";
import { MapPin, Navigation } from "lucide-react";

export default function LocationMap() {
  const latitude = "-33.378139"; // 33°22'41.3"S
  const longitude = "-60.285222"; // 60°17'06.8"W

  const openGoogleMaps = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`, "_blank");
  };

  return (
    <section className="location-section">
      <div className="location-container">
        <h2>Ubicación</h2>
        <div className="location-content">
          <div className="location-info">
            <div className="location-item">
              <MapPin className="location-icon" size={24} />
              <div>
                <h3>San Nicolás de los Arroyos</h3>
                <p>Provincia de Buenos Aires, Argentina</p>
              </div>
            </div>

            <div className="location-details">
              <h4>Ventajas de la ubicación:</h4>
              <ul>
                <li>✓ Zona residencial tranquila</li>
                <li>✓ Excelente iluminación</li>
                <li>✓ Fácil acceso a servicios</li>
                <li>✓ Transporte público cercano</li>
                <li>✓ Ambiente natural y seguro</li>
              </ul>
            </div>

            <button className="maps-button" onClick={openGoogleMaps}>
              <Navigation size={20} />
              Ver en Google Maps
            </button>
          </div>

          <div className="map-placeholder">
            <div className="map-content">
              <MapPin size={48} className="map-pin" />
              <p>San Nicolás de los Arroyos</p>
              <small>
                Haz clic en &quot;Ver en Google Maps&quot; para la ubicación exacta
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
