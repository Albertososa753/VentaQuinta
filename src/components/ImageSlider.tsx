"use client";
import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";

interface SliderProps {
  images: (string | StaticImageData)[];
  interval?: number;
  excludeOnMobile?: (string | StaticImageData)[];
}

export default function ImageSlider({
  images,
  interval = 5000,
  excludeOnMobile = [],
}: SliderProps) {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const filtered = isMobile
    ? images.filter((img) => !excludeOnMobile.includes(img))
    : images;

  useEffect(() => {
    if (!filtered.length) return;
    const id = setInterval(() => {
      setCurrent((i) => (i + 1) % filtered.length);
    }, interval);
    return () => clearInterval(id);
  }, [filtered, interval]);

  useEffect(() => {
    if (current >= filtered.length) setCurrent(0);
  }, [filtered, current]);

 const handleScrollToDescription = () => {
    const desc = document.getElementById("inicio");
    if (desc) {
      desc.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="slider-container" id="galeria">
      {filtered.map((img, idx) => (
        <div
          key={idx}
          className={`slider-image ${idx === current ? "active" : ""}`}
        >
          <Image
            src={img}
            alt={`Slide ${idx + 1}`}
            fill
            quality={100}
            priority={idx === 0}
            style={{
              objectFit: "cover",
              objectPosition: "center",
              filter: "brightness(60%)",
            }}
          />

          {/* Overlay con texto y botón */}
          <div className="slider-overlay">
            <h1>QUINTA EN VENTA DUEÑO DIRECTO</h1>
              <button
              onClick={handleScrollToDescription}
              className="slider-scroll-button"
              aria-label="Ir a descripción"
            >
              ↓
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
