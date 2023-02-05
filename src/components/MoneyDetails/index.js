// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {transactionsList, transactionTypeOptions} = props

  let totalIncome = 0

  transactionsList.forEach(eachTransaction => {
    if (eachTransaction.type === transactionTypeOptions[0].displayText) {
      totalIncome += parseInt(eachTransaction.amount)
    }
  })

  let totalExpenses = 0

  transactionsList.forEach(eachTransaction => {
    if (eachTransaction.type === transactionTypeOptions[1].displayText) {
      totalExpenses += parseInt(eachTransaction.amount)
    }
  })

  return (
    <div className="total-details-card-container">
      <div className="total-details-card balance-card-color">
        <img
          className="total-details-image"
          alt="balance"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
        />
        <div className="total-details-balance-container">
          <p className="total-type-head">Your Balance</p>
          <p data-testid="balanceAmount" className="total-balance">
            Rs {totalIncome - totalExpenses}
          </p>
        </div>
      </div>
      <div className="total-details-card income-card-color">
        <img
          className="total-details-image"
          alt="income"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
        />
        <div className="total-details-balance-container">
          <p className="total-type-head">Your Income</p>
          <p data-testid="incomeAmount" className="total-balance">
            Rs {totalIncome}
          </p>
        </div>
      </div>
      <div className="total-details-card expenses-card-color">
        <img
          className="total-details-image"
          alt="expenses"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
        />
        <div className="total-details-balance-container">
          <p className="total-type-head">Your Expenses</p>
          <p data-testid="expensesAmount" className="total-balance">
            Rs {totalExpenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
