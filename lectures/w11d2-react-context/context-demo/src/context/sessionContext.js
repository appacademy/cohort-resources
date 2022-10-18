import {createContext, useContext, useState} from 'react';

export const SessionContext = createContext();

export const SessionProvider = (props) => {
  const [loggedIn, setLogin] = useState(false);

  return(
    <SessionContext.Provider value={{loggedIn, setLogin}}>
      {props.children}
    </SessionContext.Provider>
  )
}

export const useSessionContext = () => {
  return useContext(SessionContext);
}