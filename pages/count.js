import CountChild from "./countChild";

export default function count() {
  /* const count = useContext(CountContext); */

  return (
    <div>
      <h1>Parent Component</h1>
      <CountChild />
    </div>
  );
}
