import React from 'react';
import styled from 'styled-components';

const StyledShowCaseHeaderTitle = styled.div`
    font-size: 40px;
    padding: 40px 0;
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
  display: flex;
  
  border-radius: 10px;
  background: ${props => props.backgroundColor};
`;

const StyledShowCaseHeaderContainer = styled.div`
  width: 38%;
  padding: 5% 7%;
  font-size: 21px;
  text-align: left;
  line-height: 28px; 
  font-weight: lighter;    
`;

const StyledShowcaseImg = styled.div`
  width: 840px;
  height: 500px;
  top: -90px;
  left: 36%;
  position: absolute;
  z-index: 1000;
  clip-path: inset(18% 0% 0% 0%);
  background-repeat: no-repeat;
  background-image: ${props => 'url(' + props.src + ')'};
`;
const StyledShowcaseIcon = styled.div`
  background-repeat: no-repeat;
  width: 90px;
  height: 90px;
  background-image: ${props => 'url(' + props.src + ')'};
`;
export {
    StyledShowCaseHeaderTitle,
    StyledShowcase,
    StyledShowcaseIcon,
    StyledShowcaseBackground,
    StyledShowCaseHeaderContainer,
    StyledShowcaseImg
};