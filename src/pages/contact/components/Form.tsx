import styles from "./Form.module.css";

const Form: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as HTMLFormElement;

    const data = {
      firstName: target.firstName.value,
      lastName: target.lastName.value,
      email: target.email.value,
      message: target.message.value,
    };

    console.log(data);

    target.firstName.value = "";
    target.lastName.value = "";
    target.email.value = "";
    target.message.value = "";
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" name="firstName" />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" name="lastName" />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message"></textarea>
      </div>

      <button type="submit" className={styles.submitButton}>
        Submit
      </button>
    </form>
  );
};

export default Form;
