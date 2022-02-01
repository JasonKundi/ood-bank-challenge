const TransactionData = require('./transactiondata.js');

const STARTING_BALANCE = 0

class Account {
    constructor(name, accountNo, STARTING_BALANCE) {
        this.name = name
        this.accountNo = accountNo
        this.transactions = []
        this.balance = STARTING_BALANCE

    }

    deposit(date, amount = 0) {
        if (amount > 0) {
        this.transactions.unshift(new TransactionData(new Date(), amount, this.balance))
        return this.balance += amount
        }
         
    }
    withdrawal(date, amount = 0) {
        if (amount > 0)
        this.transactions.unshift(new TransactionData(new Date(), amount, this.balance))
        return this.balance -= amount
    }
    

} 



module.exports = Account