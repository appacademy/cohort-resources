import AddTeaForm from "./components/AddTeaForm";
import TeaIndex from "./components/TeaIndex";

function App() {
  return (
    <>
      <h1>Welcome to the Magic Tea Shop</h1>
      <div className="tea-container">
        <TeaIndex />
        <AddTeaForm />
      </div>
      
    </>
  );
}

export default App;
