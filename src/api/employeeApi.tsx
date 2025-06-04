const BASE_URL = "http://153.127.48.168:8080/ex-emp-api/employee/employees/";
//従業員の型定義
export interface Employee {
  id: number;
  name: string;
  hireDate: string;
  dependentsCount: number;
}

export async function fetchEmployees(): Promise<Employee[]> {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error("従業員情報の取得に失敗しました。");
  }
  const data = await response.json();
  return data.employees;
}
