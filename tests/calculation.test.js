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
    })

    it('it works with negative numbers', () => {
    })
  })
})
