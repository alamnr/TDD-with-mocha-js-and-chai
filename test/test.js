// Test Driven development or TDD is a method of working 
// where you  write a unit test that will check  that your 
// code does what you want it to do

// we are going to use mocha as our test runner and "chai"
// as our assertion library
const myLib = require('../my_lib');
const expect = require('chai').expect;

// "describe" will logout the name of the module we are 
// running our tests on

describe('myLib test', ()=>{

    // "it" is the test we want to run with a description
    // of what the test is testing
    it('has a module',()=>{
        expect(myLib).to.be.ok;
    });

    // a nested describe is used to group tests together
    describe('add', ()=>{
        it('add 2 numbers together',()=>{
            expect(myLib.add(1,1)).to.equal(2);
        });
    });

});

