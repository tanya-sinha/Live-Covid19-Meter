import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CityPreview from "../country-preview/country-preview.component";
import {CityContainer} from '../country-preview/country-preview.style';
import { selectPreview, SelectIsFecthing } from "../../redux/summary/summary.selector";
import Spinner from '../spinner/spinner.component';
import CustomInput from '../../components/custom-input/custom-input.component';

const CountryLists = ({countryList, isFecthing}) => {
    const [country, SetCountry] = useState(countryList);
    const [searchText, setSearchText] = useState('');

    useEffect(() => { 
        SetCountry(countryList)
    }, [countryList])

    const onSearchChange = event => {
        setSearchText(event.target.value);
        const filteredCountries = countryList.filter(country =>
            country.Country.toLowerCase().includes(searchText.toLowerCase())
        ); 
        console.log(filteredCountries)
        SetCountry(filteredCountries);
    };

    return(
        <div>
            { isFecthing ? (
                <Spinner />
            ) : (
                <div>
                    <CustomInput type="search" placeholder="Search Country" value={searchText} onChange={onSearchChange} />  
                    <CityContainer> 
                        {country
                            .map((country) => (
                                <CityPreview key={country.CountryCode} country={country} />
                        ))}
                    </CityContainer>  
                </div>
            )}
        </div>        
    );
};

const mapStateToProps = createStructuredSelector({
    countryList: selectPreview,
    isFecthing: SelectIsFecthing
});

export default connect(mapStateToProps)(CountryLists);