import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './cardSlice';
import cardsReducer from './cardsSlice';

export default configureStore({
  reducer: {
    card: cardReducer,
    cards: cardsReducer,
  },
});
