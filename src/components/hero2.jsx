"use client"

import { useState, useEffect } from "react"

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      image: "https://fabric.axiomthemes.com/wp-content/uploads/2022/08/70_2-1-min.jpg",
      alt: "Material Samples",
      title: "Matériaux Textiles",
      description: "Sélection rigoureuse de matières premières de qualité",
    },
    {
      id: 2,
      image: "https://edgartextiles.com/wp-content/uploads/2021/10/domestic-fabrics-for-furnitures.jpeg",
      alt: "Textile Collection",
      title: "Ameublement Premium",
      description: "Découvrez notre collection de tissus d'ameublement haut de gamme",
      
    },
    {
      id: 3,
      image: "https://edgartextiles.com/wp-content/uploads/2023/10/leather-car-interior.jpg",
      alt: "Automotive Fabrics",
      title: "Tissus Automobiles",
      description: "Solutions textiles innovantes pour l'industrie automobile",
      
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Carousel slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={slide.image || "/placeholder.svg"} alt={slide.alt} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={`text-center max-w-118 md:max-w-2xl px-6 transition-all duration-1000 ${
                index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <h2 className="text-4xl md:text-6xl font-light text-white mb-4 tracking-tight">{slide.title}</h2>
              <p className="text-lg md:text-xl text-white/80 font-light  leading-relaxed">{slide.description}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Previous button */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-10 text-white text-3xl hover:scale-125 transition-transform"
        aria-label="Previous slide"
      >
        ‹
      </button>

      {/* Next button */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-10 text-white text-3xl hover:scale-125 transition-transform"
        aria-label="Next slide"
      >
        ›
      </button>
    </div>
  )
}
