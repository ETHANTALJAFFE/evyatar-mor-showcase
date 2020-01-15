import React from 'react';
import {StyledSectionTitle, StyledShowCaseSection, StyledSectionSubTitle} from "./style";
import {StyledSectionContentContainer} from "../../pages/text-on-path-showcase/style";

const ShowcaseSection = ({title, subtitle, content, image}) => {
    return (
        <StyledShowCaseSection>
            <StyledSectionContentContainer>
                <div>
                <StyledSectionTitle>
                    {title}
                </StyledSectionTitle>
                <StyledSectionSubTitle>
                    {subtitle}
                </StyledSectionSubTitle>
                {content}
                </div>
            </StyledSectionContentContainer>
            {image}
        </StyledShowCaseSection>
    )
};

export default ShowcaseSection;