import { useState, createContext } from "react";

export const CountContext = createContext();

//Export Not default {countprovider}
export function CountProvider({ children }) {
  const [count, setCount] = useState(1); //update a value
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}
