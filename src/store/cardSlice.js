import { createSlice } from '@reduxjs/toolkit';

const cardSlice = createSlice({
  name: 'card',
  initialState: {
    data: {},
  },

  reducers: {
    setCardData(state, action) {
      state.data = action.payload;
    },
  },
});

export const { setCardData } = cardSlice.actions;
export default cardSlice.reducer;
