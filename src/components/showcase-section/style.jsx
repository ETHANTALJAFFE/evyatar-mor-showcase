import React from 'react';
import styled from 'styled-components';

const StyledSectionTitle = styled.span`
  font-size: 26px;
  line-height: 28px;
`;

const StyledShowCaseSection = styled.div`
  width: 100%;
  text-align: left;
  padding: 10% 0 0 0;
`;

const StyledSectionSubTitle = styled.div`
    color: #000000;
    font-size: 16px;
    padding: 5px 0 35px 0;
    line-height: 26px;
    font-weight: normal;
`;

const StyledIframe = styled.iframe`
  width: 90%;
  max-width: 745px;
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