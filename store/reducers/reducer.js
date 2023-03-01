// import { ADD_ITEM, REMOVE_ITEM, CLEAR_ITEMS } from './actions';

// const initialState = {
//   items: [],
// };

// const itemReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_ITEM:
//       return {
//         ...state,
//         items: [...state.items, action.payload],
//       };
//     case REMOVE_ITEM:
//       return {
//         ...state,
//         items: state.items.filter(item => item.id !== action.payload),
//       };
//     case CLEAR_ITEMS:
//       return {
//         ...state,
//         items: [],
//       };
//     default:
//       return state;
//   }
// };

// export default itemReducer;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearItems: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearItems } = itemSlice.actions;

export default itemSlice.reducer;

