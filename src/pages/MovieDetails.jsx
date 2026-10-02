import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MOVIES } from '../data/movies';
import usePoster from '../hooks/usePoster';
import { useWatchlist } from '../context/WatchlistContext';
import { formatWhen, gradientFor } from '../utils/format';
import SimilarMovies from '../components/SimilarMovies';
import TrailerModal from '../components/TrailerModal';

export default function MovieDetails() {
  const { id } = useParams();
  const movie = MOVIES.find((m) => m.id === Number(id));
  const { poster, loading } = usePoster(movie);
  const { has, toggle } = useWatchlist();
  const [trailerOpen, setTrailerOpen] = useState(false);

  // browser tab title
  useEffect(() => {
    document.title = movie ? `${movie.title} · BollyExplorer` : 'BollyExplorer';
    return () => {
      document.title = 'BollyExplorer';
    };
  }, [movie]);

  // close the trailer when you move to another movie
  useEffect(() => {
    setTrailerOpen(false);
  }, [id]);

  if (!movie) {
    return (
      <main className="wrap">
        <p className="msg">Movie not found.</p>
        <p className="msg">
          <Link to="/">← Back to movies</Link>
        </p>
      </main>
    );
  }

  const saved = has(movie.id);
  const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(
    `${movie.title} ${movie.year} official trailer`
  )}`;

  return (
    <main className="wrap">
      <Link to="/" className="back">
        ← Back
      </Link>

      <div className="detail">
        <div
          className={`detail-poster ${loading ? 'loading' : ''}`}
          style={{ background: gradientFor(movie.title) }}
        >
          {poster && <img src={poster} alt={`${movie.title} poster`} />}
          {!poster && !loading && <span>{movie.title}</span>}
        </div>

        <div className="detail-info">
          <h2>{movie.title}</h2>
          <p className="meta">
            {formatWhen(movie)} · {movie.genres.join(', ')}
          </p>
          {movie.stars && (
            <p>
              <b>Starring:</b> {movie.stars}
            </p>
          )}

          <div className="actions">
            {movie.trailer ? (
              <button className="btn" onClick={() => setTrailerOpen(true)}>
                ▶ Watch trailer
              </button>
            ) : (
              <a className="btn" href={searchUrl} target="_blank" rel="noreferrer">
                ▶ Find trailer
              </a>
            )}
            <button className={`btn ${saved ? 'ghost' : 'dark'}`} onClick={() => toggle(movie.id)}>
              {saved ? '♥ In your watchlist' : '♡ Add to watchlist'}
            </button>
          </div>
        </div>
      </div>

      {trailerOpen && (
        <TrailerModal
          videoId={movie.trailer}
          title={movie.title}
          onClose={() => setTrailerOpen(false)}
        />
      )}

      <SimilarMovies movie={movie} />
    </main>
  );
}