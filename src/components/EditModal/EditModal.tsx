import React from 'react';

import * as creaturesActions from '../../redux/slices/carsSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import { ModalForm } from '../ModalForm';

import { CarType } from '../../types/Car';

type Props = {
	setIsEditing: (isEditing: boolean) => void;
	id: number;
};

export const EditModal: React.FC<Props> = ({ setIsEditing, id }) => {
	const dispatch = useAppDispatch();
	const cars: CarType[] = useAppSelector(state => state.cars.cars);

	const selectedCar = cars.find(carItem => carItem.id === id);

	if (!selectedCar) {
		return null;
	}

	const handleCreatures = (newCar: CarType) => {
		dispatch(creaturesActions.update({ id: selectedCar.id, carItem: newCar }));
	};

	return (
		<ModalForm
			carItem={selectedCar}
			handleCreatures={handleCreatures}
			handleClose={setIsEditing}
			title={`Edit: ${selectedCar.car} ${selectedCar.car_model}`}
			disabledValue={true}
		/>
	);
};
