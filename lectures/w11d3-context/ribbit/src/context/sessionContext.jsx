import { createContext, useState, useContext } from "react";

export const SessionContext = createContext();
// creates context object and Provider/Consumer components

export const SessionProvider = props => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  return(
    <SessionContext.Provider value={{ loggedIn, setLoggedIn, currentUser, setCurrentUser }}>
      {props.children}
    </SessionContext.Provider>
  )
};

export const useSessionContext = () => {
  return useContext(SessionContext);
};

// let x = 5;
// let y = { x };
// let y = { x: x };