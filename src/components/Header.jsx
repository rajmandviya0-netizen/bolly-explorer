import { NavLink } from 'react-router-dom';
import { useWatchlist } from '../context/WatchlistContext';
import useTheme from '../hooks/useTheme';

export default function Header() {
  const { ids } = useWatchlist();
  const { theme, toggle } = useTheme();

  return (
    <header className="header">
      <NavLink to="/" className="brand">
        <h1>
          Bolly<span>Explorer</span>
        </h1>
      </NavLink>
      <nav className="nav">
        <NavLink to="/" end>
          Discover
        </NavLink>
        <NavLink to="/watchlist">Watchlist ({ids.length})</NavLink>
        <button
          className="theme-btn"
          onClick={toggle}
          aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </nav>
    </header>
  );
}