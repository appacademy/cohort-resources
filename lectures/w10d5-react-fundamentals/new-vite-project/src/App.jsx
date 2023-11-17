import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import JobListingIndex from "./components/JobListingIndex";
import JobDetail from "./components/JobDetail";

// const router = createBrowserRouter([
//   { path: '/', element: 
//     <>
//       <NavBar />
//       <h2>Home</h2>
//     </> 
//   },
//   { path: '/jobs', element:
//     <>
//       <NavBar />
//       <JobListingIndex />
//     </>
//   },
//   { path: '/jobs/:jobId', element:
//     <>
//       <NavBar />
//       <JobDetail />
//     </>
//   },
//   { path: '*', element: <Navigate to='/jobs' /> }
// ]);

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavBar />, // NavBar component contains an Outlet
    children: [
      { index: true, element: <h2>Home</h2> },
      { path: 'jobs', element: <JobListingIndex /> },
      { path: 'jobs/:jobId', element: <JobDetail /> }
    ]
  },
  { path: '*', element: <Navigate to='/jobs' /> }
]);

const App = props => {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
