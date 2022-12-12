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
      <StudentIndex />
      <Route path="/students/:studentName" component={StudentShow} />
      <Form/>
    </>
  );
}

export default App;
