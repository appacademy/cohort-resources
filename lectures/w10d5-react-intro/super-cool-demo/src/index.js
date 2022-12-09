import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

// React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App name='Taylor' />
    </BrowserRouter>
  </React.StrictMode>
);

// React 17
// const root = document.querySelector('#root');
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// root);

// const PersonIndexItem = ({ person }) => {
//   return <h1>My name is {person.name} and I like {person.hobby}</h1>;
// };

// const root = document.querySelector('#root');
// const data = { name: 'MIKE', hobby: 'REACTING' };
// ReactDOM.render(<PersonIndexItem person={data} />, root);