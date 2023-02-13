import {useState} from 'react';

function Form() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formComplete, setFormComplete] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("during submission");
    setFormComplete(true);
    setUsername("")
    setPassword("")
  }

  return (
    <>
      <form onSubmit={handleSubmit} >
        <h1> Sign Up</h1>
        <br />
        <label>Username
          <input type="text" onChange={(e) => setUsername(e.currentTarget.value)} value={username}/>
        </label>
        <br />
        <label>Password
          <input type="password" onChange={(e) => setPassword(e.currentTarget.value)} value={password}/>
        </label>
        <br />
        <input type="submit" value="Sign Up" />
      </form>
      <div className="form-values">
        <ul>
          <li>{username}</li>
          <li>{password}</li>
        </ul>
      </div>
      <div> Complete? { formComplete ? "Yes!" : "No :("}</div>
    </>
  )
  
}

export default Form;