"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"

const logo = "/logo5.png"

const COLORS = {
  navy: "#1F2A44",
  navyDeep: "#141A2C",
  beige: "#E8DCC8",
  gold: "#C6A75E",
  cream: "#F7F3EC",
}

const SLIDES = [
  {
    id: 1,
    image: "/slides/materiaux-textiles.png",
    alt: "Échantillons de matières textiles",
    eyebrow: "Matières premières",
    title: "Matériaux Textiles",
    description: "Sélection rigoureuse de matières premières de qualité, choisies pour leur tenue et leur toucher.",
  },
  {
    id: 2,
    image: "/slides/cuir-synthetique.png",
    alt: "CUIR SYNTHETIQUE pour ameublement",
    eyebrow: "Matières & revêtements",
    title: "Cuir Syntétique",
    description: "Des revêtements techniques et esthétiques, sélectionnés pour leur résistance, leur souplesse et leur qualité, adaptés aux exigences de l'ameublement et des applications professionnelles.",
  },
  {
    id: 3,
    image: "https://edgartextiles.com/wp-content/uploads/2023/10/leather-car-interior.jpg",
    alt: "Tissus pour intérieurs automobiles",
    eyebrow: "Secteur automobile",
    title: "Tissus Automobiles",
    description: "Des solutions textiles innovantes, conçues pour répondre aux exigences de l'industrie automobile.",
  },
]

const AUTOPLAY_MS = 3000

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [mounted, setMounted] = useState(false)
  const [textVisible, setTextVisible] = useState(true)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length)
    }, AUTOPLAY_MS)
    return () => clearInterval(timerRef.current)
  }, [paused])

  useEffect(() => {
    setTextVisible(false)
    const t = setTimeout(() => setTextVisible(true), 40)
    return () => clearTimeout(t)
  }, [current])

  const goTo = (index) => setCurrent(index)
  const goPrev = () => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)
  const goNext = () => setCurrent((prev) => (prev + 1) % SLIDES.length)

  const slide = SLIDES[current]

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      style={{ backgroundColor: COLORS.navyDeep }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap');

        .hero-font-display { font-family: 'Fraunces', serif; }
        .hero-font-body { font-family: 'Inter', sans-serif; }

        .hero-kenburns {
          animation: heroKenBurns ${AUTOPLAY_MS}ms ease-out forwards;
        }
        @keyframes heroKenBurns {
          from { transform: scale(1); }
          to { transform: scale(1.06); }
        }

        .hero-focus:focus-visible {
          outline: 2px solid ${COLORS.gold};
          outline-offset: 3px;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-kenburns { animation: none !important; }
          .hero-transition { transition: none !important; }
        }
      `}</style>

      {/* Slides */}
      {SLIDES.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={s.image || "/placeholder.svg"}
            alt={s.alt}
            className={`w-full h-full object-cover ${i === current ? "hero-kenburns" : ""}`}
            key={`${s.id}-${i === current ? current : "idle"}`}
          />
          {/* Left-to-right scrim so left-aligned text stays legible */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(100deg, rgba(20,26,44,0.90) 0%, rgba(20,26,44,0.68) 20%, rgba(20,26,44,0.28) 65%, rgba(20,26,44,0) 78%)",
            }}
          />
          {/* Bottom scrim so controls stay legible on any image */}
          <div
            className="absolute inset-x-0 bottom-0 h-40"
            style={{ background: "linear-gradient(0deg, rgba(20,26,44,0.75) 0%, rgba(20,26,44,0) 100%)" }}
          />
        </div>
      ))}

      {/* Logo — persistent, top-left */}
      <div
        className="hero-transition absolute top-7 left-6 sm:left-10 md:left-14 z-30 flex items-center gap-3"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0px)" : "translateY(-8px)",
          transitionDuration: "700ms",
        }}
      >
        <Image src={logo} alt="Logo" width={130} height={120} />

        
        
      </div>

      {/* Text content — overlaid on the image, left-aligned */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="px-6 sm:px-10 md:px-16 lg:px-20 max-w-xl">
          <div
            className="hero-transition hero-font-body text-xs sm:text-sm tracking-[0.2em] uppercase mb-4"
            style={{
              color: COLORS.gold,
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? "translateY(0px)" : "translateY(12px)",
              transitionDuration: "600ms",
            }}
          >
            {slide.eyebrow}
          </div>

          <h1
            className="hero-transition hero-font-display font-bold leading-[1.05] mb-5 text-lg"
            style={{
              color: COLORS.cream,
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? "translateY(0px)" : "translateY(16px)",
              transitionDuration: "700ms",
              transitionDelay: "60ms",
            }}
          >
            {slide.title}
          </h1>

          <p
            className="hero-transition hero-font-body font-semibold leading-relaxed"
            style={{
              color: "rgba(232,220,200,0.82)",
              fontSize: "1.1rem",
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? "translateY(0px)" : "translateY(16px)",
              transitionDuration: "700ms",
              transitionDelay: "120ms",
            }}
          >
            {slide.description}
          </p>
        </div>
      </div>

      {/* Bottom bar — counter, indicators, arrows */}
      <div
        className="hero-transition absolute inset-x-0 bottom-8 z-30 flex items-center justify-between px-6 sm:px-10 md:px-16"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0px)" : "translateY(10px)",
          transitionDuration: "700ms",
          transitionDelay: "200ms",
        }}
      >
        <span className="hero-font-body text-xs tracking-widest hidden sm:inline" style={{ color: "rgba(232,220,200,0.55)" }}>
          0{current + 1} / 0{SLIDES.length}
        </span>

        <div className="flex gap-3 mx-auto sm:mx-0">
          {SLIDES.map((_, i) => {
            const active = i === current
            return (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="hero-focus hero-transition rounded-full"
                style={{
                  height: 6,
                  width: active ? 30 : 6,
                  backgroundColor: active ? COLORS.gold : "rgba(232,220,200,0.4)",
                  transitionDuration: "350ms",
                }}
                aria-label={`Aller au slide ${i + 1}`}
                aria-current={active}
              />
            )
          })}
        </div>

        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={goPrev}
            className="hero-focus flex items-center justify-center rounded-full transition-colors duration-300"
            style={{ width: 40, height: 40, border: "1px solid rgba(232,220,200,0.3)", backdropFilter: "blur(4px)" }}
            aria-label="Slide pr&eacute;c&eacute;dent"
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = COLORS.gold)}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(232,220,200,0.3)")}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke={COLORS.cream} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={goNext}
            className="hero-focus flex items-center justify-center rounded-full transition-colors duration-300"
            style={{ width: 40, height: 40, border: "1px solid rgba(232,220,200,0.3)", backdropFilter: "blur(4px)" }}
            aria-label="Slide suivant"
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = COLORS.gold)}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(232,220,200,0.3)")}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke={COLORS.cream} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}