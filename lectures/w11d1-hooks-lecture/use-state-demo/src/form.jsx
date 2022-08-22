import {useState, useRef} from "react";


function Form(props) {

    const passwordInput = useRef()

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email:"",
        password:""
    });

    const handleChange = (incomingKey)=>{
        return (e)=>{
            console.log(e)
            const newObj = Object.assign({},user, {[incomingKey]: e.target.value })
            setUser(newObj)
        }

    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(passwordInput.current.value.length < 6){
            passwordInput.current.style.border = "1px solid red"
        }
        alert(`welcome ${user.firstName}`)
    }
    

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="First Name" value={user.firstName} onChange={handleChange("firstName")} />
            <input type="text" placeholder="Last Name" value={user.lastName} onChange={handleChange("lastName")} />
            <input type="text" placeholder="Email" value={user.email} onChange={handleChange("email")} />
            <input type="password" placeholder="Password" value={user.password} onChange={handleChange("password")} ref={passwordInput} />
            <button>Submit</button>
        </form>
        <h1>{user.firstName}</h1>
        <h2>{user.lastName}</h2>
            
        </>
    )
}
export default Form