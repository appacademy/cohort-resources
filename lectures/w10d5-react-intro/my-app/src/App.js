import JobIndex from "./components/JobIndex"
import JobShow from "./components/JobShow"
import jobData from "./assets/jobs"
import ErrorPage from "./components/Error"
import { Route, Switch, Redirect } from "react-router-dom"
import JobIndexItem from "./components/JobIndexItem"

const App = ({tas, podLeader}) => {
  // console.log(tas)
  // console.log(podLeader)
  return(
    <>
      {/* <h1>Hello from App</h1>
      <JobIndex jobs={jobData}/> */}
      <Switch>
        <Route path="/jobs/:jobId">
          <JobShow />
        </Route>
        <Route path="/jobs">
          <JobIndex jobs={jobData}/>
        </Route>
        <Route path="/error" component={ErrorPage}/>
        <Route exact path="/">
          <h1>home page</h1>
        </Route>
        <Redirect to="/error"/>
      </Switch>

    </>
  )
}

export default App;