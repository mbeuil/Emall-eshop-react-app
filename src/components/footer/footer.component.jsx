import React from "react";

import "./footer.style.css";

const string_1 = `© 2020 `;
const string_2 = "Maxime Beuil";
const string_3 = ". All rights reserved.";

const Footer = () => {
  return (
    <div className="footer">
      <pre className="signing">
        {string_1}
        <a
          className="github-link "
          rel="noopener noreferrer"
          href="https://github.com/mbeuil"
          target="_blank"
        >
          {string_2}
        </a>
        {string_3}
      </pre>
    </div>
  );
};

export default Footer;
