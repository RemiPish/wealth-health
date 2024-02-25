import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './employeeSlice';


const store = configureStore({
    reducer: {
        employee: employeeReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;