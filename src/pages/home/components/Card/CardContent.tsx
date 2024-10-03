
import styles from "./Card.module.css";

type CardContentProps = {
  capital: string;
  population: string;
  area: string;
  description: string;
};

const CardContent: React.FC<CardContentProps> = (props) => {
  return (
    <div className={styles["card-content"]}>
      <div className={styles["card-content"]}>
        <div className={styles["country-property"]}>
          <strong>Capital City:</strong> {props.capital}
        </div>
        <div className={styles["country-property"]}>
          <strong>Population:</strong> {props.population.toLocaleString()}
        </div>
        <div className={styles["country-property"]}>
          <strong>Area:</strong> {props.area}
        </div>
      </div>
      {props.description}
    </div>
  );
};

export default CardContent;
