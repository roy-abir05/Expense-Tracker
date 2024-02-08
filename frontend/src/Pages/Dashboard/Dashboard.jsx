import React, { useState, useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import { Chart as ChartJS } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import './Dashboard.scss'
import axios from 'axios'

const Dashboard = () => {

  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);

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
        fetchIncomes();
    })
    useEffect(() => {
      fetchExpenses();
    })

  return (
    <>
    <Navbar />
    <div className='GraphContainer'>
      <Line 
        data={{
          labels: incomes.map((e)=>e.date),
          datasets: [
            {
              label: "Income",
              data: incomes.map((e)=>e.amount),
                backgroundColor: "#064FF0",
                borderColor: "#064FF0",
            },
            {
              label: "Expense",
              data: expenses.map((e) => e.amount),
              backgroundColor: "#FF3030",
              borderColor: "#FF3030",
            },
          ],
        }
      }
      />
    </div>
    </>
  )
}

export default Dashboard