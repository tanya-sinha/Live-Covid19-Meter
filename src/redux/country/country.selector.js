import { createSelector } from 'reselect';

const selectCountry = state => state.country;

export const selectPreview = createSelector(
    [selectCountry],
    Location => Location.country
);

export const SelectIsCountryFecthing = createSelector(
    [selectCountry],
    Location => Location.isFetching
)