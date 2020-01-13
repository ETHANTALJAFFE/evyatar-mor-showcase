import React from 'react';
import {
    StyledShowCaseHeaderTitle,
    StyledShowCaseHeaderContainer,
    StyledShowcase, StyledShowcaseImg,
    StyledShowcaseBackground,
    StyledShowcaseIcon
} from "./style";

const ShowCaseHeader = ({title, customHeight, customImgHeight,
                            fontColor, backgroundColor, customPosition, customMobilePosition, description, imgSrc}) => {
    return <StyledShowcase fontColor={fontColor} customHeight={customHeight}>
        <StyledShowcaseBackground backgroundColor={backgroundColor}>
            <StyledShowCaseHeaderContainer>
                <StyledShowCaseHeaderTitle>{title}</StyledShowCaseHeaderTitle>
                <div>{description}</div>
            </StyledShowCaseHeaderContainer>
            <StyledShowcaseImg customTop={customPosition.top} customLeft={customPosition.left}
                               customHeight={customImgHeight}
                               customMobileTop={customMobilePosition.top} customMobileLeft={customMobilePosition.left}
                               src={imgSrc}/>
        </StyledShowcaseBackground>
    </StyledShowcase>;
};

export default ShowCaseHeader;