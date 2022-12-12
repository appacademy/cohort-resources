import {useState, useEffect} from 'react';
import {useParams, Link} from "react-router-dom"

function StudentShow(props){
  const {studentName} = useParams();
  const [currentStudent, setCurrentStudent] = useState({});

  useEffect(()=>{
    const fetchStudents = async ()=>{
      const data = await fetch("../data.json", {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      if(data.ok){
        const parsedData = await data.json();
        const foundStudent = parsedData.find((student) => student.name === studentName)
        setCurrentStudent(foundStudent);
      } else {
        alert("something went wrong")
      }
    }
    fetchStudents();
  }, [studentName]);


  
  useEffect(()=>{
    const interval = setInterval(()=>{
      console.log('this runs every second')
    }, 1000);
    return ()=> clearInterval(interval)
  }, [])


  return(
    <>
      <h1>{currentStudent.name}</h1>
      <h2>{currentStudent.house}</h2>
      <h2>{currentStudent.patronus}</h2>
      <h2>{currentStudent.gender}</h2>
      <Link to="/">Close Student Profile</Link>
    </>
    

  )

}

export default StudentShow;