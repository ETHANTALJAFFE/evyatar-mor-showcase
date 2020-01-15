import React from 'react';
import styled from 'styled-components';

const StyledSectionContainer = styled.div`
  display: flex;
  background: #f6f7f9;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const StyledSectionContentContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  max-width: 745px;
`;

export {StyledSectionContainer, StyledSectionContentContainer};