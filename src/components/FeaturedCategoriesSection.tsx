import type { ReactNode } from 'react';

type FeaturedCategory = {
  name: string;
  icon: ReactNode;
};

const featuredCategories: FeaturedCategory[] = [
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
];

export default function FeaturedCategoriesSection() {
  return (
    <section className="featured-categories">
      <div className="section-header">
        <h2>Featured Category</h2>
        <p>Get Your Desired Product from Featured Category!</p>
      </div>

      <div className="features-grid">
        {featuredCategories.map((cat, i) => (
          <div key={i} className="feature-item-card">
            <div className="feature-icon-box">{cat.icon}</div>
            <span className="feature-title">{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
