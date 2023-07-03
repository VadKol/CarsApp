import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { CarPage, Cars, Contacts } from './pages';
import { Header, NotFoundPage } from './components';

export const App = () => {
	return (
		<div className="App">
			<Header />

			<Routes>
				<Route path="Cars">
					<Route index element={<Cars />} />

					<Route path=":carId" element={<CarPage />} />
				</Route>

				<Route path="Contacts" element={<Contacts />} />

				<Route path="/" element={<Navigate to="Cars" replace />} />

				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</div>
	);
};
