import { useEffect, useMemo, useState } from "react";

import service1 from "./assets/placeholders/service-1.png";
import service2 from "./assets/placeholders/service-2.png";
import service3 from "./assets/placeholders/service-3.png";
import service4 from "./assets/placeholders/service-4.png";
import service5 from "./assets/placeholders/service-5.png";
import service6 from "./assets/placeholders/service-6.png";

const services = [
  {
    id: 1,
    eyebrow: "Precision Coating",
    title: "Commercial Painting",
    description:
      "High-end interior and exterior painting solutions for commercial environments.",
    detail: "Interior & Exterior",
    image: service1,
  },
  {
    id: 2,
    eyebrow: "Tactile Excellence",
    title: "Wallcovering Installations",
    description:
      "Expert wallcovering applications that bring texture, depth, and refinement to a space.",
    detail: "Residential & Commercial",
    image: service2,
  },
  {
    id: 3,
    eyebrow: "Mineral Finishes",
    title: "Limewash Paint",
    description:
      "Soft movement, depth, and character through premium limewash applications.",
    detail: "Natural Mineral Application",
    image: service3,
  },
  {
    id: 4,
    eyebrow: "Surface Protection",
    title: "Industrial Coatings",
    description:
      "Durable coating systems designed for demanding industrial and commercial conditions.",
    detail: "High-Traffic & Heavy-Duty",
    image: service4,
  },
  {
    id: 5,
    eyebrow: "Specialty Systems",
    title: "Epoxy Floors",
    description:
      "Resilient floor systems engineered for performance, durability, and visual impact.",
    detail: "Seamless & Chemical-Resistant",
    image: service5,
  },
  {
    id: 6,
    eyebrow: "Architectural Detail",
    title: "Decorative Finishes",
    description:
      "Elevated specialty finishes crafted to create distinctive commercial interiors.",
    detail: "Custom & Bespoke",
    image: service6,
  },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

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
                    style={{ backgroundImage: `url(${service.image})` }}
                  >
                    <div className="service-card-gradient" />

                    <div className="service-card-content">
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