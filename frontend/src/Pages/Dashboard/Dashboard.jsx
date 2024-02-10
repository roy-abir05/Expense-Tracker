import React, { useEffect, useRef } from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import { Chart as ChartJS } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import * as d3 from 'd3'
import './Dashboard.scss'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';
import { fetchIncomes } from '../redux/slices/incomeReducer';
import { fetchExpenses } from '../../redux/slices/expenseReducer';

const Dashboard = () => {

  const items = useSelector(state => state);
  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchIncomes());
        dispatch(fetchExpenses())
    })

    // const svgRef = useRef();

    // useEffect(()=>{
    //   // setting up svg
    //   const width = 800;
    //   const height = 400;
    //   const svg = d3.select(svgRef.current)
    //   .attr('width', width)
    //   .attr('height', height)
    //   .style('background', 'none')
    //   .style('overflow', 'visible');

    //   // setting the scaling
    //   const xScale = d3.scaleLinear()
    //   .domain([0, data.length-1])
    //   .range([0, width]);
      
    //   const yScale = d3.scaleLinear()
    //   .domain([0, Math.max(...data)*1.2])
    //   .range([height, 0]);

    //   const generateScaledLine = d3.line()
    //   .x((d, i)=> xScale(i))
    //   .y(yScale)
    //   .curve(d3.curveCardinal);


    //   // setting up the scale
    //   const xAxis = d3.axisBottom(xScale)
    //   .ticks(data.length)
    //   .tickFormat(i => i+1);

    //   const yAxis = d3.axisLeft(yScale)
    //   .ticks((Math.max(...data)/10));
    //   // .tickFormat(i => i*(Math.max(...data)/height));

    //   svg.append('g')
    //   .call(xAxis)
    //   .attr('transform', `translate(0, ${height})`);
    //   svg.append('g')
    //   .call(yAxis);

    //   // scattreing dots
    //   svg.append('g')
    //   .selectAll('dot')
    //   .data([data])
    //   .enter()
    //   .append('circle')
    //   .attr("cx", function (d) { return xScale(d[0]); } )
    //   .attr("cy", function (d) { return yScale(d[0]); } )
    //   .attr('r', 2)
    //   .style("fill", 'red');


    //   // setting up the data for the svg

    //   svg.selectAll('.line')
    //   .data([data])
    //   .join('path')
    //   .attr('d', d => generateScaledLine(d))
    //   .attr('fill', 'none')
    //   .attr('stroke', 'red');

    //   // svg.append("path")
    //   // .datum(data)
    //   // .attr("fill", "none")
    //   // .attr("stroke", "steelblue")
    //   // .attr("stroke-width", 1.5)
    //   // .attr("d", d3.line()
    //   //   .x(function(d) { return xScale(d[1]) })
    //   //   .y(function(d) { return yScale(d[1]) })
    //   //   );

    // }, [data]);

  return (
    <>
    <Navbar />
    <div className='GraphContainer'>
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
    </div>
    {/* <div className='GraphContainer'>
      <svg ref={svgRef}></svg>
    </div> */}
    </>
  )
}

export default Dashboard