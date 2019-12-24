import React from 'react';
import ShowCaseHeader from "../../components/showcase-header/showcase-header";
import * as TextToPath from "../../resources/text-to-path-mockup.png";
import * as TextToPathIcon from '../../resources/text-to-path-icon.png';

const TextToPathShowcase = () => {
    return (
        <div>
            <ShowCaseHeader iconSrc={TextToPathIcon} imgSrc={TextToPath} fontColor={'#fff'} title={'Text to path'}
                            backgroundColor={'#1f1d24'}
                            description={'User experience exploration and concept example for the photo editing app Enlight'}/>
        </div>);
};

export default TextToPathShowcase;