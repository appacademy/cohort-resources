import { useEffect, useState } from "react";
import StudentShow from "./studentShow";
import {Link} from "react-router-dom";


function StudentIndex(){
    const [students, setStudents] = useState([])

    useEffect(()=>{
        const fetchStudents = async () => {
            const data = await fetch("../data.json", {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });

            if(data.ok){
                const parsedData = await data.json()
                setStudents(parsedData)
            } else {
                alert("something went wrong")
            }
        }

        fetchStudents()
    }, [])
    // if dependency array is empty, the callback function will only run once when the component is mounter.
    // if there are dependecies, the callback will run when there is a change in the value of the dependency.

    return(
        <>
        <h1>Student Index</h1>
            {console.log(students)}
            {students.map((student, i) => <>
                <Link to={`/students/${student.name}`} key={i}>
                {student.name}
            </Link>
                <br />
            </>)}
        </>
    )
}

export default StudentIndex;