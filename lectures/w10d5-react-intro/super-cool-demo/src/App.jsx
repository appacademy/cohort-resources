import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import JobIndex from './components/JobIndex';
import Error from './components/Error';
import JobShow from './components/JobShow';

const App = props => {
  return (
    <div className='big-app'>
      {/* <Header /> */}
      <Route path={'/'} component={Header} />
      <Switch>
        <Route path={'/jobs/:jobId'} component={JobShow} />
        <Route path={'/jobs'} component={JobIndex} /> 
        <Redirect to={'/jobs'} from='/jos' />
        <Route path={'/error'} component={Error} />
        <Redirect to={'/error'} />
      </Switch>
      {/* <JobIndex /> */}
    </div>
  );
};

// class App {
//   constructor() {
//     this.attribute = 'blah';
//   }

//   render() {

//   }
// };

export default App;