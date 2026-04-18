type FooterProps = {
  footerAboutOpen: boolean;
  footerContactOpen: boolean;
  onToggleAbout: () => void;
  onToggleContact: () => void;
};

export default function Footer({
  footerAboutOpen,
  footerContactOpen,
  onToggleAbout,
  onToggleContact
}: FooterProps) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
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

          <div className={`footer-section accordion ${footerAboutOpen ? 'open' : ''}`}>
            <h3 className="footer-heading" onClick={onToggleAbout}>
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

          <div className={`footer-section accordion ${footerContactOpen ? 'open' : ''}`}>
            <h3 className="footer-heading" onClick={onToggleContact}>
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
  );
}
