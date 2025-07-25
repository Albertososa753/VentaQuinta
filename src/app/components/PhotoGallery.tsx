"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  ImageIcon,
} from "lucide-react";

interface PhotoGalleryProps {
  images: string[];
}

export default function PhotoGallery({ images }: PhotoGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setImageLoaded(false);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setImageLoaded(false);
  };

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
    setImageLoaded(false);
  };

  return (
    <>
      <div id="galeria" className="gallery-container-modern">
        {/* Header */}
        <div className="gallery-header">
          <div className="gallery-title-container">
            <ImageIcon className="gallery-icon" />
            <h3 className="gallery-title">Galería de Fotos</h3>
          </div>
          <div className="image-counter">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Main Image */}
        <div className="main-image-container-modern">
          <div className="image-wrapper">
            <Image
              src={images[currentIndex] || "/placeholder.svg"}
              alt={`Foto ${currentIndex + 1}`}
              width={800}
              height={500}
              className={`main-gallery-image-modern ${
                imageLoaded ? "loaded" : ""
              }`}
              onClick={() => openModal(currentIndex)}
              onLoad={() => setImageLoaded(true)}
              priority={currentIndex === 0}
            />

            {!imageLoaded && (
              <div className="image-loading">
                <div className="loading-spinner-gallery"></div>
              </div>
            )}

            <button
              className="expand-button"
              onClick={() => openModal(currentIndex)}
            >
              <Maximize2 size={18} />
            </button>
          </div>

          <button className="gallery-nav-modern prev" onClick={prevImage}>
            <ChevronLeft size={24} />
          </button>
          <button className="gallery-nav-modern next" onClick={nextImage}>
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="thumbnails-container-modern">
          <div className="thumbnails-scroll">
            {images.map((image, index) => (
              <div
                key={index}
                className={`thumbnail-modern ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={() => {
                  setCurrentIndex(index);
                  setImageLoaded(false);
                }}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Thumbnail ${index + 1}`}
                  width={100}
                  height={70}
                  className="thumbnail-image-modern"
                />
                <div className="thumbnail-overlay"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="modal-overlay-modern"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="modal-content-modern"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div className="modal-counter">
                Foto {currentIndex + 1} de {images.length}
              </div>
              <button
                className="modal-close-modern"
                onClick={() => setIsModalOpen(false)}
              >
                <X size={24} />
              </button>
            </div>

            <div className="modal-image-container">
              <Image
                src={images[currentIndex] || "/placeholder.svg"}
                alt={`Foto ${currentIndex + 1}`}
                width={1200}
                height={800}
                className="modal-image-modern"
                style={{ objectFit: "contain" }}
              />
            </div>

            <button className="modal-nav-modern prev" onClick={prevImage}>
              <ChevronLeft size={32} />
            </button>
            <button className="modal-nav-modern next" onClick={nextImage}>
              <ChevronRight size={32} />
            </button>

            <div className="modal-thumbnails">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`modal-thumbnail ${
                    index === currentIndex ? "active" : ""
                  }`}
                  onClick={() => setCurrentIndex(index)}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    width={60}
                    height={40}
                    className="modal-thumbnail-image"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
