import { useEffect, useState } from "react"
import { Link } from "react-router-dom/cjs/react-router-dom";

const StudentIndex = props => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    console.log('StudentIndex', 'useEffect');
    // fetch info from API when the page first loads
    const fn = async () => {
      const res = await fetch('https://hp-api.onrender.com/api/characters/students')
      if (res.ok) {
        const data = await res.json()
        setStudents(data);
      }
    }
    fn();
},[])

  console.log(students);
  return (
    <>
      <h4>Student Index</h4>
      {students.map(stu => {
        return <Link key={stu.id} to={`/students/${stu.id}`}>
          <p>{stu.name}</p>
        </Link>
      })}
    </>
  )
}

export default StudentIndex