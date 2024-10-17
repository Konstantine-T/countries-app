import { useState } from "react";
import styles from "./Form.module.css";

const Form: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          onChange={handleChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          onChange={handleChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" onChange={handleChange} />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          onChange={handleChange}
        ></textarea>
      </div>

      <button type="submit" className={styles.submitButton}>
        Submit
      </button>
    </form>
  );
};

export default Form;
