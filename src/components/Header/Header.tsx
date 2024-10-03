import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles["header"]}>
      <div>
      <Link to="/">
        <h2 className={styles["logo"]}>Home</h2>
      </Link>
      <Link to="about">
        <h2 className={styles["logo"]}>About</h2>
      </Link>
      </div>
      <div className={styles["header-right"]}>
        <a href="">Smth on the right side of the header</a>
      </div>
    </header>
  );
};

export default Header;
