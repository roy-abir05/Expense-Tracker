import React, { useState } from 'react'
import './AddCard.scss'
import axios from 'axios'

const AddIncomeCard = ({ text, url }) => {

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState();
    const [date, setDate] = useState("");

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        try{
            await axios.post(`http://localhost:5000/${url}`,{
                title,
                amount,
                date
            })
        }
        catch(e){
            console.log(e);
        }

        setTitle("");
        setAmount(0);
        setDate("");
    }

  return (
    <>
        <div className='Title'>
            <input
                type='text'
                placeholder='Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </div>

        <div className='Amount'>
            <input
                type='number'
                placeholder='Amount'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
        </div>

        <div className='Date'>
            <input
                type='date'
                onChange={(e) => setDate(e.target.value)}
            />
        </div>

        {/* <div className='Description'>
            <input
                type="text"
                placeholder='Description (Optional)'
            />
        </div> */}

        <button className='Submit' onClick={handleOnSubmit}>
            Add {text}
        </button>
    </>
  )
}

export default AddIncomeCard