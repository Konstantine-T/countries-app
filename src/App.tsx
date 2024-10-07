import "./App.css";
import DefaultLayout from "./layouts/default/index";
import About from "./pages/about/views";
import Contact from "./pages/contact/view";
import Country from "./pages/home/views/country/Country";
import CountriesView from "./pages/home/views/list";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<CountriesView />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="country/:id" element={<Country />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
