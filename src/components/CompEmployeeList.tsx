import React, { useState } from "react";
import { fetchEmployees } from "../api/employeeApi";
import type { Employee } from "../api/employeeApi";
const CompEmployeeList: React.FC = () => {
  const [employees, setEmployees] = React.useState<Employee[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const loadEmployees = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await fetchEmployees();
      setEmployees(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("従業員情報の取得に失敗しました。");
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>読み込み中...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>従業員情報</h1>
      <button onClick={loadEmployees}>従業員情報を取得</button>
      {loading && <p>読み込み中...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <table>
        <thead>
          <tr>
            <th>名前</th>
            <th>⼊社⽇</th>
            <th>扶養⼈数</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.hireDate}</td>
              <td>{employee.dependentsCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompEmployeeList;
