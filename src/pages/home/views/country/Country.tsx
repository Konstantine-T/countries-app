import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getCountry } from '../../../../../src/api/countries/index';
import { useState } from 'react';

const Country: React.FC = () => {
  const { id, lang } = useParams<{ id: string; lang: string }>();
  const [country, setCountry] = useState<any>(null);

  const { data, error, isLoading } = useQuery(
    ['country', id],
    () => getCountry(id!),
    {
      enabled: !!id,
      onSuccess: (data) => setCountry(data),
    },
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading country data</p>;

  if (!data) {
    return <h1>Country not found!</h1>;
  }

  if (!country) {
    return <h1>Country not found!</h1>;
  }

  return (
    <div className="country-details">
      <h1>
        {lang === 'en'
          ? 'PAGE FOR DETAILS OF THE COUNTRIES'
          : 'ქვეყნის დეტალური ფეიჯიი??'}
      </h1>
      <h1>{lang === 'en' ? country.name : country.name}</h1>
      <p>
        {lang === 'en' ? 'Capital' : 'დედაქალაქი'}:{' '}
        {lang === 'en' ? country.capital : country.capital}
      </p>
      <p>
        {lang === 'en' ? 'Population' : 'პოპულაცია'}: {country.population}
      </p>
      <p>
        {lang === 'en' ? 'Area' : 'ფართობი'} {country.area}
      </p>
      <p>{lang === 'en' ? country.description : country.description}</p>
    </div>
  );
};

export default Country;
