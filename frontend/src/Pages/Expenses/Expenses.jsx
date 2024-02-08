import React, { useState, useEffect } from 'react'
import Card from '../../Components/Card/Card.jsx'
import AddCard from '../../Components/AddCard/AddCard.jsx'
import Navbar from '../../Components/Navbar/Navbar.jsx'
import './Expenses.scss'
import axios from 'axios'

const Expenses = () => {

    const [expenses, setExpenses] = useState([]);

    const fetchExpenses = async () => {
        await axios.get("http://localhost:5000/Expenses").then((res)=>{

            let temp = [];
            for(let i=0; i<res.data.length; i++){
                let tempObj = {
                    title: res.data[i].title,
                    amount: res.data[i].amount,
                    date: res.data[i].date
                };
                temp[i] = tempObj;
            }
            setExpenses(temp);

        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        fetchExpenses();
    })

  return (
    <>
    <Navbar />
    <div className='Container'>
        <div className='Heading'>Expenses</div>
        <div className='TotalIncome'>
            <span className='TotalIncomeText'>Total Expense: </span> <span className='TotalAmountEx'> Rs 3920</span>
        </div>
        <div className='Content'>
            <div className="LeftPanel">
                <AddCard text={"Expense"} url={"Expenses"}/>
            </div>
            <div className='RightPanel'>
                {
                    expenses.map((e)=>
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