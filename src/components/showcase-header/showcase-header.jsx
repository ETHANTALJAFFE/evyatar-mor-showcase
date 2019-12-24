import React from 'react';
import {
    StyledShowCaseHeaderTitle,
    StyledShowCaseHeaderContainer,
    StyledShowcase,StyledShowcaseImg,
    StyledShowcaseBackground,
    StyledShowcaseIcon
} from "./style";

const ShowCaseHeader = ({title, fontColor, backgroundColor, description, imgSrc, iconSrc}) => {
    return <StyledShowcase fontColor={fontColor}>
        <StyledShowcaseBackground backgroundColor={backgroundColor}>
            <StyledShowCaseHeaderContainer>
                <StyledShowcaseIcon src={iconSrc} />
                <StyledShowCaseHeaderTitle>{title}</StyledShowCaseHeaderTitle>
                <div>{description}</div>
            </StyledShowCaseHeaderContainer>
            <StyledShowcaseImg src={imgSrc}/>
        </StyledShowcaseBackground>
    </StyledShowcase>;
};

export default ShowCaseHeader;