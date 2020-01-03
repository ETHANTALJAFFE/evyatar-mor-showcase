import React from "react";
import {StyledTextBlock} from "../../components/style";
import * as TextToPathIcon from '../../resources/text-to-path-icon.png';
import * as TextToPath from "../../resources/text-to-path-mockup.png";
import ShowcaseSectionTable from "../../components/showcase-section-table/showcase-section-table";
import {StyledFigmaIframe} from "../../components/showcase-section/style";

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
        iconSrc: TextToPathIcon,
        imgSrc: TextToPath,
        fontColor: '#fff',
        title: 'Text on Path',
        backgroundColor: '#1f1d24',
        description: 'User experience exploration and concept example for the photo editing app Enlight'
    },
    sections: [
        {
            title: 'Background',
            subtitle: BackgroundSectionSubtitle,
            content: null
        },
        {
            title: 'Concept 1: Drawing the path',
            subtitle: 'Drawing the path using your finger while swiping it on the screen.',
            content: <div>
                <StyledFigmaIframe
                    src={'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FLq9hebNNaFTtkJ44FLlNPI%2FText-Path-Draw%3Fnode-id%3D0%253A1'}/>
                <ShowcaseSectionTable
                    table={[['Pros', 'Cons'], ['Easy to use.', 'Difficult to control, hard to create a precise result.']]}/>
            </div>
        },
        {
            title: 'Concept 2: Text Path Presets',
            subtitle: 'Choose a path preset to create the path you wish. Click the back button to finish editing.',
            content: <div>
                <StyledFigmaIframe
                    src={'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FspvCKfrrlNdDpZxppsVMHE%2FText-Path-Presets%3Fnode-id%3D0%253A2'}/>
                <ShowcaseSectionTable
                    table={[['Pros', 'Cons'], ['Easy to use.', 'Limited. Not customizable.'], ['Limited. Not customizable.', ''], ['Fast. A desired result can be achieved in one click.', '']]}/>
            </div>
        },
        {
            title: 'Concept 3: Dragging the text path',
            subtitle: 'Use circle shaped anchors to adjust the text path. There will be a slider giving the user a range between 3 to 7 control points. Dragging each anchor will adjust the look of the text. Use the undo/redo buttons in case of mistakes.',
            content: <div>
                <StyledFigmaIframe
                    src={'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FAIHL8DLJcUmF4o2BelnKhs%2FText-Path-Dots%3Fnode-id%3D0%253A1'}/>
                <ShowcaseSectionTable
                    table={[['Pros', 'Cons'], ['Intuitive.', 'Finger may hide the text while editing.'], ['Customizable.', ''], ['Real time text preview.', '']]}/>
            </div>
        }
    ]
};

export {TextOnPathConfig};