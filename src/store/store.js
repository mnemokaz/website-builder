import {configureStore} from '@reduxjs/toolkit';
import {appSlice} from './reducer';

const store = configureStore({
  reducer: appSlice.reducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
