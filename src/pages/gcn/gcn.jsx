import React, {useMemo} from 'react';
import {GcnConfig} from "./gcn.config";
// import ShowCaseHeader from "../../components/showcase-header/showcase-header";
import ShowcaseSection from "../../components/showcase-section/showcase-section";

import {StyledSectionContainer, StyledSectionContentContainer} from "./style";
import Topbar from "../../topbar/topbar";

const GcnShowcase = () => {
    const headerConfig = useMemo(() => GcnConfig.header, []);
    const sections = useMemo(() => GcnConfig.sections, []);

    return (
        <StyledSectionContainer>
            <Topbar customBackgroundColor={'#1e1e1e'} customColor={'#fff'}/>
            {/*<ShowCaseHeader iconSrc={headerConfig.iconSrc} imgSrc={headerConfig.imgSrc}
                            fontColor={headerConfig.fontColor} title={headerConfig.title}
                            backgroundColor={headerConfig.backgroundColor}
                            description={headerConfig.description}/>*/}
            {sections.map((section, index) => <ShowcaseSection key={index} {...section} />)}
        </StyledSectionContainer>);
};

export default GcnShowcase;