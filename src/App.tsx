import { useState, useEffect, useCallback } from 'react';
import './App.css';
import hero1 from './assets/images/hero left big banner 1.webp';
import hero2 from './assets/images/hero left big banner 2.webp';
import hero3 from './assets/images/hero left big banner 3.webp';
import topRightBanner from './assets/images/right top hero.webp';
import bottomRightBanner from './assets/images/right bottom hero.webp';
import MobileMenuDrawer from './components/MobileMenuDrawer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AnnouncementBar from './components/AnnouncementBar';
import TopActionGrid from './components/TopActionGrid';
import FeaturedCategoriesSection from './components/FeaturedCategoriesSection';
import StoresBanner from './components/StoresBanner';
import LeaderboardSection from './components/LeaderboardSection';
import FeaturedProductsSection from './components/FeaturedProductsSection';
import Footer from './components/Footer';
import MobileBottomNav from './components/MobileBottomNav';

function App() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [footerAboutOpen, setFooterAboutOpen] = useState(false);
  const [footerContactOpen, setFooterContactOpen] = useState(false);

  const slides = [hero1, hero2, hero3];
  const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];

  const handleNext = useCallback(() => {
    if (!isTransitioning && (currentSlide === extendedSlides.length - 1 || currentSlide === 0)) return;
    setCurrentSlide((prev) => prev + 1);
    setIsTransitioning(true);
  }, [currentSlide, isTransitioning, extendedSlides.length]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    if (!isMenuOpen) {
      timer = setTimeout(() => {
        handleNext();
      }, 5000);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [isMenuOpen, handleNext]);

  const handlePrev = () => {
    if (!isTransitioning && (currentSlide === 0 || currentSlide === extendedSlides.length - 1)) return;
    setCurrentSlide((prev) => prev - 1);
    setIsTransitioning(true);
  };

  const handleTransitionEnd = () => {
    if (currentSlide >= extendedSlides.length - 1) {
      setIsTransitioning(false);
      setCurrentSlide(1);
    } else if (currentSlide <= 0) {
      setIsTransitioning(false);
      setCurrentSlide(extendedSlides.length - 2);
    }
  };

  return (
    <div className="app">
      <MobileMenuDrawer isMenuOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <Header onOpenMenu={() => setIsMenuOpen(true)} />

      <Navigation />

      <main className="container">
        <HeroSection
          currentSlide={currentSlide}
          isTransitioning={isTransitioning}
          extendedSlides={extendedSlides}
          slides={slides}
          onTransitionEnd={handleTransitionEnd}
          onPrev={handlePrev}
          onNext={handleNext}
          onSelectSlide={(index) => {
            setIsTransitioning(true);
            setCurrentSlide(index + 1);
          }}
          topRightBanner={topRightBanner}
          bottomRightBanner={bottomRightBanner}
        />

        <AnnouncementBar />

        <TopActionGrid />

        <FeaturedCategoriesSection />

        <StoresBanner />

        <LeaderboardSection />

        <FeaturedProductsSection slides={slides} />
      </main>

      <Footer
        footerAboutOpen={footerAboutOpen}
        footerContactOpen={footerContactOpen}
        onToggleAbout={() => setFooterAboutOpen(!footerAboutOpen)}
        onToggleContact={() => setFooterContactOpen(!footerContactOpen)}
      />

      <MobileBottomNav />
    </div>
  );
}

export default App;
