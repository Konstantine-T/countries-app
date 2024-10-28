import { useParams } from 'react-router-dom';

interface CountryProps {
  countriesList: {
    name: string;
    capital: string;
    population: string;
    area: string;
    description: string;
    id: string;
    likes: number;
    nameGeo: string;
    capitalGeo: string;
    descriptionGeo: string;
  }[];
}

const Country: React.FC<CountryProps> = ({ countriesList }) => {
  const { id, lang } = useParams<{ id: string; lang: string }>();

  const country = countriesList.find((country) => country.id === id);

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
      <h1>{lang === 'en' ? country.name : country.nameGeo}</h1>
      <p>
        {lang === 'en' ? 'Capital' : 'დედაქალაქი'}:{' '}
        {lang === 'en' ? country.capital : country.capitalGeo}
      </p>
      <p>
        {lang === 'en' ? 'Population' : 'პოპულაცია'}: {country.population}
      </p>
      <p>
        {lang === 'en' ? 'Area' : 'ფართობი'} {country.area}
      </p>
      <p>{lang === 'en' ? country.description : country.descriptionGeo}</p>
    </div>
  );
};

export default Country;
