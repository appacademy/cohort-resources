import { createContext, useState, useContext } from "react";

export const SessionContext = createContext();
// we can now use SessionContext.Provider
// we can now use SessionContext.Consumer

export const SessionProvider = (props) => {
    const [loggedIn, setLogin] = useState(false);
    const [currentUser, setCurrentUser] = useState({});


    return (
        <SessionContext.Provider value={{loggedIn, setLogin, currentUser, setCurrentUser}}>
            {props.children}
        </SessionContext.Provider>
    )
}

export const useSessionContext = () => {
    return useContext(SessionContext)
}