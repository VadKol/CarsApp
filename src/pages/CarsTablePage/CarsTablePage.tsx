import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import React, { useEffect, useMemo, useState } from 'react';
import { Bars } from 'react-loader-spinner';
import ReactPaginate from 'react-paginate';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { AddModal, CarItem, DeleteModal, EditModal } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import * as carsActions from '../../redux/slices/carsSlice';
import '../../styles/CarItem.scss';
import '../../styles/index.scss';
import '../../styles/Pagination.scss';
import '../../styles/transition.scss';

export const CarsTablePage: React.FC = () => {
  const dispatch = useAppDispatch();

  const { cars, loading, error } = useAppSelector(state => state.cars);
  const [query, setQuery] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [id, setId] = useState(0);
  const [currentPage, setCurrentPage] = useState(() => {
    const storedPage = localStorage.getItem('currentPage');
    return storedPage ? parseInt(storedPage, 10) : 0;
  });

  const itemsPerPage = 5;
  const pageCount = Math.ceil(cars.length / itemsPerPage);

  useEffect(() => {
    dispatch(carsActions.init());
  }, []);

  useEffect(() => {
    localStorage.setItem('currentPage', currentPage.toString());
  }, [currentPage]);

  const visibleCars = useMemo(() => {
    return cars.filter(car =>
      car.car.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, cars]);

  const handleQuery = (value: string) => {
    if (value === ' ') {
      return;
    }
    setQuery(value);
  };

  const handlePageChange = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentPageItems = [...visibleCars]
    .reverse()
    .slice(offset, offset + itemsPerPage);

  if (loading) {
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

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <section className="hero">
      <div className="hero-body p-5">
        <p className="title">Cars</p>
        <div>
          <Button
            variant="contained"
            color="success"
            size="large"
            onClick={() => setIsAdding(true)}
          >
            Add new car
          </Button>

          <TextField
            className=""
            type="text"
            label="Enter name"
            value={query}
            onChange={event => handleQuery(event.target.value)}
            variant="filled"
            fullWidth
            margin="normal"
          />
        </div>
        <div className="CarItem CarItem__header mb-4">
          <span className="CarItem__infoWrapper is-italic">Name</span>
          <span className="CarItem__infoWrapper is-italic">Model</span>
          <span className="CarItem__infoWrapper is-italic">Color</span>
          <span className="CarItem__infoWrapper is-italic">Year</span>
          <span className="CarItem__infoWrapper is-italic">VIN</span>
          <span className="CarItem__infoWrapper is-italic">Price</span>
          <span className="CarItem__infoWrapper is-italic">Availability</span>
        </div>

        <TransitionGroup component="div" className="CarItem__wrapper">
          {currentPageItems.map(carItem => (
            <CSSTransition key={carItem.id} timeout={1000} classNames="item">
              <CarItem
                carItem={carItem}
                handleIsDeleting={setIsDeleting}
                handleIsEditing={setIsEditing}
                setId={setId}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
        <ReactPaginate
          previousLabel={'Previous'}
          className="pagination"
          nextLabel={'Next'}
          breakLabel={'...'}
          pageCount={pageCount}
          onPageChange={handlePageChange}
          containerClassName={'pagination'}
          activeClassName={'active'}
          initialPage={currentPage}
        />
      </div>

      {isAdding && <AddModal setIsAdding={setIsAdding} />}
      {isEditing && <EditModal setIsEditing={setIsEditing} id={id} />}
      {isDeleting && <DeleteModal id={id} handleIsDeleting={setIsDeleting} />}
    </section>
  );
};
