import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function StudentIndex(props) {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    // all this code will run after an initial render
    // console.log("in the useEffect");
    const fetchStudents = async () => {
      const data = await fetch("../data.json", {
        headers: {
          'Content-Type': "application/json",
          'Accept': "application/json"
        }
      });

      if (data.ok) {
        const parsedData = await data.json();
        setStudents(parsedData);
      } else {
        alert("something went wrong :(");
      }
    }

    fetchStudents();
  }, []) // empty array means we just invoke the function once

  // console.log("outside useEffect");

  if (students.length === 0) {
    return (
      <h1>Loading...</h1>
    )
  }

  return (
    <>
    <ul>
      {students.map(stood => {
        return (
          <li key={stood.name}><Link to={`/students/${stood.name}`} >{stood.name}</Link></li>

        )
      })}
    </ul>
      {/* <h1>{students[0].name}</h1> */}
    </>
  )
}

export default StudentIndex;