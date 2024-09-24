import styles from './Card.module.css';
import cliffsImage from "../../assets/cliffs.jpg";



const Card: React.FC = () => {

  interface Country {
    name: string;
    capital: string;
    population: string;
    area: string;
    description: string;
  }

  const thailand: Country = {
    name: "Thailand",
    capital: "Bangkok",
    population: "65 mil",
    area: "513,120 square km",
    description:
      "Thailand is the only Southeast Asian country that was never colonized by an European country. In fact, in the Thai language, the name of the country is Prathet Thai which means “land of the free.” Very fitting! 2. Thailand is where you'll find both the smallest and the largest creatures.",
  };

  return (
    <div className={styles['card']} id="basic">
      <div className={styles['card-header']}>
        <img src={cliffsImage} alt="" />
        <div className={styles['card-header-caption']}>
          <div className={styles['card-title']}>{thailand.name}</div>
        </div>
      </div>
      <div className={styles['card-content']}>
      <div className={styles['card-content']}>
        <div className={styles['country-property']}>
          <strong>Capital City:</strong> {thailand.capital}
        </div>
        <div className={styles['country-property']}>
          <strong>Population:</strong> {thailand.population.toLocaleString()}
        </div>
        <div className={styles['country-property']}>
          <strong>Area:</strong> {thailand.area}
        </div>
      </div>
        {thailand.description}
      </div>
    </div>
  );
};

export default Card;
