import { useEffect, useReducer } from 'react';
import './App.css';
import DefaultLayout from './layouts/default/index';
import About from './pages/about/views';
import Contact from './pages/contact/view';
import Country from './pages/home/views/country/Country';
import CountriesView from './pages/home/views/list';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {
  countriesReducer,
  initialCountries,
} from './pages/home/reducer/reducer';
import axios from 'axios';

function App() {
  const [countriesList, dispatch] = useReducer(
    countriesReducer,
    initialCountries,
  );

  const handleSort = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.textContent === 'Sort by Likes (asc)') {
      dispatch({ type: 'SORT_COUNTRIES_ASC' });
      return;
    }
    dispatch({ type: 'SORT_COUNTRIES_DESC' });
  };

  const handleDelete = (id: string) => {
    dispatch({ type: 'DELETE_COUNTRY', payload: id });
  };

  const handleAddCountry = (country: any) => {
    dispatch({ type: 'ADD_COUNTRY', payload: country });
  };

  const fetchCountries = async () => {
    try {
      const response = await axios.get('/database.json');
      dispatch({ type: 'SET_COUNTRIES', payload: response.data.countries });
    } catch (error) {
      console.error('Error fetching countries data:', error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, [countriesList]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:lang" element={<DefaultLayout />}>
          <Route
            path="/:lang"
            element={
              <CountriesView
                countriesList={countriesList}
                onSort={handleSort}
                onDelete={handleDelete}
                onAddCountry={handleAddCountry}
              />
            }
          />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path="country/:id"
            element={<Country countriesList={countriesList} />}
          />
        </Route>
        <Route path="/" element={<Navigate to="/ka" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
