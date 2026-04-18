type HeroSectionProps = {
  currentSlide: number;
  isTransitioning: boolean;
  extendedSlides: string[];
  slides: string[];
  onTransitionEnd: () => void;
  onPrev: () => void;
  onNext: () => void;
  onSelectSlide: (index: number) => void;
  topRightBanner: string;
  bottomRightBanner: string;
};

export default function HeroSection({
  currentSlide,
  isTransitioning,
  extendedSlides,
  slides,
  onTransitionEnd,
  onPrev,
  onNext,
  onSelectSlide,
  topRightBanner,
  bottomRightBanner
}: HeroSectionProps) {
  return (
    <section className="hero-section">
      <div className="hero-grid">
        <div className="hero-main">
          <div
            className="hero-carousel-track"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
            }}
            onTransitionEnd={onTransitionEnd}
          >
            {extendedSlides.map((slide, index) => (
              <img key={index} src={slide} alt={`Slide ${index}`} />
            ))}
          </div>

          <button className="carousel-btn prev" onClick={onPrev}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <button className="carousel-btn next" onClick={onNext}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>

          <div className="hero-pagination">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`hero-dot ${((currentSlide - 1 + slides.length) % slides.length) === index ? 'active' : ''}`}
                onClick={() => onSelectSlide(index)}
              ></div>
            ))}
          </div>
        </div>
        <div className="hero-sidebars">
          <div className="hero-sidebar-item">
            <img src={topRightBanner} alt="Top Promo" />
          </div>
          <div className="hero-sidebar-item">
            <img src={bottomRightBanner} alt="Bottom Promo" />
          </div>
        </div>
      </div>
    </section>
  );
}
