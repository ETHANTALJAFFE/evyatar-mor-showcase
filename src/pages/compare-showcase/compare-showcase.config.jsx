import * as Flow from "../../resources/Compare/Flow.png";
import * as ExamplesSearchResult from "../../resources/Compare/Examples-Search-result.png";
import * as SearchResultImage from "../../resources/Compare/Search-result.png";
import * as ExamplesItemPage from "../../resources/Compare/Examples-Item-page.png";
import * as ItemPage from "../../resources/Compare/Item-page.png";
import * as DesignLang from "../../resources/Compare/Design-lang.png";

import React from "react";
import {StyledSectionContentContainer} from "../text-to-path-showcase/style";
import {
    StyledContentOutline,
    StyledContentOutlineTitle,
    StyledImageContainer, StyledResponsiveImage,
    StyledTextBlock
} from "../../components/style";
import * as TextToPathMockupGif from "../../resources/Lightricks-text-to-path-mockup-new.gif";
import ShowcaseSectionTable from "../../components/showcase-section-table/showcase-section-table";

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
        image: <StyledImageContainer customBackground={'#ecf2fa'}><StyledResponsiveImage customMaxWidth="745px"
                                                                       src={Flow}/></StyledImageContainer>
    },
        {
            title: 'Research Example: Search results',
            subtitle: 'This page displays the search results for the user.',
            content:
                <StyledContentOutline>
                    <StyledContentOutlineTitle>What action are we trying to generate?</StyledContentOutlineTitle>
                    <StyledTextBlock>Users finding and clicking on the item they searched for.</StyledTextBlock>
                    <StyledContentOutlineTitle>Based on the previous question, what assumptions are we making that will
                        create the best user experience?</StyledContentOutlineTitle>
                    <ShowcaseSectionTable
                        table={[['Assumption', 'Reason'], ['Adding Image of the product. ', 'Helping recognize the right product.'],
                            ['Change location', 'People will want to see prices in other countries'], ['Showing Price and Shipping time', 'Variable that user want to know, that\'s why he use the website.'],
                            ['There is no need for sorting option.', 'People use the search option to find specific product']]}/>
                    <StyledResponsiveImage src={ExamplesSearchResult} customMaxWidth={'640px'}/>
                </StyledContentOutline>,
            image: <StyledImageContainer customBackground={'#ecf2fa'}>
                <StyledResponsiveImage src={SearchResultImage} customMaxWidth={'745px'}/>
            </StyledImageContainer>
        },
        {
            title: 'Research Example: The Item page',
            subtitle: 'This page displays the search results for the user.',
            content: <StyledContentOutline>
                <StyledContentOutlineTitle>What action are we trying to generate?</StyledContentOutlineTitle>
                <StyledTextBlock>Users finding the best offer for them.</StyledTextBlock>
                <StyledContentOutlineTitle>Based on the previous question, what assumptions are we making that will
                    create the best user experience?</StyledContentOutlineTitle>
                <ShowcaseSectionTable
                    table={[['Assumption', 'Reason'], ['Combining Item price and Shipping price.', 'Easier to compare the information. Making the user life easy.'],
                        ['Adding a section that shows where the user location is.', 'Shows the user that the information refers specifically to him.'],
                        ['Adding shipping times.', 'Variable that user want to know when comparing.'], ['Adding Sharing option', 'Probably some users will want to share the results to consult about the right choice.'],
                        ['Adding company logos.',
                            <>
                                <div>- Easier to detect familiar companies.</div>
                                <div>- Social proof - familiar logos will generate trust in the user.</div>
                                <div>- Builds credibility.</div>
                            </>],
                        ['Adding Image of the product.', 'Helps recognizing the right product.']]}/>
                <StyledResponsiveImage src={ExamplesItemPage} customMaxWidth={'640px'}/>
            </StyledContentOutline>,
            image: <StyledImageContainer customBackground={'#ecf2fa'}>
                <StyledResponsiveImage src={ItemPage} customMaxWidth={'745px'}/>
            </StyledImageContainer>
        },
        {
            title: 'UI & Design language',
            subtitle: <><StyledTextBlock>On the way to achieve the target - the easiest experience to compare and find
                products - the design style must proceed with the mission.</StyledTextBlock>
                <StyledTextBlock> Due to the fact that there are a lot of images in the product, I wanted to simplify
                    the processing of the information. To do this, I used a clean white background with bold colors that
                    will highlight the important parts.</StyledTextBlock></>,
            content: <StyledContentOutline>
                <StyledResponsiveImage src={DesignLang} customMaxWidth={'640px'}/>
            </StyledContentOutline>
        }
    ]
};

export {CompareShowcaseConfig};