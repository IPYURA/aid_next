"use client";

export default function SearchBar({ filters, onChange, onSearch, loading }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <input
        placeholder="이름 검색"
        value={filters.name}
        onChange={e => onChange({ name: e.target.value })}
        disabled={loading}
      />
      <select
        value={filters.age}
        onChange={e => onChange({ age: e.target.value })}
        disabled={loading}
      >
        <option value="">나이 선택</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
      </select>
      <button onClick={onSearch} disabled={loading}>검색</button>
    </div>
  );
}
