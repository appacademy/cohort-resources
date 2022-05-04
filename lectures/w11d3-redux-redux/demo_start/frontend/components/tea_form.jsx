import React from "react";
// tea ={
//     flavor: "jasmine",
//     price: 4.99,
//     id:7
// }

class TeaForm extends React.Component{
    constructor(props){
        super(props)
        // console.log(this.props)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state={
            flavor: "",
            price: "",
            id: Math.floor(Math.random() * 1000000)
        }
    }

    handleChange(keyToChange){
        return (e) => this.setState({[keyToChange]: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.receiveTea(this.state)
        // console.log(this.state)
    }



    render(){
        return(
            <div>
                <h1>Tea Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="enter flavor"  value={this.state.flavor} onChange={this.handleChange("flavor")}/>
                    <input type="text" placeholder="price" value={this.state.price}  onChange={this.handleChange("price")}/>
                    <button>Submit</button>
                </form>

            </div>
        )
    }

}


export default TeaForm;