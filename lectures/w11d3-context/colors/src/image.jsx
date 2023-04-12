// import {useContext} from "react";
// import {EraContext} from "./context/eraContext";\
import {useEraType} from "./context/eraContext"


function Image(props) {

    // console.log(useContext(EraContext))
    const {era} = useEraType();
    return (
        <>
        <img style={{width: 400, height:300}} src={era} alt="" />
            
        </>
    )
}
export default Image;
