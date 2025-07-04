"use client";

import { useState, useEffect } from "react";

export default function FormularioContacto() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [respuestaUsuario, setRespuestaUsuario] = useState("");
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);

  const emailDestino = "Mnee1964@gmail.com"; // Reemplazar con el correo destinatario

  useEffect(() => {
    setNumero1(Math.floor(Math.random() * 10) + 1);
    setNumero2(Math.floor(Math.random() * 10) + 1);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (parseInt(respuestaUsuario) !== numero1 + numero2) {
      alert("Respuesta incorrecta, por favor intente nuevamente.");
      return;
    }
    const asunto = encodeURIComponent("Consulta sobre la quinta publicada");
    const cuerpoMensaje = encodeURIComponent(
      `Hola, me interesa la quinta publicada.\n\nNombre: ${nombre}\nEmail: ${correo}\nMensaje: ${mensaje}`
    );
    const mailtoLink = `mailto:${emailDestino}?subject=${asunto}&body=${cuerpoMensaje}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-card">
      <h2>Contacto Directo</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          className="input-field"
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          className="input-field"
          type="email"
          placeholder="Correo Electrónico"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
        <textarea
          className="textarea-field"
          placeholder="Escribe tu mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          required
        />
        <input
          className="input-field"
          type="number"
          placeholder={`¿Cuánto es ${numero1} + ${numero2}?`}
          value={respuestaUsuario}
          onChange={(e) => setRespuestaUsuario(e.target.value)}
          required
        />
        <button className="submit-button" type="submit">
          Enviar por Correo
        </button>
      </form>
    </div>
  );
}