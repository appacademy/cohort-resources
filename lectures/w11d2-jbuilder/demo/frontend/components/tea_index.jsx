import React from 'react';
import TeaForm from './tea_form';
import TeaIndexItem from './tea_index_item';

class TeaIndex extends React.Component{
    
	componentDidMount(){
		this.props.getAllTeas();
	}

	render() {
		return(
			<div className="tea-list">
				<h1>All the teas</h1>
				<div>
					{this.props.teas.map((tea) => ( // implicit return, no return statement needed
							<TeaIndexItem tea={tea} key={tea.id}/>
					))}
				</div>

				<TeaForm createTea={this.props.createTea} />
			</div>
	);
}
}

export default TeaIndex;