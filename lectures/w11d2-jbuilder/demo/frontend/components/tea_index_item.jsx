import React from 'react';
import TeaDetailContainer from './tea_detail_container';

class TeaIndexItem extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      detail: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({ detail: !this.state.detail });
  }

  render(){
    return (
      <div className="tea-index-item" onClick={this.handleClick}>
        <div className="basic-info">
          <div>{this.props.tea.flavor} Tea</div>
          <div>${this.props.tea.amount}</div>
        </div>
        {/* { this.state.detail ? <div>Details Go Here</div>: '' } */}
        { this.state.detail ? <TeaDetailContainer teaId={this.props.tea.id} />: '' }
      </div>
    );
  }
  
}

export default TeaIndexItem;