import StudentCard from "./StudentCard";

function App() {
  const student = { name: "Lê Văn C", age: 19, className: "CNTT3" };

  return (
    <div>
      <h1>Danh sách sinh viên</h1>

      {/* Cách 1: Truyền props trực tiếp */}
      <StudentCard name="Nguyễn Văn A" age={20} className="CNTT1" />

      {/* Cách 2: Truyền biến */}
      <StudentCard
        name={student.name}
        age={student.age}
        className={student.className}
      />

      {/* Cách 3: Spread props (gọn hơn) */}
      <StudentCard {...student} />
    </div>
  );
}

export default App;
