import axios from 'axios';
import { CarType } from '../types/Car';

const url = process.env.REACT_APP_API_URL || 'https://myfakeapi.com/api';

export const fetchCars = async (): Promise<CarType[]> => {
  try {
    const response = await axios.get(url + '/cars');
    return response.data.cars;
  } catch (error) {
    throw new Error('Oops... An error occurred. Try to reload the page');
  }
};
