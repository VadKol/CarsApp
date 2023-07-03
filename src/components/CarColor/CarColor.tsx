import React from 'react';

interface Props {
  classCarItem: string,
  carColor: string,
}

export const CarColor: React.FC<Props> = ({ classCarItem, carColor }) => {
  const getCarColor = (color: string) => color.toLowerCase();

  return <div className={classCarItem} style={{ background: `${getCarColor(carColor)}` }}></div>;
};