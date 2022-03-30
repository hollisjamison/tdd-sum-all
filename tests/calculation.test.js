// describe
// this is a group of tests
const describe = require('mocha').describe

// it
// each individual test
const it = require('mocha').it

// expect
const expect = require('chai').expect

// sumAll
const sumAll = require('../calculation')

describe('calculation.js test suite', () => {
  // Each individual test/test suite goes here

  describe('sumAll tests', () => {
    // each individual test, pertaining to this function

    it('returns the sum of the numbers in the array provided correctly', () => {
      // Setup mock data to be tested
      // Setup mock data to be tested
      const mockData = [10,20,30,40]
      const expectedResult = 100
      
      // Use our mock data in the actual function, and record the result
      const actualResult = sumAll(mockData)
      
      // Compare the result and the proposed result in an assert
      expect(actualResult).to.be.equal(expectedResult)
    })

    it('it works with negative numbers', () => {
      const mockData = [5,-5,250]
      const expectedResult = 250

      const actualResult = sumAll(mockData)

      expect(actualResult).to.be.equal(expectedResult)
    })
  })
})
