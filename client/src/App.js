import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./componenets/Nav";

function App() {
  return (
    <Router>
      <NavBar />
    </Router>
  );
}

export default App;
