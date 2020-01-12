import React from 'react';
import _ from 'lodash';
import {Link, useLocation} from 'react-router-dom';
import TextOnPathShowcaseThumbnails from '../../resources/Thumbnail/Text-on-path.png'
import CompareThumbnail from '../../resources/Thumbnail/Compare.png'
import GCNThumbnail from '../../resources/Thumbnail/GCN.png'
import {StyledOtherShowcases, StyledThumbnailContainer, StyledThumbnails} from "./style";

const showcaseImages = {
    '/text-on-path-showcase': TextOnPathShowcaseThumbnails,
    '/compare-showcase': CompareThumbnail,
    '/gcn-showcase': GCNThumbnail
};

const OtherShowcases = () => {
    const location = useLocation();
    const filteredShowcases = _.pickBy(showcaseImages, ((thumbnail, path) => path !== location.pathname));
    console.log(filteredShowcases);
    return <StyledOtherShowcases>
        <div>Thanks for watching! ❤</div>
        <StyledThumbnails>{_.values(_.mapValues(filteredShowcases, (thumbnail, path) => {
            return <StyledThumbnailContainer><Link to={path} target={'_blank'}><img
                src={thumbnail}/></Link></StyledThumbnailContainer>
        }))}</StyledThumbnails>
    </StyledOtherShowcases>
};

export default OtherShowcases;