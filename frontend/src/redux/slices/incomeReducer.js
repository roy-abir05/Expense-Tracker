import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const incomeState = {
    incomes: []
}

export const fetchIncomes = createAsyncThunk(
    "income/fetchIncomes",
    async () => {
        const response = await axios.get("http://localhost:5000/Incomes");
        return response.data;
    }
);

export const addIncome = createAsyncThunk(
    "income/addIncome",
    async (data) => {
      const response = await axios.post("http://localhost:5000/Incomes", {
        title: data.title,
        amount: data.amount,
        date: data.date
      });
      return response.data;
    }
  );
  
  export const removeIncome = createAsyncThunk(
    "income/removeIncome",
    async (data) => {
      const response = await axios.post("http://localhost:5000/IncomesDelete", {
        title: data.title,
        amount: data.amount,
        date: data.date
      });
      return response.data;
    }
  );

const incomeSlice = createSlice({
    name: 'income',
    initialState: incomeState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(addIncome.fulfilled, (state, action) => {
            state.incomes.push(action.payload[0]);
        })
        builder.addCase(fetchIncomes.fulfilled, (state, action)=>{
            state.incomes = action.payload;
        })
        builder.addCase(removeIncome.fulfilled, (state, action) => {
            console.log(action.payload[0]);
            let index = state.incomes.indexOf(action.payload[0]);
            state.incomes.splice(index, 1);
        })
    }
});

export default incomeSlice.reducer;