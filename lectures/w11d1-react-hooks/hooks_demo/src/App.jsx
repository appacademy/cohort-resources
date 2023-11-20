import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./navBar.jsx"
import Roster from "./roster.jsx"
import Counter from "./counter.jsx"
import Form from "./form.jsx"
import StudentShow from "./studentShow.jsx"



const router = createBrowserRouter([
  {
    path:'/',
    element: <NavBar/>,
    children:[
    //   {index:true, element: <h2>Home</h2>},
    {path: 'students', element: <Roster/>, children:[{path: ':studentName', element: <StudentShow/>}] },
    {path: 'form', element: <Form/>},
    ,
    {path: 'counter', element: <Counter/>},
    ]


  }
])





function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
