import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

import { Button } from '../components/index';
import { CountryDetails } from '../features/countryDetails/CountryDetails';
import { NotFound } from './NotFound';

export const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  if (!name) {
    return <NotFound />
  }

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      <CountryDetails name={name} navigate={navigate} />
    </div>
  );
};
