import { Switch, Route, Redirect, Link, NavLink } from 'react-router-dom';
import CountDisplay from './components/CountDisplay';
import StudentIndex from './components/StudentIndex';

const App = props => {
  return (
    <div className="app">
      <h1>React is working</h1>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/count'>Counter</NavLink>
      <NavLink to='/students'>Students</NavLink>
      <Route path='/count' component={CountDisplay} />
      <Route path='/students' component={StudentIndex} />
      {/* <CountDisplay /> */}

      {/* <Switch>
        <Route exact path='/banana' render={() => <h1>Here I am</h1>} />
        <Redirect to='/banana' from='/plantain' />
      </Switch>
      <NavLink to='/chocolate' activeStyle={{ 'font-weight': 'bold' }}>Yummy</NavLink> */}
    </div>
  );
}

export default App;