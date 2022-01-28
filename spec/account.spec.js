const Account = require('../src/account.js');

describe("account", () => {
  let account;

  beforeEach(() => {
    account = new Account();
  });

  it("creates a new instance of account with name, account number and balance", () => {

    // set up

    const result = new Account("Suzie", 10891234, 2000)

    // expected

    const expected = new Account("Suzie", 10891234, 2000)

    expect(result).toEqual(expected);
  });
  it("getBalance() create method which can read balance from", () => {

    // set up

    const result = new Account("Suzie", 10891234, 2000)

    // expected

    const expected = new Account("Suzie", 10891234, 2000)

    expect(result).toEqual(expected);
  });
});
