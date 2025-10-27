import '../../App.css';
import {useState} from "react";

function AddExpenseForm({addExpense}) {

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('Food');

  function handleSubmit(e) {
    e.preventDefault();

    const newExpense = {
      description: description,
      amount: Number(amount),
      category: category,
      id: Date.now(),
    };

    addExpense(newExpense);
    setDescription("");
    setAmount(0);
    setCategory('Food');

  }

  const changeDescription = (e) => {
    setDescription(e.target.value);
  };

  const changeAmount = (e) => {
    setAmount(e.target.value);
  };

  return (
      <div className={"expense-from"}>
        <form onSubmit={handleSubmit}>
          <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={changeDescription}
          />
          <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={changeAmount}
          />
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Bills">Bills</option>
            <option value="Other">Other</option>
          </select>
          <button type="submit">Add Expense</button>
        </form>
      </div>
  );
}

export default AddExpenseForm;
