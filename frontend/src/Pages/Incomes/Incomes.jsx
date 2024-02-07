import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import IncomeCard from '../../Components/Card/Card'
import AddIncomeCard from '../../Components/AddCard/AddCard'
import './Incomes.scss'

const Incomes = () => {
  return (
    <>
    <Navbar />
    <div className='Container'>
        <div className='Heading'>Incomes</div>
        <div className='TotalIncome'>
            <span className='TotalIncomeText'>Total Income: </span> <span className='TotalAmount'> Rs 15200</span>
        </div>
        <div className='Content'>
            <div className="LeftPanel">
                <AddIncomeCard text={"Income"}/>
            </div>
            <div className='RightPanel'>
                <IncomeCard title={"Shopify"} amount={8000} date={[21, 1, 2024]} logo={"/UpArrow.png"}/>
                <IncomeCard title={"Developer Salary"} amount={100000} date={[1, 2, 2024]} logo={"/UpArrow.png"}/>
            </div>
        </div>
    </div>  
    </>
  )
}

export default Incomes