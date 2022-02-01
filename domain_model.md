Domain model 




Classes and Methods

Class = Account {                   
    constructor(name)
    this.name
    this.date
    this.accountNo
    this.balance

Methods:
deposit(date, amount)
    withdrawal(date, amount)


getBalance() // not sure no longer neccessary. Thinking of updating through transactionData class instead
}


Class = TransactionData {
    constructor(new Date() credit, debit, balance)
    //this. ```constructor arguments

    Methods:
    
    deposit(date, amount)
    withdrawal(date, amount)

    
}


Class = Statement {

Methods:

printStatement()

}






```
date       || credit  || debit  || balance
14/01/2012 ||         || 500.00 || 2500.00
13/01/2012 || 2000.00 ||        || 3000.00
10/01/2012 || 1000.00 ||        || 1000.00
```