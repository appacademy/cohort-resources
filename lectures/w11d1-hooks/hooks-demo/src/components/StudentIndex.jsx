import { useEffect, useState } from "react";
import NewStudentForm from "./NewStudentForm";

const StudentIndex = props => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(students);

  useEffect(() => {
    // will execute once when component first mounts
    fetch('https://hp-api.onrender.com/api/characters/students')
      .then(data => data.json())
      .then(parsedData => {
        setStudents(parsedData);
        setLoading(false);
      });

    // const fn = async () => {
    //   let res = await fetch('https://hp-api.onrender.com/api/characters/students');
    //   let data = await res.json();
    //   setStudents(data);
    // };

    // fn();
  }, []);

  return (
    <>
      <h2>Student Index</h2>
      {loading && (
        <h3>Please be patient...</h3>
      )}
      {students.map((student, idx) => (
        <p key={idx}>{student.name}</p>
      ))}
      <NewStudentForm setStudents={setStudents} />
    </>
  );
};

export default StudentIndex;