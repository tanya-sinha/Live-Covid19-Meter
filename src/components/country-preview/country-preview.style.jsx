import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const texts = css`
    font-size:13px;
    display:block;
    margin:0;
    font-weight:normal;
`

export const LinkContainer = styled(Link)`
    text-decoration:none;  
`
export const CityContainer = styled.div `
    display:flex;
    flex-wrap:wrap;
    max-width:90%;
    justify-content:center;
    margin:0 auto;
    label{
        display:block;
    }
    span {
        display:block;
    }
`

export const CityList = styled.div `
    width: calc(30% - 30px);
    padding:15px;
    border:1px solid #d8d8d8;
    text-align: center;
    border-radius: 5px;
    margin: 15px;
    cursor:pointer;
    @media screen and (max-width: 800px) {
        width:100%;
    }
`

export const CountryTitle = styled.h4 `
    font-size:17px;
    margin:0;
    color:#575757;
`
export const DateField = styled.h6 `
    font-size:11px;
    border-bottom:1px solid #eee;
    margin:0 0 20px;
    padding:5px 0 10px;
    font-weight:normal;
    color:#3a3a3a;

`

export const CaseContainer =styled.div `
    display:flex;
    justify-content:space-around;
`
export const Label = styled.p `
    ${texts};
    color:#808080;
    margin-bottom:8px;
`

export const Active = styled.h5 `
    ${texts};
    color:#1578de;
`

export const Death = styled.h5 `
    ${texts};
    color:#ef3030;
`

export const Recovered = styled.h5 `
    ${texts};
    color:#17b541;
`

export const NoRecordContainer = styled.div `
    margin:50px 0 10px;
    img{
        display:block;
        margin:0 auto;
    }
    p{
        font-size:20px;
        text-align:center;
        text-transform:uppercase;
    }
`

