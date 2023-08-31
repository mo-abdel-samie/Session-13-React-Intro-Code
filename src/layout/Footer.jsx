import React from "react";

export const Footer = () => {
  const crYear = new Date().getFullYear();
  return (
    <footer>
      <div className="container"> 
        <p>&copy; {crYear} React.js</p>
      </div>
    </footer>
  );
};
