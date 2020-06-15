import React from 'react';
import ShirtItemDetailContainer from './shirt_item_detail_container';

class ShirtIndexItem extends React.Component {
  constructor(props){
    super(props)
    this.state = { toggle: false }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.state.toggle ? this.setState({toggle: false}) : this.setState({toggle: true})
  }
  render(){
    // console.log(this.state)
  return (
    <>
      <ul onClick={this.handleClick}>
        <li>{this.props.shirt.style.toUpperCase()}</li>
        <li>${this.props.shirt.price}</li>
      </ul>
      {this.state.toggle ? <ShirtItemDetailContainer shirtId={this.props.shirt.id}/> : ""}
    </>
  )
}} 

export default ShirtIndexItem;