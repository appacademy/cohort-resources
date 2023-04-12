import {createContext, useState, useContext} from "react";
import debut from "../eras/debut.jpeg"

// if we invoke createContext with an argument, then that will be its default value 
export const EraContext  = createContext();

export const EraProvider = (props) => {
    const [era, setEra] = useState(debut);
    

    return (
        <EraContext.Provider value={{era , setEra}}>
            {props.children}
        </EraContext.Provider>
    )
}

export function useEraType(){
    return useContext(EraContext);
}



