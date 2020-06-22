import styled, { css } from 'styled-components';

const texts = css`
    font-size:14px;
    margin:0;
    padding-bottom:5px;
    font-weight:normal;
    label {
        display:inline-block;
        min-width:105px;
        text-align:left;
    }
    span{
        text-align:right;
    }
`
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

export const DayList = styled.div `
    width:calc(15% - 20px);
    border:1px solid #eee;
    text-align: center;
    padding: 0 0 30px;
    display: inline-block;
    @media screen and (max-width: 800px) {
        width:calc(50% - 20px);
    }
`

export const CountryTitle = styled.h4 `
    font-size:20px;
    margin:50px 0;
    color:#575757;
    text-align:center;
    text-transform:uppercase;
`
export const DateField = styled.h6 `
    left: 0;
    font-size: 16px;
    border-bottom: 1px solid #eee;
    margin: 0;
    background: #eee;
    padding: 5px;
    font-weight: bold;
    color: #3a3a3a;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    line-height: 30px;
    position: relative;
    top: -30px;
    border: 10px solid #fff;
`
export const ActiveLabel = styled.h5 `
    ${texts};
    color:#1578de;
`

export const DeathLabel = styled.h5 `
    ${texts};
    color:#ef3030;
`

export const RecoveredLabel = styled.h5 `
    ${texts};
    color:#17b541;
`

export const NewTab = styled.div `
    width: 100%;
    margin: 20px 0 30px;
    font-size:17px;
`