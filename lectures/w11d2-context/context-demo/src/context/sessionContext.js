import { createContext, useContext, useState } from "react";

const SessionContext = createContext(); //returns a context object


export const SessionProvider = ({children}) => { //custom wrapper that will replace the Provider component and utilize useState variable
    // const {children} = props;
    const[loggedIn, setLogin] = useState(false);

    return(
        <SessionContext.Provider value={{loggedIn, setLogin}}>
            {children}
        </SessionContext.Provider>
    )

}

export const useSessionContext = () =>{ //custom hook that makes it so we don't need to import both useContext and SessionContext in every consumer component
    return useContext(SessionContext);
}