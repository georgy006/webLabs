import React from "react";

const Block = ({ title, links }) => {
  return (
    <div className="block">
      <h3>{title}</h3>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={`#${link.toLowerCase().replace(" ", "-")}`}>{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Block;