import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import JobListingIndex from "./components/JobListingIndex";
import JobDetail from "./components/JobDetail";

const router = createBrowserRouter([
  { path: '/', element: <h2>Home</h2> },
  { path: '/jobs', element: <JobListingIndex /> },
  { path: '/jobs/:jobId', element: <JobDetail /> },
  { path: '*', element: <h2>404</h2> }
]);

const App = props => {
  return (
    <div className="app">
      <NavBar />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
