import React from "react";
import DogDetail from "./DogDetail";
import {fetchDogGif} from "./api_util"

class DogIndex extends React.Component{
    constructor(props) {
        super(props)

         this.breeds = [
      "Corgi",
      "Shiba",
      "Malamute",
      "Retriever",
      "Dire Wolf"
         ];
        this.state = {
            totalVotes: 0,
            gif: null
        }

        this.addVote = this.addVote.bind(this);
    }

    addVote() {
        this.setState({totalVotes: this.state.totalVotes + 1})
    }


    componentDidMount() {
        console.log("yay it mounted!")
        fetchDogGif().then(result => {
            this.setState({gif: result})
        })
    }



    render() {
        
        // if (!this.state.gif) return null;
        const image = this.state.gif ? <img src={this.state.gif.data.image_url}/> : null;

        return (
            <div className="dog-index">
                {/* <img src={this.state.gif.data.image_url} alt="" /> */}
                {image}
                <h1>Total Dog Votes:{this.state.totalVotes } </h1>
                <ul>
                    {this.breeds.map((breed, i) => <DogDetail addVote={this.addVote } key={i} breed={breed}/>)}
                </ul>
            </div>
        )



    }


}

export default DogIndex;