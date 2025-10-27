import "./App.css";
import AddExpenseForm from "./components/AddExpenseForm/AddExpenseForm";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import Summary from "./components/Summary/Summary";
import { useState } from "react";
import ExpenseFilter from "./components/ExpenseFilter";

function App() {
  //STATE FOR LIST OF ALL EXPENSES
  const [expenseDetails, setExpenseDetails] = useState([]);

  //STATE FOR CURRENTLY SELECTED FILTER
  const [filterCategory, setFilterCategory] = useState('All');

  function addExpense(newExpense) {
    setExpenseDetails([...expenseDetails, newExpense]);
  }

  const deleteExpenses = (id) => {
    setExpenseDetails(expenseDetails.filter((item) => item.id !== id));
  };

  const deleteAllExpenses = () => {
    setExpenseDetails([]);
  }

  //Filter by Category part
  const filteredItems = filterCategory === 'All' ? expenseDetails :
      expenseDetails.filter((exp) => exp.category ===  filterCategory);

  const totalAmount = expenseDetails.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className={"app-container"}>
      <AddExpenseForm
        addExpense={addExpense}
      />
      <ExpenseList
        expenseDetails={filteredItems}
        deleteExpenses={deleteExpenses}
      />
      <ExpenseFilter currentFilter={filterCategory} onChangeFilter={setFilterCategory} deleteAllExpenses={deleteAllExpenses}/>
      <Summary size={expenseDetails.length} totalAmount={totalAmount}/>
    </div>
  );
}

export default App;
