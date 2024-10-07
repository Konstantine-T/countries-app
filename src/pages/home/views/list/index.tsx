import { lazy, Suspense } from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";

interface Country {
  name: string;
  capital: string;
  population: string;
  area: string;
  description: string;
  id: string;
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
  },
  {
    name: "China mate",
    capital: "Pekin??",
    population: "too many for our planet",
    area: "almost as big as russia",
    description:
      "China,[i] officially the People's Republic of China (PRC),[j] is a country in East Asia. With a population exceeding 1.4 billion, it is the world's second-most populous country after India, representing 17.4% of the world population. China spans the equivalent of five time zones and borders fourteen countries by land.[k] With an area of nearly 9.6 million square kilometers (3,700,000 sq mi), it is the third-largest country by total land area.[l] The country is divided into 33 province-level divisions: 22 provinces,[m] five autonomous regions, four municipalities, and two semi-autonomous special administrative regions. Beijing is the country's capital, while Shanghai is its most populous city by urban area and largest financial center.",
    id: "2",
  },
  {
    name: "Georgia",
    capital: "Tbilisi",
    population: "3 mil",
    area: "69 square km",
    description:
      "Georgia (Georgian: საქართველო, romanized: sakartvelo, IPA: [sakʰartʰʷelo] ⓘ) is a transcontinental country in Eastern Europe[10][11][12] and West Asia. It is part of the Caucasus region, bounded by the Black Sea to the west, Russia to the north and northeast, Turkey to the southwest, Armenia to the south, and Azerbaijan to the southeast. Georgia covers an area of 69,700 square kilometres (26,900 sq mi).[13] It has a population of 3.7 million,[b][14] of which over a third live in the capital and largest city, Tbilisi. Georgians, who are native to the region, constitute a majority of the country's population and are its titular nation.",
    id: "3",
  },
];

const LazyCard = lazy(() => import("../../components/Card/Card"));
const LazyCardContent = lazy(() => import("../../components/Card/CardContent"));
const LazyCardHeader = lazy(() => import("../../components/Card/CardHeader"));
const LazyHero = lazy(() => import("../../components/Hero/Hero"));

const CountriesView = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyHero />
      <div className={styles["card-container"]}>
        {countries.map((country) => {
          return (
            <Link
              to={`/country/${country.id}`}
              key={country.id}
              className="card-link"
            >
              <LazyCard>
                <LazyCardHeader name={country.name} />
                <LazyCardContent {...country} />
              </LazyCard>
            </Link>
          );
        })}
      </div>
    </Suspense>
  );
};

export default CountriesView;
