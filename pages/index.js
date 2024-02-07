import { useState, useReducer } from "react";

const initialState = {
  username: "",
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
      <h1>Reducer</h1>
      <h2>Update state:</h2>
      <input type="text" onChange={handleUserName}></input>
      <button onClick={handleLogIn}>LogIn</button>
      <h2>Profile:</h2>
      <h2>UserName</h2>
      <p>{state.username}</p>
      <h2>Logged in?</h2>
      {state.loggedIn ? <p>Yes</p> : <p>No</p>}
    </div>
  );
}
