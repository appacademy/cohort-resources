import React from "react";
import DogDetail from "./dog_detail";
// import { fetchDogGif } from "../util/api_util"

class DogIndex extends React.Component {
    constructor(props){
        super(props); //super to have access to props
        debugger
        console.log("constructor");
        this.state = {
            totalVotes: 0,
            gif: null
        };
        this.breeds = [
            "hot-dog",
            "Corgi",
            "Maltesepoo",
            "Pug",
            "Goldendoodle",
            "German Shepherd",
            "Shiba",
            "wolf",
            "Snoop Dogg",
            "Alligatordoodle"
        ];

        this.addVote = this.addVote.bind(this);
        // don't lose context of this
    }

    componentDidMount(){
        debugger
        console.log("CompDidMount")
        // fetchDogGif()
        //     .then(res => {
        //         this.setState({gif: res.data.url})
        //     });
        this.setState({gif: "https://media.giphy.com/media/cjbxJXhNXDMjhlr1S8/giphy.gif"})
    }

    addVote(){
        this.setState({totalVotes: this.state.totalVotes + 1});
    }

    render(){
        debugger
        console.log("Render func");
        const allBreeds = this.breeds.map( breed => {
            return(
                // <li key={breed} onClick={this.addVote} > {breed} </li>
                //don't invoke onClick

                // <li key={breed} onClick={() => this.addVote()} > {breed} </li>
                //invoke onClick if passed as a callback function (no bind)

                <DogDetail key={breed} breed={breed} addVote={this.addVote} /> //passing down props
            );
        } );

        const image = <img src={this.state.gif} alt="" />

        return(

            <div className="dog-index">
                <h1>Total Dog votes: {this.state.totalVotes} </h1> 
                <ul>
                    {image}
                    {allBreeds} 
                    {/* CLEAN */}
                </ul>
            </div>
        ) // React components render only 1 tag

    }
}

export default DogIndex;