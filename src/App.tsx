import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Login from "./components/login/login";

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
