export interface Country {
  name: string;
  capital: string;
  population: string;
  area: string;
  description: string;
  id: string;
  likes: number;
  isDeleted: boolean;
}

type State = Country[];

type Action =
  | { type: "LIKE_COUNTRY"; payload: string }
  | { type: "SORT_COUNTRIES_ASC" }
  | { type: "SORT_COUNTRIES_DESC" }
  | { type: "DELETE_COUNTRY"; payload: string }
  | { type: "RETURN_COUNTRY"; payload: string }
  | { type: "ADD_COUNTRY"; payload: Country };

export const initialCountries: State = [
  {
    name: "Thailand",
    capital: "Bangkok",
    population: "65 mil",
    area: "513,120 square km",
    description:
      "Thailand is the only Southeast Asian country that was never colonized by an European country. In fact, in the Thai language, the name of the country is Prathet Thai which means 'land of the free.' Very fitting! Thailand is where you'll find both the smallest and the largest creatures.",
    id: "1",
    likes: 1,
    isDeleted: false,
  },
  {
    name: "China mate",
    capital: "Pekin??",
    population: "too many for our planet",
    area: "almost as big as russia",
    description:
      "China, officially the People's Republic of China (PRC), is a country in East Asia. With a population exceeding 1.4 billion, it is the world's second-most populous country after India, representing 17.4% of the world population.",
    id: "2",
    likes: 3,
    isDeleted: false,
  },
  {
    name: "Georgia",
    capital: "Tbilisi",
    population: "3 mil",
    area: "69 square km",
    description:
      "Georgia is a transcontinental country in Eastern Europe and West Asia. It is part of the Caucasus region, bounded by the Black Sea to the west, Russia to the north, Turkey to the southwest, and Armenia to the south.",
    id: "3",
    likes: 0,
    isDeleted: false,
  },
];

export const countriesReducer = (state: State, action: Action): State => {
  if (action.type === "LIKE_COUNTRY") {
    return state.map((country) =>
      country.id === action.payload
        ? { ...country, likes: country.likes + 1 }
        : country
    );
  }

  if (action.type === "SORT_COUNTRIES_DESC") {
    return [...state].sort((a, b) => b.likes - a.likes);
  }

  if (action.type === "SORT_COUNTRIES_ASC") {
    return [...state].sort((a, b) => a.likes - b.likes);
  }

  if (action.type === "DELETE_COUNTRY") {
    if (confirm("u sure mate?")) {
      const countryToDelete = state.find(
        (country) => country.id === action.payload
      );

      const newState = state.filter((country) => country.id !== action.payload);

      if (countryToDelete) {
        return [...newState, { ...countryToDelete, isDeleted: true }];
      }
    }
  }

  if (action.type === "RETURN_COUNTRY") {
    return state.map((country) => {
      if (country.id === action.payload) {
        return { ...country, isDeleted: false };
      }
      return country;
    });
  }

  if (action.type === "ADD_COUNTRY") {
    return [...state, action.payload];
  }

  return state;
};
