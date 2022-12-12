import './App.css';
import { Route } from 'react-router';

import NumbersDisplay from './numbersDisplay';
import StudentIndex from './studentIndex';
import StudentShow from './studentShow';
import Form from './form';

function App() {
  return (
    <>
      <h1>Hello from Hogwarts</h1>
      {/* <NumbersDisplay /> */}
      <br/>
      <StudentIndex />
      <br/>
      <Route path="/students/:studentName" component={StudentShow} />
      <br/>
      <Form/>
    </>
  );
}

export default App;
