import { useState } from "react";
import styles from "./Form.module.css";
import { useParams } from "react-router-dom";

const Form: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { lang } = useParams<{ lang: string }>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      firstName,
      lastName,
      email,
      message,
    };

    console.log(data);

    setFirstName("");
    setLastname("");
    setEmail("");
    setMessage("");
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (e.target.id === "firstName") {
      setFirstName(e.target.value);
      if (e.target.value.length > 10) {
        e.target.style.color = "red";
        alert("first name can't be longer than 10 characters");
      }
      e.target.style.color = "white";
    }
    if (e.target.id === "lastName") {
      setLastname(e.target.value);
      if (e.target.value.length > 10) {
        e.target.style.color = "red";
        alert("last name can't be longer than 10 characters");
      }
      e.target.style.color = "white";
    }
    if (e.target.id === "email") {
      setEmail(e.target.value);
    }
    if (e.target.id === "message") {
      setMessage(e.target.value);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="firstName">
          {lang === "en" ? "First Name" : "სახელი"}
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          onChange={handleChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="lastName">
          {lang === "en" ? "Last Name" : "გვარი"}
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          onChange={handleChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email">{lang === "en" ? "Email" : "მეილი"}</label>
        <input type="email" id="email" name="email" onChange={handleChange} />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message">
          {lang === "en" ? "Message" : "რამე ჩაგვიწერეთ"}
        </label>
        <textarea
          id="message"
          name="message"
          onChange={handleChange}
        ></textarea>
      </div>

      <button type="submit" className={styles.submitButton}>
        {lang === "en" ? "Submit" : "ეგაა"}
      </button>
    </form>
  );
};

export default Form;
