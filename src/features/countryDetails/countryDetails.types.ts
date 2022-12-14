import { CountryDetails } from '../../types';

export interface CountryDetailsState {
    loading: boolean,
    error: string | null,
    details: CountryDetails | null,
    neighbors: string[]
}