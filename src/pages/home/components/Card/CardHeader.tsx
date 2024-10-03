import styles from './Card.module.css'
import cliffsImage from "../../../../assets/cliffs.jpg"
type CardHeaderProps = {
  name: string;
};

const CardHeader: React.FC<CardHeaderProps> = (props) => {
  return (
    <div className={styles["card-header"]}>
      <img src={cliffsImage} alt="" />
      <div className={styles["card-header-caption"]}>
        <div className={styles["card-title"]}>{props.name}</div>
      </div>
    </div>
  );
};

export default CardHeader;
