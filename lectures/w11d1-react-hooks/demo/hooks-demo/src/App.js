// import NumbersDisplay from "./components/NumbersDisplay"
import StudentIndex from "./components/StudentIndex";
import {Switch, Route} from "react-router-dom"
import StudentShow from "./components/StudentShow";
import Form from "./components/StudentForm";
import RenderCount from "./components/RenderCount";


const  App = ()  => {
  return (
    <>
      <h1>Hello from App</h1>
      {/* <NumbersDisplay/> */}
      {/* <StudentIndex />

      <Switch>
          <Route  path="/students/:studentName" component={StudentShow}/>
      </Switch> */}
      {/* <Form/> */}
      <RenderCount/>
    </>
  );
}

export default App;
