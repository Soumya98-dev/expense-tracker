import '../../App.css';

function ExpenseList({ expenseDetails, deleteExpenses, deleteAllExpenses }) {
  return (
    <div className={"expense-list"}>
      <div className={"item-list"}>
        {expenseDetails.map((list) => (
          <div key={list.id}>
            <p>
              {list.description} - {list.amount}
              <span onClick={() => deleteExpenses(list.id)}>❌</span>
            </p>
          </div>
        ))}
      </div>
      <div className="filter-list">
        <h3>Filter by Category:</h3>
        <span>All</span><span>Food</span><span>Transport</span><span>Bills</span>
        <span onClick={deleteAllExpenses}>Clear All</span>
      </div>
    </div>
  );
}

export default ExpenseList;
