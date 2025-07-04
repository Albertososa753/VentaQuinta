"use client"
import { useState } from "react"
import type React from "react"

import Image from "next/image"
import { ChevronLeft, ChevronRight, MapPin, MessageCircle } from "lucide-react"

interface PropertyListingProps {
  images: string[]
  title: string
  price: string
  location: string
}

export default function PropertyListing({ images, title }: PropertyListingProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    mensaje: "",
  })

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData)
  }

  const handleWhatsApp = () => {
    const message = `Hola, me interesa la propiedad: ${title}`
    const whatsappUrl = `https://wa.me/5493364123456?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="property-listing">
      {/* Header */}
      <div className="property-header">
        <button className="back-button">
          <ChevronLeft size={24} />
        </button>
        <div className="property-title-section">
          <h1 className="property-title">{title}</h1>
          <div className="property-specs">
            <span className="spec-item">
              <span className="spec-icon">🏠</span>
              Quinta
            </span>
            <span className="spec-item">
              <span className="spec-icon">🛏️</span>2 Dorm.
            </span>
            <span className="spec-item">
              <span className="spec-icon">🚿</span>1 Ba.
            </span>
            <span className="spec-item">
              <span className="spec-icon">🏊</span>
              Pileta
            </span>
          </div>
        </div>
        <button className="contact-button" onClick={handleWhatsApp}>
          <MessageCircle size={20} />
          Consultanos
        </button>
      </div>

      <div className="property-content">
        {/* Left Column - Images */}
        <div className="images-section">
          <div className="main-image-container">
            <Image
              src={images[currentImageIndex] || "/placeholder.svg?height=400&width=600"}
              alt={`Foto ${currentImageIndex + 1}`}
              width={600}
              height={400}
              className="main-image"
            />
            <button className="image-nav prev" onClick={prevImage}>
              <ChevronLeft size={20} />
            </button>
            <button className="image-nav next" onClick={nextImage}>
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="thumbnails">
            {images.slice(0, 6).map((image, index) => (
              <div
                key={index}
                className={`thumbnail ${index === currentImageIndex ? "active" : ""}`}
                onClick={() => setCurrentImageIndex(index)}
              >
                <Image
                  src={image || "/placeholder.svg?height=80&width=80"}
                  alt={`Thumbnail ${index + 1}`}
                  width={80}
                  height={60}
                  className="thumbnail-image"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Map and Contact */}
        <div className="sidebar">
          {/* Map */}
          <div className="map-container">
            <div className="map-placeholder">
              <MapPin size={32} className="map-icon" />
              <p>San Nicolás de los Arroyos</p>
              <small>Buenos Aires, Argentina</small>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <h3>¿Te interesa esta propiedad?</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre:"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  className="form-input"
                />
                <input
                  type="email"
                  name="correo"
                  placeholder="Correo:"
                  value={formData.correo}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              <div className="form-row">
                <input
                  type="tel"
                  name="telefono"
                  placeholder="Teléfono:"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  className="form-input"
                />
                <input type="text" placeholder="Suma 7 + 2 ?" className="form-input" />
              </div>
              <textarea
                name="mensaje"
                placeholder="Tu mensaje:"
                value={formData.mensaje}
                onChange={handleInputChange}
                className="form-textarea"
                rows={4}
              />
              <button type="submit" className="submit-button">
                Enviar Consulta
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
