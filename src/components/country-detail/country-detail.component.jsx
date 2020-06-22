import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectPreview, SelectIsCountryFecthing, SelectErrorMessage } from "../../redux/country/country.selector";
import DatePreview from "../../components/date/date.component";
import { CountryContainer, CountryTitle, NewTab, MainContainer } from '../date/date.style';
import Spinner from '../spinner/spinner.component';
import Page404 from '../../pages/404/404.component';

const CountryDetail = ({countryData, isCountryFecthing, errorMessage}) => {   
    console.log(errorMessage);
    const Months = ["January", "Febuary", "March", "April", "June", "July", "August", "September", "October", "November", "December"];    
    return (
        <div>
        { isCountryFecthing ? (
            <Spinner />
            ) : (
                errorMessage ? <Page404 />
                : (
                    <MainContainer>
                        {
                            countryData.slice(0,1).map((country) => { 
                                return([
                                    <CountryTitle>{country.Country}</CountryTitle>,
                                    <NewTab>{Months[parseInt(country.Date.substr(0,country.Date.indexOf("T")).split("-")[1])-1]}</NewTab>  
                                ])
                            })                        
                        }
                        <CountryContainer>               
                            {
                                // countryData.slice(0).reverse().map((country,i,arr) => {
                                countryData.map((country,i,arr) => {
                                    return (i>0 && arr[i].Date.substr(0,arr[i].Date.indexOf("T")).split("-")[1] !== arr[i-1].Date.substr(0,arr[i].Date.indexOf("T")).split("-")[1]) 
                                    ? 
                                        ([
                                            <NewTab>
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

export default connect(mapStateToProps)(CountryDetail);