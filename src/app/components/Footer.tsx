"use client"

import { MapPin, Phone, Mail, Home, Calendar, Heart, ExternalLink } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = "5493364123456" // Reemplazar con número real
    const message = encodeURIComponent("Hola! Me interesa la quinta publicada en San Nicolás. ¿Podrían darme más información?")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <footer className="footer-modern">
      <div className="footer-container-modern">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Property Info Section */}
          <div className="footer-section">
            <div className="footer-brand">
              <div className="footer-brand-icon">
                <Home className="brand-icon" />
              </div>
            </div>
            <p className="footer-description">
              Hermosa casa quinta en venta por dueño directo. Barrio Los Cedros, zona tranquila y bien iluminada.
            </p>
            <div className="footer-highlights">
              <div className="highlight-item">
                <Calendar className="highlight-icon" />
                <span>Disponible ahora</span>
              </div>
              <div className="highlight-item">
                <Heart className="highlight-icon" />
                <span>Dueño Directo</span>
              </div>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="footer-section">
            <h4 className="footer-section-title">Información de Contacto</h4>
            <div className="contact-items">
              <div className="contact-item">
                <MapPin className="contact-icon" />
                <div className="contact-details">
                  <span className="contact-label">Zona</span>
                  <span className="contact-value">Barrio Los Cedros, San Nicolás</span>
                </div>
              </div>
              <div className="contact-item">
                <Mail className="contact-icon" />
                <div className="contact-details">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">Mnee1964@gmail.com</span>
                </div>
              </div>
              <div className="contact-item">
                <Phone className="contact-icon" />
                <div className="contact-details">
                  <span className="contact-label">WhatsApp</span>
                  <button className="whatsapp-link" onClick={handleWhatsAppClick}>
                    Contactar ahora
                    <ExternalLink className="external-icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="footer-section">
            <h4 className="footer-section-title">Navegación</h4>
            <nav className="footer-nav-modern">
              <button className="footer-nav-link" onClick={() => handleNavClick("#inicio")}>
                Inicio
              </button>
              <button className="footer-nav-link" onClick={() => handleNavClick("#galeria")}>
                Galería
              </button>
              <button className="footer-nav-link" onClick={() => handleNavClick("#descripcion")}>
                Descripción
              </button>
              <button className="footer-nav-link" onClick={() => handleNavClick("#contacto")}>
                Contacto
              </button>
            </nav>

            <div className="quick-actions">
              <button className="quick-action-btn primary" onClick={() => handleNavClick("#contacto")}>
                <Mail className="action-icon" />
                Consultar
              </button>
              <button className="quick-action-btn secondary" onClick={handleWhatsAppClick}>
                <Phone className="action-icon" />
                WhatsApp
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p className="copyright-text">
                © {currentYear} Venta de Quinta en San Nicolás de los Arroyos
              </p>
              <p className="copyright-subtext">Barrio Los Cedros | Dueño Directo</p>
            </div>
            <div className="footer-badge">
              <span className="badge-text">Venta sin comisiones</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="footer-decoration">
        <div className="decoration-circle circle-1"></div>
        <div className="decoration-circle circle-2"></div>
        <div className="decoration-circle circle-3"></div>
      </div>
    </footer>
  )
}
