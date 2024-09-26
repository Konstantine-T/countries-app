import { PropsWithChildren } from "react";
import styles from "./Card.module.css";

interface Country {
  name: string;
  capital: string;
  population: string;
  area: string;
  description: string;
}

export const thailand: Country = {
  name: "Thailand",
  capital: "Bangkok",
  population: "65 mil",
  area: "513,120 square km",
  description:
    "Thailand is the only Southeast Asian country that was never colonized by an European country. In fact, in the Thai language, the name of the country is Prathet Thai which means “land of the free.” Very fitting! 2. Thailand is where you'll find both the smallest and the largest creatures.",
};

const Card: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles["card"]} id="basic">
      {children}
    </div>
  );
};

export default Card;
