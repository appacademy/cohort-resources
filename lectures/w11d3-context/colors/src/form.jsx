import {useState} from "react";
function Form(props) {

    // what fields am i trying to collect?
    const [newUser, setNewUser] = useState({
        name:"",
        password:"",
        age:""
    });

    const handleChange = (incomingKey)=>{
        // this will be responsible for updating state
        // console.log(e)
        return (e)=>{
            setNewUser((prev)=>({...prev, [incomingKey]: e.target.value}))
        }


    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(newUser)
    }
    

    return (
        <>
        <form onSubmit={handleSubmit} >
            <input type="text" placeholder="Username" value={newUser.name} onChange={handleChange("name")} />
            <input type="password" placeholder="password" value={newUser.password} onChange={handleChange("password")} />
            <input type="text" placeholder="age" value={newUser.age}  onChange={handleChange("age")}/>
            <button>Submit</button>
        </form>
            
        </>
    )
}
 export default Form;