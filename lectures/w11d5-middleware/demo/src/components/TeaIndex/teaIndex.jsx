import { useSelector } from "react-redux";
import { selectTeas } from "../../store/teaReducer";

function TeasList(){
  const teas = useSelector(selectTeas);
  
  return(
    <>
      <h1>Hello from tea index</h1>
      <ul>
        {teas.map(tea => {
            return (<li key={tea.id} >{tea.flavor}</li>)
        }
        )}
      </ul>
    </>
  );
};

export default TeasList;