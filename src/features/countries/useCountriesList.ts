import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Country } from '../../types';
import { loadCountries, selectCountriesInfo, selectFilteredCountries } from './countries.slice';

type UseCountriesListHook = () => [Country[], string | null, boolean];

export const useCountriesList: UseCountriesListHook = () => {
    const dispatch = useAppDispatch();
    const { error, loading, amount } = useAppSelector(selectCountriesInfo);
    const countries = useAppSelector(selectFilteredCountries);

    useEffect(() => {
        if (!amount) {
            dispatch(loadCountries());
        }
    }, [dispatch, amount]);

    return [countries, error, loading];
}