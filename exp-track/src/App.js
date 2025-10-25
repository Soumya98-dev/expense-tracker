import "./App.css";
import AddExpenseForm from "./components/AddExpenseForm/AddExpenseForm";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import Summary from "./components/Summary/Summary";
import { useState } from "react";

function App() {
  const [expenseDetails, setExpenseDetails] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('food');

  function addExpense(newExpense) {
    setExpenseDetails([...expenseDetails, newExpense]);
  }

  const deleteExpenses = (id) => {
    setExpenseDetails(expenseDetails.filter((item) => item.id !== id));
  };

  const deleteAllExpenses = () => {
    setExpenseDetails([]);
  }

  return (
    <div className={"app-container"}>
      <AddExpenseForm
        addExpense={addExpense}
        description={description}
        amount={amount}
        setDescription={setDescription}
        setAmount={setAmount}
        category={category}
        setCategory={setCategory}
      />
      <ExpenseList
        expenseDetails={expenseDetails}
        deleteExpenses={deleteExpenses}
        deleteAllExpenses={deleteAllExpenses}
      />
      <Summary />
    </div>
  );
}

export default App;
