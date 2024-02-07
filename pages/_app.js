import "@/styles/globals.css";
import { CountContext } from "./countContex";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [count, setCount] = useState(1); //update a value
  return (
    <CountContext.Provider value={{ count, setCount }}>
      <Component {...pageProps} />
    </CountContext.Provider>
  );
}
