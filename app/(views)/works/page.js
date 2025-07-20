import WorksListClient from "./WorksListClient";

// 🔹 서버 컴포넌트: 데이터 fetch, SSR로 빠른 initial paint
export default async function WorksPage() {
  const res = await fetch("https://api.example.com/works", { cache: "no-store" });
  const initialData = await res.json();

  return (
    <WorksListClient initialData={initialData} />
  );
}
