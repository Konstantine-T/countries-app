import { useState } from "react";
import "./App.css";
import DefaultLayout from "./layouts/default/index";
import About from "./pages/about/views";
import Contact from "./pages/contact/view";
import Country from "./pages/home/views/country/Country";
import CountriesView from "./pages/home/views/list";
import { BrowserRouter, Routes, Route } from "react-router-dom";

interface Country {
  name: string;
  capital: string;
  population: string;
  area: string;
  description: string;
  id: string;
  likes: number;
}

export const countries: Country[] = [
  {
    name: "Thailand",
    capital: "Bangkok",
    population: "65 mil",
    area: "513,120 square km",
    description:
      "Thailand is the only Southeast Asian country that was never colonized by an European country. In fact, in the Thai language, the name of the country is Prathet Thai which means “land of the free.” Very fitting! 2. Thailand is where you'll find both the smallest and the largest creatures.",
    id: "1",
    likes: 1,
  },
  {
    name: "China mate",
    capital: "Pekin??",
    population: "too many for our planet",
    area: "almost as big as russia",
    description:
      "China,[i] officially the People's Republic of China (PRC),[j] is a country in East Asia. With a population exceeding 1.4 billion, it is the world's second-most populous country after India, representing 17.4% of the world population. China spans the equivalent of five time zones and borders fourteen countries by land.[k] With an area of nearly 9.6 million square kilometers (3,700,000 sq mi), it is the third-largest country by total land area.[l] The country is divided into 33 province-level divisions: 22 provinces,[m] five autonomous regions, four municipalities, and two semi-autonomous special administrative regions. Beijing is the country's capital, while Shanghai is its most populous city by urban area and largest financial center.",
    id: "2",
    likes: 3,
  },
  {
    name: "Georgia",
    capital: "Tbilisi",
    population: "3 mil",
    area: "69 square km",
    description:
      "Georgia (Georgian: საქართველო, romanized: sakartvelo, IPA: [sakʰartʰʷelo] ⓘ) is a transcontinental country in Eastern Europe[10][11][12] and West Asia. It is part of the Caucasus region, bounded by the Black Sea to the west, Russia to the north and northeast, Turkey to the southwest, Armenia to the south, and Azerbaijan to the southeast. Georgia covers an area of 69,700 square kilometres (26,900 sq mi).[13] It has a population of 3.7 million,[b][14] of which over a third live in the capital and largest city, Tbilisi. Georgians, who are native to the region, constitute a majority of the country's population and are its titular nation.",
    id: "3",
    likes: 0,
  },
];

function App() {
  const [countriesList, setCountriesList] = useState(countries);

  const handleLike = (id: string) => {
    setCountriesList((prevList) =>
      prevList.map((country) =>
        country.id === id ? { ...country, likes: country.likes + 1 } : country
      )
    );
  };

  const handleSort = () => {
    setCountriesList((prevList) => {
      return [...prevList].sort((a, b) => b.likes - a.likes);
    });
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
