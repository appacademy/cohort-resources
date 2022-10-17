import NumbersDisplay from "./numbersDisplay";
import StudentIndex from "./studentIndex";
import {Switch, Route} from "react-router"
import StudentShow from "./studentShow";
import Form from "./form";

function App() {
  return (
    <div className="App">
      <h1>Cool App</h1>
      {/* <NumbersDisplay /> */}
      <StudentIndex />
      <Switch>
          <Route path="/students/:studentName" component={StudentShow} />
      </Switch>
      {/* <Form /> */}
    </div>
  );
}

export default App;
