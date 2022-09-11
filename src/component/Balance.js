import React,{useContext} from 'react';
import {GlobalContext} from "../context/Context"

const Balance = () => {
    
    const {transactions} = useContext(GlobalContext);
    const transactionAmounts = transactions.map(transaction => Number(transaction.amount));
    const balance = transactionAmounts.reduce((acc, item) => (acc + item), 0).toFixed(2);
  return (
    <div><h4>CURRENT BALANCE</h4>
    <h1 id="balance">${balance}</h1>
    </div>
  )
}

export default Balance