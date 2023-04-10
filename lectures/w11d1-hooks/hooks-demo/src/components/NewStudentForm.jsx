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

  const regularHandleChange = e => {
    setNewStudent(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleChange = (attribute, e) => {
    setNewStudent(prev => ({ ...prev, [attribute]: e.target.value }));
  };

  return (
    <>
      <h2>New Student Form</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" value={newStudent.name} onChange={e => handleChange('name', e)} />
        <br />
        <label htmlFor="house">House:</label>
        <select id="house" onChange={handleChangeCreator('house')}>
          <option disabled selected={newStudent.house === '' ? true : false} value="">Select a House</option>
          <option selected={newStudent.house === 'gryffindor' ? true : false} value="gryffindor">Gryffindor</option>
          <option selected={newStudent.house === 'ravenclaw' ? true : false} value="ravenclaw">Ravenclaw</option>
          <option selected={newStudent.house === 'hufflepuff' ? true : false} value="hufflepuff">Hufflepuff</option>
          <option selected={newStudent.house === 'slytherin' ? true : false} value="slytherin">Slytherin</option>
        </select>
        <br />
        <label htmlFor="alive">Alive:</label>
        <input id='alive' type="radio" checked={newStudent.alive ? true : false} value="true" name="status" onChange={handleChangeCreator('alive')}/>
        <label htmlFor="dead">Dead:</label>
        <input id='dead' type="radio" checked={newStudent.alive ? false : true} value="false" name="status" onChange={handleChangeCreator('alive')} />
        <br />
        <label htmlFor="hair">Hair:</label>
        <input id="hair" value={newStudent.hairColour} onChange={handleChangeCreator('hairColour')} />
        <br />
        <input type="submit" value="Register" />
      </form>
    </>
  )
};

export default NewStudentForm;