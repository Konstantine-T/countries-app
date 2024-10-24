import { lazy, Suspense, useState } from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import AddCountry from "../../components/Form/AddCountry";
import { Country } from "../../reducer/reducer";

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
    isDeleted: boolean;
    image: any;
    nameGeo: string;
    capitalGeo: string;
    descriptionGeo: string;
  }[];
  onLike: (id: string) => void;
  onDelete: (id: string) => void;
  onReturnDeleted: (id: string) => void;
  onSort: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onAddCountry: (country: Country) => void;
}

const CountriesView: React.FC<CountryProps> = ({
  countriesList,
  onLike,
  onDelete,
  onSort,
  onReturnDeleted,
  onAddCountry,
}) => {
  const handleSort = (e: React.MouseEvent<HTMLButtonElement>) => {
    onSort(e);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyHero />
      <div>
        <button onClick={handleSort}>Sort by Likes (asc)</button>
        <button onClick={handleSort}>Sort by Likes (desc)</button>
      </div>
      <AddCountry onAddCountry={onAddCountry} />
      <div className={styles["card-container"]}>
        {countriesList.map((country) => {
          return (
            <LazyCard key={country.id}>
              <Link to={`country/${country.id}`} className="card-link">
                <LazyCardHeader
                  name={country.name}
                  nameGeo={country.nameGeo}
                  image={country.image}
                />
              </Link>
              <LazyCardContent
                {...country}
                onLike={() => onLike(country.id)}
                onDelete={() => onDelete(country.id)}
                onReturnDeleted={() => onReturnDeleted(country.id)}
              />
            </LazyCard>
          );
        })}
      </div>
    </Suspense>
  );
};

export default CountriesView;
