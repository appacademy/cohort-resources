import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchAllTeas, deleteSelectedTea } from '../../store/teaReducer';

class TeaIndex extends React.Component {
  /* To Do List
    - fetch teas
  */

  componentDidMount() {
    console.log('TeaIndex did mount');
    this.props.dispatch(fetchAllTeas());
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('TeaIndex did update');
  }

  render() {
    return(
      <>
        <div className='tea-index-container'>
          <h2>Teas</h2>
          <ul className='teas-ul'>
            {this.props.teas.map(tea => (
              <div key={tea.id}>
                <ul>
                  <li>
                    <h4>Flavor: {tea.flavor}</h4>
                  </li>
                  <li>
                    <p>Price: {tea.price}</p>
                  </li>
                  <li>
                    <button onClick={e => this.props.dispatch(deleteSelectedTea(tea.id))}>Click Me</button>
                  </li>
                </ul>
              </div>
            ))}
          </ul>
        </div>

      </>
    )
  }
}

// const TeaIndex = props => {
  // const teas = useSelector(state => Object.values(state.teas));
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchAllTeas())
//   }, []);
//   return(
    // <>
    //   <div className='tea-index-container'>
    //     <h2>Teas</h2>
    //     <ul className='teas-ul'>
    //     {teas.map(tea => (
    //       <div key={tea.id}>
    //         <ul>
    //           <li>
    //             <h4>Flavor: {tea.flavor}</h4>
    //           </li>
    //           <li>
    //             <p>Price: {tea.price}</p>
    //           </li>
    //         </ul>
    //       </div>
    //     ))}
    //     </ul>
    //   </div>
      
    // </>
//   )
// };

export default TeaIndex;