/** @format */

import React from 'react';

import * as S from './footer.styles';

const string1: string = `© 2020 `;
const string2: string = 'Maxime Beuil';
const string3: string = '. All rights reserved.';

const Footer: React.FC = () => {
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
