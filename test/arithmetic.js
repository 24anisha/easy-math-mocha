const calculator = require('../src/arithmetic')
const assert = require('assert');

describe('Calculator', () => {
  describe('Addition', () => {
    it('sum n1 and n2', () => {
        assert.equal(calculator.add(2, 2), 4)
        assert.equal(calculator.add(50, 39), 89)
      })
  })
  describe('Subtraction', () => {
     it('subtract n1 and n2', () => {
         assert.equal(calculator.subtract(6, 2), 4)
         assert.equal(calculator.subtract(60, 28), 32)
         })
   })
  describe('Multiplication', () => {
     it('multiply n1 and n2', () => {
         assert.equal(calculator.multiply(6, 2), 12)
         assert.equal(calculator.multiply(8, -3), -24)
         assert.equal(calculator.multiply(-5, -7), -35)
        })
   })

  describe('Division', () => {
     it('divides n1 by n2', () => {
         assert.equal(calculator.divide(4, 2), 2)
         assert.equal(calculator.divide(50, 5), 10)
      })
     it('should return NaN if the denominator is zero', () => {
         assert.equal(calculator.divide(50, 0), undefined)
         assert.equal(calculator.divide(-15, 0), undefined)
        })
    })
  })
