import '../../App.css';

function AddExpenseForm({
                          addExpense, description, category, setCategory,
                          amount,
                          setDescription,
                          setAmount,
                        }) {
  function handleSubmit(e) {
    e.preventDefault();

    const newExpense = {
      description: description,
      amount: amount,
      category: category,
      id: Date.now(),
    };

    addExpense(newExpense);
    setDescription("");
    setAmount(0);
    setCategory('All');

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
            <option value="food">Food</option>
            <option value="transport">Transport</option>
            <option value="bills">Bills</option>
            <option value="other">Other</option>
          </select>
          <button type="submit">Add Expense</button>
        </form>
      </div>
  );
}

export default AddExpenseForm;
