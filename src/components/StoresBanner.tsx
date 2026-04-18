export default function StoresBanner() {
  return (
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
  );
}
