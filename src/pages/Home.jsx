import { useMemo, useState } from 'react';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';
import GenreFilter from '../components/GenreFilter';
import { MOVIES } from '../data/movies';
import { dateKey } from '../utils/format';

const YEARS = ['All', '2026', '2025'];

export default function Home() {
  const [query, setQuery] = useState('');
  const [year, setYear] = useState('All');
  const [genre, setGenre] = useState('All');
  const [sort, setSort] = useState('newest');

  // all unique genres, built from the data
  const genres = useMemo(() => {
    const set = new Set(MOVIES.flatMap((m) => m.genres));
    return ['All', ...[...set].sort()];
  }, []);

  // filter + sort
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return MOVIES.filter((m) => m.title.toLowerCase().includes(q))
      .filter((m) => year === 'All' || m.year === Number(year))
      .filter((m) => genre === 'All' || m.genres.includes(genre))
      .sort((a, b) => {
        if (sort === 'newest') return dateKey(b) - dateKey(a);
        if (sort === 'oldest') return dateKey(a) - dateKey(b);
        return a.title.localeCompare(b.title);
      });
  }, [query, year, genre, sort]);

  return (
    <main className="wrap">
      <div className="tools">
        <SearchBar value={query} onChange={setQuery} />
        <select
          className="sort"
          aria-label="Sort movies"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest first</option>
          <option value="name">A to Z</option>
        </select>
      </div>

      <GenreFilter genres={YEARS} active={year} onSelect={setYear} />
      <GenreFilter genres={genres} active={genre} onSelect={setGenre} />

      <p className="count">{visible.length} movies</p>
      {visible.length === 0 && <p className="msg">No movies found.</p>}

      <div className="grid">
        {visible.map((m, i) => (
          <MovieCard key={m.id} movie={m} index={i} />
        ))}
      </div>
    </main>
  );
}