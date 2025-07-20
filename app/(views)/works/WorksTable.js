// WorksTable.js ("use client" 없어도 SSR 이점 살림. 입력/버튼만 따로 분리)
import EditDeleteCell from "./EditDeleteCell";

export default function WorksTable({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>이름</th>
          <th>나이</th>
          <th>전화번호</th>
          <th>학번</th>
          <th>액션</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id ?? item.stu_no}>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.num}</td>
            <td>{item.stu_no}</td>
            <td>
              {/* 상호작용 버튼만 클라이언트 컴포넌트로 분리 */}
              <EditDeleteCell row={item} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
