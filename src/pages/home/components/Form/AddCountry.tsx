import { Country } from "../../reducer/reducer";
import styles from "./AddCountry.module.css";

interface AddCountryProps {
  onAddCountry: (newCountry: Country) => void;
}

const AddCountry: React.FC<AddCountryProps> = ({ onAddCountry }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as HTMLFormElement;

    const newCountry: Country = {
      name: target.countryName.value,
      capital: target.capitalCity.value,
      population: target.population.value,
      area: target.area.value,
      description: target.message.value,
      likes: 0,
      id: String(Math.random()),
      isDeleted: false,
    };

    onAddCountry(newCountry);

    target.countryName.value = "";
    target.capitalCity.value = "";
    target.population.value = "";
    target.area.value = "";
    target.message.value = "";
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label>Country name</label>
        <input type="text" id="countryName" name="countryName" />
      </div>

      <div className={styles.formGroup}>
        <label>Capital City</label>
        <input type="text" id="capitalCity" name="capitalCity" />
      </div>

      <div className={styles.formGroup}>
        <label>Population</label>
        <input type="text" id="population" name="population" />
      </div>

      <div className={styles.formGroup}>
        <label>Area</label>
        <input type="text" id="area" name="area" />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message">Additional info</label>
        <textarea id="message" name="message"></textarea>
      </div>

      <button type="submit" className={styles.submitButton}>
        Add Country
      </button>
    </form>
  );
};

export default AddCountry;
