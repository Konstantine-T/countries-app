import { Link, useParams } from 'react-router-dom';
import styles from './Header.module.css';
import LangSwitch from './LangSwitch';

const Header: React.FC = () => {
  const { lang } = useParams<{ lang: string }>();
  return (
    <header className={styles["header"]}>
      <div>
        <Link to="/">
          <h2 className={styles['logo']}>
            {lang === 'en' ? 'Home' : 'მთავარი'}
          </h2>
        </Link>
        <Link to="about">
          <h2 className={styles['logo']}>
            {lang === 'en' ? 'About' : 'ჩვენს შესახებ'}
          </h2>
        </Link>
        <Link to="contact">
          <h2 className={styles['logo']}>
            {lang === 'en' ? 'Contact' : 'კონტაქტი'}
          </h2>
        </Link>
      </div>
      <div className={styles['header-right']}>
        <LangSwitch />
      </div>
    </header>
  );
};

export default Header;
