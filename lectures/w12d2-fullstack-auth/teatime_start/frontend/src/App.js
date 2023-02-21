import AddTeaForm from "./components/AddTeaForm";
import TeaIndex from "./components/TeaIndex";
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const dispatch = useDispatch();
  const teas = useSelector(state => Object.values(state.teas));

  return (
    <>
      <h1>Welcome to the Magic Tea Shop</h1>
      <div className="tea-container">
        <TeaIndex dispatch={dispatch} teas={teas}/>
        <AddTeaForm dispatch={dispatch} />
      </div>
      
    </>
  );
}

export default App;
