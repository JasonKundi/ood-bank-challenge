/* eslint-disable no-undef */
const Statement = require('../src/statement.js')

describe("account", () => {
    let statement;
  
  
    it("headers for statement printer", () => {
      // set up
      statement = new Statement([])
      const result = statement.statementPrinter()
      const expected = 'Date || Credit || Debit || Balance'
      expect(result).toEqual(expected)
  
  
      expect(result).toEqual(expected);
    });
});