import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);
  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    };

    addTransaction(newTransaction);
    setText("");
    setAmount("");
  };
  return (
    <>
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form=control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={e => {
              setText(e.target.value);
            }}
            placeholder="Enter Text"
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount
            {/* <br /> (negative - expense, positive - income) */}
          </label>
          <input
            type="number"
            value={amount}
            onChange={e => {
              setAmount(e.target.value);
            }}
            placeholder="Add amount"
          />
        </div>
        <button className="add-btn">Add Transaction</button>
        <button
          onClick={e => {
            e.preventDefault();

            const dltTransaction = {
              id: Math.floor(Math.random() * 100000000),
              text,
              amount: -amount
            };
            addTransaction(dltTransaction);
            setText("");
            setAmount("");
          }}
          className="dlt-btn"
        >
          Add Expense
        </button>
      </form>
    </>
  );
};
export default AddTransaction;
