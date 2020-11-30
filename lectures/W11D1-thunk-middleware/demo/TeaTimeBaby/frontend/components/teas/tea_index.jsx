import React from 'react';
import TeaIndexItem from './tea_index_item';
import TeaForm from './tea_form';


class TeaIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.requestAllTeas();
    }

    render() {
        return (
            <div>
                <h1>THE TEA INDEX</h1>
                <ul>
                    {this.props.teas.map(tea => (
                        <TeaIndexItem tea={tea} key={tea.id} />
                    ))}
                </ul>

                <TeaForm buildTea={this.props.buildTea} />
            </div>
        )
    }
}

// const TeaIndex = ({ teas, callReceiveTea, banana }) => {
//     // console.log(teas);
//     return (
//         <div>
//             <h1>THE TEA INDEX</h1>
//             <ul>
//                 {teas.map(tea => (
//                     <TeaIndexItem tea={tea} key={tea.id} />
//                 ))}
//             </ul>

//             <TeaForm callReceiveTea={callReceiveTea} />
//         </div>
//     )
// }

export default TeaIndex;