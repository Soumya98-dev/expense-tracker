function AddExpenseForm({
  addExpense,
  description,
  amount,
  setDescription,
  setAmount,
}) {
  function handleSubmit(e) {
    e.preventDefault();

    const newExpense = {
      description: description,
      amount: amount,
      id: Date.now(),
    };

    addExpense(newExpense);
    setDescription("");
    setAmount(0);
  }

  const changeDescription = (e) => {
    setDescription(e.target.value);
  };

  const changeAmount = (e) => {
    setAmount(e.target.value);
  };

  console.log(description + " " + amount);

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
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default AddExpenseForm;
