export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="search"
      className="search"
      placeholder="Search Bollywood movies..."
      aria-label="Search shows"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}