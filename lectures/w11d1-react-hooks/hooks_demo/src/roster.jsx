import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Roster() {


    const [students, setStudents] = useState([]); 
    
    useEffect(()=>{
        const fetchStudents = async ()=>{
            const data = await fetch("../data.json", {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })

            if(data.ok){
                // if the data is okay, proceed to work with the data
                const parsedData = await data.json();
                // once I parsed the data to something I can work with
                // I need to set it to the state
                setStudents(parsedData);
            }else{
                alert("something went wrong, could not fetch data");
            }
        }
        fetchStudents();

    },[])
 


    return (
        <>
        {students.map((student, i)=> <Link to={`/students/${student.name}`} key={i}>{student.name}</Link>)}
        <Outlet/>
        </>
    )
}





// useEffect(()=>{
    // this is what will happen when a change to any of these variable in the dependecy array update

// },[a,b,c])