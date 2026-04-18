type HeaderProps = {
  onOpenMenu: () => void;
};

export default function Header({ onOpenMenu }: HeaderProps) {
  return (
    <header>
      <div className="container">
        <div className="header-inner">
          <button className="hamburger-menu" onClick={onOpenMenu}>
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
  );
}
