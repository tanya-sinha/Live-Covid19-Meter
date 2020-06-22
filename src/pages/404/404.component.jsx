import React from 'react';
import {ErrorImageOverlay,ErrorImageContainer,ErrorImageText} from './404.style';

const Page404 = () => {
    return(
        <ErrorImageOverlay>
        <ErrorImageContainer imageUrl='https://i.imgur.com/lKJiT77.png' />
        <ErrorImageText>Sorry this page is broken</ErrorImageText>
    </ErrorImageOverlay>
    )
};

export default Page404;