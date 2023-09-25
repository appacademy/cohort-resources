import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';

function StudentShow (props) {
  const {studentName} = useParams();

  const [currentStudent, setCurrentStudent] = useState({});

  useEffect(() => {
    console.log(studentName);

    const fetchStudents = async () => {
      const data = await fetch("../data.json", {
        headers: {
          'Content-Type': "application/json",
          'Accept': "application/json"
        }
      });

      if (data.ok) {
        const parsedData = await data.json();
        const foundStudent = parsedData.find(student => student.name === studentName);
        setCurrentStudent(foundStudent);
      } else {
        alert("something went wrong :(");
      }
    }
    fetchStudents()
  }, [studentName]) // add studentName dependency to run useEffect when the variable changes

  return (
    <>
      <h3>{currentStudent.name}</h3>
      <h3>{currentStudent.house}</h3>
      <h3>{currentStudent.gender}</h3>
      <h3>{currentStudent.ancestry}</h3>
      <img src={currentStudent.image}/>
      
    </>
  )

}

export default StudentShow;