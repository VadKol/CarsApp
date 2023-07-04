import React from 'react';

import * as creaturesActions from '../../redux/slices/carsSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

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
					<p className="modal-card-title">Delete {car} {car_model}?</p>
					<button
						type="submit"
						className="delete is-outlined"
						aria-label="close"
						onClick={() => handleIsDeleting(false)}
					/>
				</header>
				<section className="modal-card-body">
					<p>
						{`Name: ${car}`}
					</p>
					<p>
						{`Model: ${car_model}`}
					</p>
					<p>
						{`Color: ${car_color}`}
					</p>
					<p>
						{`Year: ${car_model_year}`}
					</p>
					<p>
						{`VIN: ${car_vin}`}
					</p>
					<p>
						{`Price: ${price}`}
					</p>
				</section>
				<footer className="modal-card-foot">
					<button
						type="submit"
						className="button is-danger is-outlined"
						onClick={() => {
							handleDelete(id);
							handleIsDeleting(false);
						}}
					>
						Delete
					</button>
					<button
						type="submit"
						className="button is-info is-outlined"
						onClick={() => handleIsDeleting(false)}
					>
						Cancel
					</button>
				</footer>
			</div>
		</div>
	);
};
