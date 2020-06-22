import {CountryActionTypes} from './country.types';
//import COUNTRY_DATA from './COUNTRY_data';
const INITIAL_STATE = {
    country: [],
    isFetching: false,
    errorMessage : undefined
}

const countryReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case CountryActionTypes.FETCH_COUNTRY_START : 
        return {
            ...state,
            isFetching: true
        }

        case CountryActionTypes.FETCH_COUNTRY_SUCCESS : 
        return {
            ...state,
            country: action.payload,
            isFetching:false
        }
        case CountryActionTypes.FETCH_COUNTRY_FAILURE : 
        return {
            ...state,
            isFetching:false,
            errorMessage : action.payload
        }

        default :
        return state;

    }
};


export default countryReducer;