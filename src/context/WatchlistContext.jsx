import { createContext, useContext, useEffect, useState } from 'react';

const WatchlistContext = createContext(null);

export function WatchlistProvider({ children }) {
  const [ids, setIds] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('watchlist') || '[]');
    } catch {
      return [];
    }
  });

  // save every time the list changes
  useEffect(() => {
    try {
      localStorage.setItem('watchlist', JSON.stringify(ids));
    } catch {}
  }, [ids]);

  const toggle = (id) =>
    setIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  const has = (id) => ids.includes(id);

  return (
    <WatchlistContext.Provider value={{ ids, toggle, has }}>
      {children}
    </WatchlistContext.Provider>
  );
}

export function useWatchlist() {
  const ctx = useContext(WatchlistContext);
  if (!ctx) throw new Error('useWatchlist must be used inside WatchlistProvider');
  return ctx;
}