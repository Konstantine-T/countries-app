import { useParams } from "react-router-dom";
import { countries } from "../list";

const Country = () => {
  const { id } = useParams<{ id: string }>();

  const country = countries.find((country) => country.id === id);

  console.log(country);

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
