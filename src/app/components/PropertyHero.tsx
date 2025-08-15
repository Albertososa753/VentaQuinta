"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronDown, MapPin, Home, Ruler, Star, Bath, Car, Play, Pause } from "lucide-react"


interface PropertyHeroProps {
  images: string[]
  excludeOnMobile?: string[]
  title?: string
  subtitle?: string
  location?: string
  features?: Array<{
    icon: React.ReactNode
    label: string
  }>
  price?: string
  status?: string
}

export default function PropertyHero({
  images,
  excludeOnMobile = [],
  title = "Casa Quinta en Venta",
  subtitle = "Buena Ubicación Apta para Vivienda",
  location = "Barrio Los Cedros, San Nicolás de los Arroyos",
  features = [
    { icon: <Ruler className="feature-icon" />, label: "Parque 2000 m²" },
    { icon: <Home className="feature-icon" />, label: "2 Dormitorios" },
    { icon: <Bath className="feature-icon" />, label: "Un baño" },
    { icon: <Car className="feature-icon" />, label: "Cochera" },
  ],
  status = "QUINTA EN VENTA",
}: PropertyHeroProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const filteredImages = isMobile ? images.filter((img) => !excludeOnMobile.includes(img)) : images

  useEffect(() => {
    if (filteredImages.length === 0 || !isPlaying) return

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % filteredImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [filteredImages, isPlaying])

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const handleScrollToProperty = () => {
    const propertySection = document.getElementById("inicio")
    if (propertySection) {
      propertySection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const toggleSlideshow = () => {
    setIsPlaying(!isPlaying)
  }



  return (
    <section className="hero-container">
      {/* Background Images */}
      <div className="hero-background">
        {filteredImages.map((image, index) => (
          <div key={index} className={`hero-image ${index === currentImage ? "active" : ""}`}>
            <Image
              src={image || "/placeholder.svg?height=1080&width=1920&query=luxury property exterior"}
              alt={`Propiedad imagen ${index + 1}`}
              fill
              priority={index === 0}
              quality={90}
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
        <div className="hero-overlay" />
      </div>

      {/* Navigation Controls */}
  

      {/* Slideshow Controls */}
      <div className="slideshow-controls">
        <button
          className="control-button"
          onClick={toggleSlideshow}
          aria-label={isPlaying ? "Pausar slideshow" : "Reproducir slideshow"}
        >
          {isPlaying ? <Pause className="control-icon" /> : <Play className="control-icon" />}
          <span className="control-text">{isPlaying ? "Pausar" : "Reproducir"}</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="hero-content-wrapper">
        <div className={`hero-content ${isLoaded ? "loaded" : ""}`}>
          {/* Status Badge */}
          <div className="hero-badge">
            <Star className="badge-icon" />
            <span>{status}</span>
          </div>

          {/* Title */}
          <h1 className="hero-title">
            <span className="title-main">{title}</span>
            <span className="title-subtitle">{subtitle}</span>
          </h1>

          {/* Location */}
          <div className="hero-location">
            <MapPin className="location-icon" />
            <span>{location}</span>
          </div>

          {/* Features */}
          <div className="hero-features">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                {feature.icon}
                <span className="feature-label">{feature.label}</span>
              </div>
            ))}
          </div>

          {/* Price */}
         

        

          {/* Scroll Indicator */}
          <button className="scroll-indicator" onClick={handleScrollToProperty} aria-label="Ver más información">
            <ChevronDown className="scroll-icon" />
          </button>
        </div>
      </div>

   
    </section>
  )
}
