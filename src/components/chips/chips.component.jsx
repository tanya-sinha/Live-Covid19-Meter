import React from 'react';
import {Chip} from './chips.style';

const ChipContainer = ({month, onClick, className}) => (
    <Chip onClick={onClick} className={className}>{month}</Chip>
);

export default ChipContainer;