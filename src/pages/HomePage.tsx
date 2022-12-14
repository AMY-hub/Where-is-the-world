import { Controls } from '../features/filters/Controls';
import { CountryList } from '../features/countries/CountryList';

export const HomePage = () => {
  return (
    <>
      <Controls />
      <CountryList />
    </>
  );
};
