import React from "react";

class TeaForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flavor: "",
            price: "",
            id: Math.floor(Math.random() * 1000000)
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(keyToChange) {
        return (e) => this.setState({[keyToChange]: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        // debugger;
        this.props.createTea(this.state);
        this.setState({
            flavor: "",
            price: "",
            id: Math.floor(Math.random() * 1000000)
        });
    }

    render() {
        // console.log(this.state);
        return (
            <div>
                <h1>Tea Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="enter flavor"  
                        value={this.state.flavor} 
                        onChange={this.handleChange("flavor")}
                    />
                    <input 
                        type="text" 
                        placeholder="price" 
                        value={this.state.price}  
                        onChange={this.handleChange("price")}
                    />
                    <input type="submit" value="Add Tea" />
                </form>
            </div>
        );
    }
}

export default TeaForm;