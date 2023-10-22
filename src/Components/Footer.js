import React from "react";
import "./Footer.css"; // import css file of footer

// Footer function return whatever written in return()
const Footer = () => {
  

  return (
    <footer className="footer">
      <div className="brand-logo"> Code Editor </div>
      <div className="copyright">&copy; 2023 All rights reserved.</div>
    </footer>
  );
};

export default Footer;
