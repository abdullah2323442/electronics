import { useState, useEffect } from 'react'
import './App.css'
import hero1 from './assets/images/hero left big banner 1.webp'
import hero2 from './assets/images/hero left big banner 2.webp'
import hero3 from './assets/images/hero left big banner 3.webp'
import topRightBanner from './assets/images/right top hero.webp'
import bottomRightBanner from './assets/images/right bottom hero.webp'

const categories = [
  "Desktop", "Laptop", "Component", "Monitor", "Power", "Phone", "Tablet",
  "Office Equipment", "Camera", "Security", "Networking", "Software",
  "Server & Storage", "Accessories", "Gadget", "Gaming", "TV", "Appliance"
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [footerAboutOpen, setFooterAboutOpen] = useState(false);
  const [footerContactOpen, setFooterContactOpen] = useState(false);
  const slides = [hero1, hero2, hero3];
  // Cloned slides for infinite loop: [last, 1, 2, 3, first]
  const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  useEffect(() => {
    let timer: any;
    if (!isMenuOpen) {
      timer = setTimeout(() => {
        handleNext();
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [currentSlide, isMenuOpen]);

  const handleNext = () => {
    if (!isTransitioning && (currentSlide === extendedSlides.length - 1 || currentSlide === 0)) return;
    setCurrentSlide((prev) => prev + 1);
    setIsTransitioning(true);
  };

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
      {/* Mobile Menu Drawer */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(false)}>
        <div className="mobile-menu-drawer" onClick={(e) => e.stopPropagation()}>
          <div className="mobile-menu-header">
            <button className="close-menu" onClick={() => setIsMenuOpen(false)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="mobile-logo">
              <img src="/vellox-logo.png" alt="Vellox Digital" height="30" />
            </div>
          </div>
          <ul className="mobile-category-list">
            {categories.map((cat, i) => (
              <li key={i} className="mobile-category-item">
                <span>{cat}</span>
                <span className="plus-icon">+</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Header */}
      <header>
        <div className="container">
          <div className="header-inner">
            <button className="hamburger-menu" onClick={() => setIsMenuOpen(true)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
            <div className="logo">
              <img src="/vellox-logo.png" alt="Vellox Digital" height="40" className="desktop-logo" />
            </div>

            <div className="mobile-header-actions">
              <button className="mobile-action-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </button>
              <button className="mobile-action-btn">
                <div className="cart-badge-container">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                  <span className="cart-badge">0</span>
                </div>
              </button>
            </div>

            <div className="search-bar">
              <input type="text" placeholder="Search" />
              <div className="search-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
            </div>

            <div className="header-actions">
              <div className="action-item">
                <div className="icon">🎁</div>
                <div className="action-content">
                  <span className="text">Offers</span>
                  <span className="label">Latest Offers</span>
                </div>
              </div>
              <div className="action-item">
                <div className="icon">⚡</div>
                <div className="action-content">
                  <span className="text">19th Deal</span>
                  <span className="label">Special Deals</span>
                </div>
              </div>
              <div className="action-item">
                <div className="icon">👤</div>
                <div className="action-content">
                  <span className="text">Account</span>
                  <span className="label">Register or Login</span>
                </div>
              </div>
              <a href="#" className="pc-builder-btn">PC Builder</a>
            </div>
          </div>
        </div>
      </header>


      {/* Navigation */}
      <nav>
        <div className="container">
          <ul className="nav-list">
            <li className="nav-item has-dropdown">
              <span>Desktop</span>
              <div className="dropdown">
                <ul className="dropdown-list">
                  <li>Desktop Offer</li>
                  <li className="has-caret">Star PC <span className="caret"></span></li>
                  <li className="has-caret">Gaming PC <span className="caret"></span></li>
                  <li className="has-caret">Brand PC <span className="caret"></span></li>
                  <li className="has-caret">All-in-One PC <span className="caret"></span></li>
                  <li>AI PC</li>
                  <li className="has-caret">Portable Mini PC <span className="caret"></span></li>
                  <li>Apple Mac Mini</li>
                  <li>Apple iMac</li>
                  <li>Apple Mac Studio</li>
                  <li>Apple Mac Pro</li>
                  <li className="show-all">Show All Desktop</li>
                </ul>
              </div>
            </li>
            <li className="nav-item has-dropdown">
              <span>Laptop</span>
              <div className="dropdown">
                <ul className="dropdown-list">
                  <li>Laptop Offer</li>
                  <li className="has-caret">All Laptops <span className="caret"></span></li>
                  <li className="has-caret">Gaming Laptop <span className="caret"></span></li>
                  <li className="has-caret">Premium Ultrabook <span className="caret"></span></li>
                  <li>Business Laptop</li>
                  <li>Student Laptop</li>
                  <li>Apple MacBook</li>
                  <li>Microsoft Surface</li>
                  <li className="show-all">Show All Laptop</li>
                </ul>
              </div>
            </li>
            <li className="nav-item has-dropdown">
              <span>Component</span>
              <div className="dropdown">
                <ul className="dropdown-list">
                  <li>Processor</li>
                  <li>Motherboard</li>
                  <li>RAM (Desktop)</li>
                  <li>Graphics Card</li>
                  <li>SSD</li>
                  <li>Casing</li>
                  <li>Power Supply</li>
                  <li>CPU Cooler</li>
                  <li className="show-all">Show All Component</li>
                </ul>
              </div>
            </li>
            <li className="nav-item has-dropdown">
              <span>Monitor</span>
              <div className="dropdown">
                <ul className="dropdown-list">
                  <li>Value Series</li>
                  <li>Gaming Monitor</li>
                  <li>4K Monitor</li>
                  <li>Curved Monitor</li>
                  <li>Touch Monitor</li>
                  <li className="show-all">Show All Monitor</li>
                </ul>
              </div>
            </li>
            <li className="nav-item has-dropdown">
              <span>Tablet</span>
              <div className="dropdown">
                <ul className="dropdown-list">
                  <li>Apple iPad</li>
                  <li>Samsung Tablet</li>
                  <li>Graphics Tablet</li>
                  <li>Microsoft Surface</li>
                  <li className="show-all">Show All Tablet</li>
                </ul>
              </div>
            </li>
            <li className="nav-item has-dropdown">
              <span>Phone</span>
              <div className="dropdown">
                <ul className="dropdown-list">
                  <li>Apple iPhone</li>
                  <li>Samsung</li>
                  <li>Google Pixel</li>
                  <li>Xiaomi</li>
                  <li>OnePlus</li>
                  <li className="show-all">Show All Phone</li>
                </ul>
              </div>
            </li>
            <li className="nav-item has-dropdown">
              <span>Power</span>
              <div className="dropdown">
                <ul className="dropdown-list">
                  <li>Online UPS</li>
                  <li>Offline UPS</li>
                  <li>Voltage Stabilizer</li>
                  <li>Surge Protector</li>
                  <li>Power Bank</li>
                  <li className="show-all">Show All Power</li>
                </ul>
              </div>
            </li>
            <li className="nav-item has-dropdown">
              <span>Office Equipment</span>
              <div className="dropdown">
                <ul className="dropdown-list">
                  <li>Printer</li>
                  <li>Scanner</li>
                  <li>Photocopier</li>
                  <li>Projector</li>
                  <li>Paper Shredder</li>
                  <li>Money Counting Machine</li>
                  <li className="show-all">Show All Office</li>
                </ul>
              </div>
            </li>
            <li className="nav-item has-dropdown">
              <span>Camera</span>
              <div className="dropdown">
                <ul className="dropdown-list">
                  <li>DSLR Camera</li>
                  <li>Mirrorless Camera</li>
                  <li>Instant Camera</li>
                  <li>Action Camera</li>
                  <li>Camera Lens</li>
                  <li>Camera Accessories</li>
                  <li className="show-all">Show All Camera</li>
                </ul>
              </div>
            </li>
            <li className="nav-item has-dropdown">
              <span>Security</span>
              <div className="dropdown">
                <ul className="dropdown-list">
                  <li>IP Camera</li>
                  <li>CC Camera</li>
                  <li>DVR / NVR</li>
                  <li>Access Control</li>
                  <li>Smart Door Lock</li>
                  <li className="show-all">Show All Security</li>
                </ul>
              </div>
            </li>
            <li className="nav-item has-dropdown">
              <span>Networking</span>
              <div className="dropdown">
                <ul className="dropdown-list">
                  <li>Router</li>
                  <li>Network Switch</li>
                  <li>LAN Card</li>
                  <li>Access Point</li>
                  <li>Network Cable</li>
                  <li className="show-all">Show All Networking</li>
                </ul>
              </div>
            </li>
            <li className="nav-item has-dropdown">
              <span>Software</span>
              <div className="dropdown">
                <ul className="dropdown-list">
                  <li>Operating System</li>
                  <li>Office Application</li>
                  <li>Antivirus</li>
                  <li>Server Software</li>
                  <li>Design Software</li>
                  <li className="show-all">Show All Software</li>
                </ul>
              </div>
            </li>
            <li className="nav-item has-dropdown">
              <span>Server & Storage</span>
              <div className="dropdown">
                <ul className="dropdown-list">
                  <li>Server Rack</li>
                  <li>NAS Storage</li>
                  <li>Server Motherboard</li>
                  <li>Workstation</li>
                  <li>Server Processor</li>
                  <li className="show-all">Show All Server</li>
                </ul>
              </div>
            </li>
            <li className="nav-item has-dropdown">
              <span>Accessories</span>
              <div className="dropdown">
                <ul className="dropdown-list">
                  <li>Keyboard</li>
                  <li>Mouse</li>
                  <li>Headphone</li>
                  <li>Bluetooth Speaker</li>
                  <li>USB Hub</li>
                  <li>Cable & Converter</li>
                  <li className="show-all">Show All Accessories</li>
                </ul>
              </div>
            </li>
            <li className="nav-item has-dropdown">
              <span>Gadget</span>
              <div className="dropdown">
                <ul className="dropdown-list">
                  <li>Smart Watch</li>
                  <li>Earbuds</li>
                  <li>Smart Band</li>
                  <li>Power Bank</li>
                  <li>Gimbal</li>
                  <li className="show-all">Show All Gadget</li>
                </ul>
              </div>
            </li>
            <li className="nav-item has-dropdown">
              <span>Gaming</span>
              <div className="dropdown">
                <ul className="dropdown-list">
                  <li>Gaming Chair</li>
                  <li>Gaming Desk</li>
                  <li>Gaming Console</li>
                  <li>VR Headset</li>
                  <li>Gaming Controller</li>
                  <li className="show-all">Show All Gaming</li>
                </ul>
              </div>
            </li>
            <li className="nav-item has-dropdown">
              <span>TV</span>
              <div className="dropdown">
                <ul className="dropdown-list">
                  <li>Samsung TV</li>
                  <li>Sony TV</li>
                  <li>LG TV</li>
                  <li>Android TV</li>
                  <li>4K UHD TV</li>
                  <li className="show-all">Show All TV</li>
                </ul>
              </div>
            </li>
            <li className="nav-item has-dropdown">
              <span>Appliance</span>
              <div className="dropdown">
                <ul className="dropdown-list">
                  <li>Air Conditioner</li>
                  <li>Refrigerator</li>
                  <li>Washing Machine</li>
                  <li>Microwave Oven</li>
                  <li>Water Purifier</li>
                  <li className="show-all">Show All Appliance</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-grid">
            <div className="hero-main">
              <div
                className="hero-carousel-track"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                  transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {extendedSlides.map((slide, index) => (
                  <img key={index} src={slide} alt={`Slide ${index}`} />
                ))}
              </div>

              <button className="carousel-btn prev" onClick={handlePrev}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>
              <button className="carousel-btn next" onClick={handleNext}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>

              <div className="hero-pagination">
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className={`hero-dot ${((currentSlide - 1 + slides.length) % slides.length) === index ? 'active' : ''}`}
                    onClick={() => {
                      setIsTransitioning(true);
                      setCurrentSlide(index + 1);
                    }}
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

        {/* Announcement */}
        <div className="announcement-bar">
          <div className="announcement-marquee">
            <span>Thursday, 16 April, All our branches are open. Additionally, our online activities are open and operational.</span>
            <span>Thursday, 16 April, All our branches are open. Additionally, our online activities are open and operational.</span>
          </div>
        </div>

        {/* Top Action Grid (New) */}
        <section className="top-action-grid">
          <div className="action-card">
            <div className="action-circle red">💻</div>
            <span className="action-label">Laptop Finder</span>
          </div>
          <div className="action-card">
            <div className="action-circle orange">💬</div>
            <span className="action-label">Raise a Complain</span>
          </div>
          <div className="action-card">
            <div className="action-circle dark-orange">🏠</div>
            <span className="action-label">Home Service</span>
          </div>
          <div className="action-card">
            <div className="action-circle brown">⚙️</div>
            <span className="action-label">Servicing Center</span>
          </div>
        </section>

        {/* Featured Category Section */}
        <section className="featured-categories">
          <div className="section-header">
            <h2>Featured Category</h2>
            <p>Get Your Desired Product from Featured Category!</p>
          </div>

          <div className="features-grid">
            {[
              { name: 'Starlink', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#2c3e50" strokeWidth="1"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" /></svg> },
              { name: 'Portable Power Station', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#2c3e50" strokeWidth="1"><rect x="4" y="6" width="16" height="14" rx="2" /><path d="M9 2v4M15 2v4M12 10v6M10 13h4" /></svg> },
              { name: 'Drone', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#2c3e50" strokeWidth="1"><path d="m20 2-4 4m2 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM4 2l4 4m-2 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM4 22l4-4m-2 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0Zm16 0-4-4m2 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM12 6v12M6 12h12" /></svg> },
              { name: 'Gimbal', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#2c3e50" strokeWidth="1"><path d="M12 15V3M3 15h18v6H3zM8 3h8M12 11h3" /></svg> },
              { name: 'Table PC', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#2c3e50" strokeWidth="1"><rect x="2" y="3" width="14" height="18" rx="2" /><rect x="17" y="10" width="5" height="11" rx="1" /></svg> },
              { name: 'TV', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#2c3e50" strokeWidth="1"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="m8 21 4-4 4 4" /></svg> },
              { name: 'Mobile Phone', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#2c3e50" strokeWidth="1"><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" /></svg> },
              { name: 'Mobile Accessories', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#2c3e50" strokeWidth="1"><path d="M11 2v4M13 2v4M6 6h12v4H6zm3 4v12M15 10v12" /></svg> },
              { name: 'Portable SSD', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#2c3e50" strokeWidth="1"><rect x="6" y="2" width="12" height="20" rx="2" /><path d="M10 6h4M10 10h4" /></svg> },
              { name: 'WiFi Camera', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#2c3e50" strokeWidth="1"><circle cx="12" cy="10" r="8" /><circle cx="12" cy="10" r="3" /><path d="M12 18v3M8 21h8" /></svg> },
              { name: 'Trimmer', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#2c3e50" strokeWidth="1"><path d="M9 2h6v20H9zM9 6h6M9 10h6" /></svg> },
              { name: 'Smart Watch', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#2c3e50" strokeWidth="1"><rect x="6" y="7" width="12" height="10" rx="2" /><path d="M9 7V2h6v5M9 17v5h6v-5" /></svg> },
              { name: 'Action Camera', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#2c3e50" strokeWidth="1"><rect x="2" y="5" width="20" height="14" rx="2" /><circle cx="15" cy="12" r="3" /><rect x="5" y="8" width="4" height="3" /></svg> },
              { name: 'Earbuds', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#2c3e50" strokeWidth="1"><path d="M3 12a9 9 0 0 1 18 0" /><path d="M9 12v3a3 3 0 0 0 6 0v-3" /></svg> },
              { name: 'Bluetooth Speakers', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#2c3e50" strokeWidth="1"><rect x="5" y="3" width="14" height="18" rx="4" /><circle cx="12" cy="8" r="2" /><circle cx="12" cy="16" r="3" /></svg> },
              { name: 'Gaming Console', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#2c3e50" strokeWidth="1"><path d="M6 12h4M8 10v4M15 11h.01M18 13h.01M10 16a4 4 0 0 0 4 4" /></svg> }
            ].map((cat, i) => (
              <div key={i} className="feature-item-card">
                <div className="feature-icon-box">{cat.icon}</div>
                <span className="feature-title">{cat.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Physical Stores Banner */}
        <section className="stores-banner">
          <div className="banner-content">
            <div className="banner-left">
              <div className="pin-icon">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" /></svg>
              </div>
              <div className="banner-text">
                <h3>20+ Physical Stores</h3>
                <p>Visit Our Store & Get Your Desired IT Product!</p>
              </div>
            </div>
            <button className="find-store-btn">
              Find Our Store <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            </button>
          </div>
        </section>

        {/* Leaderboard Section */}
        <section className="leaderboard-section">
          <div className="leaderboard-header">
            <div className="header-text">
              <h2>Leaderboard</h2>
              <p>Top 5 Star Coin Collectors of 19th Anniversary Campaign.</p>
            </div>
            <button className="collect-coins-btn">
              <span className="coin-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: 'middle', marginRight: '6px' }}>
                  <circle cx="12" cy="12" r="10" fill="#FFB703" stroke="#FB8500" strokeWidth="1.5" />
                  <path d="M12 6.5l1.6 4.3h4.4l-3.5 2.7 1.3 4.5-3.8-2.6-3.8 2.6 1.3-4.5-3.5-2.7h4.4L12 6.5z" fill="#FFF" />
                </svg>
              </span>
              Collect Coins
            </button>
          </div>

          <div className="leaderboard-grid">
            {[
              { rank: 1, coins: 27600, name: 'Partha Sharma', color: '#e64c33' },
              { rank: 2, coins: 21500, name: 'Jubayer Hossen', color: '#545cd8' },
              { rank: 3, coins: 21400, name: 'Mihir Pran', color: '#8b3dcc' },
              { rank: 4, coins: 21200, name: 'Aktaruzzaman Sarkar', color: '#b339b3' },
              { rank: 5, coins: 21100, name: 'Md Nur', color: '#ed9f33' }
            ].map((user, i) => (
              <div key={i} className={`rank-card ${user.rank === 1 ? 'rank-1' : ''}`} style={{ backgroundColor: user.color }}>
                <div className="rank-decoration">
                  <div className="smudge"></div>
                  <div className="rank-number">{user.rank}</div>
                </div>
                <div className="rank-content">
                  <span className="coin-count">{user.coins}</span>
                  <span className="coin-label">Star Coins</span>
                </div>
                <div className="rank-footer">
                  {user.name}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="products-section">
          <div className="section-header centered">
            <h2>Featured Products</h2>
            <p>Check & Get Your Desired Product!</p>
          </div>
          <div className="products-grid-v2">
            {[
              { id: 1, name: 'Starlink Mini Kit', price: '21,200', oldPrice: '26,500', badge: 'Save: 5,300৳ (-20%)', image: slides[0], type: 'save', warranty: false },
              { id: 2, name: 'EcoFlow River 3 UPS & Portable Power Station', price: '27,390', oldPrice: '29,500', badge: 'Save: 2,110৳ (-7%)', image: slides[1], type: 'save', warranty: false },
              { id: 3, name: 'Xtrike Me GC-907 RGB Gaming Chair', price: '23,500', badge: 'Earn Point: 180', image: slides[2], type: 'earn', warranty: false },
              { id: 4, name: 'Haier 1.6 Ton CleanCool Inverter AC', price: '54,500', oldPrice: '68,990', badge: 'Save: 14,490৳ (-21%)', image: slides[0], type: 'save', warranty: true }
            ].map((prod) => (
              <div key={prod.id} className="product-card-v2">
                <div className={`product-badge-v2 ${prod.type}`}>{prod.badge}</div>
                <div className="product-img-v2">
                  <img src={prod.image} alt={prod.name} />
                  {prod.warranty && (
                    <div className="official-warranty-badge">
                      <svg width="60" height="24" viewBox="0 0 100 40">
                        <rect x="0" y="5" width="100" height="30" rx="4" fill="white" stroke="#f7ab21" strokeWidth="1" />
                        <text x="50%" y="25" dominantBaseline="middle" textAnchor="middle" fontSize="10" fontWeight="800" fill="#2c3e50">OFFICIAL</text>
                        <text x="50%" y="35" dominantBaseline="middle" textAnchor="middle" fontSize="8" fontWeight="500" fill="#2c3e50">WARRANTY</text>
                      </svg>
                    </div>
                  )}
                </div>
                <div className="product-info-compact">
                  <h3 className="product-name-compact">{prod.name}</h3>
                  <div className="product-price-compact">
                    <span className="current-price-v2">{prod.price}৳</span>
                    {prod.oldPrice && <span className="old-price-v2">{prod.oldPrice}৳</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            {/* Support Section */}
            <div className="footer-section support">
              <h3>SUPPORT</h3>
              <div className="support-capsules-v2">
                <a href="tel:16793" className="support-card">
                  <div className="support-circle">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <div className="support-info">
                    <span className="label">9 AM - 8 PM</span>
                    <span className="value">16793</span>
                  </div>
                </a>
                <a href="#" className="support-card">
                  <div className="support-circle">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div className="support-info">
                    <span className="label">Store Locator</span>
                    <span className="value">Find Our Stores</span>
                  </div>
                </a>
              </div>
            </div>

            {/* About Us Section */}
            <div className={`footer-section accordion ${footerAboutOpen ? 'open' : ''}`}>
              <h3 className="footer-heading" onClick={() => setFooterAboutOpen(!footerAboutOpen)}>
                ABOUT US
                <span className="accordion-icon">{footerAboutOpen ? '−' : '+'}</span>
              </h3>
              <div className="link-grid">
                <ul>
                  <li>Affiliate Program</li>
                  <li>Online Delivery</li>
                  <li>Refund and Return Policy</li>
                  <li>Blog</li>
                </ul>
                <ul>
                  <li>EMI Terms</li>
                  <li>Privacy Policy</li>
                  <li>Star Point Policy</li>
                  <li>Contact Us</li>
                </ul>
                <ul>
                  <li>About Us</li>
                  <li>Terms and Conditions</li>
                  <li>Career</li>
                  <li>Brands</li>
                </ul>
              </div>
            </div>

            {/* Stay Connected Section */}
            <div className={`footer-section accordion ${footerContactOpen ? 'open' : ''}`}>
              <h3 className="footer-heading" onClick={() => setFooterContactOpen(!footerContactOpen)}>
                STAY CONNECTED
                <span className="accordion-icon">{footerContactOpen ? '−' : '+'}</span>
              </h3>
              <div className="office-info">
                <strong>Star Tech Ltd</strong>
                <p>Head Office: 28 Kazi Nazrul Islam Ave, Navana Zohura Square, Dhaka 1000</p>
                <p className="email-label">Email:</p>
                <p className="email"><span className="highlight">webteam@startechbd.com</span></p>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="app-download">
              <span>Experience Star Tech App on your mobile:</span>
              <div className="store-btns">
                <div className="store-btn">
                  <div className="btn-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                  </div>
                  <div className="btn-text">
                    <span className="small">Download on</span>
                    <span className="big">Google Play</span>
                  </div>
                </div>
                <div className="store-btn">
                  <div className="btn-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.69C20.06,16.76 19.6,18.23 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                    </svg>
                  </div>
                  <div className="btn-text">
                    <span className="small">Download on</span>
                    <span className="big">App Store</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="social-links-v2">
              <a href="#" className="social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
              </a>
              <a href="#" className="social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.42 5.58a2.78 2.78 0 0 0 1.94 2c1.71.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.42-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#fff"></polygon></svg>
              </a>
              <a href="#" className="social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          <div className="copyright-bar">

            <p>© 2026 Star Tech Ltd | All rights reserved</p>
            <p>Powered By: Star Tech</p>
          </div>
        </div>
      </footer>
      {/* Mobile Bottom Navigation */}
      <nav className="mobile-bottom-nav">

        <div className="nav-item">
          <div className="nav-icon">🎁</div>
          <span>Offers</span>
        </div>
        <div className="nav-item">
          <div className="nav-icon">⚡</div>
          <span>19th Fest</span>
        </div>
        <div className="nav-item">
          <div className="nav-icon">💻</div>
          <span>PC Builder</span>
        </div>
        <div className="nav-item">
          <div className="nav-icon">➕</div>
          <span>Compare (0)</span>
        </div>
        <div className="nav-item">
          <div className="nav-icon">👤</div>
          <span>Account</span>
        </div>
      </nav>
    </div>
  )
}

export default App
