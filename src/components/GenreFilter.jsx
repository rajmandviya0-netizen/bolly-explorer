export default function GenreFilter({ genres, active, onSelect }) {
  return (
    <div className="chips">
      {genres.map((g) => (
        <button
          key={g}
          className={`chip ${active === g ? 'on' : ''}`}
          onClick={() => onSelect(g)}
        >
          {g}
        </button>
      ))}
    </div>
  );
}