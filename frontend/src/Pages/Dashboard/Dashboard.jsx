import React, { useEffect, useRef } from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import { Chart as ChartJS } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import * as d3 from 'd3'
import './Dashboard.scss'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';
import { fetchIncomes } from '../../redux/slices/incomeReducer';
import { fetchExpenses } from '../../redux/slices/expenseReducer';

const Dashboard = () => {

  const items = useSelector(state => state);
  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchIncomes());
        dispatch(fetchExpenses())
    })

    const svgRef = useRef();

    useEffect(()=>{

      let incomeData = [
        {title: "first", amount: 100, date: "2024-02-01"},
        {title: "second", amount: 200, date: "2024-02-02"},
        {title: "third", amount: 300, date: "2024-02-03"},
        {title: "fourth", amount: 400, date: "2024-02-04"},
        {title: "fifth", amount: 500, date: "2024-02-05"},
      ];
      let incomeDates=[], incomeAmounts=[];
      const parseTime = d3.timeParse("%Y-%m-%d");
      for(let i=0; i<items.income.incomes.length; i++){
        incomeData.push(items.income.incomes[i]);
      }
      for(let i=0; i<incomeData.length; i++){
        incomeDates.push(parseTime(incomeData[i].date));
        incomeAmounts.push(incomeData[i].amount);
      }

      let dates=[];
      for(let i=0; i<items.income.incomes.length; i++){
        dates.push(items.income.incomes[i]);
      }
      for(let i=0; i<items.expense.expenses.length; i++){
        dates.push(items.expense.expenses[i]);
      }

      const width = 500;
      const height = 350;
      const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .style('overflow', 'visible')
      .style('margin-top', '100px');


      // const parseTime = d3.timeParse("%Y-%m-%d");

      const xScale = d3.scaleTime()
      .domain(d3.extent(dates))
      .range([0, width]);
      const yScale = d3.scaleLinear()
      .domain([0, 100000])
      .range([height, 0]);


      const xAxis = d3.axisBottom(xScale).ticks(incomeDates.length);
      const yAxis = d3.axisLeft(yScale).ticks(10);
      svg.append('g')
      .call(xAxis)
      .attr('transform', `translate(0, ${height})`);
      svg.append('g')
      .call(yAxis);

      // svg.append('text')
      // .attr('x', width/2)
      // .attr('y', height+50)
      // .text('Date');

      // svg.append('text')
      // .attr('x', height/2)
      // .attr('y', -50)
      // .text('Amount in Rs');

      console.log(items.income.incomes);

      svg.selectAll()
      .data(items.income.incomes)
      .enter()
      .append('circle')
      .attr('cx', d=>xScale(d.date))
      .attr('cy', d=>yScale(d.amount))
      .attr('r', 2)
      .attr('fill', '#27E5FF');

      svg.selectAll()
      .data(items.expense.expenses)
      .enter()
      .append('circle')
      .attr('cx', d=>xScale(d.date))
      .attr('cy', d=>yScale(d.amount))
      .attr('r', 2)
      .attr('fill', '#f20202');

    }, [items]);

  return (
    <>
    <Navbar />
    {/* <div className='GraphContainer'>
      <Line 
        data={{
          labels: items.income.incomes.map((e)=>e.date),
          datasets: [
            {
              label: "Income",
              data: items.income.incomes.map((e)=>e.amount),
                backgroundColor: "#064FF0",
                borderColor: "#064FF0",
            },
            {
              label: "Expense",
              data: items.expense.expenses.map((e) => e.amount),
              backgroundColor: "#FF3030",
              borderColor: "#FF3030",
            },
          ],
        }
      }
      />
    </div> */}
    <div className='GraphContainer' id='#my_dataviz'>
      <svg ref={svgRef}></svg>
    </div>
    </>
  )
}

export default Dashboard