import "@/styles/globals.css";
import { CountContext } from "./countContex";

export default function App({ Component, pageProps }) {
  return (
    <CountContext.Provider value={1}>
      <Component {...pageProps} />
    </CountContext.Provider>
  );
}
