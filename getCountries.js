import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const fetchAndSaveCountries = async () => {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    const countries = response.data;


    const formattedCountries = countries.map((country) => ({
      name: country.name.common || 'Unknown',
      capital: country.capital ? country.capital[0] : 'No Capital',
      population: country.population.toString(),
      area: country.area.toString(),
      description: country.status || 'No Description Available',
      id: uuidv4(),
      likes: 0,
      isDeleted: false,
      image: country.flags ? country.flags.png : '',

      nameGeo: '',
      capitalGeo: '',
      descriptionGeo: '',
    }));

    for(let i = 0; i < formattedCountries.length; i++) {
        await axios.post('http://localhost:3001/countries', formattedCountries[i]);
      console.log(`${i}: Added country: ${formattedCountries[i].name}`);
    }

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error fetching countries:', error);
  }
};

fetchAndSaveCountries();