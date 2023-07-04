import React from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import * as creaturesActions from '../../redux/slices/carsSlice';

import { Button, Typography } from '@mui/material';
import { CarType } from '../../types/Car';

type Props = {
  id: number;
  handleIsDeleting: (isOpen: boolean) => void;
};

export const DeleteModal: React.FC<Props> = ({ id, handleIsDeleting }) => {
  const dispatch = useAppDispatch();
  const creatures: CarType[] = useAppSelector(state => state.cars.cars);
  const carItem = creatures.find(carItem => carItem.id === id);

  if (carItem === undefined) {
    return null;
  }

  const { car, car_model, car_color, car_model_year, car_vin, price } = carItem;

  const handleDelete = (creatureId: number) => {
    dispatch(creaturesActions.remove(creatureId));
  };

  return (
    <div className="modal is-active">
      <div
        className="modal-background"
        onClick={() => handleIsDeleting(false)}
      />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">
            Delete {car} {car_model}?
          </p>
          <button
            type="submit"
            className="delete is-outlined"
            aria-label="close"
            onClick={() => handleIsDeleting(false)}
          />
        </header>
        <section className="modal-card-body">
          <Typography>{`Name: ${car}`}</Typography>
          <Typography>{`Model: ${car_model}`}</Typography>
          <Typography>{`Color: ${car_color}`}</Typography>
          <Typography>{`Year: ${car_model_year}`}</Typography>
          <Typography>{`VIN: ${car_vin}`}</Typography>
          <Typography>{`Price: ${price}`}</Typography>
        </section>
        <footer className="modal-card-foot">
          <Button
            className="mr-5"
            variant="contained"
            color="error"
            onClick={() => {
              handleDelete(id);
              handleIsDeleting(false);
            }}
          >
            Delete
          </Button>
          <Button
            variant="outlined"
            color="info"
            onClick={() => handleIsDeleting(false)}
          >
            Cancel
          </Button>
        </footer>
      </div>
    </div>
  );
};
