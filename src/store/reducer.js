import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  type: 'landing',
  total: 1,
  header: [],
  content1: [],
  content2: [],
  content3: [],
  footer: [],
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addHeaderComponentAction: (state, action) => {
      state.header = [...state.header, action.payload];
      state.total = state.total + 1;
    },
    deleteHeaderComponentAction: (state, action) => {
      state.header = [
        ...state.header.filter(comp => comp.id !== action.payload),
      ];
    },
  },
});
