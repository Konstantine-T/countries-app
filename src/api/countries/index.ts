import { httpClient } from '..';
import { Country } from 'src/pages/home/reducer/reducer';

export const getCountries = (): Promise<Country[]> => {
  return httpClient.get<Country[]>('/countries').then((res) => res.data);
};
