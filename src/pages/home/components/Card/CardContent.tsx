import { useParams } from 'react-router-dom';
import styles from './Card.module.css';

type CardContentProps = {
  capital: string;
  population: string;
  area: string;
  description: string;
  likes: number;
  isDeleted: boolean;
  capitalGeo: string;
  descriptionGeo: string;
  onLike: () => void;
  onDelete: () => void;
  onReturnDeleted: () => void;
};

const CardContent: React.FC<CardContentProps> = (props) => {
  const { lang } = useParams<{ lang: string }>();

  return (
    <div className={styles['card-content']}>
      {props.isDeleted ? (
        <div>This card is deleted</div>
      ) : (
        <>
          <div className={styles['card-content']}>
            <button onClick={props.onLike}>like button</button>
            <span>{props.likes}</span>
          </div>
          <div className={styles['card-content']}>
            <div className={styles['country-property']}>
              <strong>Capital City:</strong>
              {lang === 'en' ? props.capital : props.capitalGeo}
            </div>
            <div className={styles['country-property']}>
              <strong>Population:</strong> {props.population.toLocaleString()}
            </div>
            <div className={styles['country-property']}>
              <strong>Area:</strong> {props.area}
            </div>
          </div>
          {lang === 'en' ? props.description : props.descriptionGeo}
        </>
      )}
      <div>
        {props.isDeleted ? (
          <button onClick={props.onReturnDeleted}>Return card</button>
        ) : (
          <button onClick={props.onDelete} style={{ backgroundColor: 'red' }}>
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default CardContent;
