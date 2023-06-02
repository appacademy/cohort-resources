import { Switch, Route, Redirect } from "react-router-dom";
import JobIndex from "./components/JobIndex";
import JobShow from "./components/JobShow";



function App() {
  // const jobs = Object.values(jobData)
  // console.log(jobs);
  return (
    <>
      <Switch>
          <Route path="/jobs/:jobId" component={JobShow} />
          <Route path="/jobs" component={JobIndex} />
          <Redirect to="/jobs" />
      </Switch>
    </>
  );
}

export default App;
