import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © {new Date().getFullYear()} Venta de Quinta en San Nicolás de los Arroyos
        </p>
        <p className="footer-subtext">Barrio Los Cedros | Dueño Directo</p>
        <nav className="footer-nav">
          <a href="#">Inicio</a>
          <a href="#">Propiedad</a>
          <a href="#">Contacto</a>
        </nav>
      </div>
    </footer>
  );
}