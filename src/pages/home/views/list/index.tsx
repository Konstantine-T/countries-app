import React, {
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';
import AddCountry from '../../components/Form/AddCountry';
import { Country } from '../../reducer/reducer';
import { useVirtualizer } from '@tanstack/react-virtual';

const LazyCard = lazy(() => import('../../components/Card/Card'));
const LazyCardContent = lazy(() => import('../../components/Card/CardContent'));
const LazyCardHeader = lazy(() => import('../../components/Card/CardHeader'));
const LazyHero = lazy(() => import('../../components/Hero/Hero'));

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
    image: string;
    nameGeo: string;
    capitalGeo: string;
    descriptionGeo: string;
  }[];
  onDelete: (id: string) => void;
  onSort: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onAddCountry: (country: Country) => void;
}

function RowVirtualizerFixed() {
  const parentRef = React.useRef(null);

  const rowVirtualizer = useVirtualizer({
    count: 10000,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 35,
    overscan: 5,
  });

  return (
    <>
      <div
        ref={parentRef}
        className="List"
        style={{
          height: `200px`,
          width: `400px`,
          overflow: 'auto',
        }}
      >
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: '100%',
            position: 'relative',
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualRow) => (
            <div
              key={virtualRow.index}
              className={virtualRow.index % 2 ? 'ListItemOdd' : 'ListItemEven'}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: `${virtualRow.size}px`,
                transform: `translateY(${virtualRow.start}px)`,
              }}
            >
              Row {virtualRow.index}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

const CountriesView: React.FC<CountryProps> = ({
  countriesList,
  onSort,
  onAddCountry,
}) => {
  const handleSort = (e: React.MouseEvent<HTMLButtonElement>) => {
    onSort(e);
  };

  const [currentRef, setCurrentRef] = useState<HTMLDivElement | null>(null);

  const measuredRef = useCallback((node: any) => {
    if (node !== null) {
      setCurrentRef(node);
    }
  }, []);

  const rowVirtualizer = useVirtualizer({
    count: countriesList.length,
    getScrollElement: () => currentRef,
    estimateSize: () => 250,
    overscan: 6,
  });

  console.log(
    rowVirtualizer.getVirtualItems(),
    'Virtual items',
    rowVirtualizer.getTotalSize(),
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyHero />
      <div>
        <button onClick={handleSort}>Sort by Likes (asc)</button>
        <button onClick={handleSort}>Sort by Likes (desc)</button>
      </div>
      <AddCountry onAddCountry={onAddCountry} />
      <div
        ref={measuredRef}
        className="List"
        style={{
          height: `800px`,
          width: `80%`,
          overflow: 'auto',
          margin: 'auto',
        }}
      >
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: '100%',
            position: 'relative',
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualRow) => {
            const country = countriesList[virtualRow.index];
            return (
              <div
                key={virtualRow.index}
                className={
                  virtualRow.index % 2 ? 'ListItemOdd' : 'ListItemEven'
                }
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: `${virtualRow.size}px`,
                  transform: `translateY(${virtualRow.start}px)`,
                }}
              >
                <LazyCard key={country.id}>
                  <Link to={`country/${country.id}`} className="card-link">
                    <LazyCardHeader
                      name={country.name}
                      nameGeo={country.nameGeo}
                      image={country.image}
                    />
                  </Link>
                  <LazyCardContent {...country} />
                </LazyCard>
              </div>
            );
          })}
        </div>
      </div>
    </Suspense>
  );
};

export default CountriesView;
