import { configureStore } from '@reduxjs/toolkit';
import serviceSlice from './slices/serviceSlice';
export default configureStore({
    reducer: {
        service: serviceSlice,
    },
  })