import { useState, useEffect} from "react"
import { Link } from "react-router-dom"


const StudentIndex = (props) => {

    const [students, setStudents] = useState([])
    
    useEffect(() => {
        const fetchUsers = async () => {
            const res = await fetch("../../data.json", {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            })
            if(res.ok){
                const parsedData = await res.json()
                setStudents(parsedData)
            } else {
                alert("something went wrong")
            }
        }


        fetchUsers()
    }, [])

    return (students.length > 0) ? (
        <>
            {console.log(students)}
            {students.map((stood, idx) => {
                return (
                    <div key={idx}>
                        <Link to={`/students/${stood.name}`}>{stood.name}</Link>
                        <br />
                    </div>
                )
            })}
        </>
    ) : (<h1>loading...</h1>)
}

export default StudentIndex