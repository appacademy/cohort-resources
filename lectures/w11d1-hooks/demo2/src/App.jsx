import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';

import JobIndex from './components/JobIndex';
import JobShow from './components/JobShow.jsx';
import JobContainer from './components/JobContainer.jsx';
import Counter from './components/Counter.jsx';
import NewJobForm from './components/NewJobForm.jsx';
// import jobData from './assets/jobData.js';

// const router = createBrowserRouter([
//   { path: '/jobs', element: <JobIndex jobData={jobData} /> },
//   { path: '/jobs/:jobId', element: <JobShow jobData={jobData} />} // :jobId is a dynamic segment
// ]);

const router = createBrowserRouter([
  {
    path: '/jobs',
    element: <JobContainer />,
    children: [
      { index: true, element: <JobIndex /> },
      { path: ':jobId', element: <JobShow /> },
      { path: 'new', element: <NewJobForm /> }
    ]
  },
  { path: '*', element: <Navigate to={'/jobs'} replace={true} /> },
  { path: '/counter', element: <Counter /> }
]);

const App = ({ importantInfo }) => { // props is often destructured in the function signature
  return (
    <div className='app'>
      <h1>Darren's Super Cool Job Board</h1>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
