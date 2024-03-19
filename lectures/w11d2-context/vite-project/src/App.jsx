import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import PostIndex from './components/PostIndex';
import Layout from './components/Layout';

const router = createBrowserRouter([
  { path: '/', element: <Layout />, children: [
    { path: ':sub', element: <PostIndex /> }
  ] },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
