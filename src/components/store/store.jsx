import { configureStore } from '@reduxjs/toolkit';
import nameReducer from './dataSlice';


const store = configureStore({
  reducer: {
    name: nameReducer,
    
  },
});

export default store;

