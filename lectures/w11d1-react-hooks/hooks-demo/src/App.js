import './App.css';
import NumbersDisplay from './numberDisplay';
import StudentIndex from './studentIndex';
import {Route, Switch} from 'react-router-dom';
import StudentShow from './studentShow';
import Form from './form';

function App() {
  return (
    <div className="App">
      <h1>Hello from App</h1>
      <NumbersDisplay />
      <StudentIndex />
      <Form />
      
      <Switch>
        <Route path="/students/:studentName" component={StudentShow} />
      </Switch>
    </div>
  );
}

export default App;
