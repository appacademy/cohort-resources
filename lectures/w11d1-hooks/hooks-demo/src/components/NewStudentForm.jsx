import { useState } from "react";

const NewStudentForm = ({ setStudents }) => {
  // could have a state variable for each form input
  const [newStudent, setNewStudent] = useState({
    name: '',
    house: '',
    alive: 'true',
    hairColour: ''
  });
  const [errors, setErrors] = useState([]);

  const validate = () => {
    // set errors if necessary
  };

  const handleSubmit = e => {
    console.log(newStudent);
    e.preventDefault();
    validate();
    setStudents(prev => [...prev, newStudent]);
    setNewStudent({ name: '', house: '', alive: 'true', hairColour: '' });
  };

  const handleChangeCreator = attribute => {
    return e => {
      setNewStudent(prev => ({...prev, [attribute]: e.target.value }));
    };
};

  return (
    <>
      <h2>New Student Form</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" value={newStudent.name} onChange={handleChangeCreator('name')} />
        <label htmlFor="house">House:</label>
        <select id="house" onChange={handleChangeCreator('house')}>
          <option disabled default value="">Select a House</option>
          <option value="gryffindor">Gryffindor</option>
          <option value="ravenclaw">Ravenclaw</option>
          <option value="hufflepuff">Hufflepuff</option>
          <option value="slytherin">Slytherin</option>
        </select>
        <label htmlFor="alive">Alive:</label>
        <input id='alive' type="radio" value="true" name="status" onChange={handleChangeCreator('alive')}/>
        <label htmlFor="dead">Dead:</label>
        <input id='alideade' type="radio" value="false" name="status" onChange={handleChangeCreator('alive')} />
        <label htmlFor="hair">Hair:</label>
        <input id="hair" value={newStudent.hairColour} onChange={handleChangeCreator('hairColour')} />
        <input type="submit" value="Register" />
      </form>
    </>
  )
};

export default NewStudentForm;