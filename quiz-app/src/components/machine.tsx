import React from "react";
import UserInfo from "./UserInfo";

interface CNCMachine {
  id: string;
  status: "Hoạt động" | "Cảnh báo" | "Ngưng";
  power: number;
  note: string;
}

const username: string = "nguyenvana";

const machines: CNCMachine[] = [
  { id: "CNC-01", status: "Hoạt động", power: 80, note: "Bình thường" },
  { id: "CNC-02", status: "Cảnh báo", power: 60, note: "Nhiệt độ cao" },
  { id: "CNC-03", status: "Ngưng", power: 0, note: "Đang sửa chữa" },
];

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="header">HỆ THỐNG QUẢN LÝ MÁY CNC</header>

      <main className="container">
        <UserInfo username={username} />
        <div className="summary">
          <div className="card">Tổng máy<br /><b>3</b></div>
          <div className="card">Đang hoạt động<br /><b>1</b></div>
          <div className="card">Cảnh báo<br /><b>1</b></div>
          <div className="card">Ngưng<br /><b>1</b></div>
        </div>

        <h2>Danh sách máy CNC</h2>

        <table>
          <thead>
            <tr>
              <th>Mã máy</th>
              <th>Trạng thái</th>
              <th>Công suất</th>
              <th>Ghi chú</th>
            </tr>
          </thead>
          <tbody>
            {machines.map((m) => (
              <tr key={m.id}>
                <td>{m.id}</td>
                <td className={
                  m.status === "Hoạt động"
                    ? "running"
                    : m.status === "Cảnh báo"
                      ? "warning"
                      : "stopped"
                }>
                  {m.status}
                </td>
                <td>{m.power}%</td>
                <td>{m.note}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <section className="general">
            <h2><b>Tổng quan về máy CNC</b></h2>
            <p>CNC là viết tắt của  Computer Numerical Control, là một dạng máy được điều khiển tự động thông qua lập trình trên máy tính. Máy CNC có khả năng gia công phay, cắt, gọt, khoan,… các vật liệu kim loại với độ chính xác cao và tốc độ nhanh. Công nghệ CNC đang là một giải pháp tối ưu cho nền công nghiệp cơ khí Việt Nam hiện nay.</p>
            <p>Máy CNC phổ biến như hiện nay là do máy có nhiều ưu điểm hơn máy cơ khí truyền thống, và mang lại nhiều lợi ích cho doanh nghiệp. Các lợi ích có thể kể như tự động hóa dây chuyền, tiết kiệm được chi phí sản xuất, chất lượng sản phẩm được nâng cao.</p>
            <p>Có 3 loại máy CNC phổ biến, được sử dụng nhiều nhất ở các công xưởng hiện nay:  Máy phay CNC, máy tiện CNC, máy khoan phay CNC.</p>
            <p>Ngoài ra còn có những loại máy với những ưu điểm và chức năng riêng biệt khác. Xem thêm các loại máy CNC nhập khẩu.</p>
        </section>
      </main>

      <footer className="footer">Dự án demo CNC – React + TypeScript</footer>
    </div>
  );
};

export default App;
