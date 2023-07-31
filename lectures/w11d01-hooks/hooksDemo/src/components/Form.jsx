import { useRef, useState } from "react";

const Form = props => {
  console.log('Form', 'rendering...');
  // in react, all form inputs should be controlled
  // value of field is tied directly to state

  // one option is to create a separate state variable for each input
  // const [name, setName] = useState('')
  // const [house, setHouse] = useState('')
  // const [hairColour, setHairColour] = useState('')

  // if I want a variable that directly references a DOM element...
  // 1: declaring a variable but not initializing it until useEffect
  //    body of function --> return --> useEffect
  // 2: useRef

  // useRef creates an object with a current property
  const houseInput = useRef();
  console.log(houseInput);

  const [student, setStudent] = useState({
    name: '',
    house: '',
    hairColour: ''
  })

  const [errors, setErrors] = useState([])

  // const handleNameInput = e => {
  //   setStudent(prev => ({ ...prev, name: e.target.value }))
  // }

  // const handleHouseInput= e => {
  //   setStudent(prev => ({ ...prev, house: e.target.value }))
  // }

  // const handleHairInput = e => {
  //   setStudent(prev => ({ ...prev, hairColour: e.target.value }))
  // }

  const handleGenericInput = keyName => e => {
    setStudent(prev => ({ ...prev, [keyName]: e.target.value }))
  }
  
  const validate = () => {
    let newErrors = []
  }

  const handleSubmit = e => {
    e.preventDefault();
    validate();
    if (errors.length) {

    } else {
      console.log(student);
      setStudent({
        name: '',
        house: '',
        hairColour: ''
      })
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <h4>New Student Form</h4>
      <label htmlFor="name">Name:</label>
      <input id="name" type="text" value={student.name} onChange={handleGenericInput('name')} />
      <label htmlFor="house">House:</label>
      <select id="house" value={student.house} onChange={handleGenericInput('house')} ref={houseInput}>
        <option value='blank'>Select a house</option>
        <option value='gryffindor'>Gryffindor</option>
        <option value="slytherin">Slytherin</option>
        <option value="hufflepuff">Hufflepuff</option>
        <option value="ravenclaw">Ravenclaw</option>
      </select>
      <p>Hair Colour:</p>
      <label htmlFor="blonde">Blonde</label>
      <input id="blonde" type="radio" name="hair" value='blonde' onChange={handleGenericInput('hairColour')}/>
      <label htmlFor="brown">Brown</label>
      <input id="brown" type="radio" name="hair" value='brown' onChange={handleGenericInput('hairColour')} />
      <label htmlFor="red">Red</label>
      <input id="red" type="radio" name="hair" value='red' onChange={handleGenericInput('hairColour')} />
      <input type="submit" value="Create Student" />
    </form>
  )
}

export default Form;