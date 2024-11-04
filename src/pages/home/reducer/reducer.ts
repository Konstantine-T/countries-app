export interface Country {
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
}

type State = Country[];

type Action =
  | { type: 'SORT_COUNTRIES_ASC' }
  | { type: 'SORT_COUNTRIES_DESC' }
  | { type: 'DELETE_COUNTRY'; payload: string }
  | { type: 'ADD_COUNTRY'; payload: Country }
  | { type: 'SET_COUNTRIES'; payload: Country[] };

export const initialCountries: State = [];

export const countriesReducer = (state: State, action: Action): State => {
  if (action.type === 'SET_COUNTRIES') {
    return action.payload;
  }

  if (action.type === 'SORT_COUNTRIES_DESC') {
    return [...state].sort((a, b) => b.likes - a.likes);
  }

  if (action.type === 'SORT_COUNTRIES_ASC') {
    return [...state].sort((a, b) => a.likes - b.likes);
  }

  if (action.type === 'DELETE_COUNTRY') {
    if (confirm('u sure mate?')) {
      const countryToDelete = state.find(
        (country) => country.id === action.payload,
      );

      const newState = state.filter((country) => country.id !== action.payload);

      if (countryToDelete) {
        return [...newState, { ...countryToDelete, isDeleted: true }];
      }
    }
  }

  if (action.type === 'ADD_COUNTRY') {
    return [...state];
  }

  return state;
};
