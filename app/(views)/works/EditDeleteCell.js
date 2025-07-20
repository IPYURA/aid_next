"use client";

export default function EditDeleteCell({ row }) {
  const handleEdit = () => {
    alert(`수정: ${row.name}`);
    // 모달 열기 or 라우팅 or 기타 실제 동작 구현
  };
  const handleDelete = () => {
    if (window.confirm(`정말 삭제할까요? (${row.name})`)) {
      // 삭제 API 호출 및 상태 갱신 트리거 등
    }
  };

  return (
    <>
      <button onClick={handleEdit}>수정</button>
      <button onClick={handleDelete}>삭제</button>
    </>
  );
}
