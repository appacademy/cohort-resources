import { useState, createContext, useContext } from "react";

export const SessionContext = createContext();

export const SessionProvider = props => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    username: '',
    email: ''
  });

  return (
    <SessionContext.Provider 
      value={{ loggedIn, setLoggedIn, currentUser, setCurrentUser}}
    >
      {props.children}
    </SessionContext.Provider>
  );
};

export const useSessionContext = () => useContext(SessionContext);