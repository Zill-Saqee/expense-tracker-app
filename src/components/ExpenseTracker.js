import React from "react";
import Balance from "./Balance";
import IncomeExpenses from "./IncomeExpenses";
import TransactionList from "./TransactionList";
import AddTransaction from "./AddTransaction";

import "../assets/css/ExpenseTracker.css";
import { GlobalProvider } from "../context/GlobalState";

function ExpenseTracker() {
  return (
    <GlobalProvider>
      <div className="wrap">
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <AddTransaction />
        </div>
        <div className="history-div">
          <TransactionList />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default ExpenseTracker;
