import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import { Theme } from './theme.types';

const initialState = Theme.LIGHT;

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state) => {
            return state === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        }
    }
});

export const selectTheme = (state: RootState) => state.theme;

export const { changeTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;