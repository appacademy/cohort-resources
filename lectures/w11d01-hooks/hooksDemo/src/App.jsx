import { Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import './App.css'
import Counter from './components/Counter';
import StudentIndex from './components/StudentIndex';
import StudentShow from './components/StudentShow';

const App = ({ test, otherTest }) => {
  console.log('App', 'rendering...')
  return (
    <>
      <h2>Hooks</h2>
      <h3>Yarr matey</h3>
      <Switch>
        <Route path='/counter' component={Counter} />
        <Route path='/students/:studentId' component={StudentShow} />
        <Route path='/students' component={StudentIndex} />
      </Switch>
    </>
  )
}

export default App
