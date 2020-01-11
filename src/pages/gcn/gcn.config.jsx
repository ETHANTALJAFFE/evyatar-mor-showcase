import React from "react";
import {
    StyledContentOutline,
    StyledContentOutlineTitle,
    StyledImageContainer, StyledResponsiveImage,
    StyledTextBlock
} from "../../components/style";
import Inspiration from "../../resources/GCN/inspiration.png";
import GCNLogo from "../../resources/GCN/GCN-logo.png";
import GCNAnimation from "../../resources/GCN/GCN-animation.gif";
import Wireframe from "../../resources/GCN/Wireframe.png";
import DesignLangGCN from "../../resources/GCN/Design-lang-gcn.png";
import DesktopMock from "../../resources/GCN/Desktop-mock.png";
import FlyingIphoneMock from "../../resources/GCN/Flying iPhone X Mockups.png";
import ShowcaseSectionTable from "../../components/showcase-section-table/showcase-section-table";
import {StyledShowcaseTable} from "../../components/showcase-section-table/style";

const BackgroundSectionSubtitle = <div>
    <StyledTextBlock>Analyzing and creating a brand image that takes into account the company’s core principles and
        visions.</StyledTextBlock>
</div>;

const GcnConfig = {
    header: {
        iconSrc: undefined,
        imgSrc: undefined,
        fontColor: '#fff',
        title: 'Text on Path',
        backgroundColor: 'linear-gradient(178.83deg, rgba(245, 245, 245, 0.4) 2.5%, rgba(245, 245, 245, 0) 94.12%);',
        description: 'User experience exploration and concept example for the photo editing app Enlight'
    },
    sections: [
        {
            title: 'Branding',
            subtitle: <StyledTextBlock>Analyzing and creating a brand image that takes into account the company’s core
                principles and visions.</StyledTextBlock>,
            content: <StyledContentOutline>
                <StyledContentOutlineTitle>What are the key principles we wish to convey?</StyledContentOutlineTitle>
                <StyledTextBlock>A professional, classic yet modern company, that honors the tradition of the
                    architectural field.</StyledTextBlock>
                <StyledContentOutlineTitle>Inspiration</StyledContentOutlineTitle>
                <StyledResponsiveImage src={Inspiration} customMaxWidth={'692px'}/>
            </StyledContentOutline>,
            image: (
                <>
                    <StyledImageContainer customMargin={'30px 0 0 0'} customPadding={'200px 0'}
                                          customBackground={'#000'}>
                        <StyledResponsiveImage customMaxWidth={'319px'} src={GCNLogo}/>
                    </StyledImageContainer>
                    <StyledImageContainer customMargin={'0'} customPadding={'190px 0'} customBackground={'#1d1d1d'}>
                        <StyledResponsiveImage style={{mixBlendMode: 'screen'}} customMaxWidth={'300px'}
                                               src={GCNAnimation}/>
                    </StyledImageContainer>
                </>
            )
        },
        {
            title: 'Landing page analysis',
            subtitle: <StyledTextBlock>In order to create the most converting website for business profit, we must
                understand the product, its users and the right solution, you must first understand the app’s
                objective(s).</StyledTextBlock>,
            content: <StyledContentOutline>
                <StyledContentOutlineTitle>Whats the problem we’re trying to solve?</StyledContentOutlineTitle>
                <StyledTextBlock>Builders have difficulty finding a trusted manufacturers in other
                    countries.</StyledTextBlock>
                <StyledContentOutlineTitle>Who are we solving this problem for?</StyledContentOutlineTitle>
                <StyledTextBlock>Builders, designers, architects, manufacturer.</StyledTextBlock>
                <StyledContentOutlineTitle>What action are we trying to generate?</StyledContentOutlineTitle>
                <StyledTextBlock>We are trying to get users to write us a message and leave a phone number so we can
                    contact them.</StyledTextBlock>
                <ShowcaseSectionTable
                    table={[['Assumptions', 'Reason'],
                        ['Showing project examples with our materials', 'Reflect the quality of the product and the service'],
                        ['Adding a big section with the phone number ', 'To show that we are trust-worthy, and our strength is in our customer service'],
                        ['Adding categories of the products ', 'To show the potential client that we have a variety of products we can supply.'],
                        ['Adding examples of companies that worked with us and quotes', 'Social proof: You present yourself as a real and experienced company.']]}/>
            </StyledContentOutline>
        },
        {
            title: 'Wireframe',
            subtitle: <StyledTextBlock>Connecting all the insights we gathered to plan the most precise and converting
                landing page.</StyledTextBlock>,
            content: null,
            image: <StyledImageContainer customPadding={'0'} customBackground={'#EBF1F9'}>
                <StyledResponsiveImage src={Wireframe} customMaxWidth={'784px'}/>
            </StyledImageContainer>
        },
        {
            title: 'UI & Design language',
            subtitle: 'I used the ‘Century gothic’ font (same as the logo), with a black & white color scheme. Creating a memorable brand.',
            content: <StyledContentOutline>
                <StyledResponsiveImage src={DesignLangGCN} customMaxWidth={'618px'}/>
            </StyledContentOutline>,
            image: <>
                <StyledImageContainer customMargin={'50px 0 0 0'}
                    customBackground={'linear-gradient(180deg, rgba(255, 255, 255, 0.7) -1%, rgba(255, 255, 255, 0) 100%), linear-gradient(0deg, #ECECEC, #ECECEC);'}
                    customPadding={'0'}>
                    <StyledResponsiveImage src={DesktopMock} customMaxWidth={'1040px'}/>
                </StyledImageContainer>
                <StyledImageContainer customPadding={'155px 0 0 0'} customMargin={'0'}
                                      customBackground={'linear-gradient(180deg, #111111 0%, rgba(36, 36, 36, 0) 54%, #FFFFFF 54%, #FFFFFF 100%), #1F1D24;'}>
                    <StyledResponsiveImage src={FlyingIphoneMock} customMaxWidth={'1300px'}/>
                </StyledImageContainer>
            </>
        }
    ]
};

export {GcnConfig};