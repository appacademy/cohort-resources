import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

//React 18

const root = ReactDOM.createRoot(document.getElementById('root'))
const user = {name: 'John',  'age' : 42}
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App userObj={user} age={user.age}/>
    </BrowserRouter>
  </React.StrictMode>
)
// import JobIndex from './components/JobIndex/JobIndex';


//React 17
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
