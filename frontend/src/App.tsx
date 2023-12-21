import React from "react";
import logo from "./logo.svg";
import Header from "@containers/Header";
// import Intro from "./containers/Intro";
import Intro from "@containers/Intro";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
    </div>
  );
}

export default App;
