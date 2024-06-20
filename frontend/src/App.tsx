import React from "react";
import logo from "./logo.svg";
import Header from "@containers/Header";
// import Intro from "./containers/Intro";
import Intro from "@containers/Intro";
import "./App.css";
import Home from "screens/Home";
import Navbar from "@components/Navbar";

function App() {
  return (
    <div className="App overflow-hidden ">
      {/* <Header />
      <Intro /> */}
      {/* <Header /> */}
      {/* <Navbar /> */}
      <Home />
    </div>
  );
}

export default App;
