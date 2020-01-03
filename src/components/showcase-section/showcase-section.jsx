import React from 'react';
import {StyledSectionTitle, StyledShowCaseSection, StyledSectionSubTitle} from "./style";

const ShowcaseSection = ({title, subtitle, content}) => {
    return (
        <StyledShowCaseSection>
        <StyledSectionTitle>
            {title}
        </StyledSectionTitle>
            <StyledSectionSubTitle>
                {subtitle}
            </StyledSectionSubTitle>
            {content}
        </StyledShowCaseSection>
    )
};

export default ShowcaseSection;