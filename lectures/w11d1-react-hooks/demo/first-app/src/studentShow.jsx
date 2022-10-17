import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

function StudentShow(){
    const {studentName} = useParams();

    const [currentStudent, setCurrentStudent] = useState({});

    useEffect(()=>{
        // const interval = setInterval(()=> {
        //     console.log("interval running every second")
        // }, 1000)
        // return (()=> {
        //     clearInterval(interval)
        // })
        
        const fetchStudent = async () => {
            const data = await fetch("../data.json", {
                headers:{
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            if(data.ok){
                const parsedData = await data.json();
                const foundStudent = parsedData.find((student) => 
                    student.name === studentName
                )
                setCurrentStudent(foundStudent)
            }else {
                alert("something went wrong")
            }
        }


        fetchStudent();

    }, [currentStudent])

    return(
        <>
            <h1>{currentStudent.name}</h1>
            <h1>{currentStudent.house}</h1>
            <h1>{currentStudent.gender}</h1>
            <h3>{currentStudent.ancestry}</h3>
            <img src={currentStudent.image} alt="image" />
        </>
    )
}

export default StudentShow;