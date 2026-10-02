// lowercase, remove (brackets) and symbols,
// so "Sikandar (2025 film)" and "Sikandar" look the same
const norm = (s) =>
  s
    .toLowerCase()
    .replace(/\(.*?\)/g, '')
    .replace(/[^a-z0-9]/g, '');

export async function getPoster(title, year, wiki) {
  // "wp3" is a fresh cache name, so old wrong posters are ignored
  const cacheKey = `wp3:${wiki || title}:${year}`;

  try {
    const saved = localStorage.getItem(cacheKey);
    if (saved) return saved;
  } catch {}

  const base =
    'https://en.wikipedia.org/w/api.php?action=query' +
    '&prop=pageimages|categories&piprop=thumbnail&pithumbsize=400&pilicense=any' +
    `&cllimit=max&clcategories=${encodeURIComponent(`Category:${year} Hindi-language films`)}` +
    '&format=json&origin=*';

  // exact page name if you gave one, otherwise search
  const url = wiki
    ? `${base}&redirects=1&titles=${encodeURIComponent(wiki)}`
    : `${base}&generator=search&gsrlimit=10&gsrsearch=${encodeURIComponent(`${title} ${year} film`)}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    const pages = Object.values(data.query?.pages || {})
      .sort((a, b) => (a.index || 0) - (b.index || 0))
      .filter((p) => p.thumbnail);

    const hit = wiki
      ? pages[0] // you chose this page yourself, so trust it
      : pages.find((p) => p.categories?.length && norm(p.title) === norm(title));

    if (!hit) return null;

    const src = hit.thumbnail.source;
    try {
      localStorage.setItem(cacheKey, src);
    } catch {}
    return src;
  } catch {
    return null;
  }
}