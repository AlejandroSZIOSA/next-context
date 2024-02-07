import React, { useContext } from "react";
import { CountContext } from "./countContex";

export default function CountChild() {
  const { count, setCount } = useContext(CountContext);
  return (
    <div>
      <h2>Context /Child Component</h2>
      {count}
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}
