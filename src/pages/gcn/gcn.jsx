import React, {useMemo} from 'react';
import {GcnConfig} from "./gcn.config";
import ShowCaseHeader from "../../components/showcase-header/showcase-header";
import ShowcaseSection from "../../components/showcase-section/showcase-section";
import OtherShowcases from '../../components/other-showcases/other-showcases';

import {StyledSectionContainer, StyledSectionContentContainer} from "./style";
import Topbar from "../../topbar/topbar";
import {StyledShowcasesContainer} from "../../components/style";

const GcnShowcase = () => {
    const headerConfig = useMemo(() => GcnConfig.header, []);
    const sections = useMemo(() => GcnConfig.sections, []);

    return (
        <StyledSectionContainer>
            <Topbar customBackgroundColor={'#1e1e1e'} customColor={'#fff'}/>
            <ShowCaseHeader customImgHeight={headerConfig.customImgHeight} customHeight={headerConfig.customHeight} customPosition={headerConfig.customPosition}
                            customMobilePosition={headerConfig.customMobilePosition} imgSrc={headerConfig.imgSrc}
                            fontColor={headerConfig.fontColor} title={headerConfig.title}
                            backgroundColor={headerConfig.backgroundColor}
                            description={headerConfig.description}/>
            <StyledShowcasesContainer customMarginTopForMobile={'150px'} customTopSkewPositionForMobile={'550px !important'}>
                {sections.map((section, index) => <ShowcaseSection key={index} {...section} />)}
            </StyledShowcasesContainer>
            <OtherShowcases/>
        </StyledSectionContainer>);
};

export default GcnShowcase;