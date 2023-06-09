import { useSelector } from 'react-redux';

const TeaIndex = props => {

  const teas = useSelector((state) => Object.values(state.teas))

  return (
    <div className="tea-index">
      <h2>Hi I'm TeaIndex</h2>
      {teas.map((tea) => (
        <div key={tea.id} className="tea-index-item">
          <ul>
            <li>
              <h3>Flavor: {tea.flavor}</h3>
            </li>
            <li>
              <h3>Price: {tea.price}</h3>
            </li>
          </ul>
        </div>
      ))}
    </div>
  )
}

export default TeaIndex;