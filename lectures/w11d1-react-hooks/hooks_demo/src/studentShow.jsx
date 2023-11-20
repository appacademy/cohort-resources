import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function StudentShow(props) {


    const {studentName} = useParams();

    const [currentStudent, setCurrentStudent] = useState({});

    useEffect(()=>{
        const intervalOne = setInterval(()=>{
            console.log("this will run every sec"),1000
        })

        // execute this when navigating away from said component
        return () => clearInterval(intervalOne)

        // we set up intervals, in our useEffect but we also clear them here
        // we clear them using clean up functions
        // a clean up function is when we return in a use effect
    },[])


    useEffect(()=>{
        const fetchStudents = async ()=>{
            const data = await fetch("../data.json", {
                headers:{
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })

            if(data.ok){
                const parseData = await data.json();
                const foundStudent = parseData.find(student => student.name === studentName );
                setCurrentStudent(foundStudent);
            }else{
                alert("student not found!")
            }
        }

        fetchStudents()
    }, [studentName])
    

    return (
        <>

        <h1>{currentStudent.name}</h1>
        <h2>{currentStudent.house}</h2>
        <h3>{currentStudent.gender}</h3>
        <h4>{currentStudent.ancestry}</h4>
        <img src={currentStudent.image} alt="" />
            
        </>
    )
}
