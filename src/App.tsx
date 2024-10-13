import { useReducer } from "react";
import "./App.css";
import DefaultLayout from "./layouts/default/index";
import About from "./pages/about/views";
import Contact from "./pages/contact/view";
import Country from "./pages/home/views/country/Country";
import CountriesView from "./pages/home/views/list";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  countriesReducer,
  initialCountries,
} from "./pages/home/reducer/reducer";

function App() {
  const [countriesList, dispatch] = useReducer(
    countriesReducer,
    initialCountries
  );

  const handleLike = (id: string) => {
    dispatch({ type: "LIKE_COUNTRY", payload: id });
  };

  const handleSort = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.textContent === "Sort by Likes (asc)") {
      dispatch({ type: "SORT_COUNTRIES_ASC" });
      return;
    }
    dispatch({ type: "SORT_COUNTRIES_DESC" });
  };

  const handleDelete = (id: string) => {
    dispatch({ type: "DELETE_COUNTRY", payload: id });
  };

  const handleReturn = (id: string) => {
    dispatch({ type: "RETURN_COUNTRY", payload: id });
  };

  const handleAddCountry = (country: any) => {
    dispatch({ type: "ADD_COUNTRY", payload: country });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route
            path="/"
            element={
              <CountriesView
                countriesList={countriesList}
                onLike={handleLike}
                onSort={handleSort}
                onDelete={handleDelete}
                onReturnDeleted={handleReturn}
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
