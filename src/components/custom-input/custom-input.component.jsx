import React from 'react';
import {InputContainer} from './custom-input.style';

const CustomInput = ({children, ...props}) => {
    return (
        <InputContainer {...props} />
    )
}

export default CustomInput;