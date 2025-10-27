import '../../App.css';

function Summary({size, totalAmount}) {
  return (
      <div className={'summary-container'}>
        <h2>Summary</h2>
        <p>Total Expenses: {size} </p>
        <p>Total Amount: ${totalAmount.toFixed(2)}</p>
      </div>
  )
}

export default Summary;
