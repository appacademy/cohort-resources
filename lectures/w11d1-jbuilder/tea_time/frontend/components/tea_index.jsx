import React from 'react';
import TeaIndexItem from './tea_index_item';
import TeaForm from './tea_form';

class TeaIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestTeas();
  }

  render() {
    return (
      <div className="tea-index">
        <h1>a/A Tea Shop</h1>
        <ul className="tea-list">
          {/* gets teas in props via container */}
          {
            this.props.teas.map(tea => <TeaIndexItem tea={tea} key={tea.id} />)
          }
        </ul>
        <TeaForm createTea={this.props.createTea} />
      </div>
    );
  }
}

export default TeaIndex;