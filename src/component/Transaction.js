import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/Context";

const Transaction = () => {
  const { addTrans } = useContext(GlobalContext);
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000000),
      desc,
      amount,
    };
    addTrans(newTransaction);
    setDesc("");
    setAmount("");
  };
  return (
    <div>
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            value={desc}
            placeholder="Detail of Transaction"
            required
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="transactionamount">Transaction Amount</label>
          <input
            type="number"
            value={amount}
            id="transactionamount"
            placeholder="Value of transaction"
            required
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
};

export default Transaction;
