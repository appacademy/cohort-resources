import {useEffect,useState} from "react";
import {Link} from "react-router-dom";

function StudentIndex(props) {

    const [students, setStudents] = useState([]);


    useEffect(()=>{
     const fetchStudents = async ()=>{
        const data = await fetch("../data.json",{
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })

        if (data.ok){
            const parsedData = await data.json();
            setStudents(parsedData)
        }else {
            alert("something went wrong ")
        }
    }   
    
    fetchStudents()
}

   ,[] )


    

    return (
        <>
        {console.log(students)}
        {students.map((student,i) => <Link to={`/students/${student.name}`} key={i}>{student.name}</Link>)}
        
            
        </>
    )
}

export default StudentIndex;
