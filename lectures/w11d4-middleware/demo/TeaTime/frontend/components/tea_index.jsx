import React from 'react';
import TeaForm from './tea_form';

class TeaIndex extends React.Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {}
  // }

  componentDidMount() {
    // this gets run after my component first renders
    this.props.fetchTheTeas()
  }
  
  render() {
    return (
      <div>
        <h1>All Teas</h1>
        <ul>
          {
            this.props.teas.map(tea => <li key={tea.id}>Flavor: {tea.flavor}</li>)
          }
        </ul>
        <TeaForm receiveTea={this.props.receiveTea} makeTea2={this.props.makeTea} />
        <h3>Green Teas</h3>
        <ul>
          {
            this.props.greenTeas.map((tea) => (
              <li key={tea.id}>{tea.flavor}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}
// const TeaIndex = (props) => {
//   return (
//     <div>
//       <h1>All Teas</h1>
//       <ul>
//         {
//           props.teas.map(tea => <li key={tea.id}>Flavor: {tea.flavor}</li>)
//         }
//       </ul>
//       <TeaForm receiveTea={props.receiveTea} />
//       <h3>Green Teas</h3>
//       <ul>
//         {
//           props.greenTeas.map((tea) => (
//             <li key={tea.id}>{tea.flavor}</li>
//           ))
//         }
//       </ul>
//     </div>
//   )
// }

export default TeaIndex;