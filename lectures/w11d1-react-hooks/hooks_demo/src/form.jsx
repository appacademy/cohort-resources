import {useState, useRef} from "react";

export default function Form(props) {
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    const passwordInput = useRef();
    const fNameInput = useRef();

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email:"",
        password:""
    });

    const [errors, setErrors] = useState([]);

    const handleChange = (incomingKey) =>{
        return (e)=>{
            console.log(user, "user")
            const newObj = Object.assign({},user, {[incomingKey]: e.target.value});
            setUser(newObj)
        }
    }
    const validate = ()=>{
        let errors = [];
        if(user.firstName.length === 0 ){
            errors.push("first name cant be blank")
            fNameInput.current.style.border = "2px solid red"
        }
        if(user.password.length < 6){
            errors.push("passsword must be at least six characters");
            passwordInput.current.style.border = "2px solid red"
            
        }
        return errors;
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        // alert("log in successful!")
        // console.log(passwordInput)
        // console.log(passwordInput.current)
        let errors = validate();
        if(errors.length){
            setErrors(errors);
        }else{
            setErrors([])
            alert("login is good!")

        }
    }

    const showErrors = ()=>{
        if(!errors.length) return null;
        return (
            <ul>
                {errors.map(error => <li>{error}</li>)}
            </ul>
        )
    }

    

    return (
        <>
        <h1>{user.firstName}</h1>
        {showErrors()}
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="first name" value={user.firstName} onChange={handleChange("firstName")} ref={fNameInput}/>
            <input type="text" placeholder="last name" value={user.lastName} onChange={handleChange("lastName")}/>
            <input type="text" placeholder="Email" value={user.email} onChange={handleChange("email")}/>
            <input type="password" name="" id="" placeholder="password" value={user.password} onChange={handleChange("password")} ref={passwordInput}/>
            <button>Submit!</button>

        </form>
            
        </>
    )
}
