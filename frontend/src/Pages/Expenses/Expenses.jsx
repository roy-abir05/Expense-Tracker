import React from 'react'
import Card from '../../Components/Card/Card.jsx'
import AddCard from '../../Components/AddCard/AddCard.jsx'
import './Expenses.scss'

const Expenses = () => {
  return (
    <div className='Container'>
        <div className='Heading'>Expenses</div>
        <div className='TotalIncome'>
            <span className='TotalIncomeText'>Total Expense: </span> <span className='TotalAmountEx'> Rs 3920</span>
        </div>
        <div className='Content'>
            <div className="LeftPanel">
                <AddCard text={"Expense"}/>
            </div>
            <div className='RightPanel'>
                <Card title={"Shopify"} amount={8000} date={[21, 1, 2024]} logo={"/DownArrow.png"}/>
                <Card title={"Developer Salary"} amount={100000} date={[1, 2, 2024]} logo={"/DownArrow.png"}/>
            </div>
        </div>
    </div>
  )
}

export default Expenses