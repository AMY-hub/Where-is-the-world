import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import { FiltersState, Regions } from './filters.types';

const initialState: FiltersState = {
    searchString: '',
    region: null
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setSearchString: (state, action: PayloadAction<string>) => {
            state.searchString = action.payload;
        },
        setRegion: (state, action: PayloadAction<Regions | null>) => {
            state.region = action.payload;
        },
        cleanFilters: () => {
            return initialState;
        }
    }
});

export const selectSearch = (state: RootState) => state.filters.searchString;
export const selectRegion = (state: RootState) => state.filters.region;

export const { setSearchString, setRegion, cleanFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;