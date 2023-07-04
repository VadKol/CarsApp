import React from 'react';
import { Header } from './components';
import { PageRouter } from './router/router'

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />

      <PageRouter />
    </div>
  );
};
