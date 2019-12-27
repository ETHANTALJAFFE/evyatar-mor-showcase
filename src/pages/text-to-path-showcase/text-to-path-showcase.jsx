import React from 'react';
import ShowCaseHeader from "../../components/showcase-header/showcase-header";
import * as TextToPath from "../../resources/text-to-path-mockup.png";
import * as TextToPathIcon from '../../resources/text-to-path-icon.png';
import ShowcaseSection from "../../components/showcase-section/showcase-section";

const TextToPathShowcase = () => {
    return (
        <div>
            <ShowCaseHeader iconSrc={TextToPathIcon} imgSrc={TextToPath} fontColor={'#fff'} title={'Text to path'}
                            backgroundColor={'#1f1d24'}
                            description={'User experience exploration and concept example for the photo editing app Enlight'}/>
            <ShowcaseSection title={'Analysis & flow'}
                             subtitle={'Text to path is a popular and usable ' +
                             'functionality in photoshop and other desktop photo editing softwares. It let ' +
                             'you control the path of the text. This feature is ' +
                             'missing on popular editing apps like Enlight Photofox.'}
                                content={'After researching the subject, I’ve made 3 main concepts. ' +
                                'The famous Pen-tool method that’s been used in the industry ' +
                                '(Photoshop, Sketch, etc.) was dropped because its hard ' +
                                'to control and non-intuitive, especially in a smartphone.'}/>
        </div>);
};

export default TextToPathShowcase;