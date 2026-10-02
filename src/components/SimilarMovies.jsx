import MovieCard from './MovieCard';
import { MOVIES } from '../data/movies';
import { dateKey } from '../utils/format';

export default function SimilarMovies({ movie }) {
  const similar = MOVIES.filter((m) => m.id !== movie.id)
    .map((m) => ({
      m,
      // how many genres they share
      shared: m.genres.filter((g) => movie.genres.includes(g)).length,
    }))
    .filter((x) => x.shared > 0)
    .sort(
      (a, b) =>
        b.shared - a.shared || // more shared genres first
        Math.abs(dateKey(a.m) - dateKey(movie)) - Math.abs(dateKey(b.m) - dateKey(movie)) // then closest release date
    )
    .slice(0, 5)
    .map((x) => x.m);

  if (similar.length === 0) return null;

  return (
    <section className="similar">
      <h3>More like this</h3>
      <div className="grid">
        {similar.map((m, i) => (
          <MovieCard key={m.id} movie={m} index={i} />
        ))}
      </div>
    </section>
  );
}