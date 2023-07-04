import React, { useState } from 'react';
import { Box, SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import classNames from 'classnames';

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
  const [isSpeedDialOpen, setIsSpeedDialOpen] = useState(false);

  const handleEdit = () => {
    setId(id);
    handleIsEditing(true);
    setIsEdited(true);
    setIsSpeedDialOpen(false);
  };

  const handleDelete = () => {
    setId(id);
    handleIsDeleting(true);
    setIsSpeedDialOpen(false);
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
      <span className="CarItem__infoWrapper is-size-5">
        {availability ? 'Available' : 'Not available'}
      </span>

      <Box sx={{ position: 'absolute', right: '10px', display: 'inline-block' }}>
        <SpeedDial

          ariaLabel="Car actions"
          icon={<SpeedDialIcon />}
          open={isSpeedDialOpen}
          onOpen={() => setIsSpeedDialOpen(true)}
          onClose={() => setIsSpeedDialOpen(false)}
          direction="left"
        >
          <SpeedDialAction
            key="edit"
            icon={<EditIcon />}
            tooltipTitle="Edit"
            onClick={handleEdit}
          />
          <SpeedDialAction
            key="delete"
            icon={<DeleteIcon />}
            tooltipTitle="Delete"
            onClick={handleDelete}
          />
        </SpeedDial>
      </Box>
    </div>
  );
};
