import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import React from 'react';
import { CarType } from '../../types/Car';
import { FormField } from '../FormField';

type Props = {
  carItem?: CarType;
  handleCreatures: (creatures: CarType) => void;
  handleClose: (isOpened: boolean) => void;
  title: string;
  disabledValue?: boolean;
};

export const ModalForm: React.FC<Props> = ({
  carItem,
  handleCreatures,
  handleClose,
  title,
  disabledValue,
}) => {
  if (!carItem) {
    return null;
  }

  const [selectedCar, setSelectedCar] = React.useState<CarType>(carItem);

  const {
    car,
    car_model,
    car_color,
    car_model_year,
    car_vin,
    price,
    availability,
  } = selectedCar;

  console.log(selectedCar);

  const tempCar: CarType = {
    id: carItem.id,
    car,
    car_model,
    car_color,
    car_model_year,
    car_vin,
    price,
    availability,
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log(e.target.value);
    console.log(e.target.name);

    if (value === ' ') {
      return;
    }

    setSelectedCar(prev => ({
      ...prev,
      [e.target.name]: typeof value === 'string' ? value : +value,
    }));
  };

  const handleSumbit = (
    event: React.FormEvent<HTMLFormElement>,
    newCreature: CarType
  ) => {
    event.preventDefault();

    handleCreatures(newCreature);
    handleClose(false);
  };

  const handleAvailabilityToggle = () => {
    setSelectedCar(prev => ({
      ...prev,
      availability: !prev.availability,
    }));
  };

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={() => handleClose(false)} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <button
            type="submit"
            className="delete"
            aria-label="close"
            onClick={() => handleClose(false)}
          />
        </header>
        <form action="" onSubmit={event => handleSumbit(event, tempCar)}>
          <section className="modal-card-body">
            <FormField
              value={car}
              placeholder="Name"
              type="text"
              handleChange={handleChange}
              name="car"
              disabledVal={disabledValue}
            />

            <FormField
              value={car_model}
              placeholder="Model"
              type="text"
              handleChange={handleChange}
              name="car_model"
              disabledVal={disabledValue}
            />
            <FormField
              value={car_color}
              placeholder="Color"
              type="text"
              handleChange={handleChange}
              name="car_color"
            />

            <FormField
              value={car_model_year}
              placeholder="Year"
              type="text"
              handleChange={handleChange}
              name="car_model_year"
              disabledVal={disabledValue}
            />

            <FormField
              value={car_vin}
              placeholder="VIN"
              type="text"
              handleChange={handleChange}
              name="car_vin"
              disabledVal={disabledValue}
            />
            <FormField
              value={price}
              placeholder="Price"
              type="text"
              handleChange={handleChange}
              name="price"
            />

            <div className="field">
              <div className="control is-flex is-align-items-center">
                <Typography>Not available</Typography>
                <Switch
                  checked={availability}
                  onChange={handleAvailabilityToggle}
                />
                <Typography>Available</Typography>
              </div>
            </div>
          </section>

          <footer className="modal-card-foot">
            <Button
              type="submit"
              variant="contained"
              color="success"
              className="mr-5"
            >
              Save car
            </Button>
            <Button
              type="button"
              variant="outlined"
              color="error"
              onClick={() => handleClose(false)}
            >
              Cancel
            </Button>
          </footer>
        </form>
      </div>
    </div>
  );
};
