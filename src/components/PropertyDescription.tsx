export default function PropertyDetails() {
  const characteristics = [
    "Dueño directo, sin comisiones",
    "Apta crédito y escritura al día",
    "Pileta nueva con bomba sumergible",
    "Galería de 15 metros de largo por 4 metros de ancho con cerramiento en lona cristal en todas sus aberturas",
    "Garaje para 2 vehículos",
    "Hogar a leña y Split frío/calor de 4500 frigorías",
    "Termotanque eléctrico de 60 litros",
    "Alambrado perimetral de 2 metros de altura",
    "Dos pozos de agua con bombas adicionales para riego y uso doméstico",
    "Zona muy bien iluminada",
    "Orientación al este con sol todo el día",
    "Parque de 2000 m² con construcción en ladrillo visto",
  ];

  return (
    <div id="descripcion" className="property-details">
      <div className="details-container">
        <div >
          <h3 className="section-title sale">Quinta en Venta</h3>
          <h2 className="main-title">Hermosa CASA QUINTA en San Nicolás de los Arroyos</h2>
        </div>

        <div>
          <h4 className="section-subtitle">Distribución</h4>
          <p className="section-content">
            Casa compuesta por dos dormitorios amplios, cocina-comedor integrado y baño completo. Posee un hogar a leña, Split frío/calor de 4500 frigorías y un termotanque eléctrico de 60 litros.
          </p>
        </div>

        <div>
          <h4 className="section-subtitle">Superficie</h4>
          <p className="section-content">
            <strong>Superficie total:</strong> Terreno de 2000 m² con construcción en ladrillo visto.
          </p>
        </div>

        <div >
          <h4 className="section-subtitle">Entorno</h4>
          <p className="section-content">
            Ubicada en una zona residencial muy bien iluminada de San Nicolás de los Arroyos, ideal para quienes buscan tranquilidad, comodidad y contacto con la naturaleza. Con fácil acceso a servicios urbanos y excelente iluminación natural durante todo el día por su orientación al este.
          </p>
        </div>

        <div className="detail-section">
          <h4 className="section-subtitle">Potencial</h4>
          <p className="section-content">
            Alta rentabilidad, ideal para inversión o uso familiar, aprovechando la funcionalidad de los espacios, el amplio parque y la comodidad de la zona.
          </p>
        </div>

        <div className="characteristics-section">
          <h4 className="section-subtitle">Características destacadas</h4>
          <div className="characteristics-grid">
            {characteristics.map((characteristic, index) => (
              <div key={index} className="characteristic-item">
                <span className="check-icon">✓</span>
                <span>{characteristic}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
