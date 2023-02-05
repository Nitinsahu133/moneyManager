// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetail, deleteTransaction} = props
  const {id, title, amount, type} = transactionDetail
  const onClickTransactionDelete = () => {
    deleteTransaction(id)
  }

  return (
    <li className="history-table-transaction">
      <p className="history-transaction-column">{title}</p>
      <p className="history-transaction-column">Rs {amount}</p>
      <p className="history-transaction-column">{type}</p>
      <button
        data-testid="delete"
        onClick={onClickTransactionDelete}
        className="history-transaction-delete-button"
        type="button"
      >
        <img
          className="delete-button-icon"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
        />
      </button>
    </li>
  )
}

export default TransactionItem
