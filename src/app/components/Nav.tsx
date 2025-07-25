"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home,
  ImageIcon,
  FileText,
  Phone,
  MapPin,
} from "lucide-react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setShow(true);
        setScrolled(false);
      } else {
        setScrolled(true);
        setShow(currentScrollY < lastScrollY);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { href: "#inicio", label: "Inicio", icon: Home },
    { href: "#galeria", label: "Galería", icon: ImageIcon },
    { href: "#descripcion", label: "Descripción", icon: FileText },
    { href: "#contacto", label: "Contacto", icon: Phone },
  ];

  const handleNavClick = (href: string) => {
    setOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`navbar-modern ${show ? "visible" : "hidden"} ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="nav-container">
        {/* Brand */}
        <div className="nav-brand">
          <div className="brand-icon">
            <MapPin className="brand-logo" />
          </div>
          <div className="brand-text">
            <span className="brand-subtitle">Barrio Los Cedros</span>
            <span className="brand-subtext">San Nicolás de los Arroyos</span>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="nav-desktop">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.href}
                className="nav-link-desktop"
                onClick={() => handleNavClick(item.href)}
              >
                <Icon className="nav-icon" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="hamburger-modern"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? <X className="hamburger-icon" /> : <Menu className="hamburger-icon" />}
        </button>

        {/* Mobile nav */}
        <nav className={`nav-mobile ${open ? "open" : ""}`}>
          <div className="mobile-nav-content">
            <div className="mobile-header">
              <div className="mobile-brand">
                <MapPin className="mobile-brand-icon" />
                <div>
                  <div className="mobile-brand-name">Casa Quinta</div>
                  <div className="mobile-brand-subtitle">
                    San Nicolás de los Arroyos
                  </div>
                </div>
              </div>
            </div>

            <div className="mobile-nav-links">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.href}
                    className="nav-link-mobile"
                    onClick={() => handleNavClick(item.href)}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Icon className="nav-icon-mobile" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="mobile-footer">
              <div className="contact-info">
                <Phone className="contact-icon" />
                <span>¿Consultas? ¡Contáctanos!</span>
              </div>
            </div>
          </div>
        </nav>

        {/* Overlay */}
        {open && <div className="nav-overlay" onClick={() => setOpen(false)} />}
      </div>
    </header>
  );
}
