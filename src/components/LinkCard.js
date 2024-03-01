import React, { useState, useEffect } from "react";

function LinkCard({ href, title, description }) {
  const [clickCount, setClickCount] = useState(() => {
    return parseInt(localStorage.getItem(`${title}_click_count`) || 0);
  });

  useEffect(() => {
    localStorage.setItem(`${title}_click_count`, clickCount);
  }, [clickCount, title]);

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
        <p className="small-text">Visited: {clickCount} times</p>
      </div>
    </a>
  );
}

export default LinkCard;
