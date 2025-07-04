'use client'

import { useState, useEffect } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 50) {
        setShow(true)
      } else if (currentScrollY > lastScrollY) {
        setShow(false)
      } else {
        setShow(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header className={`navbar nav-header ${show ? '' : 'hidden'}`}>
      <div className="logo"></div>

      <button className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </button>

      <nav className={`nav-links ${open ? 'open' : ''}`}>
        <a href="#contacto" onClick={() => setOpen(false)}>Contacto</a>
        <a href="#inicio"   onClick={() => setOpen(false)}>Galería</a>
        <a href="#descripcion" onClick={() => setOpen(false)}>Descripción</a>
      </nav>
    </header>
  )
}
