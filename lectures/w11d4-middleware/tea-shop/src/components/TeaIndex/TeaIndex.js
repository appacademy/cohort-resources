import { useSelector } from "react-redux";

const TeaIndex = props => {
  const teas = useSelector(state => Object.values(state.teas));

  return(
    <>
      <h2>Hi I'm the TeaIndex</h2>
      <ul>
        {teas.map(tea => (
          <li key={tea.id}>{tea.flavor}</li>
        ))}
      </ul>
    </>
  )
};

export default TeaIndex;