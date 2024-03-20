import { useSelector } from 'react-redux';
import './teaIndex.css'

const TeaIndex = props => {

  const teas = useSelector(state => Object.values(state.teas));

  return (
    <div className='tea-index'>
      <h4>Hello from the tea index component</h4>

      {teas.map(tea => (
        <div className='tea-index-item' key={tea.id}>
          <ul>
            <li>
              <h4>
                Flavor: {tea.flavor}
              </h4>
            </li>
            <li>
              <h4>
                Price: {tea.price}
              </h4>
            </li>
          </ul>
        </div>
      ))}

    </div>
  )
}

export default TeaIndex;