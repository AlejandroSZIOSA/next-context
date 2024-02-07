import { useState, useReducer } from "react";

const initialState = {
  username: "",
  email: "",
  loggedIn: false,
};

function reducer(state, action) {
  if (action.type == "setUsername") {
    return { ...state, username: action.username };
  } else if (action.type == "setLogIn") {
    return { ...state, loggedIn: action.loggedIn };
  }
}

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleUserName(e) {
    /* setState({ ...state, username: e.target.value }); */
    const action = {
      type: "setUsername",
      username: e.target.value,
    };

    dispatch(action);
  }

  function handleLogIn() {
    /* setState({ ...state, loggedIn: true }); */
    const action = {
      type: "setLogIn",
      loggedIn: true,
    };
    dispatch(action);
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
