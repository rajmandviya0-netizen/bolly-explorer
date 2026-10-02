import { useEffect, useState } from 'react';
import { getPoster } from '../services/posters';

export default function usePoster(movie) {
  const [result, setResult] = useState({ id: null, poster: null });

  useEffect(() => {
    if (!movie || movie.poster) return; // a manual link always wins
    let active = true;
    getPoster(movie.title, movie.year, movie.wiki).then((src) => {
      if (active) setResult({ id: movie.id, poster: src });
    });
    return () => {
      active = false;
    };
  }, [movie]);

  if (!movie) return { poster: null, loading: false };
  if (movie.poster) return { poster: movie.poster, loading: false };

  // only use the result if it belongs to THIS movie
  const ready = result.id === movie.id;
  return { poster: ready ? result.poster : null, loading: !ready };
}