import { useParams } from "react-router-dom";
import styles from "./Hero.module.css";

const Hero: React.FC = () => {
  const { lang } = useParams<{ lang: string }>();
  return (
    <div className={styles["hero-image"]}>
      <div className={styles["hero-text"]}>
        <h1>
          {lang === "en" ? "Some cool Hero section" : "კაი ტიპების სექცია"}
        </h1>
        <p>
          {" "}
          {lang === "en"
            ? "Some cool hero section descriprion here"
            : "კაი ტიპების სექციის აღწერა"}
        </p>
        <button
          onClick={() => {
            console.log("I told you i log stuff");
          }}
        >
          {lang === "en"
            ? "I just log stuff"
            : "მე უბრალოდ რაღაცებს ვლოგავ, ბოსს"}
        </button>
      </div>
    </div>
  );
};

export default Hero;
