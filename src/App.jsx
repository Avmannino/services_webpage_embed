import { useEffect, useMemo, useState } from "react";

import bg1 from "./assets/backgrounds/bg-1.webp";
import bg2 from "./assets/backgrounds/bg-2.webp";
import bg3 from "./assets/backgrounds/bg-3.jpg";
import bg4 from "./assets/backgrounds/bg-4.jpeg";
import bg5 from "./assets/backgrounds/bg-5.webp";
import bg6 from "./assets/backgrounds/bg-6.webp";

const backgrounds = [bg1, bg2, bg3, bg4, bg5, bg6];

import service1 from "./assets/placeholders/service-1.png";
import service2 from "./assets/placeholders/service-2.png";
import service3 from "./assets/placeholders/service-3.png";
import service4 from "./assets/placeholders/service-4.png";
import service5 from "./assets/placeholders/service-5.png";
import service6 from "./assets/placeholders/service-6.png";
import service7 from "./assets/placeholders/service-7.png";
import service8 from "./assets/placeholders/service-8.png";
import service9 from "./assets/placeholders/service-9.png";

import iconCommercialPainting from "./assets/icons/commercial-painting.png";
import iconWallcovering from "./assets/icons/wallcovering.png";
import iconLimewash from "./assets/icons/limewash.png";
import iconIntumescent from "./assets/icons/intumescent.png";
import iconEpoxy from "./assets/icons/epoxy.png";
import iconVenetianPlaster from "./assets/icons/venetian-plaster.png";
import iconAcoustic from "./assets/icons/acoustic.png";
import iconFabricPanels from "./assets/icons/fabric-panels.png";
import iconIdeaPaint from "./assets/icons/idea-paint.png";

const services = [
  {
    id: 1,
    eyebrow: "Precision Coating",
    title: "Commercial Painting",
    description:
      "High-end interior and exterior painting solutions for commercial environments.",
    detail: "Interior & Exterior",
    icon: iconCommercialPainting,
    image: service1,
  },
  {
    id: 2,
    eyebrow: "Tactile Excellence",
    title: "Wallcovering Installations",
    description:
      "Expert wallcovering applications that bring texture, depth, and refinement to a space.",
    detail: "Residential & Commercial",
    icon: iconWallcovering,
    image: service2,
  },
  {
    id: 3,
    eyebrow: "Mineral Finishes",
    title: "Limewash Paint",
    description:
      "Soft movement, depth, and character through premium limewash applications.",
    detail: "Natural Mineral Application",
    icon: iconLimewash,
    image: service3,
  },
  {
    id: 4,
    eyebrow: "Safety Performance",
    title: "Intumescent Coatings",
    description:
      "Specialized fire-retardant coatings designed to protect structural steel while maintaining architectural design integrity.",
    detail: "Fire-Rated & Certified",
    icon: iconIntumescent,
    image: service4,
  },
  {
    id: 5,
    eyebrow: "Specialty Systems",
    title: "Epoxy Floors",
    description:
      "Resilient floor systems engineered for performance, durability, and visual impact.",
    detail: "Seamless & Chemical-Resistant",
    icon: iconEpoxy,
    image: service5,
  },
  {
    id: 6,
    eyebrow: "Artisanal Mastery",
    title: "Venetian Plaster",
    description:
      "Multi-layered artisan plastering polished to a high-sheen marble-like finish, creating unparalleled luxury and light play.",
    detail: "Polished & Matte Options",
    icon: iconVenetianPlaster,
    image: service6,
  },
  {
    id: 7,
    eyebrow: "Sound Optimization",
    title: "Acoustic Panels",
    description:
      "Engineered acoustic solutions that balance performance and aesthetics for commercial spaces.",
    detail: "Custom Shapes & Finishes",
    icon: iconAcoustic,
    image: service7,
  },
  {
    id: 8,
    eyebrow: "Wall Systems",
    title: "Fabric Wrapped Panels",
    description:
      "Bespoke textile wall systems providing superior sound control and a soft, architectural finish to high-traffic areas.",
    detail: "Acoustic & Decorative",
    icon: iconFabricPanels,
    image: service8,
  },
  {
    id: 9,
    eyebrow: "Brainstorming Spaces",
    title: "Idea Paint",
    description:
      "Writable surface coatings that transform walls into functional, collaborative workspaces.",
    detail: "Dry-Erase & Magnetic",
    icon: iconIdeaPaint,
    image: service9,
  },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;

      if (width <= 767) {
        setVisibleCount(1);
      } else if (width <= 1100) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  useEffect(() => {
    const max = Math.max(0, services.length - visibleCount);
    if (currentIndex > max) {
      setCurrentIndex(max);
    }
  }, [currentIndex, visibleCount]);

  const maxIndex = useMemo(
    () => Math.max(0, services.length - visibleCount),
    [visibleCount]
  );

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const prevPage = Math.ceil(prev / visibleCount) - 1;
      return Math.max(0, prevPage * visibleCount);
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const nextPage = Math.floor(prev / visibleCount) + 1;
      return Math.min(maxIndex, nextPage * visibleCount);
    });
  };

  return (
    <main className="services-page">
      <div className="page-background">
        {backgrounds.map((bg, i) => (
          <div
            key={i}
            className="page-background-slide"
            style={{ backgroundImage: `url(${bg})`, opacity: i === bgIndex ? 1 : 0 }}
          />
        ))}
        <div className="page-background-overlay" />
      </div>

      <section className="services-section">
        <div className="services-shell">
          <div className="carousel-wrapper">
            <button
              type="button"
              className="carousel-button carousel-button-prev"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Previous slide"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M15 18L9 12L15 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="carousel-clip">
            <div className="carousel-area" id="services-carousel">
              <div
                className="carousel-track"
                style={{
                  transform: `translateX(calc(-${currentIndex} * ((100% - (${visibleCount} - 1) * var(--card-gap)) / ${visibleCount} + var(--card-gap))))`,
                }}
              >
                {services.map((service) => (
                  <article
                    className="service-card"
                    key={service.id}
                  >
                    <div
                      className="service-card-bg"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                    <div className="service-card-gradient" />

                    <div className="service-card-content">
                      {service.icon && (
                        <img
                          src={service.icon}
                          alt=""
                          className="service-card-icon"
                          aria-hidden="true"
                        />
                      )}

                      <p className="service-card-eyebrow">{service.eyebrow}</p>

                      <h2 className="service-card-title">{service.title}</h2>

                      <p className="service-card-description">
                        {service.description}
                      </p>

                      <p className="service-card-detail">{service.detail}</p>

                      <div className="service-card-line" />
                    </div>
                  </article>
                ))}

              </div>
            </div>
            </div>

            <button
              type="button"
              className="carousel-button carousel-button-next"
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              aria-label="Next slide"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M9 18L15 12L9 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
