import React from "react";
import TeaListItem from './tea_list_item';
import TeaForm from './tea_form';

class TeaList extends React.Component {

  componentDidMount() {
    this.props.fetchAllTeas();
  }

  render () {
    const teaList = this.props.teas.map((tea) => {
      return (
        <TeaListItem key={tea.id} tea={tea}/>
      )
    })
    return (
      <div>
          <ul>
              {teaList}
          </ul>
      </div>
    )
  }

}

export default TeaList