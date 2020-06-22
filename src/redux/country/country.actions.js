import {CountryActionTypes} from './country.types';

const BASE_URL = 'https://api.covid19api.com/';
export const fetchCountryStart = () => ({
    type : CountryActionTypes.FETCH_COUNTRY_START,
});

export const fetchCountrySuccess = CountryMap => ({
    type : CountryActionTypes.FETCH_COUNTRY_SUCCESS,
    payload : CountryMap
});

export const fetchCountryFailure = errorMessage => ({
    type: CountryActionTypes.FETCH_COUNTRY_FAILURE,
    payload:errorMessage
});

export const fetchCountryAsync = (countryname) => {
    return dispatch => {
        dispatch(fetchCountryStart());     
        fetch(BASE_URL+"total/country/"+countryname, {"method": "GET"})
        .then(res => res.json())
        .then(res => {
          if(res.error) {
              throw(res.error);
          }
          const CountryMap = res;
          dispatch(fetchCountrySuccess(CountryMap));
        })
        .catch(error => {
          dispatch(fetchCountryFailure(error.message));
        })     
    }
}