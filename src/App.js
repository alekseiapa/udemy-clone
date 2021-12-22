import React from "react";
// import logo from './logo.svg';
import "./css/uifont.css";
import "./css/App.css";
import "./css/props.css";

// Screen
import Header from "./screens/header";
import Sidebar from "./screens/sidebar";

function App() {
  return (
    <div className="App flex">
      <Sidebar />
    </div>
  );
}

export default App;
