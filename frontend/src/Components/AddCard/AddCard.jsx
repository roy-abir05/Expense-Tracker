import React from 'react'
import './AddCard.scss'

const AddIncomeCard = ({ text }) => {
  return (
    <>
        <div className='Title'>
            <input
                type='text'
                placeholder='Name'
            />
        </div>

        <div className='Amount'>
            <input
                type='number'
                placeholder='amount'
            />
        </div>

        <div className='Date'>
            <input
                type='date'
            />
        </div>

        <div className='Description'>
            <input
                type="text"
                placeholder='Description (Optional)'
            />
        </div>

        <button className='Submit'>
            Add {text}
        </button>
    </>
  )
}

export default AddIncomeCard