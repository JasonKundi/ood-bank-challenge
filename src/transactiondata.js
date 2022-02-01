// holds date of transaction, type of transaction(deposit/withdrawal), updates balance
const DEFAULT_CREDIT = 0;
const DEFAULT_DEBIT = 0;

class TransactionData {
  construcutor(date = new Date(), DEFAULT_CREDIT, DEFAULT_DEBIT, balance) {
    this.date = date;
    this.credit = DEFAULT_CREDIT;
    this.debit = DEFAULT_DEBIT;
    this.balance = balance;
  }
}

module.exports = TransactionData
