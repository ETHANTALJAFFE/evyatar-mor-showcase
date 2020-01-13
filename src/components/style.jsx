import React from 'react';
import styled from 'styled-components';

import Bookmark from '../resources/Simania.png';

const StyledContentOutline = styled.div`
  padding: 5% 7%;
  background: #fff;
  border-radius: 7px;
  box-shadow: 0px 15px 44px rgba(0, 0, 0, 0.07);
  &:before {
    content: '';
    background: url(${Bookmark}) center no-repeat;
    width: 17px;
    height: 28px;
    display: block;
    position: relative;
    top: -37px;
    left: 610px;
  }
`;


const StyledContentOutlineTitle = styled.div`
  font-size: 21px;
  font-weight: bold;
  padding-bottom: 15px;
`;

const StyledTextBlock = styled.div`
padding: 0 0 30px 0;
`;

const StyledImageContainer = styled.div`
  width: 100%;
  margin: ${props => props.customMargin || '30px 0'};
  display: flex;
  padding: ${props => props.customPadding || '15px 0'};
  justify-content: center;
  background: ${props => props.customBackground || '#fff'};
`;

const StyledResponsiveImage = styled.img`
  width: 100%;
  max-width: ${props => props.customMaxWidth || 'default'};
`;
const StyledShowcasesContainer = styled.div`
    @media only screen and (max-width: 768px) {
      margin-top: ${props => props.customMarginTopForMobile};
      &:before {
        top: ${props => props.customTopSkewPositionForMobile};
        height: 150px !important;
      }
    }
    &:before {
    display: block;
    left: 0;
    right: 0;
    position: absolute;
    content: '';
    backface-visibility: hidden;
    height: 250px;
    top: 400px;
    background: #f6f7f9;
    transform: skewY(-5deg);
    }
`;
export {StyledShowcasesContainer, StyledContentOutline, StyledResponsiveImage, StyledImageContainer, StyledContentOutlineTitle, StyledTextBlock};