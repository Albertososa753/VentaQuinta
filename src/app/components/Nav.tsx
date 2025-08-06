"use client"

import { useState, useEffect } from "react"
import { X, Home, ImageIcon, FileText, Phone, MapPin, ChevronRight } from "lucide-react"

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 50) {
        setShow(true)
        setScrolled(false)
      } else {
        setScrolled(true)
        setShow(currentScrollY < lastScrollY)
      }

      setLastScrollY(currentScrollY)

      // Update active section
      const sections = ["inicio", "galeria", "descripcion", "contacto"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const navItems = [
    { href: "#inicio", label: "Inicio", icon: Home },
    { href: "#galeria", label: "Galería", icon: ImageIcon },
    { href: "#descripcion", label: "Descripción", icon: FileText },
    { href: "#contacto", label: "Contacto", icon: Phone },
  ]

  const handleNavClick = (href: string) => {
    setOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleBrandClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (open && !(event.target as Element).closest(".nav-mobile")) {
        setOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [open])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [open])

  return (
    <header className={`navbar ${show ? "visible" : "hidden"} ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* Brand */}
        <div className="nav-brand" onClick={handleBrandClick}>
          <div className="brand-icon">
            <MapPin className="brand-logo" />
            <div className="brand-pulse"></div>
          </div>
          <div className="brand-text">
            <span className="brand-name">Casa Quinta</span>
            <span className="brand-subtitle">Los Cedros</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.href.substring(1)
            return (
              <button
                key={item.href}
                className={`nav-link-desktop ${isActive ? "active" : ""}`}
                onClick={() => handleNavClick(item.href)}
              >
                <Icon className="nav-icon" />
                <span>{item.label}</span>
                {isActive && <div className="active-indicator"></div>}
              </button>
            )
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`hamburger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Mobile Navigation */}
        <nav className={`nav-mobile ${open ? "open" : ""}`}>
          <div className="mobile-nav-content">
            {/* Mobile Header */}
            <div className="mobile-header">
              <div className="mobile-brand">
                <div className="mobile-brand-icon">
                  <MapPin className="mobile-brand-logo" />
                </div>
                <div className="mobile-brand-text">
                  <div className="mobile-brand-name">Casa Quinta</div>
                  <div className="mobile-brand-subtitle">Barrio Los Cedros</div>
                  <div className="mobile-brand-location">San Nicolás de los Arroyos</div>
                </div>
              </div>
              <button className="mobile-close" onClick={() => setOpen(false)} aria-label="Cerrar menú">
                <X className="close-icon" />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="mobile-nav-links">
              {navItems.map((item, index) => {
                const Icon = item.icon
                const isActive = activeSection === item.href.substring(1)
                return (
                  <button
                    key={item.href}
                    className={`nav-link-mobile ${isActive ? "active" : ""}`}
                    onClick={() => handleNavClick(item.href)}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="mobile-link-content">
                      <Icon className="nav-icon-mobile" />
                      <span className="mobile-link-text">{item.label}</span>
                    </div>
                    <ChevronRight className="mobile-link-arrow" />
                  </button>
                )
              })}
            </div>

            {/* Mobile Footer */}
            <div className="mobile-footer">
              <div className="contact-card">
                <div className="contact-icon-wrapper">
                  <Phone className="contact-icon" />
                </div>
                <div className="contact-text">
                  <span className="contact-title">¿Interesado?</span>
                  <span className="contact-subtitle">¡Contáctanos ahora!</span>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Overlay */}
        {open && <div className="nav-overlay" onClick={() => setOpen(false)} />}
      </div>
    </header>
  )
}
