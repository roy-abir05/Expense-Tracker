import React from 'react'
import './Navbar.scss'
// import '../../../public'

const Navbar = () => {
  return (
    <div className='NavContainer'>
        <img src="/ExpenseTrackerLogo.jpeg" alt="" id="appLogo"/>
        <ul>
            <li><a href="">Dashboard</a></li>
            <li><a href="">Incomes</a></li>
            <li><a href="">Expenses</a></li>
        </ul>
    </div>
  )
}

export default Navbar