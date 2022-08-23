import { createContext, useContext, useState } from "react";

const SessionContext = createContext();
// console.log(SessionContext);

export const SessionProvider = props => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  return(
    <SessionContext.Provider value={{ loggedIn, currentUser, setLoggedIn, setCurrentUser }}>
      {props.children}
    </SessionContext.Provider>
  )
};

export const useSessionContext = () => {
  return useContext(SessionContext)
};