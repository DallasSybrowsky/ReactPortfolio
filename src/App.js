import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <navbar classname="navbar">
        <h1>Dallas Sybrowsky</h1>
        <button>
        About Me
        </button>
        <button>
        Portfolio
        </button>
        <button>
        Contact
        </button>
        <button>
        Resume
        </button>
      </navbar>
    </div>
  );
}

export default App;
