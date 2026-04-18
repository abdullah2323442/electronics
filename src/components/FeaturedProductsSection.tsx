type FeaturedProductsSectionProps = {
  slides: string[];
};

const featuredProducts = (slides: string[]) => ([
  { id: 1, name: 'Starlink Mini Kit', price: '21,200', oldPrice: '26,500', badge: 'Save: 5,300৳ (-20%)', image: slides[0], type: 'save', warranty: false },
  { id: 2, name: 'EcoFlow River 3 UPS & Portable Power Station', price: '27,390', oldPrice: '29,500', badge: 'Save: 2,110৳ (-7%)', image: slides[1], type: 'save', warranty: false },
  { id: 3, name: 'Xtrike Me GC-907 RGB Gaming Chair', price: '23,500', badge: 'Earn Point: 180', image: slides[2], type: 'earn', warranty: false },
  { id: 4, name: 'Haier 1.6 Ton CleanCool Inverter AC', price: '54,500', oldPrice: '68,990', badge: 'Save: 14,490৳ (-21%)', image: slides[0], type: 'save', warranty: true }
]);

export default function FeaturedProductsSection({ slides }: FeaturedProductsSectionProps) {
  return (
    <section className="products-section">
      <div className="section-header centered">
        <h2>Featured Products</h2>
        <p>Check & Get Your Desired Product!</p>
      </div>
      <div className="products-grid-v2">
        {featuredProducts(slides).map((prod) => (
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
  );
}
