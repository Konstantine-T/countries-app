import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles['header']}>
      <a href="#default" className={styles['logo']}>
        Bad ass site
      </a>
      <div className={styles["header-right"]}>
        <a href="">
          Smth on the right side of the header
        </a>
      </div>
    </header>
  );
};

export default Header;
