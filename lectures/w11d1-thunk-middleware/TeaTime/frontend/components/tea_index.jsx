import React from 'react';
import TeaForm from './tea_form';

class TeaIndex extends React.Component{
    
	componentDidMount(){
		this.props.getAllTeas();
	}

	render() {
		return(
			<div>
				<h1>All the teas</h1>
				<ul>
					{this.props.teas.map((tea) => ( // implicit return, no return statement needed
							<li key={tea.id}>flavor: {tea.flavor}</li>
					))}
				</ul>
				<h3>Green Teas</h3>
				<ul>
					{this.props.greenTeas.map(tea => { // explicit return, return statement necessary 
							return <li key={tea.id}>flavor: {tea.flavor}</li>
					})}
				</ul>
				{/* <TeaForm /> // TeaForm will not have receiveTea in this case. Must be passed as a prop */}
				<TeaForm 
					createTea={this.props.createTea}
				/>
			</div>
	);
}
}

export default TeaIndex;