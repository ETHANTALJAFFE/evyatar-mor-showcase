import React, {useMemo} from 'react';
// import ShowCaseHeader from "../../components/showcase-header/showcase-header";
import {StyledSectionContainer, StyledSectionContentContainer} from "../text-on-path-showcase/style";
import ShowcaseSection from "../../components/showcase-section/showcase-section";
import {CompareShowcaseConfig} from "./compare-showcase.config";
import Topbar from "../../topbar/topbar";
import {StyledImageContainer, StyledResponsiveImage, StyledShowcasesContainer} from "../../components/style";
import Mock1 from '../../resources/Compare/Mock1.png';
import Mock3 from '../../resources/Compare/Mock3.png';
import OtherShowcases from '../../components/other-showcases/other-showcases';
import ShowCaseHeader from "../../components/showcase-header/showcase-header";

const CompareShowcase = () => {
    const headerConfig = useMemo(() => CompareShowcaseConfig.header, []);
    const sections = useMemo(() => CompareShowcaseConfig.sections, []);

    return (
        <StyledSectionContainer>
            <Topbar customColor={'#fff'} customBackgroundColor={'#3d8aff'}/>
            <ShowCaseHeader customMobileImgHeight={headerConfig.customMobileImgHeight}
                            customImgHeight={headerConfig.customImgHeight} customHeight={headerConfig.customHeight}
                            customPosition={headerConfig.customPosition}
                            customMobilePosition={headerConfig.customMobilePosition} imgSrc={headerConfig.imgSrc}
                            fontColor={headerConfig.fontColor} title={headerConfig.title}
                            backgroundColor={headerConfig.backgroundColor}
                            description={headerConfig.description}/>
            <StyledShowcasesContainer customMarginTop={'100px'} customMarginTopForMobile={'175px'}
                                      customTopSkewPositionForMobile={'550px !important'}>
                {sections.map((section, index) => <ShowcaseSection key={index} {...section} />)}
            </StyledShowcasesContainer>
            <StyledImageContainer customMargin={'30px 0 0 0'} customBackground={'#1380FF'}><StyledResponsiveImage
                customMaxWidth={'740px'} src={Mock1}/></StyledImageContainer>
            <StyledImageContainer customPadding={'0'} customMargin={'0'}
                                  customBackground={'#b5f6ff'}><StyledResponsiveImage
                src={Mock3}/></StyledImageContainer>
            <OtherShowcases/>
        </StyledSectionContainer>);
};


export default CompareShowcase;