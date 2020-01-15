import React, {useMemo} from 'react';
import {TextOnPathConfig} from "./text-on-path-showcase.config";
import ShowCaseHeader from "../../components/showcase-header/showcase-header";
import ShowcaseSection from "../../components/showcase-section/showcase-section";

import {StyledSectionContainer, StyledSectionContentContainer} from "./style";
import Topbar from "../../topbar/topbar";
import OtherShowcases from "../../components/other-showcases/other-showcases";
import {StyledShowcasesContainer} from "../../components/style";

const TextOnPathShowcase = () => {
    const headerConfig = useMemo(() => TextOnPathConfig.header, []);
    const sections = useMemo(() => TextOnPathConfig.sections, []);

    return (
        <StyledSectionContainer>
            <Topbar customBackgroundColor={'#fff'} customColor={'#000'}/>
            <ShowCaseHeader customMobileImgHeight={headerConfig.customMobileImgHeight}
                            customImgHeight={headerConfig.customImgHeight} customHeight={headerConfig.customHeight}
                            customPosition={headerConfig.customPosition}
                            customMobilePosition={headerConfig.customMobilePosition} imgSrc={headerConfig.imgSrc}
                            fontColor={headerConfig.fontColor} title={headerConfig.title}
                            backgroundColor={headerConfig.backgroundColor}
                            description={headerConfig.description}/>
            <StyledShowcasesContainer customMarginTop={'100px'} customMarginTopForMobile={'150px'} customTopSkewPositionForMobile={'550px !important'}>
            {sections.map((section, index) => <ShowcaseSection key={index} {...section} />)}
            </StyledShowcasesContainer>
            <OtherShowcases/>
        </StyledSectionContainer>);
};

export default TextOnPathShowcase;