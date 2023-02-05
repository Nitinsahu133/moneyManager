import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    transactionsList: [],
    title: '',
    amount: '',
    type: transactionTypeOptions[0].optionId,
  }

  deleteTransaction = id => {
    this.setState(prevState => ({
      transactionsList: prevState.transactionsList.filter(
        eachTransaction => eachTransaction.id !== id,
      ),
    }))
  }

  onChangeTitleInput = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmountInput = event => {
    this.setState({amount: event.target.value})
  }

  onChangeTypeInput = event => {
    this.setState({type: event.target.value})
  }

  onClickAddButton = event => {
    event.preventDefault()
    const {title, type, amount} = this.state
    const typeText = transactionTypeOptions.find(
      eachItem => eachItem.optionId === type,
    )

    const {displayText} = typeText

    if (title !== '' && amount !== '') {
      this.setState(prevState => ({
        transactionsList: [
          ...prevState.transactionsList,
          {id: uuidv4(), title, type: displayText, amount},
        ],
        type: transactionTypeOptions[0].optionId,
        amount: '',
        title: '',
      }))
    }
  }

  render() {
    const {transactionsList, title, type, amount} = this.state

    return (
      <div className="main-container">
        <div className="element-container">
          <div className="welcome-card">
            <h1 className="profile-name">Hi, Richard</h1>
            <p className="welcome-paragraph">
              Welcome back to your
              <span className="welcome-money-manager-text"> Money Manager</span>
            </p>
          </div>
          <MoneyDetails
            transactionsList={transactionsList}
            transactionTypeOptions={transactionTypeOptions}
          />
          <div className="form-history-container">
            <form className="form">
              <h1 className="form-heading">Add Transaction</h1>
              <label className="input-label" htmlFor="titleInput">
                TITLE
              </label>
              <input
                value={title}
                onChange={this.onChangeTitleInput}
                className="input-element"
                type="text"
                id="titleInput"
                placeholder="TITLE"
              />
              <label className="input-label" htmlFor="amountInput">
                AMOUNT
              </label>
              <input
                value={amount}
                onChange={this.onChangeAmountInput}
                className="input-element"
                type="number"
                id="amountInput"
                placeholder="AMOUNT"
              />
              <label className="input-label" htmlFor="typeInput">
                TYPE
              </label>
              <select
                onChange={this.onChangeTypeInput}
                value={type}
                id="typeInput"
                className="input-element"
              >
                {transactionTypeOptions.map(eachOption => (
                  <option value={eachOption.optionId} key={eachOption.optionId}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
              <div>
                <button
                  onClick={this.onClickAddButton}
                  className="add-button"
                  type="submit"
                >
                  ADD
                </button>
              </div>
            </form>
            <div className="history-container">
              <h1 className="history-heading">History</h1>
              <div className="history-table-header-container">
                <p className="history-table-header-text">Title</p>
                <p className="history-table-header-text">Amount</p>
                <p className="history-table-header-text">Type</p>
              </div>
              <ul className="history-ul">
                {transactionsList.map(eachTransaction => (
                  <TransactionItem
                    transactionDetail={eachTransaction}
                    key={eachTransaction.id}
                    deleteTransaction={this.deleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
