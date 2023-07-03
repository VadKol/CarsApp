import React, { useEffect, useState } from 'react';
import { Bars } from 'react-loader-spinner';
import { Link, useParams } from 'react-router-dom';
import { NotFoundPage } from '../../components';
import { CarColor } from '../../components/CarColor';
import { useAppSelector } from '../../hooks/redux';
import '../../styles/CarItemPage.scss';
import { CarType } from '../../types/Car';

export const CarPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const cars: CarType[] = useAppSelector(state => state.cars.cars);
  const { carId } = useParams();

  const id = Number(carId);
  const carItem = cars.find(carItem => carItem.id === id);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      if (!carItem) {
        return;
      }

      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    try {
      fetchData();
    } catch {
      Error;
    }
  }, [carId]);

  if (!carItem || !id) {
    return <NotFoundPage />;
  }

  const { car, car_model, car_color, car_model_year, car_vin, price } = carItem;

  if (isLoading) {
    return (
      <Bars
        height={80}
        width={80}
        color="black"
        ariaLabel="Loading"
        visible={true}
        wrapperStyle={{
          display: 'grid',
          placeItems: 'center',
          height: 'calc(100vh - 52px)',
        }}
      />
    );
  }

  return (
    <section className="fullHeight hero is-small has-background-white has-text-black is-primary is-warning">
      <div className="hero-body">
        <section className="title">
          <div className="mb-6">
            <Link
              to="/Cars"
              className="button is-link is-outlined mr-3 is-size-5 is-transitioned"
            >
              Back to cars
            </Link>
          </div>

          <p className="is-size-2 has-text-black is-flex is-align-items-center">
            Name: <span className="is-size-4 ml-2">{car}</span>
          </p>
          <p className="is-size-2 has-text-black is-flex is-align-items-center">
            Model: <span className="is-size-4 ml-2">{car_model}</span>
          </p>
          <p className="is-size-2 has-text-black is-flex is-align-items-center">
            Color:
            <div className="is-flex is-align-items-center">
              <CarColor classCarItem={'CarItemPage__color ml-2 mr-2'} carColor={car_color} />
            </div>
            <span className='is-size-4'>
              {car_color}
            </span>
          </p>
          <p className="is-size-2 has-text-black is-flex is-align-items-center">
            Year: <span className="is-size-4 ml-2">{car_model_year}</span>
          </p>
          <p className="is-size-2 has-text-black is-flex is-align-items-center">
            VIN: <span className="is-size-4 ml-2">{car_vin}</span>
          </p>
          <p className="is-size-2 has-text-black is-flex is-align-items-center">
            Price: <span className="is-size-4 ml-2">{price}</span>
          </p>
        </section>
      </div>
    </section>
  );
};
