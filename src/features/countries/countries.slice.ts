import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import { Country } from '../../types';
import { RootState } from '../../store/store'
import { CountriesState } from './countries.types';
import { selectRegion, selectSearch } from '../filters/filters.slice';
import { ThunkApiConfig } from '../../store/store.types';

const initialState: CountriesState = {
    countriesList: [],
    amount: 0,
    error: null,
    loading: false
}

export const loadCountries = createAsyncThunk<Country[], void, ThunkApiConfig>(
    'countries/load',
    async (_, { extra: { client, api }, rejectWithValue }) => {
        try {
            const res = await client.get<Country[]>(api.ALL_COUNTRIES);
            return res.data;
        } catch {
            return rejectWithValue('Failed to load countries info.');
        }
    },
    {
        condition: (_, { getState }) => {
            const { countries } = getState() as RootState;
            if (countries.loading) {
                return false;
            }
        },
    }
)


const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadCountries.pending, (state) => {
                state.error = null;
                state.loading = true;
            })
            .addCase(loadCountries.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message || 'Something went wrong...';
            })
            .addCase(loadCountries.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.countriesList = action.payload;
                state.amount = action.payload.length;
            })
    }
});

export const selectAllCountries = (state: RootState) => state.countries.countriesList;
export const selectCountriesInfo = (state: RootState) => state.countries;

export const selectFilteredCountries = createSelector(
    selectAllCountries,
    selectSearch,
    selectRegion,
    (allCountries, searchString, region) => {
        if (searchString && region) {
            return allCountries.filter(country => country.name.toLowerCase()
                .includes(searchString.toLowerCase()) && country.region === region);
        }

        if (searchString && !region) {
            return allCountries.filter(country => country.name.toLowerCase()
                .includes(searchString.toLowerCase()));
        }

        if (region && !searchString) {
            return allCountries.filter(country => country.region === region);
        }

        return allCountries;
    }
)

export const countriesReducer = countriesSlice.reducer;

