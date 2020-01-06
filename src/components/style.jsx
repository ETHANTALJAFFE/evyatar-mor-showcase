import React from 'react';
import styled from 'styled-components';

const StyledContentOutline = styled.div`
  padding: 5% 7%;
  background: #fff;
  border-radius: 7px;
  box-shadow: 0px 15px 44px rgba(0, 0, 0, 0.07);
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
  display: flex;
  padding: 15px 0;
  justify-content: center;
  background: ${props => props.customBackground || '#fff'};
`
export {StyledContentOutline, StyledImageContainer, StyledContentOutlineTitle, StyledTextBlock};