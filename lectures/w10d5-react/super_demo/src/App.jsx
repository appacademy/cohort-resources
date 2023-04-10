import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import JobIndex from './components/JobIndex/JobIndex';
import jobData from './assets/jobData';
import logo from './assets/logo.jpg';
import JobShow from './components/JobShow/JobShow';

const App = ({ person }) => {
  // console.log(props);
  // console.log(`${person.name} really likes ${person.hobby}`);
  // console.log(jobData);
  return (
    <>
      {/* <Route path='/' component={Header} /> */}
      {/* <Header logo={logo} /> */}
      <Route path='/'>
        <Header logo={logo} />
        <JobIndex jobData={jobData} />
      </Route>
  
      <Route path='/jobs/:jobId'>
        <JobShow jobData={jobData} />
      </Route>

      <Switch>
        <Route path={'/fruit/bananas'} render={() => <h1>Bananas</h1>} />
        <Route path='/fruit/peaches' render={() => <h1>Peaches</h1>} />
        <Route path='/fruit' render={() => <h1>Fruit</h1>} />
        {/* <Route path='/' render={() => <h1>Home</h1>} /> */}
        {/* <Route render={() => <h1>Are you lost</h1>} /> */}
        <Route path={'/error'} render={() => <h1>Are you lost?</h1>} />
        {/* <Redirect to={'/error'} /> */}
      </Switch>
    </>
  )
};

export default App;
