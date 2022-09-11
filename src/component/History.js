import React,{useContext} from 'react';
import {GlobalContext} from "../context/Context"

const History = () => {
    const {transactions,deleteTrans} = useContext(GlobalContext);
   
   
  return (
    <div><h3>Transaction History</h3>
    <ul className='list'>
    {transactions.map((transaction)=>{
return <li key={transaction.id}>{transaction.desc} <span>{transaction.amount > 0 ? '+' : '-'}${Math.abs(transaction.amount)}</span> <button onClick={()=>{deleteTrans(transaction.id)}} className='delete-btn'>x</button></li>
    })}
        </ul>
    </div>
  )
}

export default History