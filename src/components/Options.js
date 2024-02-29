// Options.js
import React from "react";
import LinkCard from "./LinkCard"; // Import LinkCard component

function Options() {
  return (
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
  );
}

export default Options;
