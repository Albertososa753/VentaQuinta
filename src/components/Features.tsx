import { Home, Car, Waves, Shield, Zap, Thermometer, Droplets, Sun, Wifi, Camera } from "lucide-react"

const features = [
  { icon: Home, text: "Dueño directo, sin comisiones", highlight: true },
  { icon: Shield, text: "Apta crédito y escritura al día", highlight: true },
  { icon: Waves, text: "Pileta nueva con bomba sumergible" },
  { icon: Home, text: "Galería de 15x4 con toldos Lona Cristal" },
  { icon: Car, text: "Cochera para dos vehículos" },
  { icon: Thermometer, text: "Hogar a leña y Split 4500 frío/calor" },
  { icon: Zap, text: "Termotanque eléctrico 60 litros" },
  { icon: Shield, text: "Alambrado perimetral de 2 mts de alto" },
  { icon: Droplets, text: "Doble pozo con bombas de agua" },
  { icon: Sun, text: "Zona muy bien iluminada" },
  { icon: Wifi, text: "Acceso a internet y cable" },
  { icon: Camera, text: "Sistema de cámaras de seguridad" },
]

export default function Features() {
  return (
    <section className="features-section">
      <div className="features-container">
        <h2>Características Destacadas</h2>
        <div className="features-grid">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className={`feature-card ${feature.highlight ? "highlight" : ""}`}>
                <div className="feature-icon">
                  <IconComponent size={24} />
                </div>
                <p className="feature-text">{feature.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
