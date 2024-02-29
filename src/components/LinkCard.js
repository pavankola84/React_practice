// LinkCard.js
import React from "react";

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

export default LinkCard;
