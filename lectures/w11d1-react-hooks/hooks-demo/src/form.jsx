import { useState } from "react";

function Form (props) {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  // other way
  // const [firstName, setFirstName] = useState("") // repeat for all fields

  const [errors, setErrors] = useState([]);

  const validate = () => {
    let errors = [];

    if (user.firstName.length === 0) {
      errors.push("First name cant be blank")
    }
    if(user.password.length < 6) {
      errors.push("password must be at least 6 characters")
    }

    return errors;
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // not going to do the default behavior
    // to be continued
    const errorsVariable = validate();
    setErrors(errorsVariable);
    console.log(user);
  };

  return (
    <>
      {errors.map(error => (
        <div>error</div>
      ))}
      <form className='form' onSubmit={handleSubmit}>
        <h4>Sign Up</h4>
        <input type="text" 
        placeholder="First Name" 
        value={user.firstName}
        onChange={(e) => setUser({...user, firstName: e.currentTarget.value})} />
        <input type="text" 
        placeholder="Last Name" 
        value={user.lastName}
        onChange={(e) => setUser({...user, lastName: e.currentTarget.value})} />
        <input type="text" 
        placeholder="Email" 
        value={user.email}
        onChange={(e) => setUser({...user, email: e.currentTarget.value})} />
        <input type="password" 
        placeholder="Password" 
        value={user.password}
        onChange={(e) => setUser({...user, password: e.currentTarget.value})} />

        <button>Create User</button>
      </form>
    </>
  )
}

export default Form;