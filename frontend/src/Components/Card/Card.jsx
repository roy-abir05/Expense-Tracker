import React from 'react'
import './Card.scss'
// import trashLogo from '/public/logo512.png';

const IncomeCard = ({ title, amount, date, logo }) => {
  return (
    <div className='CardContainer'>
        <div className='icon'>
            <img src={logo} alt="" />
        </div>
        <div className='Content'>
            <div className='Title'>{title}</div>
            <div className='AmountAndDate'>
                <div className='Amount'>Rs {amount}</div>
                <div className="Date">{date[0]}/{date[1]}/{date[2]}</div>
            </div>
        </div>
        <div className='Delete'>
            <img src="/TrashLogo.png" alt="" />
        </div>
    </div>
  )
}

export default IncomeCard