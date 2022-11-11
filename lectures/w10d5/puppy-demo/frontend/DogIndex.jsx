import React from "react";
import DogDetail from "./DogDetail";

class DogIndex extends React.Component {
    constructor(props){
        super(props); //gives us access to `this` inside constructor
        this.state = {  //Local State
            totalVotes: 0
        };
        this.addVote = this.addVote.bind(this) //keep context (this => this instance)
    }

    addVote(){
        this.setState({totalVotes: this.state.totalVotes + 1});
    }

    render(){
        const breeds = [
            "Samoyed",
            "Doberman",
            "Corgi",
            "Husky",
            "German Shepard",
            "Chow Chow",
            "Bernadoodle",
            "Goldendoodle",
            "Maltipoo"
        ];

        // const breedElements = breeds.map((breed) => { 
        //     return (
        //         <li>{breed}</li>
        //     )
        // });
        // const breedElements = breeds.map( breed => <li key={breed} 
        //                                             onClick={() => this.addVote()} > {breed} 
        //                                             </li>); //ES6 func passes ctx

        const breedElements = breeds.map( breed => 
                                            <DogDetail key={breed} 
                                                        addVote={this.addVote} 
                                                        breed={breed} />
                                        ); //ES6 func passes ctx

        return( 
            <div className="dog-index">
                <h1>Total Dog Votes: {this.state.totalVotes} </h1>
                <ul>
                    {breedElements}
                </ul>
            </div>
        )
    }
}

export default DogIndex;