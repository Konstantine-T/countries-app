import { lazy, Suspense } from "react";

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

const LazyCard = lazy(() => import("../../components/Card/Card"))
const LazyCardContent = lazy(() => import("../../components/Card/CardContent"))
const LazyCardHeader = lazy(() => import("../../components/Card/CardHeader"))
const LazyHero = lazy(() => import("../../components/Hero/Hero"))

const CountriesView = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyHero />
      <LazyCard>
        <LazyCardHeader name={thailand.name} />
        <LazyCardContent {...thailand} />
      </LazyCard>
    </Suspense>
  );
};

export default CountriesView;
