import React from 'react';
import TeaForm from './tea_form'
// import { connect } from 'react-redux';

class TeaIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchTeas();
  }
  // expect to get teas from my props
  // dispatch(props.receiveTea({id: 1, flavor: 'green', amount: 2})) cant do that
  // props.receiveTeaWithDispatch({id: 1, flavor: 'green', amount: 2}) // this would actually dispatch
  render () {
    
    const teas = this.props.teas; // assuming teas is an array
    return (
      <div>
        <h1>All of the Teas</h1>
        <ul>
          {teas.map(tea => <li key={tea.id} >Flavor: {tea.flavor} Amount: {tea.amount} </li>)}
        </ul>
        <TeaForm receiveTea={this.props.receiveTea} createTea={this.props.createTea} />
      </div>
    )
  }
  
} 

export default TeaIndex; // export that const

// const mapStateToProps = (state) => ({
//   banana: Object.values(state.teas) // array of tea objects
// })

// // we need connect to access the store from the Provider
// // we need to choose which slice of state to give to this component, with mSTP
// // we can create the container here or make a new file
// export default connect(mapStateToProps, mapDispatchToProps)(TeaIndex);