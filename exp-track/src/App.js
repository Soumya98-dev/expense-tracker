import "./App.css";
import AddExpenseForm from "./components/AddExpenseForm/AddExpenseForm";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import Summary from "./components/Summary/Summary";
import { useState } from "react";

function App() {
  const [expenseDetails, setExpenseDetails] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  function addExpense(newExpense) {
    setExpenseDetails([...expenseDetails, newExpense]);
  }

  return (
    <div className={"app-container"}>
      <AddExpenseForm
        addExpense={addExpense}
        description={description}
        amount={amount}
        setDescription={setDescription}
        setAmount={setAmount}
      />
      <ExpenseList />
      <Summary />
    </div>
  );
}

export default App;
