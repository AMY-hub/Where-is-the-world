import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { CountryDetails } from '../../types';
import { clearDetails, loadCountryDetails, selectAllCountryDetails } from './countryDetails.slice';

type UseDetailsHook = (name: string) => [boolean, string | null, CountryDetails | null];

export const useDetails: UseDetailsHook = (name) => {
    const dispatch = useAppDispatch();
    const { loading, error, details } = useAppSelector(selectAllCountryDetails);

    useEffect(() => {
        dispatch(loadCountryDetails(name!));

        return () => {
            dispatch(clearDetails());
        }
    }, [name, dispatch]);

    return [loading, error, details];
}