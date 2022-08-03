import React, { createContext } from "react";

export const UserContext = createContext({});

export const UseProvider = (props) => {
  const { children } = props;
  const contextName = "Mike";
  return (
    <UserContext.Provider value={{ contextName }}>
      {children}
    </UserContext.Provider>
  );
};
