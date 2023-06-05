import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



const StudentShow = () => {
    // const params = useParams()
    // const studentId = params.studentId
    const {studentName} = useParams()
    const [currentStudent, setCurrentStudent] = useState({})

    useEffect(()=>{
        console.log(studentName)
        const fetchStudents = async () => {
            const res = await fetch("../../data.json",{
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            })
            if (res.ok){
                const parsedData = await res.json()
                const foundStudent = parsedData.find(student => student.name === studentName)
                setCurrentStudent(foundStudent)
            } else {
                debugger
                console.log("haha oops")
            }

        }

        fetchStudents()
    },[studentName])


    return (
        <>
            <ul>
                <li>{currentStudent.name}</li>
                <li>{currentStudent.ancestry}</li>
                <li>{currentStudent.house}</li>
            </ul>
        </>
    )
}

export default StudentShow;

