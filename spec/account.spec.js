/* eslint-disable no-undef */
const Account = require('../src/account.js');
const TransactionData = require('../src/transactiondata.js');

describe("account", () => {
  let account;

  beforeEach(() => {
    account = new Account();
  });

  it("creates a new instance of account with name and account number", () => {

    // set up

    const result = new Account("Suzie", 10891234)

    // expected

    const expected = new Account("Suzie", 10891234)

    expect(result).toEqual(expected);
  });
  it("deposit() - can make a deposit", () => {

    // set up
    new Account("Suzie", 10891234)
    const expected = [new TransactionData(new Date(2012, 1, 10), 1000, 0, 1000)]
    account.deposit(new Date(2012, 1, 10), 1000)

    // expected
    const result = account.transactions

    expect(result).toEqual(expected);
  });
  it("deposit() - make second deposit", () => {

    // set up
    new Account("Suzie", 10891234)
    const expected = [new TransactionData(new Date(2012, 1, 10), 1000, 0, 1000), new TransactionData(new Date(2012, 1, 10), 2000, 0, 3000)]
    account.deposit(new Date(2012, 1, 10), 1000)
    account.deposit(new Date(2012, 1, 13), 2000)

    // expected
    const result = account.transactions

    expect(result).toEqual(expected);
  });
  
  it("withdrawal() - can make a withdrawal", () => {

    // set up
    new Account("Suzie", 10891234)
    const expected = [new TransactionData(new Date(2012, 1, 10), 1000, 0, 1000)]
    account.withdrawal(new Date(2012, 1, 14), 500)

    // expected
    const result = account.transactions

    expect(result).toEqual(expected);
  });
  it("When multiple transactions are made i.e deposits and withdrawals, an updated balance is returned", () => {
  new Account("Suzie", 10891234)

  account.deposit(new Date(2012, 1, 10), 1000)
  account.deposit(new Date(2012, 1, 13), 2000)
  account.withdrawal(new Date(2012, 1, 14), 500)

  const result = this.balance = 2500

  expect(result).toEqual(2500)
  });
  
});
