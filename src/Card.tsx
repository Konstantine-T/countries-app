import "./Card.css";
import cliffsImage from "./assets/cliffs.jpg";

const Card = () => {
  const countryObj = {
    name: "Thailand",
    capital: "Bangkok",
    population: "65 mil",
    area: "513,120 square km",
    description:
      "Thailand is the only Southeast Asian country that was never colonized by an European country. In fact, in the Thai language, the name of the country is Prathet Thai which means “land of the free.” Very fitting! 2. Thailand is where you'll find both the smallest and the largest creatures.",
  };

  return (
    <div className="card" id="basic">
      <div className="card-header">
        <img src={cliffsImage} alt="" />
        <div className="card-header-caption">
          <div className="card-title">{countryObj.name}</div>
        </div>
      </div>
      <div className="card-content">
      <div className="card-content">
        <div className="country-property">
          <strong>Capital City:</strong> {countryObj.capital}
        </div>
        <div className="country-property">
          <strong>Population:</strong> {countryObj.population.toLocaleString()}
        </div>
        <div className="country-property">
          <strong>Area:</strong> {countryObj.area}
        </div>
      </div>
        {countryObj.description}
      </div>
    </div>
  );
};

export default Card;
