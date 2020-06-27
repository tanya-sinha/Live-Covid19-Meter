import React from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchCountryAsync} from '../../redux/country/country.actions';
import {
  CityList, 
  Active, 
  Death, 
  Recovered, 
  DateField, 
  CountryTitle, 
  Label,
  CaseContainer,
  LinkContainer
} from './country-preview.style';

const CityPreview = ({country}) => {  
    const { 
      Country,
      TotalConfirmed, 
      NewConfirmed,
      TotalDeaths,
      NewDeaths,
      TotalRecovered,
      NewRecovered, 
      Date 
    } = country;
    return (
      
      <CityList>
        <LinkContainer to={`/country/${Country}`}>
       
        <CountryTitle>{Country}</CountryTitle>
        <DateField>{Date.substr(0,Date.indexOf("T"))}</DateField>
        <CaseContainer>
        <Active>
          <Label>Confirmed Cases</Label>
          <label>Total: {TotalConfirmed}</label>
          <span>New: {NewConfirmed}</span>
        </Active>
        <Death>
          <Label>Death Cases</Label>
          <label>Total: {TotalDeaths}</label>
          <span>New: {NewDeaths}</span>
        </Death>
        <Recovered>
          <Label>Recovered Cases</Label>
          <label>Total: {TotalRecovered}</label>
          <span>New: {NewRecovered}</span>
        </Recovered>
        </CaseContainer>
        </LinkContainer>
        </CityList>
       
    )   
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchCountryAsync: () => dispatch(fetchCountryAsync(ownProps.countryname))
});

export default withRouter(connect(null, mapDispatchToProps)(CityPreview));