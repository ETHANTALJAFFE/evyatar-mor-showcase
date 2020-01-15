import React from "react";
import {StyledImageContainer, StyledTextBlock} from "../../components/style";
import TextOnPath from "../../resources/text-on-path-mock.png";
import {StyledFigmaIframe} from "../../components/showcase-section/style";
import * as TextToPathExample from "../../resources/Text-to-path-example.gif";
import * as TextToPathMockupGif from "../../resources/Lightricks-text-to-path-mockup-new.gif";
import ShowcaseSectionTable from "../../components/showcase-section-table/showcase-section-table";
import * as TextOnPathTitle from '../../resources/Text-On-Path-Header.png'

const BackgroundSectionSubtitle = <div>
    <StyledTextBlock>Text on Path is a popular and useful functionality in photo editing software. It lets you control
        the path of the text. This feature is missing in mobile editing apps such as Enlight Photofox.</StyledTextBlock>
    <StyledTextBlock>In this project, I looked into new user experiences that are easy to use on-the-go. After
        researching the subject, I created 3 main concepts.
    </StyledTextBlock>
    <StyledTextBlock>Text to path example in photoshop</StyledTextBlock>
    <StyledTextBlock>Note: I decided to drop the famous Pen-tool method that’s commonly used in the industry because
        it’s hard to control and non-intuitive, especially on a smartphone. </StyledTextBlock>
</div>;

const TextOnPathConfig = {
    header: {
        imgSrc: TextOnPath,
        fontColor: '#000',
        title: <img src={TextOnPathTitle} />,
        customHeight: '543px',
        customImgHeight: '615px',
        customMobileImgHeight: '400px',
        customPosition: {top: '50px', left: '60%'},
        customMobilePosition: {top: '375px', left: '20%'},
        backgroundColor: '#fff',
        description: 'UX research and prototyping for a common design feature that disappear from mobile phone design apps'
    },
    sections: [
        {
            title: 'Background',
            subtitle: BackgroundSectionSubtitle,
            content: null,
            image: (
                <StyledImageContainer customBackground={'#f2f2f2'}>
                    <img style={{mixBlendMode: 'darken'}} src={TextToPathExample}/>
                </StyledImageContainer>
            )
        },
        {
            title: 'Concept 1: Drawing the path',
            subtitle: 'Drawing the path using your finger while swiping it on the screen.',
            content: <div style={{padding: '25px 0'}}>
                <ShowcaseSectionTable
                    table={[['Pros', 'Cons'], ['Easy to use.', 'Difficult to control, hard to create a precise result.']]}/>
            </div>,
            image: <StyledImageContainer customBackground={'#f2f2f2'}>
                <StyledFigmaIframe
                    src={'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FLq9hebNNaFTtkJ44FLlNPI%2FText-Path-Draw%3Fnode-id%3D0%253A1'}/>
            </StyledImageContainer>
        },
        {
            title: 'Concept 2: Text Path Presets',
            subtitle: 'Choose a path preset to create the path you wish. Click the back button to finish editing.',
            content: <div>
                <ShowcaseSectionTable
                    table={[['Pros', 'Cons'], ['Easy to use.', 'Limited. Not customizable.'], ['Limited. Not customizable.', ''], ['Fast. A desired result can be achieved in one click.', '']]}/>
            </div>,
            image: <StyledImageContainer customBackground={'#f2f2f2'}><StyledFigmaIframe
                src={'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FspvCKfrrlNdDpZxppsVMHE%2FText-Path-Presets%3Fnode-id%3D0%253A2'}/></StyledImageContainer>
        },
        {
            title: 'Concept 3: Dragging the text path',
            subtitle: 'Use circle shaped anchors to adjust the text path. There will be a slider giving the user a range between 3 to 7 control points. Dragging each anchor will adjust the look of the text. Use the undo/redo buttons in case of mistakes.',
            content: <div>
                <ShowcaseSectionTable
                    table={[['Pros', 'Cons'], ['Intuitive.', 'Finger may hide the text while editing.'], ['Customizable.', ''], ['Real time text preview.', '']]}/>
            </div>,
            image: <StyledImageContainer customBackground={'#f2f2f2'}> <StyledFigmaIframe
                src={'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FAIHL8DLJcUmF4o2BelnKhs%2FText-Path-Dots%3Fnode-id%3D0%253A1'}/>
            </StyledImageContainer>
        },
        {
            title: 'Final Thoughts',
            subtitle: 'After researching the subject and designing the wireframes, ' +
                'I realized that combining the last two concepts would provide the best' +
                ' of both worlds: Preset options and full customization through circle shaped anchors.',
            content: <div style={{padding: '25px 0'}}><ShowcaseSectionTable
                table={[['Pros', 'Cons'], ['Easy to use.', 'Finger may hide the text while editing.'], ['Customizable.', ''], ['Intuitive.', ''], ['A desired result can be achieved in one click', ''], ['Real time text preview.', '']]}/>

            </div>,
            image: <StyledImageContainer customBackground={'#f5f7f9'}><img width="745px"
                                                                           src={TextToPathMockupGif}/></StyledImageContainer>
        }
    ]
};

export {TextOnPathConfig};