import React, {useMemo} from 'react';
import {TextOnPathConfig} from "./text-to-path-showcase.config";
import ShowCaseHeader from "../../components/showcase-header/showcase-header";
import ShowcaseSection from "../../components/showcase-section/showcase-section";
import ShowcaseSectionTable from "../../components/showcase-section-table/showcase-section-table";
import {StyledTextBlock} from "../../components/style";
import {StyledSectionContainer, StyledSectionContentContainer} from "./style";


const table = [['title1', 'title2'], ['field1', 'field2']];

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
                {sections.map((section) => <ShowcaseSection {...section} />)}
            </StyledSectionContentContainer>
        </StyledSectionContainer>);
};

export default TextToPathShowcase;