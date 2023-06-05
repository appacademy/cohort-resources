import { useState } from "react"

const Form = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        password: "",
        username: "",
    })


    const [errors, setErrors] = useState([])

    const validate = () => {
        let errors = [];
        if(user.firstName.length === 0){
            errors.push("First Name can't be blank")
        }
        if(user.password.length < 6){
            errors.push("Password is too short. Must be 6 charachter or more")
        }

        return errors
    }

    const handleChange = (field) => {
        return (e) => {
            // this syntax of [field]
            // const newObj = Object.assign({}, user, {[field] : e.target.value})

            
            /// other way:
            // const newUser = {...user}
            setUser({...user, [field]: e.target.value})
            // setUser(newObj)
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault(); // don't refresh
        let errors = validate()
        
        if (errors.length > 0){
            setErrors(errors)
        }
    }

    const showErrors = () => {
        if(!errors.length) {
            return null
        } 
        return (
            <ul>
                {errors.map(err => <li>{err}</li>)}
            </ul>
        )
    }

    return (
        <>
            <h1>Sign up!</h1>
            {showErrors()}
            {/* {console.log("user:", user)} */}
            <form onSubmit={handleSubmit}>
                <label>Username:
                    <input type="text" 
                        value={user.username} // value of "" won't let you type.
                        onChange={handleChange("username")}
                        />
                </label>
                <br />
                <label>First Name:
                    <input type="text" 
                        value={user.firstName}
                        onChange={handleChange("firstName")}
                        />
                </label>
                <br />

                <label>Last Name:
                    <input type="text" 
                        value={user.lastName}
                        onChange={handleChange("lastName")}
                        />
                </label>
                <br />

                <label>Password:
                    <input type="password" 
                        value={user.password}
                        onChange={handleChange("password")}
                        />
                </label>
                <button>Sign Up!</button>
            </form>
        </>
    )
}

export default Form;