import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import {  NotFoundPage } from '../components/NotFoundPage';
import { CarsTablePage, Contacts } from '../pages';

export const PageRouter: React.FC = () => {
  return (
    <Routes>
    <Route path="Cars">
      <Route index element={<CarsTablePage />} />
    </Route>

    <Route path="Contacts" element={<Contacts />} />

    <Route path="/" element={<Navigate to="Cars" replace />} />

    <Route path="*" element={<NotFoundPage />} />
  </Routes>
  );
};