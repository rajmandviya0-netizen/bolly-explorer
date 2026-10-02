import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import { MOVIES } from '../data/movies';
import { useWatchlist } from '../context/WatchlistContext';

export default function Watchlist() {
  const { ids } = useWatchlist();
  const list = MOVIES.filter((m) => ids.includes(m.id));

  return (
    <main className="wrap">
      <h2 className="page-title">My Watchlist</h2>

      {list.length === 0 ? (
        <p className="msg">
          Nothing here yet. Tap the ♡ on any movie.
          <br />
          <Link to="/">Browse movies</Link>
        </p>
      ) : (
        <div className="grid">
          {list.map((m, i) => (
            <MovieCard key={m.id} movie={m} index={i} />
          ))}
        </div>
      )}
    </main>
  );
}