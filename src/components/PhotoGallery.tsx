"use client"
import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

interface PhotoGalleryProps {
  images: string[]
}

export default function PhotoGallery({ images }: PhotoGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const openModal = (index: number) => {
    setCurrentIndex(index)
    setIsModalOpen(true)
  }

  return (
    <>
 <div className="gallery-container">

  <div className="main-image-container">
    <Image
      src={images[currentIndex] || "/placeholder.svg"}
      alt={`Foto ${currentIndex + 1}`}
      width={800}
      height={500}
      className="main-gallery-image"
      onClick={() => openModal(currentIndex)}
    />
    <button className="gallery-nav prev" onClick={prevImage}>
      <ChevronLeft size={24} />
    </button>
    <button className="gallery-nav next" onClick={nextImage}>
      <ChevronRight size={24} />
    </button>
  </div>

  <div className="thumbnails-container">
    {images.map((image, index) => (
      <div
        key={index}
        className={`thumbnail ${index === currentIndex ? "active" : ""}`}
        onClick={() => setCurrentIndex(index)}
      >
        <Image
          src={image || "/placeholder.svg"}
          alt={`Thumbnail ${index + 1}`}
          width={100}
          height={70}
          className="thumbnail-image"
        />
      </div>
    ))}
  </div>
</div>


      {/* Modal para vista completa */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>
              <X size={24} />
            </button>
            <Image
              src={images[currentIndex] || "/placeholder.svg"}
              alt={`Foto ${currentIndex + 1}`}
              width={1200}
              height={800}
              className="modal-image"
            />
            <button className="modal-nav prev" onClick={prevImage}>
              <ChevronLeft size={32} />
            </button>
            <button className="modal-nav next" onClick={nextImage}>
              <ChevronRight size={32} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
