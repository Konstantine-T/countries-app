import styles from './Card.module.css'
import cliffsImage from "../../assets/cliffs.jpg";
import { thailand } from './Card';

const CardHeader = () => {
  return (
    <div className={styles["card-header"]}>
      <img src={cliffsImage} alt="" />
      <div className={styles["card-header-caption"]}>
        <div className={styles["card-title"]}>{thailand.name}</div>
      </div>
    </div>
  );
};

export default CardHeader;
