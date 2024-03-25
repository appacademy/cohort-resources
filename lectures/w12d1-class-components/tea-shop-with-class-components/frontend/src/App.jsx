import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TeaIndex from './components/TeaIndex/teaIndex'
import AddTeaForm from './components/TeaForm/addTeaForm'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div></div>
      <h1>Hello, from the app!</h1>
      <div className="card"></div>
      <TeaIndex/>
      <AddTeaForm/>
    </>
  )
}

export default App
