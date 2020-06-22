import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CityPreview from "../country-preview/country-preview.component";
import {CityContainer, NoRecordContainer} from '../country-preview/country-preview.style';
import { selectPreview, SelectIsFecthing } from "../../redux/summary/summary.selector";
import Spinner from '../spinner/spinner.component';
import CustomInput from '../../components/custom-input/custom-input.component';
import NoRecord from '../../assets/norecord.png';

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
        SetCountry(filteredCountries)
    };

    return(
        
        <div>
            { isFecthing ? (
                <Spinner />
            ) : (
                <div>
                    <CustomInput type="text" placeholder="Search Country" value={searchText} onChange={onSearchChange} />  
                    {country.length !== 0 ?
                        <CityContainer> 
                            {country
                                .map((country) => (
                                    <CityPreview key={country.CountryCode} country={country} />
                            ))}
                        </CityContainer>  : 
                        <NoRecordContainer>
                            <img src={NoRecord} alt="No Record"/>
                            <p>No Record Found</p>
                        </NoRecordContainer>
                    }
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