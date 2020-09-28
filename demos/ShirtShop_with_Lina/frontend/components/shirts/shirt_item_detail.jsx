import React from 'react';

class ShirtItemDetail extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.fetchShirtDetail(this.props.shirtId)
    }
    render(){
        return(
            <div className="shirt-item-detail">
                {this.props.reviews.map((review, idx) => (
                    <ul className="review" key={idx}>
                        <div>Review:</div>
                        <li>{review.description}</li>
                        <div>Reviewer:</div>
                        <li>{review.reviewer}</li>
                    </ul>
                ))}
                <img src={this.props.shirt.imageUrl} width="200" height="120"></img>
                <div>{this.props.shirt.color}</div>
            </div>
        )
    }
} 


export default ShirtItemDetail