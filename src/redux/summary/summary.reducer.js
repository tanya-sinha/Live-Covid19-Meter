import {CityActionTypes} from './summary.types';
//import CITY_DATA from './city_data';
const INITIAL_STATE = {
    summary: [],
    isFetching: false,
    errorMessage : undefined
}

const summaryReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case CityActionTypes.FETCH_CITY_START : 
        return {
            ...state,
            isFetching: true
        }

        case CityActionTypes.FETCH_CITY_SUCCESS : 
        return {
            ...state,
            summary: action.payload,
            isFetching:false
        }
        case CityActionTypes.FETCH_CITY_FAILURE : 
        return {
            ...state,
            isFetching:false,
            errorMessage : action.payload
        }

        default :
        return state;

    }
};


export default summaryReducer;