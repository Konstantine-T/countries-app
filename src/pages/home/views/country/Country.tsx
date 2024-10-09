import { useParams } from "react-router-dom";

interface CountryProps {
  countriesList: {
    name: string;
    capital: string;
    population: string;
    area: string;
    description: string;
    id: string;
    likes: number;
  }[];
}

const Country: React.FC<CountryProps> = ({ countriesList }) => {
  const { id } = useParams<{ id: string }>();

  const country = countriesList.find((country) => country.id === id);

  if (!country) {
    return <h1>Country not found!</h1>;
  }

  return (
    <div className="country-details">
      <h1>PAGE FOR DETAILS OF THE COUNTRIES</h1>
      <h1>{country.name}</h1>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <p>Area: {country.area}</p>
      <p>{country.description}</p>
    </div>
  );
};

export default Country;
