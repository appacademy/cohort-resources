import { createContext, useState, useContext } from "react";


export const SessionContext = createContext()

export const useSessionContext = () => {
    return useContext(SessionContext)
}

export const SessionProvider = (props) => {
    const [loggedIn, setLoggedIn] = useState(false)


    return (
        <SessionContext.Provider value={{loggedIn, setLoggedIn}} > 
            {/* {props.children} */}
            <props.children />
        </SessionContext.Provider>
        )

        {/* / same as:{{loggedIn: loggedIn, setLoggedIn: setLoggedIn}} */}

}