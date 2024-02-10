import React, { useEffect} from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import IncomeCard from '../../Components/Card/Card'
import AddIncomeCard from '../../Components/AddCard/AddCard'
import './Incomes.scss'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';
import { fetchIncomes } from '../../redux/slices/incomeReducer'

const Incomes = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchIncomes());
    })

    const items = useSelector((state) => state);
    
    let totalIncome = 0;
    items.income.incomes && items.income.incomes.map((e)=>{
        totalIncome += e.amount
    });



  return (
    <>
    <Navbar />
    <div className='Container'>
        <div className='Heading'>Incomes</div>
        <div className='TotalIncome'>
            <span className='TotalIncomeText'>Total Income: </span> <span className='TotalAmount'> Rs {totalIncome}</span>
        </div>
        <div className='Content'>
            <div className="LeftPanel">
                <AddIncomeCard text={"Income"} url={"Incomes"}/>
            </div>
            <div className='RightPanel'>
                {
                    items.income.incomes && items.income.incomes.map((e)=>
                    (
                        <IncomeCard 
                            title={e.title}
                            amount={e.amount}
                            date={e.date}
                            logo={"/UpArrow.png"}
                            url={"Incomes"}
                        />
                    )
                    )
                }
                {/* <IncomeCard title={"Shopify"} amount={8000} date={[21, 1, 2024]} logo={"/UpArrow.png"}/>
                <IncomeCard title={"Developer Salary"} amount={100000} date={[1, 2, 2024]} logo={"/UpArrow.png"}/> */}
            </div>
        </div>
    </div>  
    </>
  )
}

export default Incomes