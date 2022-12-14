import { useNavigate } from 'react-router-dom';

import { List, Card, ErrorMessage, Preloader } from '../../components/index';
import { useCountriesList } from './useCountriesList';

export const CountryList = () => {

    const navigate = useNavigate();
    const [countries, error, loading] = useCountriesList();

    if (loading) {
        return <Preloader />
    }

    if (error) {
        return <ErrorMessage message={error} />
    }

    return (
        <List>
            {countries.map((c) => {
                const countryInfo = {
                    img: c.flags.png,
                    name: c.name,
                    info: [
                        {
                            title: 'Population',
                            description: c.population.toLocaleString(),
                        },
                        {
                            title: 'Region',
                            description: c.region,
                        },
                        {
                            title: 'Capital',
                            description: c.capital,
                        },
                    ],
                };
                return (
                    <Card
                        key={c.name}
                        onClick={() => navigate(`/country/${c.name}`)}
                        {...countryInfo}
                    />
                );
            })}
        </List>
    )
}
