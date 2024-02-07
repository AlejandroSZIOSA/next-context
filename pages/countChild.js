import React, { useContext } from "react";
import { CountContext } from "./countContex";

export default function CountChild() {
  const count = useContext(CountContext);
  return (
    <div>
      <h2>Context /Child Component</h2>
      {count}
    </div>
  );
}
