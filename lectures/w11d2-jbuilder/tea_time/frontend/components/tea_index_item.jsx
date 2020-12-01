import React from 'react';
import TeaDetail from './tea_detail';
import TeaDetailContainer from './tea_detail_container';

class TeaIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      detail: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ detail: !this.state.detail });
  }

  render() {
    const { tea } = this.props;
    // debugger;
    return (
      <div className="tea-index-item" onClick={this.handleClick}>
        <div className="basic-info">
          <li>{tea.flavor} Tea</li>
          <li>${tea.amount}</li>
        </div>
        { this.state.detail ? <TeaDetailContainer teaId={tea.id}/> : '' }
      </div>
    );
  }
}

export default TeaIndexItem;