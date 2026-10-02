import { Link } from 'react-router-dom';
import usePoster from '../hooks/usePoster';
import { useWatchlist } from '../context/WatchlistContext';
import { formatWhen, gradientFor } from '../utils/format';

export default function MovieCard({ movie, index = 0 }) {
  const { poster, loading } = usePoster(movie);
  const { has, toggle } = useWatchlist();
  const saved = has(movie.id);

  return (
    <article className="card" style={{ animationDelay: `${Math.min(index, 12) * 40}ms` }}>
      <button
        className={`heart ${saved ? 'on' : ''}`}
        onClick={() => toggle(movie.id)}
        aria-label={saved ? 'Remove from watchlist' : 'Add to watchlist'}
        aria-pressed={saved}
      >
        {saved ? '♥' : '♡'}
      </button>

      <Link to={`/movie/${movie.id}`} className="card-link">
        <div
          className={`poster ${loading ? 'loading' : ''}`}
          style={{ background: gradientFor(movie.title) }}
        >
          {poster && <img src={poster} alt={`${movie.title} poster`} loading="lazy" />}
          {!poster && !loading && <span>{movie.title}</span>}
        </div>
        <div className="info">
          <h3>{movie.title}</h3>
          <p>
            {formatWhen(movie)} · {movie.genres.join(', ')}
          </p>
          {movie.stars && <p className="stars">⭐ {movie.stars}</p>}
        </div>
      </Link>
    </article>
  );
}