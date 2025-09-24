function StudentCard(props) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px" }}>
      <h3>{props.name}</h3>
      <p>Tuổi: {props.age}</p>
      <p>Lớp: {props.className}</p>
    </div>
  );
}

export default StudentCard;
