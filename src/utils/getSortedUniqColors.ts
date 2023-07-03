import { CarType } from "../types/Car";


export const getSortedUniqColors = (cars: CarType[]): string[] => {
  const carColors = Array.from(new Set(cars.map(car => car.car_color)));
  const sortedCarColors = carColors.sort((prev, curr) => prev.localeCompare(curr));

  return sortedCarColors;
};