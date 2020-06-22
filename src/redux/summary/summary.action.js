import {CityActionTypes} from './summary.types';

export const fetchCityStart = () => ({
    type : CityActionTypes.FETCH_CITY_START,
});

export const fetchCitySuccess = cityMap => ({
    type : CityActionTypes.FETCH_CITY_SUCCESS,
    payload : cityMap
});

export const fetchCityFailure = errorMessage => ({
    type: CityActionTypes.FETCH_CITY_FAILURE,
    payload:errorMessage
});

export const fetchCountryListAsync = () => {
    return dispatch => {
        dispatch(fetchCityStart());        
        fetch("https://api.covid19api.com/summary", {"method": "GET"})
        .then(res => res.json())
        .then(res => {
          if(res.error) {
              throw(res.error);
          }
          const cityMap = res.Countries;
          dispatch(fetchCitySuccess(cityMap));
        })
        .catch(error => {
          dispatch(fetchCityFailure(error.message));
        })     
    }
}