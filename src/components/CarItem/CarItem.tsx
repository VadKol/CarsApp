import Button from '@mui/material/Button';
import classNames from 'classnames';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/CarItem.scss';
import { CarType } from '../../types/Car';
import { CarColor } from '../CarColor';

type Props = {
  carItem: CarType;
  handleIsDeleting: (isOpen: boolean) => void;
  handleIsEditing: (isEditing: boolean) => void;
  setId: (id: number) => void;
};

export const CarItem: React.FC<Props> = ({
  carItem,
  handleIsDeleting,
  handleIsEditing,
  setId,
}) => {
  const {
    id,
    car,
    car_model,
    car_color,
    car_model_year,
    car_vin,
    price,
    availability,
  } = carItem;

  const [isEdited, setIsEdited] = useState(false);

  const handleEdit = () => {
    setId(id);
    handleIsEditing(true);
    setIsEdited(true);
  };

  const handleDelete = () => {
    setId(id);
    handleIsDeleting(true);
  };

  return (
    <div className={classNames('CarItem', { 'is-italic': isEdited })}>
      <span className="CarItem__infoWrapper is-size-4">{car}</span>
      <span className="CarItem__infoWrapper is-size-5">{car_model}</span>
      <span className="CarItem__infoWrapper is-size-5">
			<CarColor classCarItem={'CarItem__color'} carColor={car_color} />
				{car_color}
			</span>
      <span className="CarItem__infoWrapper is-size-5">{car_model_year}</span>
      <span className="CarItem__infoWrapper is-size-7">{car_vin}</span>
      <span className="CarItem__infoWrapper is-size-5">{price}</span>
      <span className="CarItem__infoWrapper is-size-5">{availability ? 'Available' : 'Not available'}</span>

      <div className="CarItem__buttons">
        <Link to={`/Cars/${id}`} className="button is-link is-contained mr-3">
          Info
        </Link>

        <Button
          type="submit"
          variant="contained"
          color="info"
          className="mr-3"
          onClick={handleEdit}
        >
          Edit
        </Button>

        <Button
          type="submit"
          variant="contained"
          color="error"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};
