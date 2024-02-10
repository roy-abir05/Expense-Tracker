import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='NavContainer'>
        <img src="/ExpenseTrackerLogo.jpeg" alt="" id="appLogo"/>
        <ul>
            <Link to = {`/`} > <li className='Dashboard'>Dashboard</li> </Link>
            <Link to = {`/Incomes`} > <li className='Incomes'>Incomes</li> </Link>
            <Link to = {`/Expenses`} > <li className='Expenses'>Expenses</li> </Link>
        </ul>
    </div>
  )
}

export default Navbar