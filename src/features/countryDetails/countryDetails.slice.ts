import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import { ThunkApiConfig } from '../../store/store.types';
import { CountryDetails } from '../../types';
import { CountryDetailsState } from './countryDetails.types';

const initialState: CountryDetailsState = {
    loading: false,
    error: null,
    details: null,
    neighbors: []
}

export const loadCountryDetails = createAsyncThunk<CountryDetails, string, ThunkApiConfig>(
    'countryDetails/load',
    async (countryName, { extra: { api, client }, rejectWithValue }) => {
        try {
            const { data } = await client.get<CountryDetails[]>(api.searchByCountry(countryName));

            return data[0];

        } catch {
            return rejectWithValue('Couldn\'t load detailed country info.');
        }
    },
    {
        condition: (_, { getState }) => {
            const { countryDetails } = getState() as RootState;
            if (countryDetails.loading) {
                return false;
            }
        }
    }
);

export const loadCountryNeigbors = createAsyncThunk<string[], string[], ThunkApiConfig>(
    'countryNeighbors',
    async (codes, { extra: { api, client }, rejectWithValue }) => {
        try {
            const { data } = await client.get<CountryDetails[]>(api.filterByCode(codes));

            return data.map(country => country.name);

        } catch {
            return rejectWithValue('Couldn\'t load info.')
        }
    }
);

const countryDetailsSlice = createSlice({
    name: 'countryDetails',
    initialState,
    reducers: {
        clearDetails: () => {
            return initialState;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadCountryDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loadCountryDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message || 'Something went wrong...';
            })
            .addCase(loadCountryDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.details = action.payload;
            })
            .addCase(loadCountryNeigbors.fulfilled, (state, action) => {
                state.neighbors = action.payload;
            })
    }
});

export const selectAllCountryDetails = (state: RootState) => state.countryDetails;
export const selectCountryNeighbors = (state: RootState) => state.countryDetails.neighbors;

export const { clearDetails } = countryDetailsSlice.actions;
export const countryDetailsReducer = countryDetailsSlice.reducer;

