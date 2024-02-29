// App.js
import React from "react";
import photo1 from "./photo1.svg";
import "./App.css";
import Options from "./components/Options";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={photo1} className="App-logo" alt="logo" />
        <p>
          <code>Click on a link below to open website.</code>
        </p>
        <a
          className="App-link"
          href="https://techsophy.com/"
          // target="_blank"
          rel="noopener noreferrer"
        >
          Tech<b>sophy</b>
        </a>
        <Options />
        
      </header>
    </div>
  );
}

export default App;
