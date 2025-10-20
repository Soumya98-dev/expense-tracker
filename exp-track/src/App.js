import "./App.css";
import AddExpenseForm from "./components/AddExpenseForm/AddExpenseForm";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import Summary from "./components/Summary/Summary";
import { useState } from "react";

function App() {
  const [expenseDetails, setExpenseDetails] = useState([]);

  function addExpense(e) {}

  return (
    <div className={"app-container"}>
      <AddExpenseForm onAddExpense={expenseDetails} />
      <ExpenseList />
      <Summary />
    </div>
  );
}

export default App;
