export default function TopActionGrid() {
  return (
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
  );
}
