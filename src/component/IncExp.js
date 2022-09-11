import React, { useContext } from 'react';
import { GlobalContext } from '../context/Context';

const IncExp = () => {
  const {transactions} = useContext(GlobalContext )
  const myIncome = transactions.map((transaction)=>Number(transaction.amount));
  const totalIncome = myIncome.filter((elem)=>elem > 0).reduce((total,current)=>total+current,0).toFixed(2)
  const totalExpense = Math.abs(myIncome.filter((elem)=>elem < 0).reduce((total,current)=>total+current,0).toFixed(2))
  return (
    <div  className='inc-exp-container'>
        <div> 
            <h4>Income</h4>
            <p className='money'>${totalIncome}</p>
        </div>
        <div><h4>Expense</h4>
        <p className='money'>${totalExpense}</p></div>
    </div>
  )
}

export default IncExp