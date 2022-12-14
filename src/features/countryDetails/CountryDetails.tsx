import { NavigateFunction } from 'react-router-dom';
import { ErrorMessage, Info, Preloader } from '../../components';
import { useDetails } from './useDetails';

interface CountryDetailsProps {
    name: string,
    navigate: NavigateFunction
}

export const CountryDetails = ({ name, navigate }: CountryDetailsProps) => {

    const [loading, error, details] = useDetails(name);

    return (
        <>
            {loading && <Preloader />}
            {error && <ErrorMessage message={error} />}
            {details && <Info push={navigate} {...details} />}
        </>
    )
}
