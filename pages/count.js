import React, { useContext } from "react";
import { CountContext } from "./countContex";

export default function count() {
  const count = useContext(CountContext);

  return (
    <>
      <h1>Context (without Child)</h1>
      <div>{count}</div>
    </>
  );
}
