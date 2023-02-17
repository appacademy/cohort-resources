import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTeas, selectTeas } from "../../store/teaReducer";

function TeasList(){
  const dispatch = useDispatch();
  const teas = useSelector(selectTeas);

  useEffect(() => {
    dispatch(fetchAllTeas());
  },[dispatch]);
  
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