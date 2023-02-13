import NumbersDisplay from "./NumberDisplay";
import Form from "./Form";
import StudentIndex from "./StudentIndex";
import StudentShow from "./StudentShow";
import { Route } from "react-router";

function App() {
  return (
    <>
      <h1>Hello from App</h1>
      <NumbersDisplay />
      <Form />
      <StudentIndex />
      <Route path="/:studentName" component={StudentShow} />
    </>
  );
}

export default App;
