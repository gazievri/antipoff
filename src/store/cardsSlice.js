import { createSlice } from '@reduxjs/toolkit';

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    data: [],
  },

  reducers: {
    setCardsData(state, action) {
      state.data = action.payload;
    },
  },
});

export const { setCardsData } = cardsSlice.actions;
export default cardsSlice.reducer;
