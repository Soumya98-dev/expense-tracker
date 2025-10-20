function AddExpenseForm({ onAddExpense }) {
  return (
    <div className={"expense-from"}>
      <form>
        <input type="text" placeholder="Description" />
        <input type="number" placeholder="Amount" />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default AddExpenseForm;
