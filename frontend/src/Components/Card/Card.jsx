import React from 'react'
import './Card.scss'

const IncomeCard = ({ title, amount, date }) => {
  return (
    <div className='CardContainer'>
        <div className='icon'>
            <img src="../../../Public/logo192.png" alt="" />
        </div>
        <div className='Content'>
            <div className='Title'>{title}</div>
            <div className='AmountAndDate'>
                <div className='Amount'>Rs {amount}</div>
                <div className="Date">{date[0]}/{date[1]}/{date[2]}</div>
            </div>
        </div>
        <div className='Delete'>
            <img src="../../../Public/logo192.png" alt="" />
        </div>
    </div>
  )
}

export default IncomeCard