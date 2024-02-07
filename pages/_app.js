import "@/styles/globals.css";
import { CountProvider } from "./countContex";

export default function App({ Component, pageProps }) {
  return (
    <CountProvider>
      <Component {...pageProps} />
    </CountProvider>
  );
}
