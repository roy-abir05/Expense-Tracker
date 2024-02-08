import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='NavContainer'>
        <img src="/ExpenseTrackerLogo.jpeg" alt="" id="appLogo"/>
        <ul>
            <Link to = {`/`} > <li>Dashboard</li> </Link>
            <Link to = {`/Incomes`} > <li>Incomes</li> </Link>
            <Link to = {`/Expenses`} > <li>Expenses</li> </Link>
        </ul>
    </div>
  )
}

export default Navbar