import { configureStore } from '@reduxjs/toolkit'
import incomeReducer from './slices/incomeReducer'
import expenseReducer from './slices/expenseReducer';

export const store = configureStore({
    reducer: {
        income: incomeReducer,
        expense: expenseReducer
    }
});