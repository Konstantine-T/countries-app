import { useParams } from 'react-router-dom';
import styles from './Card.module.css';
import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

type CardContentProps = {
  capital: string;
  population: string;
  area: string;
  description: string;
  likes: number;
  id: string;
  isDeleted: boolean;
  capitalGeo: string;
  descriptionGeo: string;
};

const CardContent: React.FC<CardContentProps> = (props) => {
  const { lang } = useParams<{ lang: string }>();
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: async () => {
      await axios.delete(`http://localhost:3001/countries/${props.id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['countries']);
    },
  });

  const likeMutation = useMutation({
    mutationFn: async () => {
      const response = await axios.get(
        `http://localhost:3001/countries/${props.id}`,
      );
      const country = response.data;

      const updatedCountry = {
        ...country,
        likes: country.likes + 1,
      };

      await axios.put(
        `http://localhost:3001/countries/${props.id}`,
        updatedCountry,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['countries']);
    },
  });

  const handleDelete = async () => {
    deleteMutation.mutate();
  };

  const handleLike = async () => {
    likeMutation.mutate();
  };

  return (
    <div className={styles['card-content']}>
      <div className={styles['card-content']}>
        <button onClick={handleLike}>like button</button>
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

      <div>
        <button onClick={handleDelete} style={{ backgroundColor: 'red' }}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default CardContent;
