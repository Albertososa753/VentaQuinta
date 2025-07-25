"use client";

import {
  Home,
  Ruler,
  TreePine,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

export default function PropertyDetails() {
  const characteristics = [
    "Dueño directo, sin comisiones",
    "Apta crédito y escritura al día",
    "Parque de 2000 m² con construcción en ladrillo visto",
    "Galería de 15 x 4 metros con cerramiento de lona cristal tipo toldo",
    "Pileta nueva con bomba sumergible",
    "Garaje para 2 vehículos",
    "Hogar a leña y Split frío/calor de 4500 frigorías",
    "Termotanque eléctrico de 60 litros",
    "Alambrado perimetral de 2 metros de altura",
    "Dos pozos de agua con bombas adicionales para riego y uso doméstico",
    "Zona muy bien iluminada",
    "Sol durante todo el día",
  ];

  const sections = [
    {
      icon: Home,
      title: "Distribución",
      content:
        "La casa cuenta con dos dormitorios amplios, baño completo y cocina-comedor integrada. Además, incluye hogar a leña, Split frío/calor de 4500 frigorías y termotanque eléctrico de 60 litros.",
    },
    {
      icon: Ruler,
      title: "Superficie",
      content:
        "Terreno de 2000 m² con parque arbolado y construcción sólida en ladrillo visto.",
    },
    {
      icon: TreePine,
      title: "Entorno",
      content:
        "Ubicada en Barrio Los Cedros, zona residencial muy bien iluminada, tranquila y con excelente exposición solar. Ideal para quienes valoran la naturaleza y el confort.",
    },
    {
      icon: TrendingUp,
      title: "Potencial",
      content:
        "Ideal para vivienda permanente o inversión. Cuenta con infraestructura completa, amplio terreno y equipamiento funcional que permite disfrutarla todo el año.",
    },
  ];

  return (
    <div id="descripcion" className="property-details-modern">
      <div className="details-modern-container">
        {/* Header */}
        <div className="details-header">
          <div className="header-badge">
            <Home className="badge-icon" />
            <span>Quinta en Venta</span>
          </div>
        </div>

        {/* Info Cards */}
        <div className="info-sections">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div key={index} className="info-card">
                <div className="card-header">
                  <div className="icon-container">
                    <Icon className="section-icon" />
                  </div>
                  <h4 className="card-title">{section.title}</h4>
                </div>
                <p className="card-content">{section.content}</p>
              </div>
            );
          })}
        </div>

        {/* Characteristics */}
        <div className="characteristics-modern">
          <div className="characteristics-header">
            <div className="icon-container">
              <CheckCircle2 className="section-icon" />
            </div>
            <h4 className="characteristics-title">Características destacadas</h4>
          </div>

          <div className="characteristics-grid-modern">
            {characteristics.map((item, index) => (
              <div key={index} className="characteristic-modern">
                <div className="check-container">
                  <CheckCircle2 className="check-icon-modern" />
                </div>
                <span className="characteristic-text">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
