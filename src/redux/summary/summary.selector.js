import { createSelector } from 'reselect';

const selectSummary = state => state.summary;

export const selectPreview = createSelector(
    [selectSummary],
    Location => Location.summary
);

export const SelectIsFecthing = createSelector(
    [selectSummary],
    Location => Location.isFetching
)