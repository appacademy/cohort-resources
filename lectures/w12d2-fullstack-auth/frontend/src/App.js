import './App.css';
import TeaForm from './components/TeaForm/TeaForm';
import TeaIndex from './components/TeaIndex/TeaIndex';

function App({ props1, props2 }) {
  return (
    <>
      <div className='header'>
        <h1>Magic Tea Shop</h1>
      </div>
      <TeaIndex />
      <TeaForm />
    </>
  );
}

export default App;
