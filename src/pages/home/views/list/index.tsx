import { lazy, Suspense, useState } from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";

const LazyCard = lazy(() => import("../../components/Card/Card"));
const LazyCardContent = lazy(() => import("../../components/Card/CardContent"));
const LazyCardHeader = lazy(() => import("../../components/Card/CardHeader"));
const LazyHero = lazy(() => import("../../components/Hero/Hero"));

interface CountryProps {
  countriesList: {
    name: string;
    capital: string;
    population: string;
    area: string;
    description: string;
    id: string;
    likes: number;
  }[];
  onLike: (id: string) => void;
  onSort: () => void;
}

const CountriesView: React.FC<CountryProps> = ({
  countriesList,
  onLike,
  onSort,
}) => {
  const handleSort = () => {
    onSort();
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyHero />
      <button onClick={handleSort}>Sort by Likes</button>
      <div className={styles["card-container"]}>
        {countriesList.map((country) => {
          return (
            <LazyCard key={country.id}>
              <Link to={`/country/${country.id}`} className="card-link">
                <LazyCardHeader name={country.name} />
              </Link>
              <LazyCardContent {...country} onLike={() => onLike(country.id)} />
            </LazyCard>
          );
        })}
      </div>
    </Suspense>
  );
};

export default CountriesView;
