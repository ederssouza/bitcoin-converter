const chai = require('chai');
const expect = chai.expect;
const convertBitcoin = require('../src/ConvertBitcoin.js');

describe('ConvertBitcoin', () => {
  it('should return USD as currency and 1 as amount default ', () => {
    expect(convertBitcoin()).to.be.equal('1 BTC to USD = 2000.00');
  });

  it('should return BRL as currency and 10 as amount default ', () => {
    expect(convertBitcoin('BRL', 10)).to.be.equal('10 BTC to BRL = 2000.00');
  });
});
