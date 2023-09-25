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

    addContent1ComponentAction: (state, action) => {
      state.content1 = [...state.content1, action.payload];
      state.total = state.total + 1;
    },

    deleteComponentAction: (state, action) => {
      state.header = [
        ...state.header.filter(comp => comp.id !== action.payload),
      ];
      state.content1 = [
        ...state.content1.filter(comp => comp.id !== action.payload),
      ];
      state.content2 = [
        ...state.content2.filter(comp => comp.id !== action.payload),
      ];
      state.content3 = [
        ...state.content3.filter(comp => comp.id !== action.payload),
      ];
      state.footer = [
        ...state.footer.filter(comp => comp.id !== action.payload),
      ];
    },
    addFooterComponentAction: (state, action) => {
      state.footer = [...state.footer, action.payload];
      state.total = state.total + 1;
    },

    deleteFooterComponentAction: (state, action) => {
      state.footer = [
        ...state.footer.filter(comp => comp.id !== action.payload),
      ];
    },

    changeTypeAction: (state, action) => {
      state.type = action.payload;
      state.total = 1;
      state.header = [];
      state.footer = [];
      state.content1 = [];
      state.content2 = [];
      state.content3 = [];
    },
  },
});
