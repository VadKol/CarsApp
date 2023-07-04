import React from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import * as carsActions from '../../redux/slices/carsSlice';

import { ModalForm } from '../ModalForm';

import { CarType } from '../../types/Car';

type Props = {
  setIsAdding: (isAdding: boolean) => void;
};

export const AddModal: React.FC<Props> = ({ setIsAdding }) => {
  const dispatch = useAppDispatch();
  const cars: CarType[] = useAppSelector(state => state.cars.cars);

  const maxId = [...cars].sort((c1, c2) => c2.id - c1.id)[0].id;

  const defaultCar: CarType = {
    id: maxId + 1,
    car: '',
    car_model: '',
    car_color: '',
    car_model_year: '',
    car_vin: '',
    price: '',
    availability: true,
  };

  const handleCars = (newCar: CarType) => {
    dispatch(carsActions.add(newCar));
  };

  return (
    <ModalForm
      carItem={defaultCar}
      handleCreatures={handleCars}
      handleClose={setIsAdding}
      title="Add a new car"
    />
  );
};
