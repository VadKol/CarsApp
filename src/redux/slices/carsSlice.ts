import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchCars } from '../../api/carsAPI';
import { CarType } from '../../types/Car';

export interface CarsState {
  cars: CarType[];
  loading: boolean;
  error: string;
}

const initialState: CarsState = {
  cars: [],
  loading: false,
  error: '',
};

export const init = createAsyncThunk('cars/fetch', async () => {
  const localData = window.localStorage.getItem('persist:root');

  if (localData){
    const persistWrapper = JSON.parse(localData);

    return JSON.parse(persistWrapper.cars);
  }

  const result = await fetchCars();

  return result;
});

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    addCars: (state, action: PayloadAction<CarType[]>) => {
      state.cars = action.payload;
    },
    clear: state => {
      state.cars = [];
    },
    add: (state, action: PayloadAction<CarType>) => {
      state.cars.push(action.payload);
    },
    remove: (state, action: PayloadAction<number>) => {
      state.cars = state.cars.filter(carItem => carItem.id !== action.payload);
    },
    update: (
      state,
      action: PayloadAction<{ id: number; carItem: CarType }>
    ) => {
      state.cars = state.cars.map(carItem =>
        carItem.id === action.payload.id ? action.payload.carItem : carItem
      );
    },
  },
  extraReducers: builder => {
    builder.addCase(init.pending, state => {
      state.loading = true;
    });

    builder.addCase(init.fulfilled, (state, action) => {
      state.cars = action.payload;
      state.loading = false;
    });

    builder.addCase(init.rejected, state => {
      state.error = 'Oops... An error occurred. Try to reload the page';
      state.loading = false;
    });
  },
});

export const { addCars, clear, add, remove, update } = carsSlice.actions;

export default carsSlice.reducer;