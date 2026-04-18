const leaderboardUsers = [
  { rank: 1, coins: 27600, name: 'Partha Sharma', color: '#e64c33' },
  { rank: 2, coins: 21500, name: 'Jubayer Hossen', color: '#545cd8' },
  { rank: 3, coins: 21400, name: 'Mihir Pran', color: '#8b3dcc' },
  { rank: 4, coins: 21200, name: 'Aktaruzzaman Sarkar', color: '#b339b3' },
  { rank: 5, coins: 21100, name: 'Md Nur', color: '#ed9f33' }
];

export default function LeaderboardSection() {
  return (
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
        {leaderboardUsers.map((user, i) => (
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
  );
}
