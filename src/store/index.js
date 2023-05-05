import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './cardSlice';
import cardsReducer from './cardsSlice';
import authSlice from './authSlice';

export default configureStore({
  reducer: {
    card: cardReducer,
    cards: cardsReducer,
    auth: authSlice,
  },
});
