import JobIndex from "./components/JobIndex/JobIndex";

function App(props) {
  console.log(props)
  const {userObj} = props; //object deconstruction
  const {name} = userObj; 
  return (
    <div className="app">
      <h1>Hello, {name}, {props.age}</h1>
      <JobIndex/>
    </div>
  );
}

export default App;
