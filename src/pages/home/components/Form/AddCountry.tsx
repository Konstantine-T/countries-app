import { useState } from 'react';
import { Country } from '../../reducer/reducer';
import styles from './AddCountry.module.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface AddCountryProps {
  onAddCountry: (newCountry: Country) => void;
}

const AddCountry: React.FC<AddCountryProps> = ({ onAddCountry }) => {
  const { lang } = useParams<{ lang: string }>();

  const [name, setName] = useState('');
  const [nameEng, setNameEng] = useState('');
  const [capital, setCapital] = useState('');
  const [capitalEng, setCapitalEng] = useState('');
  const [population, setPopulation] = useState('');
  const [area, setArea] = useState('');
  const [description, setDescription] = useState('');
  const [descriptionEng, setDescriptionEng] = useState('');
  const [image, setImage] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name) {
      const newCountry: Country = {
        name: nameEng,
        capital: capitalEng,
        population,
        area,
        description: descriptionEng,
        likes: 0,
        id: String(Math.random()),
        isDeleted: false,
        image: image,
        nameGeo: name,
        capitalGeo: capital,
        descriptionGeo: description,
      };

      await axios.post('http://localhost:3001/countries', newCountry);

      onAddCountry(newCountry);

      setName('');
      setCapital('');
      setPopulation('');
      setArea('');
      setDescription('');
      setImage(null);
    }
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    if (e.target.id === 'countryNameEng') {
      setNameEng(e.target.value);
      if (e.target.value.length > 15) {
        e.target.style.color = 'red';
        alert("Country name can't be longer than 15 characters");
      }
      e.target.style.color = 'white';
    }
    if (e.target.id === 'capitalCityEng') {
      setCapitalEng(e.target.value);
      if (e.target.value.length > 15) {
        e.target.style.color = 'red';
        alert("Capital city name can't be longer than 15 characters");
      }
      e.target.style.color = 'white';
    }
    if (e.target.id === 'population') {
      setPopulation(e.target.value);
    }
    if (e.target.id === 'area') {
      setArea(e.target.value);
    }
    if (e.target.id === 'messageEng') {
      setDescriptionEng(e.target.value);
    }
    if (e.target.id === 'countryName') {
      setName(e.target.value);
      if (e.target.value.length > 15) {
        e.target.style.color = 'red';
        alert("Country name can't be longer than 15 characters");
      }
      e.target.style.color = 'white';
    }
    if (e.target.id === 'capitalCity') {
      setCapital(e.target.value);
      if (e.target.value.length > 15) {
        e.target.style.color = 'red';
        alert("Capital city name can't be longer than 15 characters");
      }
      e.target.style.color = 'white';
    }
    if (e.target.id === 'message') {
      setDescription(e.target.value);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert(
        lang === 'en'
          ? 'Please select a .jpg or .png image'
          : 'გთხოვთ აირჩიოთ .jpg ან .png სურათი',
      );
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label>{lang === 'en' ? 'Country name' : 'ქვეყნის სახელი'}</label>
        <input
          type="text"
          id="countryName"
          name="countryName"
          onChange={handleChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label>
          {lang === 'en'
            ? 'Country name in english'
            : 'ქვეყნის სახელი (ინგლისურად)'}
        </label>
        <input
          type="text"
          id="countryNameEng"
          name="countryName"
          onChange={handleChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label>{lang === 'en' ? 'Capital City' : 'დედაქალაქი'}</label>
        <input
          type="text"
          id="capitalCity"
          name="capitalCity"
          onChange={handleChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label>
          {lang === 'en'
            ? 'Capital City in English'
            : 'დედაქალაქი (ინგლისურად)'}
        </label>
        <input
          type="text"
          id="capitalCityEng"
          name="capitalCity"
          onChange={handleChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label>{lang === 'en' ? 'Population' : 'პოპულაცია'}</label>
        <input
          type="text"
          id="population"
          name="population"
          onChange={handleChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label>{lang === 'en' ? 'Area' : 'ფართობი'}</label>
        <input type="text" id="area" name="area" onChange={handleChange} />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message">
          {lang === 'en' ? 'Additional info' : 'დამატებითი ინფო'}
        </label>
        <textarea
          id="message"
          name="message"
          onChange={handleChange}
        ></textarea>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message">
          {lang === 'en'
            ? 'Additional info in English'
            : 'დამატებითი ინფო (ინგლისურად)'}
        </label>
        <textarea
          id="messageEng"
          name="message"
          onChange={handleChange}
        ></textarea>
      </div>

      <div className={styles.formGroup}>
        <label>{lang === 'en' ? 'Upload image' : 'ატვირთეთ სურათი'}</label>
        <input type="file" accept=".jpg,.png" onChange={handleImageChange} />
      </div>

      <button type="submit" className={styles.submitButton}>
        {lang === 'en' ? 'Add Country' : 'დამატება'}
      </button>
    </form>
  );
};

export default AddCountry;
