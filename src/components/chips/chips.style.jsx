import styled from 'styled-components';

export const ChipSection = styled.div `
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
    margin: 0 auto 40px;
`
export const Chip = styled.span`
        padding: 10px;
        background: #03A9F4;
        flex: 1;
        margin: 20px 5px 0;
        text-align: center;
        color: #fff;
        border-radius:5px;
        cursor:pointer;
        &.active {
            position:relative;
            background: #0b63a5;
            &:after{
                content: '';
                width: 60px;
                height: 60px;
                background: #fff;
                border-radius: 50%;
                position: absolute;
                right: 0;
                display: block;
                left: 0;            
            }
        }
    }
`