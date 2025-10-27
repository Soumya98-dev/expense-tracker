import '../../App.css';

function ExpenseList({ expenseDetails, deleteExpenses }) {
  return (
    <div className={"expense-list"}>
      <div className={"item-list"}>
        {expenseDetails.map((list) => (
          <div key={list.id}>
            <p>
              {list.description} - {list.amount} ({list.category})
              <span onClick={() => deleteExpenses(list.id)}>❌</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpenseList;
