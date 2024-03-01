import React from "react";
import LinkCard from "./LinkCard"; // Import LinkCard component

function Options({ showLists }) {
  const handleResetClickCount = () => {
    // Clear click count in local storage for each card
    localStorage.removeItem("TXP_click_count");
    localStorage.removeItem("CHASE_click_count");
    localStorage.removeItem("CNS_click_count");
    // Reload the page to reflect the changes
    window.location.reload();
  };
  
  const optionsList = [
    { href: "https://techsophy.com/txp/", title: "TXP", description: "Explore  TXP " },
    { href: "https://techsophy.com/chase/", title: "CHASE", description: "Explore CHASE" },
    { href: "https://techsophy.com/cns/", title: "CNS", description: "Explore CNS" }
  ];

  const renderOptions = () => {
    return optionsList.map((option, index) => (
      <LinkCard key={index} href={option.href} title={option.title} description={option.description} />
    ));
  };
  
  return (
    <div>
      <div>
        {showLists && (
          <div className="options">
            {renderOptions()}
          </div>
        )}
        {!showLists && (
          <div>
            <code>Options are hidden.</code>
          </div>
        )}
      </div>

      <div>
        <button className="cl_count my-3 my-3"onClick={handleResetClickCount}>Reset Click Count</button>
      </div>
    </div>
  );
}

export default Options;
