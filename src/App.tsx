import "./App.css";
import Card from "~/Card/Card";
import CardContent from "~/Card/CardContent";
import CardHeader from "~/Card/CardHeader";
import Hero from "~/Hero/Hero";
import Layout from "~/Layout/Layout";

interface Country {
  name: string;
  capital: string;
  population: string;
  area: string;
  description: string;
}

const thailand: Country = {
  name: "Thailand",
  capital: "Bangkok",
  population: "65 mil",
  area: "513,120 square km",
  description:
    "Thailand is the only Southeast Asian country that was never colonized by an European country. In fact, in the Thai language, the name of the country is Prathet Thai which means “land of the free.” Very fitting! 2. Thailand is where you'll find both the smallest and the largest creatures.",
};

function App() {
  return (
    <Layout>
      <Hero />
      <Card>
        <CardHeader name={thailand.name}/>
        <CardContent {...thailand}/>
      </Card>
    </Layout>
  );
}

export default App;
