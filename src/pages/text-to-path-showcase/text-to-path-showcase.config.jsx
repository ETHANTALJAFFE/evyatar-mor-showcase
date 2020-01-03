import React from "react";
import {StyledTextBlock} from "../../components/style";
import * as TextToPathIcon from '../../resources/text-to-path-icon.png';
import * as TextToPath from "../../resources/text-to-path-mockup.png";

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
    sections: [{
        title: 'Background',
        subtitle: BackgroundSectionSubtitle,
        content: null
    },
        {
            title: 'Concept 1: Drawing the path',
            subtitle: 'Drawing the path using your finger while swiping it on the screen.',
            content: <iframe style={{border: 'none'}} width="800" height="450"
                             src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FLq9hebNNaFTtkJ44FLlNPI%2FText-Path-Draw%3Fnode-id%3D0%253A1"
                             allowFullScreen></iframe>
        }]
};

export {TextOnPathConfig};