# 🎬 BollyExplorer

Browse Bollywood movies from 2025 and 2026. Search, filter by year and genre, read details, and save a watchlist.

**🔗 Live demo: https://bolly-explorer.vercel.app**

## Features

- 73 Bollywood movies from 2025 and 2026
- Live search by movie title
- Filter by year and by genre
- Sort by release date
- Movie details page with release date, genres and cast
- "More like this": similar movies picked by shared genres
- Watchlist with a counter in the header
- Dark and light theme that remembers your choice (no flash on refresh)
- Posters fetched automatically from Wikipedia, with a colorful fallback if one is missing
- "Find trailer" button that opens a YouTube search for that movie
- Back-to-top button and smooth scrolling between pages
- Responsive layout for phone, tablet and desktop
- Keyboard focus styles and reduced-motion support

## Tech stack

- React with Vite
- React Router (multi-page navigation)
- Context API (watchlist state)
- Custom hooks (`useTheme`, `usePoster`)
- Plain CSS with CSS variables for theming
- Deployed on Vercel

## What I learned

- Building a multi-page React app with routing
- Sharing state across pages with Context
- Theming with CSS variables, `data-theme` and `localStorage`
- Deriving data (similar movies) instead of storing extra state
- Fixing a subtle bug where a reused component showed stale data
- Deploying with Vercel, including a rewrite so page refreshes work on any route

## Run it locally

```bash
git clone https://github.com/rajmandviya0-netizen/bolly-explorer.git
cd bolly-explorer
npm install
npm run dev
```

Then open http://localhost:5173

## Project structure

```
src/
  components/   Header, MovieCard, SimilarMovies, SearchBar, GenreFilter, ...
  context/      WatchlistContext
  data/         movies.js (the movie list)
  hooks/        useTheme, usePoster
  pages/        Home, MovieDetails, Watchlist
  services/     posters.js (Wikipedia poster lookup)
  utils/        format.js
```

## Author

Made by Raj.
