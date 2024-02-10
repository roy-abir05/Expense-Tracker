import React, { useState, useEffect } from 'react'
import Card from '../../Components/Card/Card.jsx'
import AddCard from '../../Components/AddCard/AddCard.jsx'
import Navbar from '../../Components/Navbar/Navbar.jsx'
import './Expenses.scss'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';
import { fetchExpenses } from '../../redux/slices/expenseReducer.js'

const Expenses = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchExpenses());
    })

    const items = useSelector((state) => state);
    
    let totalExpense = 0;
    items.expense.expenses && items.expense.expenses.map((e)=>{
        totalExpense += e.amount
    });

  return (
    <>
    <Navbar />
    <div className='Container'>
        <div className='Heading'>Expenses</div>
        <div className='TotalIncome'>
            <span className='TotalIncomeText'>Total Expense: </span> <span className='TotalAmountEx'> Rs {totalExpense}</span>
        </div>
        <div className='Content'>
            <div className="LeftPanel">
                <AddCard text={"Expense"} url={"Expenses"}/>
            </div>
            <div className='RightPanel'>
                {
                    items.expense.expenses.map((e)=>
                    (
                        <Card 
                            title={e.title}
                            amount={e.amount}
                            date={e.date}
                            logo={"/DownArrow.png"}
                            url={"Expenses"}
                        />
                    )
                    )
                }
                {/* <Card title={"Shopify"} amount={8000} date={[21, 1, 2024]} logo={"/DownArrow.png"}/>
                <Card title={"Developer Salary"} amount={100000} date={[1, 2, 2024]} logo={"/DownArrow.png"}/> */}
            </div>
        </div>
    </div>
    </>
  )
}

export default Expenses