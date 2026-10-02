const MONTHS = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function formatWhen(movie) {
  if (!movie.month) return String(movie.year);
  return movie.day
    ? `${movie.day} ${MONTHS[movie.month]} ${movie.year}`
    : `${MONTHS[movie.month]} ${movie.year}`;
}

// a number we can sort by: 20250214 for 14 Feb 2025
export function dateKey(movie) {
  return movie.year * 10000 + movie.month * 100 + (movie.day || 0);
}

// same title always gives the same color
export function gradientFor(title) {
  let h = 0;
  for (const c of title) h = (h * 31 + c.charCodeAt(0)) % 360;
  return `linear-gradient(160deg, hsl(${h},65%,42%), hsl(${(h + 40) % 360},60%,20%))`;
}