import * as Flow from "../../resources/Compare/Flow.png";
import React from "react";
import {StyledSectionContentContainer} from "../text-to-path-showcase/style";
import {
    StyledContentOutline,
    StyledContentOutlineTitle,
    StyledImageContainer,
    StyledTextBlock
} from "../../components/style";
import * as TextToPathMockupGif from "../../resources/Lightricks-text-to-path-mockup-new.gif";

const analysisAndFlowSubtitle = 'In order to understand the product, its users and the right solution, you must first understand the app’s objective(s).';

const CompareShowcaseConfig = {
    header: {},
    sections: [{
        title: 'Analysis & Flow',
        subtitle: analysisAndFlowSubtitle,
        content: <StyledContentOutline>
            <StyledContentOutlineTitle>What is the problem we are trying to solve?</StyledContentOutlineTitle>
            <StyledTextBlock>Given the amount of e-commerce sites, comparing all of them has become nearly impossible.
                This makes it very difficult to save money.</StyledTextBlock>
            <StyledContentOutlineTitle>Who are we solving this problem for?</StyledContentOutlineTitle>
            <StyledTextBlock>People who buy online and want to save money. This could potentially include all of the 1.8
                Billion Global Digital Buyers in 2018 (Statista). This statistic is expected to rise to over 2.14
                billion by 2021.</StyledTextBlock>
            <StyledContentOutlineTitle>What is the end result?</StyledContentOutlineTitle>
            <StyledTextBlock>People clicking on a price offer from the item page. </StyledTextBlock>
            <StyledContentOutlineTitle>What are the use cases to get to the end result?</StyledContentOutlineTitle>
            <StyledTextBlock>
                    <div>- Text Search inside the site</div>
                    <div>- Browsing categories in the site</div>
                    <div>- Referral from a search engine, site or a friend</div>
            </StyledTextBlock>
        </StyledContentOutline>,
        image: <StyledImageContainer customBackground={'#ecf2fa'}><img width="745px"
                                          src={Flow}/></StyledImageContainer>
    }]
};

export {CompareShowcaseConfig};