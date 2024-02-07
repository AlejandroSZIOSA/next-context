import { useState } from "react";

const initialState = {
  username: "",
  email: "",
  loggedIn: false,
};

export default function Home() {
  const [state, setState] = useState(initialState);

  function handleUserName(e) {
    setState({ ...state, username: e.target.value });
  }

  function handleLogIn() {
    setState({ ...state, loggedIn: true });
  }

  return (
    <div className="text-cyan-600">
      <h1>Update state:</h1>

      <input type="text" onChange={handleUserName}></input>
      <button onClick={handleLogIn}>LogIn</button>
      <h1>Profile:</h1>
      <h2>UserName</h2>
      <p>{state.username}</p>
      <h2>Email</h2>
      <p>{state.email}</p>
      <h2>Logged in?</h2>
      {state.loggedIn ? <p>Yes</p> : <p>No</p>}
    </div>
  );
}
