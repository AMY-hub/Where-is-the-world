import axios from 'axios'

export type ClientType = typeof axios;

export interface ApiType {
    ALL_COUNTRIES: string,
    searchByCountry: (name: string) => string,
    filterByCode: (codes: string[]) => string
}

export interface AddConfig {
    client: ClientType,
    api: ApiType
}

export interface ThunkApiConfig {
    extra: AddConfig,
    rejectValue: string
}

