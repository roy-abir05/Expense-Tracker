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

    const svgRef = useRef();

    useEffect(()=>{

      dispatch(fetchIncomes());
      dispatch(fetchExpenses());

      console.log(items);

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


      const xAxis = d3.axisBottom(xScale).ticks(dates.length);
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

    }, []);

    // ChartJS.options.animation = false;

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