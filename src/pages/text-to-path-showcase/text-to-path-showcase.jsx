import React, {useMemo} from 'react';
import {TextOnPathConfig} from "./text-to-path-showcase.config";
import ShowCaseHeader from "../../components/showcase-header/showcase-header";
import ShowcaseSection from "../../components/showcase-section/showcase-section";

import {StyledSectionContainer, StyledSectionContentContainer} from "./style";
import Topbar from "../../topbar/topbar";
import OtherShowcases from "../../components/other-showcases/other-showcases";

const TextToPathShowcase = () => {
    const headerConfig = useMemo(() => TextOnPathConfig.header, []);
    const sections = useMemo(() => TextOnPathConfig.sections, []);

    return (
        <StyledSectionContainer>
            <Topbar customBackgroundColor={'#fff'} customColor={'#000'}/>
            <ShowCaseHeader iconSrc={headerConfig.iconSrc} imgSrc={headerConfig.imgSrc}
                            fontColor={headerConfig.fontColor} title={headerConfig.title}
                            backgroundColor={headerConfig.backgroundColor}
                            description={headerConfig.description}/>
            {sections.map((section, index) => <ShowcaseSection key={index} {...section} />)}
            <OtherShowcases />
        </StyledSectionContainer>);
};

export default TextToPathShowcase;