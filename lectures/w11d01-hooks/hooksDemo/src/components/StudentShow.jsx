import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom';

const StudentShow = props => {
  const { studentId } = useParams();
  const [student, setStudent] = useState({});

  // the use Effect callback cannot be async because it can only return undefined or a cleanup function
  // a cleanup function is meant to undo any lingering side effects when a component unmounts
  useEffect(() => {
    // fetch info about a given student
    const fn = async () => {
      const res = await fetch(`https://hp-api.onrender.com/api/character/${studentId}`)
      if (res.ok) {
        const data = await res.json()
        setStudent(data[0]);
      } else {
        console.error('something went wrong')
      }
    }
    fn();
    
    const intId = setInterval(() => console.log('cedric is the best'), 1000)

    // cleanup function is invoked when component is about to unmount
    return () => {
      clearInterval(intId)
      console.log('unmounting - bye bye')
    }
  },[studentId])

  console.log(student);
  return (
    <>
      <h4>Student Show</h4>
      <img src={student.image} />
      <p>{student.name}</p>
      <p>{student.house}</p>
      <p>{student.hairColour}</p>
      <Link to='/students/d5c4daa3-c726-426a-aa98-fb40f3fba816'>Take me to Cedric!</Link>
    </>
  )
}

export default StudentShow