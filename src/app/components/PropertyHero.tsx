"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronDown, MapPin, Home, Ruler, Star } from "lucide-react"

interface PropertyHeroProps {
  images: string[]
  excludeOnMobile?: string[]
}

export default function PropertyHero({ images, excludeOnMobile = [] }: PropertyHeroProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const filteredImages = isMobile ? images.filter((img) => !excludeOnMobile.includes(img)) : images

  useEffect(() => {
    if (filteredImages.length === 0) return

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % filteredImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [filteredImages])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleScrollToProperty = () => {
    const propertySection = document.getElementById("inicio")
    if (propertySection) {
      propertySection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="hero-container">
      {/* Background Images */}
      <div className="hero-background">
        {filteredImages.map((image, index) => (
          <div key={index} className={`hero-image ${index === currentImage ? "active" : ""}`}>
            <Image
              src={image || "/placeholder.svg"}
              alt={`Quinta imagen ${index + 1}`}
              fill
              priority={index === 0}
              quality={100}
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
        <div className="hero-overlay" />
      </div>

      {/* Content */}
      <div className={`hero-content ${isLoaded ? "loaded" : ""}`}>
        <div className="hero-badge">
          <Star className="badge-icon" />
          <span>QUINTA EN VENTA</span>
        </div>

        <h1 className="hero-title">
          <span className="title-line">HERMOSA CASA QUINTA</span>
          <span className="title-highlight">DUEÑO DIRECTO</span>
        </h1>

        <div className="hero-location">
          <MapPin className="location-icon" />
          <span>Barrio Los Cedros, San Nicolás de los Arroyos</span>
        </div>

        <div className="hero-features">
          <div className="feature-item">
            <Ruler className="feature-icon" />
            <span>Parque 2000 m²</span>
          </div>
          <div className="feature-item">
            <Home className="feature-icon" />
            <span>2 Dormitorios</span>
          </div>
          {/* Agregá más features si querés, por ejemplo pileta, galería, etc */}
          {/* <div className="feature-item">
            <OtherIcon className="feature-icon" />
            <span>Tu texto aquí</span>
          </div> */}
        </div>

        <div className="hero-actions">
          {/* Podés agregar botones o CTA aquí si es necesario */}
        </div>

        <button className="scroll-indicator" onClick={handleScrollToProperty} aria-label="Ver más información">
          <ChevronDown className="scroll-icon" />
        </button>
      </div>

      {/* Image Indicators */}
      <div className="hero-indicators">
        {filteredImages.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentImage ? "active" : ""}`}
            onClick={() => setCurrentImage(index)}
            aria-label={`Ver imagen ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
