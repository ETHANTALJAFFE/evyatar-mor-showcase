import React from 'react';
import styled from 'styled-components';

const StyledShowcaseTable = styled.div`
  display: flex;
  font-size: 14px;
  flex-direction: column;
`;

const StyledHeaderRow = styled.div`
  display: flex;
  align-items: flex-start;
  border: 1px solid #c1c7cd;
  border-bottom: 0;
  background-color: #f0f1f3;
  justify-content: space-around;
`;

const StyledHeaderTitle = styled.span`
  text-align: left;
`;

const StyledHeaderField = styled.div`
  padding: 1%;
  width: 100%;
  border-right: ${props => props.hasBorder ? '1px solid #c1c7cd' : 'none'};
`;

const StyledRegularRow = styled.div`
  display: flex;
  background-color: #fff;
  align-items: flex-start;
  border: 1px solid #c1c7cd;
  justify-content: space-around;
`;

const StyledRowFieldText = styled.span`
  text-align: left;
`;

const StyledRowField = styled.div`
  padding: 1%;
  width: 100%;
  border-right: ${props => props.hasBorder ? '1px solid #c1c7cd' : 'none'};
`;

export {
    StyledRowField,
    StyledHeaderRow,
    StyledRegularRow,
    StyledHeaderTitle,
    StyledHeaderField,
    StyledRowFieldText,
    StyledShowcaseTable
};