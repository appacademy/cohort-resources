import { useRef, useState } from "react";

function Form(){

    const passwordInput = useRef();
    const usernameInput =  useRef();
    window.passwordInput = passwordInput;

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState([])

    const validates = () => {
        let errors = [];
        if(user.username.length === 0){
            errors.push("Username cannot be blank")
        }        
        if(user.email.length === 0){
            errors.push("email cannot be blank")
        }        
        if(user.password.length < 6){
            errors.push("Password is too short")
        }
        return errors
    }

    const handleChange = (incomingKey) => {
        return (e) => {
            // console.log(e);
            const userObj = Object.assign({}, user, {[incomingKey]: e.target.value})
            setUser(userObj)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(passwordInput, "ref")
        // console.log(passwordInput.current, "current key in ref")
        let errors = validates()
        if (errors.length){
            setErrors(errors)
        }
    }

    const showErrors = () => {
        if(!errors.length){
            return null;
        } else {
            return (
                <ul>
                    {errors.map((error, i) => <li key={i}>{error}</li>)}
                </ul>
            )
        }
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <h1> Sign Up!</h1>
                <input type="text" value={user.username} placeholder="Username" onChange={handleChange("username")} ref={usernameInput}/>
                <input type="text" value={user.email}  placeholder="Email" onChange={handleChange("email")}/>
                <input type="password" value={user.password} placeholder="Password" ref={passwordInput} onChange={handleChange("password")} />
                <button>Submit</button>
            </form>
            {showErrors()}
            <h1>{user.username}</h1>
            <h1>{user.email}</h1>
        </>
    )
}

export default Form;