import styled from 'styled-components';

export const MainContainer =styled.div `
    padding:0 20px;
`

export const CountryContainer = styled.div `
    display:flex;
    flex-wrap:wrap;
    width:100%;
    margin:20px auto;
    flex:1;
`

export const CountryTitle = styled.h4 `
    font-size:20px;
    margin:50px 0;
    color:#575757;
    text-align:center;
    text-transform:uppercase;
`

export const NewTab = styled.div `
    width: 100%;
    margin: 20px 0 30px;
    font-size:17px;
`

export const Chip = styled.div `
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
    margin: 0 auto 40px;
    span{
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