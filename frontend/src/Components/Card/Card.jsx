import React from 'react'
import './Card.scss'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { removeIncome } from '../../redux/slices/incomeReducer'
import { removeExpense } from '../../redux/slices/expenseReducer'

const IncomeCard = ({ title, amount, date, logo, url }) => {

    const dispatch = useDispatch();

    const handleDelete = async (e) => {
        // e.preventDefault();

        // try{
        //     await axios.post(`http://localhost:5000/${url}Delete`,{
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
            dispatch(removeIncome(data));
        else
            dispatch(removeExpense(data));
    }

  return (
    <div className='CardContainer'>
        <div className='icon'>
            <img src={logo} alt="" />
        </div>
        <div className='Content'>
            <div className='Title'>{title}</div>
            <div className='AmountAndDate'>
                <div className='Amount'>Rs {amount}</div>
                <div className="Date">{date}</div>
            </div>
        </div>
        <div className='Delete' onClick={handleDelete}>
            <img src="/TrashLogo.png" alt="" />
        </div>
    </div>
  )
}

export default IncomeCard