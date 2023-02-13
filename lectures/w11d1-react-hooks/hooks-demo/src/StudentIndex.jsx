import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

function StudentIndex() {

  const [students, setStudents] = useState([]);
  const [count, setCount] = useState(0);

  
  
  useEffect(() => {
    console.log("initial render")

    const fetchStoods = async () => {
      const data = await fetch("../data.json", {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      if (data.ok) {
        const parsedData = await data.json();
        setStudents(parsedData);
      } else {
        alert("something went wrong D:");
      }
    }

    fetchStoods();
  }, [])

  console.log(students);

  const increment = () => {
    setCount(count + 1);
  }

  return(
    <>
      <div>Current count: {count}</div>
      <button onClick={increment}>+</button>
      {students.map(stood => {
        return(<Link to={`/${stood.name}`}>{stood.name}</Link>)
      })}
    </>
  )
  
}

export default StudentIndex;