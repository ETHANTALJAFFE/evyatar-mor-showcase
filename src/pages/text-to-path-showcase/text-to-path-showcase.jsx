import React, {useMemo} from 'react';
import {TextOnPathConfig} from "./text-to-path-showcase.config";
import ShowCaseHeader from "../../components/showcase-header/showcase-header";
import ShowcaseSection from "../../components/showcase-section/showcase-section";

import {StyledSectionContainer, StyledSectionContentContainer} from "./style";

const TextToPathShowcase = () => {
    const headerConfig = useMemo(() => TextOnPathConfig.header, []);
    const sections = useMemo(() => TextOnPathConfig.sections, []);

    return (
        <StyledSectionContainer>
            <ShowCaseHeader iconSrc={headerConfig.iconSrc} imgSrc={headerConfig.imgSrc}
                            fontColor={headerConfig.fontColor} title={headerConfig.title}
                            backgroundColor={headerConfig.backgroundColor}
                            description={headerConfig.description}/>
            <StyledSectionContentContainer>
                {sections.map((section, index) => <ShowcaseSection key={index} {...section} />)}
            </StyledSectionContentContainer>
        </StyledSectionContainer>);
};

export default TextToPathShowcase;