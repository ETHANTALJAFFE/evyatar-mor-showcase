import React, {useMemo} from 'react';
// import ShowCaseHeader from "../../components/showcase-header/showcase-header";
import {StyledSectionContainer, StyledSectionContentContainer} from "../text-to-path-showcase/style";
import ShowcaseSection from "../../components/showcase-section/showcase-section";
import {CompareShowcaseConfig} from "./compare-showcase.config";
import Topbar from "../../topbar/topbar";
import {StyledImageContainer, StyledResponsiveImage} from "../../components/style";
import Mock1 from '../../resources/Compare/Mock1.png';
import Mock3 from '../../resources/Compare/Mock3.png';
import OtherShowcases from '../../components/other-showcases/other-showcases';
const CompareShowcase = () => {
    const headerConfig = useMemo(() => CompareShowcaseConfig.header, []);
    const sections = useMemo(() => CompareShowcaseConfig.sections, []);

    return (
        <StyledSectionContainer>
            <Topbar customColor={'#fff'} customBackgroundColor={'#3d8aff'}/>
            {/*<ShowCaseHeader iconSrc={headerConfig.iconSrc} imgSrc={headerConfig.imgSrc}
                            fontColor={headerConfig.fontColor} title={headerConfig.title}
                            backgroundColor={headerConfig.backgroundColor}
                            description={headerConfig.description}/>*/}
            {sections.map((section, index) => <ShowcaseSection key={index} {...section} />)}
            <StyledImageContainer customMargin={'30px 0 0 0'} customBackground={'#1380FF'}><StyledResponsiveImage
                customMaxWidth={'740px'} src={Mock1}/></StyledImageContainer>
            <StyledImageContainer customPadding={'0'} customMargin={'0'}
                                  customBackground={'#b5f6ff'}><StyledResponsiveImage
                src={Mock3}/></StyledImageContainer>
            <OtherShowcases />
        </StyledSectionContainer>);
};


export default CompareShowcase;