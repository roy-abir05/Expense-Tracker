import React, { useState } from 'react'
import './AddCard.scss'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addIncome } from '../../redux/slices/incomeReducer'
import { addExpense } from '../../redux/slices/expenseReducer'

const AddIncomeCard = ({ text, url }) => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState("");

    const handleOnSubmit = async (e) => {
        // e.preventDefault();

        // try{
        //     await axios.post(`http://localhost:5000/${url}`,{
        //         title,
        //         amount,
        //         date
        //     })
        // }
        // catch(e){
        //     console.log(e);
        // }
        
        const data = {
            title: title,
            amount: amount,
            date: date
        };

        if(url === 'Incomes')
            dispatch(addIncome(data));
        else
            dispatch(addExpense(data));

        setTitle("");
        setAmount(0);
        setDate("");
    }


  return (
    <>
        <div className='Title'>
            <input
                type='text'
                placeholder='Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </div>

        <div className='Amount'>
            <input
                type='number'
                placeholder='Amount'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
        </div>

        <div className='Date'>
            <input
                type='date'
                onChange={(e) => setDate(e.target.value)}
            />
        </div>

        <button className='Submit' onClick={handleOnSubmit}>
            Add {text}
        </button>
    </>
  )
}

export default AddIncomeCard