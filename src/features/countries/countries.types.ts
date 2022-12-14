import { Country } from '../../types'

export interface CountriesState {
    countriesList: Country[],
    amount: number,
    error: string | null,
    loading: boolean
}