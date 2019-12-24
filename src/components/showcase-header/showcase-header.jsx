import React from 'react';
import {StyledShowCaseHeaderTitle, StyledShowCaseHeaderContainer, StyledShowcase, StyledShowcaseBackground} from "./style";

const ShowCaseHeader = ({title, fontColor, backgroundColor, description}) => {
    return <StyledShowcase fontColor={fontColor}>
        <StyledShowcaseBackground backgroundColor={backgroundColor}>
            <div>Icon</div>
            <StyledShowCaseHeaderContainer>
                <StyledShowCaseHeaderTitle>{title}</StyledShowCaseHeaderTitle>
                <div>{description}</div>
            </StyledShowCaseHeaderContainer>
        </StyledShowcaseBackground>
    </StyledShowcase>;
};

export default ShowCaseHeader;