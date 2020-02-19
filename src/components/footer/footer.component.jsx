/** @format */

import React from 'react';

import './footer.style.css';

const string1 = `© 2020 `;
const string2 = 'Maxime Beuil';
const string3 = '. All rights reserved.';

const Footer = () => {
  return (
    <div className="footer">
      <pre className="signing">
        {string1}
        <a
          className="github-link "
          rel="noopener noreferrer"
          href="https://github.com/mbeuil"
          target="_blank"
        >
          {string2}
        </a>
        {string3}
      </pre>
    </div>
  );
};

export default Footer;
