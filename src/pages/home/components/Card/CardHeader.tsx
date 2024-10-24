import { useParams } from "react-router-dom";
import styles from "./Card.module.css";
type CardHeaderProps = {
  name: string;
  nameGeo: string;
  image: any;
};

const CardHeader: React.FC<CardHeaderProps> = (props) => {
  const { lang } = useParams<{ lang: string }>();

  return (
    <div className={styles["card-header"]}>
      <img src={props.image} alt="" />
      <div className={styles["card-header-caption"]}>
        <div className={styles["card-title"]}>
          {lang === "en" ? props.name : props.nameGeo}
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
