import {useState} from "react";
import red from "./eras/red.webp";
import nineteen89 from "./eras/1989.jpeg";
import evermore from "./eras/evermore.jpeg";
import fearless from "./eras/fearless.jpeg";
import folklore from "./eras/folklore.webp";
import speakNow from "./eras/speak_now.jpeg";
import midnights from "./eras/midnights.jpeg";
import reputation from "./eras/reputation.webp";
import lover from "./eras/lover.webp";
import debut from "./eras/debut.jpeg"
import { useEraType } from "./context/eraContext";
// import {useContext} from "react";
// import {EraContext} from "./context/eraContext";

function TaylorForm(props) {


    const {era, setEra} = useEraType();

    const [selectedEra, setSelectedEra] = useState();

    const handleSubmit = (e) =>{
        e.preventDefault();
        setEra(selectedEra);

    }

    return (
        <form onSubmit={handleSubmit}>
            <select name="" id="" onChange={ e => setSelectedEra(e.target.value)}>
                <option value={debut}>debut</option>
                <option value={fearless}>fearless</option>
                <option value={speakNow}>speak now</option>
                <option value={red}>red</option>
                <option value={nineteen89}>1989</option>
                <option value={reputation}>reputation</option>
                <option value={lover}>lover</option>
                <option value={folklore}>folklore</option>
                <option value={evermore}>evermore</option>
                <option value={midnights}>midnights</option>
            </select>
            <button>submit</button>
            
        </form>
        
       
    )
}

export default TaylorForm;
