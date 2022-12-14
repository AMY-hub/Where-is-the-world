export interface FiltersState {
    searchString: string,
    region: Regions | null
}

export const enum Regions {
    Africa = 'Africa',
    Europe = 'Europe',
    Asia = 'Asia',
    Oceania = 'Oceania'
}