import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

function StudentShow(props) {

  const {studentName} = useParams();

  const [currentStudent, setCurrentStudent] = useState({});

  useEffect(() => {
    console.log("fetching stood")
    const fetchStoods = async () => {
      const data = await fetch("../data.json", {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      if (data.ok) {
        const parsedData = await data.json();
        // console.log(currentStudent)
        // debugger
        const foundStudent = parsedData.find((student) => student.name === studentName);
        setCurrentStudent(foundStudent);
      } else {
        alert("something went wrong D:");
      }
    }

    fetchStoods();
  }, [studentName])


  return (
    <>
      <h1>{currentStudent.name}</h1>
      <h2>{currentStudent.house}</h2>
      <h3>{currentStudent.gender}</h3>
      <h4>{currentStudent.ancestry}</h4>
      <img src={currentStudent.image} />
    </>
  )
  
}

export default StudentShow;