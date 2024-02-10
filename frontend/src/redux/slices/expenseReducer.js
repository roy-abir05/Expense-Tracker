import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const expenseState = {
    expenses: []
}

export const fetchExpenses = createAsyncThunk(
    "expense/fetchExpenses",
    async () => {
        const response = await axios.get("http://localhost:5000/Expenses");
        return response.data;
    }
);

export const addExpense = createAsyncThunk(
    "expense/addExpense",
    async (data) => {
      const response = await axios.post("http://localhost:5000/Expenses", {
        title: data.title,
        amount: data.amount,
        date: data.date
      });
      return response.data;
    }
  );
  
  export const removeExpense = createAsyncThunk(
    "expense/removeExpense",
    async (data) => {
      const response = await axios.post("http://localhost:5000/ExpensesDelete", {
        title: data.title,
        amount: data.amount,
        date: data.date
      });
      return response.data;
    }
  );

const expenseSlice = createSlice({
    name: 'expense',
    initialState: expenseState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(addExpense.fulfilled, (state, action) => {
            state.expenses.push(action.payload[0]);
        })
        builder.addCase(fetchExpenses.fulfilled, (state, action)=>{
            state.expenses = action.payload;
        })
        builder.addCase(removeExpense.fulfilled, (state, action) => {
            // console.log(action.payload[0]);
            let index = state.expenses.indexOf(action.payload[0]);
            state.expenses.splice(index, 1);
        })
    }
});

export default expenseSlice.reducer;