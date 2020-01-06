import React from 'react';
import styled from 'styled-components';

const StyledTopbar = styled.div`
  width: 100%;
  z-index: 1000000;
  color: ${props => props.customColor};
  background: ${props => props.customBackgroundColor};
`;

const StyledTopbarContent = styled.div`
  display: flex;
  font-size: 10px;
  padding: 15px 30px;
  flex-direction: row;
  vertical-align: center;
  justify-content: space-between;
`;

const Topbar = (props) => {
    const {customColor, customBackgroundColor} = props;
    return <StyledTopbar customColor={customColor} customBackgroundColor={customBackgroundColor}>
        <StyledTopbarContent><span>Evyatar Mor</span><span>evyatarmor2@gmail.com</span></StyledTopbarContent>
    </StyledTopbar>
};

export default Topbar;
