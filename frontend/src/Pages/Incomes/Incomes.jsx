import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import IncomeCard from '../../Components/Card/Card'
import AddIncomeCard from '../../Components/AddCard/AddCard'
import './Incomes.scss'
import axios from 'axios'

const Incomes = () => {

    const [incomes, setIncomes] = useState([]);

    const fetchIncomes = async () => {
        await axios.get("http://localhost:5000/Incomes").then((res)=>{

            let temp = [];
            for(let i=0; i<res.data.length; i++){
                let tempObj = {
                    title: res.data[i].title,
                    amount: res.data[i].amount,
                    date: res.data[i].date
                };
                temp[i] = tempObj;
            }
            setIncomes(temp);

        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        fetchIncomes();
    })

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
                <AddIncomeCard text={"Income"} url={"Incomes"}/>
            </div>
            <div className='RightPanel'>
                {
                    incomes.map((e)=>
                    (
                        <IncomeCard 
                            title={e.title}
                            amount={e.amount}
                            date={e.date}
                            logo={"/UpArrow.png"}
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