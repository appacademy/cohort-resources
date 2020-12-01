import React from 'react';
import TeaDetail from './tea_detail';

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

    return (
      <div className="tea-index-item" onClick={this.handleClick}>
        <div className="basic-info">
          <li>{tea.flavor} Tea</li>
          <li>${tea.amount}</li>
        </div>
        { this.state.detail ? <TeaDetail /> : '' }
      </div>
    );
  }
}

export default TeaIndexItem;