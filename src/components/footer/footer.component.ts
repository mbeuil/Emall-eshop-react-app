/** @format */

import React from 'react';

import * as S from './footer.styles';

const string1 = `© 2020 `;
const string2 = 'Maxime Beuil';
const string3 = '. All rights reserved.';

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.Signature>
        {string1}
        <S.GithubLink
          className="github-link "
          rel="noopener noreferrer"
          href="https://github.com/mbeuil"
          target="_blank"
        >
          {string2}
        </S.GithubLink>
        {string3}
      </S.Signature>
    </S.FooterContainer>
  );
};

export default Footer;
