type MobileMenuDrawerProps = {
  isMenuOpen: boolean;
  onClose: () => void;
};

const categories = [
  "Desktop", "Laptop", "Component", "Monitor", "Power", "Phone", "Tablet",
  "Office Equipment", "Camera", "Security", "Networking", "Software",
  "Server & Storage", "Accessories", "Gadget", "Gaming", "TV", "Appliance"
];

export default function MobileMenuDrawer({ isMenuOpen, onClose }: MobileMenuDrawerProps) {
  return (
    <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="mobile-menu-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="mobile-menu-header">
          <button className="close-menu" onClick={onClose}>
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
  );
}
