import { useState } from "react";
import { Country } from "../../reducer/reducer";
import styles from "./AddCountry.module.css";

interface AddCountryProps {
  onAddCountry: (newCountry: Country) => void;
}

const AddCountry: React.FC<AddCountryProps> = ({ onAddCountry }) => {
  const [name, setName] = useState("");
  const [capital, setCapital] = useState("");
  const [population, setPopulation] = useState("");
  const [area, setArea] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newCountry: Country = {
      name,
      capital,
      population,
      area,
      description,
      likes: 0,
      id: String(Math.random()),
      isDeleted: false,
    };

    onAddCountry(newCountry);

    setName("");
    setCapital("");
    setPopulation("");
    setArea("");
    setDescription("");
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (e.target.id === "countryName") {
      setName(e.target.value);
      if (e.target.value.length > 15) {
        e.target.style.color = "red";
        alert("Country name can't be longer than 15 characters");
      }
      e.target.style.color = "white";
    }
    if (e.target.id === "capitalCity") {
      setCapital(e.target.value);
      if (e.target.value.length > 15) {
        e.target.style.color = "red";
        alert("Capital city name can't be longer than 15 characters");
      }
      e.target.style.color = "white";
    }
    if (e.target.id === "population") {
      setPopulation(e.target.value);
    }
    if (e.target.id === "area") {
      setArea(e.target.value);
    }
    if (e.target.id === "message") {
      setDescription(e.target.value);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label>Country name</label>
        <input
          type="text"
          id="countryName"
          name="countryName"
          onChange={handleChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label>Capital City</label>
        <input
          type="text"
          id="capitalCity"
          name="capitalCity"
          onChange={handleChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label>Population</label>
        <input
          type="text"
          id="population"
          name="population"
          onChange={handleChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label>Area</label>
        <input type="text" id="area" name="area" onChange={handleChange} />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message">Additional info</label>
        <textarea
          id="message"
          name="message"
          onChange={handleChange}
        ></textarea>
      </div>

      <button type="submit" className={styles.submitButton}>
        Add Country
      </button>
    </form>
  );
};

export default AddCountry;
