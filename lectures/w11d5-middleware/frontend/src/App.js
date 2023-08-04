import './App.css';
import TeaForm from './components/TeaForm/TeaForm';
import TeaIndex from './components/TeaIndex/TeaIndex';

function App({ props1, props2 }) {
  return (
    <>
      <h1>Magic Tea Shop</h1>
      <TeaIndex />
      <TeaForm />
    </>
  );
}

export default App;
