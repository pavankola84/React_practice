import React from "react";
import photo1 from "./photo1.svg";
import "./App.css";

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
        <div className="options">
          <LinkCard
            href="https://techsophy.com/txp/"
            title="TXP"
            description="Explore TXP"
          />
          <LinkCard
            href="https://techsophy.com/chase/"
            title="CHASE"
            description="Explore CHASE"
          />
          <LinkCard
            href="https://techsophy.com/cns/"
            title="CNS"
            description="Explore CNS"
          />
        </div>

        <div className="options">
          <nav></nav>
        </div>
      </header>
    </div>
  );
}

function LinkCard({ href, title, description }) {
  return (
    <a
      className="option-link"
      href={href}
      // target="_blank"
      rel="noopener noreferrer"
    >
      <div className="card">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
}

export default App;
