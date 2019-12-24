import React from 'react';
import styled from 'styled-components';

const StyledShowCaseHeaderTitle = styled.div`
    font-size: 40px;
    line-height: 48px;
    font-weight: bold;
`;

const StyledShowcase = styled.div`
  width: 100%;
  height: 440px !important;
  color: ${props => props.fontColor};
`;

const StyledShowcaseBackground = styled.div`
  height: 100%;
  border-radius: 10px;
  background: ${props => props.backgroundColor};
`;

const StyledShowCaseHeaderContainer = styled.div`
  font-size: 21px;
  text-align: left;
  line-height: 28px; 
  font-weight: lighter;    
`;

export {StyledShowCaseHeaderTitle, StyledShowcase, StyledShowcaseBackground, StyledShowCaseHeaderContainer};