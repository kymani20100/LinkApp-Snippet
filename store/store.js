import { configureStore } from '@reduxjs/toolkit';
import itemReducer from './reducers/reducer'

const store = configureStore({
  reducer: {
    items: itemReducer,
  },
});

export default store;

