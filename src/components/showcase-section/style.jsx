import React from 'react';
import styled from 'styled-components';

const StyledSectionTitle = styled.span`
  font-size: 40px;
`;
const StyledShowCaseSection = styled.div`
  padding: 10% 0 0 0;
  text-align: left;
`;
const StyledSectionSubTitle = styled.div`
    color: #000000;
    font-size: 16px;
    padding: 5px 0 35px 0;
    line-height: 26px;
    font-weight: normal;
`;

const StyledIframe = styled.iframe`
  width: 100%;
  border: none;
  height: 640px;
  padding: 0 0 25px 0;
`;

const StyledFigmaIframe = ({src}) => <StyledIframe src={src} allowFullScreen />;

export {
    StyledFigmaIframe,
    StyledSectionTitle,
    StyledSectionSubTitle,
    StyledShowCaseSection
};