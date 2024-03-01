import React, { useState } from "react";
import photo1 from "./photo1.svg";
import "./App.css";
import Options from "./components/Options";

function App() {
  
  const [showLists, setShowLists] = useState(true);

  const toggleShowLists = () => {
    setShowLists(!showLists);
  };

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
          target="_blank"
          rel="noopener noreferrer"
        >
          Tech<b>sophy</b>
        </a>
        <Options showLists={showLists}/>
        <button className="show_ops toggle-button" onClick={toggleShowLists}>
          {showLists ? "Hide Lists" : "Show Lists"}
        </button>
      </header>
    </div>
  );
}

export default App;
