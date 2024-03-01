import React, { useState } from "react";

function LinkCard({ href, title, description }) {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <a
      className="option-link"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="card" onClick={handleClick}>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Clicked: {clickCount} times</p>
      </div>
    </a>
  );
}

export default LinkCard;
