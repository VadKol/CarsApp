import axios from 'axios';
import { CarType } from '../types/Car';

export const fetchCars = async (): Promise<CarType[]> => {
  try {
    const response = await axios.get('https://myfakeapi.com/api/cars/');
    return response.data.cars.map((carItem: CarType, index: number) => ({
      ...carItem,
      id: index + 1,
    }));
  } catch (error) {
    throw new Error('Oops... An error occurred. Try to reload the page');
  }
};
