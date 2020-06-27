import React, { useState,useEffect } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {createStructuredSelector} from 'reselect';
import { selectPreview, SelectIsCountryFecthing, SelectErrorMessage } from "../../redux/country/country.selector";
import DatePreview from "../../components/date/date.component";
import {
    CountryContainer,
    CountryTitle, 
    NewTab, 
    MainContainer
} from './country-detail.style';
import {ChipSection} from '../chips/chips.style';

import Spinner from '../spinner/spinner.component';
import Page404 from '../../pages/404/404.component';
import ChipContainer from '../chips/chips.component';

const CountryDetail = ({countryData, isCountryFecthing, errorMessage,match}) => {  
    const Months = ["January", "Febuary", "March", "April","May", "June", "July", "August", "September", "October", "November", "December"];  

    const noOfMonths = parseInt(new Date().getMonth())+1;
    const [monthWiseData, SetMonthWise] = useState(countryData);
    const [activeId, SetActive] = useState(null);

    useEffect(() => { 
        SetMonthWise(countryData)
    }, [countryData])
    
    const onMonthChange = (i) => {
        const monthIndex = parseFloat(i+1);
        const filteredData = countryData.filter(country =>
            country.Date.substr(0,country.Date.indexOf("T")).split("-")[1].includes(monthIndex)
        ); 
        SetMonthWise(filteredData);
        SetActive(i);
    }
    return (
        <div>
        { isCountryFecthing ? (
            <Spinner />
            ) : (
                errorMessage ? <Page404 />
                : (
                    <MainContainer> 
                        <CountryTitle>{match.params.countryname}</CountryTitle>    
                        <ChipSection>  
                        {
                            Months.slice(0,noOfMonths).map((month, i) => (
                                <ChipContainer key={i} onClick={() => onMonthChange(i)} month={month} className={i === activeId? "active" : ""} />
                            ))
                        }   
                        </ChipSection> 
                        <CountryContainer> 
                            {
                                monthWiseData.slice(0,1).map((country, i) => (                                                              
                                    <NewTab key={i}>{Months[parseInt(country.Date.substr(0,country.Date.indexOf("T")).split("-")[1])-1]}</NewTab>  
                                ))                        
                            }              
                            {
                                monthWiseData.map((country,i,arr) => {
                                    return (i>0 && arr[i].Date.substr(0,arr[i].Date.indexOf("T")).split("-")[1] !== arr[i-1].Date.substr(0,arr[i].Date.indexOf("T")).split("-")[1]) 
                                    ? 
                                        ([
                                            <NewTab key={i+1}>
                                                {Months[parseInt(arr[i].Date.substr(0,arr[i].Date.indexOf("T")).split("-")[1])-1]}                                    
                                            </NewTab>,
                                            <DatePreview key={i} country={country} />
                                        ])
                                    :
                                    <DatePreview key={i} country={country} />                            
                                })
                            }
                        </CountryContainer>
                    </MainContainer>
                )
            )}
        </div>        
    );
};

const mapStateToProps = createStructuredSelector({
    countryData: selectPreview,
    isCountryFecthing: SelectIsCountryFecthing,
    errorMessage : SelectErrorMessage
});

export default withRouter(connect(mapStateToProps)(CountryDetail));