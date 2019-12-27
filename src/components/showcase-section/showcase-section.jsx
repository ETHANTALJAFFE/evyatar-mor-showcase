import React from 'react';
import {StyledSectionTitle, StyledShowCaseSection, StyledSectionSubTitle} from "./style";
import {StyledContentOutline} from "../style";

const ShowcaseSection = ({title, subtitle, content}) => {
    return (
        <StyledShowCaseSection>
        <StyledSectionTitle>
            {title}
        </StyledSectionTitle>
            <StyledSectionSubTitle>
                {subtitle}
            </StyledSectionSubTitle>
            <StyledContentOutline>
                {content}
            </StyledContentOutline>
        </StyledShowCaseSection>
    )
};

export default ShowcaseSection;