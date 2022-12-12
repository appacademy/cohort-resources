import {useState, useEffect} from 'react';

function Form(props){

  const[user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const[errors, setErrors] = useState([]);



  const validate = ()=>{
    let errors = [];
    if(user.firstName.length === 0){
      errors.push("First name cannot be blank")
    }
    if(user.password.length < 6){
      errors.push('Password must be at least 6 characters')
    }
    return errors;
  }





  const handleChange = (incomingKey) => {
    return e => {
      
      const newObj = Object.assign({}, user, {[incomingKey]: e.target.value})
      // const newObj = {...user, [incomingKey]: e.target.value}

      setUser(newObj);
      // won't work; need to give the set function a new object
      // user[incomingKey] = e.target.value
      // setUser(user)
      
    }
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(user);
    let errors = validate();

    if(errors.length){
      setErrors(errors)
    } else {
      //submitting to backend;

      //clear form
      setUser({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      });
      //clear the errors
      setErrors([]);
    }

    
    
  }
  
  const showErrors = () => {
    if(!errors.length) return null;
    return(
      <ul>
        {errors.map((error, i)=> <li key={i}>{error}</li>)}
      </ul>
    )
  }
  return(
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='First Name' onChange={handleChange('firstName')} value={user.firstName}/>
        <input type="text" placeholder='Last Name' onChange={handleChange('lastName')} value={user.lastName}/>
        <input type="text" placeholder='Email' onChange={handleChange('email')} value={user.email}/>
        <input type="password" placeholder='Password' onChange={handleChange('password')} value={user.password}/>
        <button>Submit</button>
        {showErrors()}
      </form>
    </>
  )
}


export default Form;