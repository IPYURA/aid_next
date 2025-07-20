"use client";

import { useState, useMemo, useCallback } from "react";
import SearchBar from "./SearchBar";
import WorksTable from "./WorksTable";

// 최적화된 상태 관리, 서버 fetch/최신 UX 패턴 반영
export default function WorksListClient({ initialData }) {
  const [data, setData] = useState(initialData);
  const [filters, setFilters] = useState({ name: "", age: "" });
  const [loading, setLoading] = useState(false);

  // 검색/필터 변경 핸들러
  const handleFiltersChange = useCallback((nextFilters) => {
    setFilters((prev) => ({ ...prev, ...nextFilters }));
  }, []);

  // 검색 실행(외부 API 호출)
  const handleSearch = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams(filters).toString();
      const res = await fetch(`/api/works?${params}`);
      const newData = await res.json();
      setData(newData);
    } finally {
      setLoading(false);
    }
  }, [filters]);

  // 로딩 동안 UX
  const tableContent = useMemo(() =>
    loading ? <div>검색 중...</div> : <WorksTable data={data} />, [loading, data]
  );

  return (
    <div>
      <h1>Works 목록</h1>
      <SearchBar filters={filters} onChange={handleFiltersChange} onSearch={handleSearch} loading={loading} />
      {tableContent}
    </div>
  );
}
