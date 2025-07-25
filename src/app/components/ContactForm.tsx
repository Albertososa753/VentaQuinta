"use client";

import { useState, useEffect } from "react";
import { Mail, User, MessageSquare, Calculator, Send } from "lucide-react";

export default function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [respuestaUsuario, setRespuestaUsuario] = useState("");
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const emailDestino = "Mnee1964@gmail.com";

  useEffect(() => {
    setNumero1(Math.floor(Math.random() * 10) + 1);
    setNumero2(Math.floor(Math.random() * 10) + 1);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (parseInt(respuestaUsuario) !== numero1 + numero2) {
      alert("Respuesta incorrecta, por favor intente nuevamente.");
      setIsSubmitting(false);
      return;
    }

    const asunto = encodeURIComponent("Consulta sobre la quinta publicada");
    const cuerpoMensaje = encodeURIComponent(
      `Hola, me interesa la quinta publicada.\n\nNombre: ${nombre}\nEmail: ${correo}\nMensaje: ${mensaje}`
    );

    const mailtoLink = `mailto:${emailDestino}?subject=${asunto}&body=${cuerpoMensaje}`;

    setTimeout(() => {
      window.location.href = mailtoLink;
      setShowSuccess(true);
      setIsSubmitting(false);

      setTimeout(() => {
        setNombre("");
        setCorreo("");
        setMensaje("");
        setRespuestaUsuario("");
        setShowSuccess(false);
        setNumero1(Math.floor(Math.random() * 10) + 1);
        setNumero2(Math.floor(Math.random() * 10) + 1);
      }, 2000);
    }, 1000);
  };

  return (
    <div id="contacto" className="contact-modern-container">
      <div className="contact-header">
        <div className="contact-icon-container">
          <Mail className="contact-main-icon" />
        </div>
        <h2 className="contact-title">Contacto Directo</h2>
        <p className="contact-subtitle">
          Completa el formulario y nos pondremos en contacto contigo
        </p>
      </div>

      {showSuccess ? (
        <div className="success-message">
          <div className="success-icon">✓</div>
          <h3>¡Mensaje enviado!</h3>
          <p>Se abrió tu cliente de correo. Gracias por tu interés.</p>
        </div>
      ) : (
        <form className="contact-form-modern" onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="input-container">
              <User className="input-icon" />
              <input
                className="input-field-modern"
                type="text"
                placeholder="Tu nombre completo"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="input-container">
              <Mail className="input-icon" />
              <input
                className="input-field-modern"
                type="email"
                placeholder="tu@email.com"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="input-container textarea-container">
              <MessageSquare className="input-icon textarea-icon" />
              <textarea
                className="textarea-field-modern"
                placeholder="Contanos qué te interesa de esta quinta..."
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                required
                disabled={isSubmitting}
                rows={4}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="math-question">
              <Calculator className="input-icon" />
              <div className="math-content">
                <label className="math-label">Verificación de seguridad:</label>
                <div className="math-equation">
                  <span className="equation-text">
                    ¿Cuánto es {numero1} + {numero2}?
                  </span>
                  <input
                    className="math-input"
                    type="number"
                    placeholder="Respuesta"
                    value={respuestaUsuario}
                    onChange={(e) => setRespuestaUsuario(e.target.value)}
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="form-actions">
            <button
              className={`submit-button-modern ${isSubmitting ? "loading" : ""}`}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="loading-spinner"></div>
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="button-icon" />
                  Enviar Consulta
                </>
              )}
            </button>
          </div>
        </form>
      )}

      <div className="contact-info">
        <div className="info-item">
          <Mail className="info-icon" />
          <span>{emailDestino}</span>
        </div>
      </div>
    </div>
  );
}
