import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchAllTeas } from '../../store/teaReducer';
import TeaIndexItem from '../TeaIndexItem';

import React from 'react';

class TeaIndex extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // when this component mounts (first render), we run this
    this.props.dispatch(fetchAllTeas())
  }

  // componentDidUpdate(prevProps, prevState) {
  //   // console.log('in component did update')
  //   // some value that will change
  //   if (prevProps.dispatch !== this.props.dispatch) {
  //     this.props.dispatch(fetchAllTeas())
  //   }
  // }

  render() {
    const teas = this.props.teas;
    
    return (
      <>
        <div className='tea-index-container'>
          <h2>Teas</h2>
          <ul className='teas-ul'>
            {teas.map(tea => (
              <TeaIndexItem tea={tea} />
            ))}
          </ul>
        </div>

      </>
    )
  }

}

const OldTeaIndex = props => {
  const teas = useSelector(state => Object.values(state.teas));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTeas())
  }, []);

  return(
    <>
      <div className='tea-index-container'>
        <h2>Teas</h2>
        <ul className='teas-ul'>
        {teas.map(tea => (
          <TeaIndexItem tea={tea}/>
        ))}
        </ul>
      </div>
      
    </>
  )
};

export default TeaIndex;