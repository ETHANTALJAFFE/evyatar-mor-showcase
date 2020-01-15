import React from 'react';
import styled from 'styled-components';

const StyledOtherShowcases = styled.div`
  padding: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledThumbnailContainer = styled.div`
  width: 100%;
  max-width: 325px;
  cursor: pointer;
  padding: 50px 25px;
`;

const StyledThumbnails = styled.div`
  display: flex;
`;

export {StyledThumbnails, StyledOtherShowcases, StyledThumbnailContainer};