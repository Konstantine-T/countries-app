
import styles from "./Card.module.css";
import { thailand } from "./Card";

const CardContent = () => {
  return (
    <div className={styles["card-content"]}>
      <div className={styles["card-content"]}>
        <div className={styles["country-property"]}>
          <strong>Capital City:</strong> {thailand.capital}
        </div>
        <div className={styles["country-property"]}>
          <strong>Population:</strong> {thailand.population.toLocaleString()}
        </div>
        <div className={styles["country-property"]}>
          <strong>Area:</strong> {thailand.area}
        </div>
      </div>
      {thailand.description}
    </div>
  );
};

export default CardContent;
