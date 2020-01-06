import React, {useMemo} from 'react';
// import ShowCaseHeader from "../../components/showcase-header/showcase-header";
import {StyledSectionContainer, StyledSectionContentContainer} from "../text-to-path-showcase/style";
import ShowcaseSection from "../../components/showcase-section/showcase-section";
import {CompareShowcaseConfig} from "./compare-showcase.config";

const CompareShowcase = () => {
    const headerConfig = useMemo(() => CompareShowcaseConfig.header, []);
    const sections = useMemo(() => CompareShowcaseConfig.sections, []);

    return (
        <StyledSectionContainer>
            {/*<ShowCaseHeader iconSrc={headerConfig.iconSrc} imgSrc={headerConfig.imgSrc}
                            fontColor={headerConfig.fontColor} title={headerConfig.title}
                            backgroundColor={headerConfig.backgroundColor}
                            description={headerConfig.description}/>*/}
            <div>
                {sections.map((section, index) => <ShowcaseSection key={index} {...section} />)}
            </div>
        </StyledSectionContainer>);
};


export default CompareShowcase;