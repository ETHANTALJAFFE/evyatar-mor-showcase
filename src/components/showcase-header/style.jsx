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
  height: ${props => props.customHeight || '400px'};
  color: ${props => props.fontColor};
`;

const StyledShowcaseBackground = styled.div`
  height: 100%;
  display: flex;
  background: ${props => props.backgroundColor};
`;

const StyledShowCaseHeaderContainer = styled.div`
  @media only screen and (max-width: 850px) {
    width: 100%;
  }
  width: 38%;
  padding: 5% 7%;
  font-size: 21px;
  text-align: left;
  line-height: 28px; 
`;

const StyledShowcaseImg = styled.div`
  width: 100%;
  z-index: 1000;
  height: ${props => props.customHeight || '700px'};
  position: absolute;
  top: ${props => props.customTop};
  left: ${props => props.customLeft};
  background-size: contain;
  background-repeat: no-repeat;
  background-image: ${props => 'url(' + props.src + ')'};
  
  @media only screen and (max-width: 850px) {
  top: ${props => props.customMobileTop};
  left: ${props => props.customMobileLeft};
  max-width: 768px;
  height: ${props => props.customMobileImgHeight || '700px'};
  }
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