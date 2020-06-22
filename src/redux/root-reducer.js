import {combineReducers} from 'redux';
import summaryReducer from './summary/summary.reducer';
import countryReducer from './country/country.reducer';

const rootReducer = combineReducers ({
    summary: summaryReducer,
    country: countryReducer
});


export default rootReducer;