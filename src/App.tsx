import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Header, NotFoundPage } from './components';
import { Cars, Contacts } from './pages';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="Cars">
          <Route index element={<Cars />} />
        </Route>

        <Route path="Contacts" element={<Contacts />} />

        <Route path="/" element={<Navigate to="Cars" replace />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
