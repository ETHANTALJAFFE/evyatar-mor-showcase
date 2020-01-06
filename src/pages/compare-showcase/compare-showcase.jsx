import React, {useMemo} from 'react';
// import ShowCaseHeader from "../../components/showcase-header/showcase-header";
import {StyledSectionContainer, StyledSectionContentContainer} from "../text-to-path-showcase/style";
import ShowcaseSection from "../../components/showcase-section/showcase-section";
import {CompareShowcaseConfig} from "./compare-showcase.config";
import Topbar from "../../topbar/topbar";

const CompareShowcase = () => {
    const headerConfig = useMemo(() => CompareShowcaseConfig.header, []);
    const sections = useMemo(() => CompareShowcaseConfig.sections, []);

    return (
        <StyledSectionContainer>
            <Topbar customColor={'#fff'} customBackgroundColor={'#3d8aff'} />
            {/*<ShowCaseHeader iconSrc={headerConfig.iconSrc} imgSrc={headerConfig.imgSrc}
                            fontColor={headerConfig.fontColor} title={headerConfig.title}
                            backgroundColor={headerConfig.backgroundColor}
                            description={headerConfig.description}/>*/}
                {sections.map((section, index) => <ShowcaseSection key={index} {...section} />)}
        </StyledSectionContainer>);
};


export default CompareShowcase;