import '../App.css';

function ExpenseFilter({deleteAllExpenses, currentFilter,onChangeFilter}) {
  return (
      <div className="filter-list">
        <h3>Filter by Category:</h3>
        <button onClick={() => onChangeFilter('All')}>All</button>
        <button onClick={() => onChangeFilter('Food')}>Food</button>
        <button onClick={() => onChangeFilter('Transport')}>Transport</button>
        <button onClick={() => onChangeFilter('Bills')}>Bills</button>
        <button onClick={deleteAllExpenses}>Clear All</button>
      </div>
  )
}

export default ExpenseFilter;