import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import JobIndex from './components/JobIndex/JobIndex';


//React 17
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//React 18

const root = ReactDOM.createRoot(document.getElementById('root'))
const user = {name: 'John',  'age' : 42}
root.render(
  <React.StrictMode>
    <App userObj={user} age={user.age}/>
    {/* <JobIndex /> */}
  </React.StrictMode>
)
