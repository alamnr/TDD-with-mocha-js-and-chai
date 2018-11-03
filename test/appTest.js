
const assert = require('chai').assert;
const app = require('../app');
//const sayHello  = require('../app').sayHello;
//const addNumbers = require('../app').addNumbers;

// describe('App', ()=>{
//     it('app should return hello',()=>{
//         assert.equal(app(),'hello');
//     });
// });

// Result 
sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(5,5);

describe('App', ()=>{

    describe('sayHello',()=>{
        it('sayHello should return hello',()=>{
            //assert.equal(sayHello(),'hello');
            assert.equal(app.sayHello(),'hello');
        });
    
        it('sayHello should return type string ',()=>{
            //let result = sayHello();
            //let result = app.sayHello();
            //assert.typeOf(result,'string');
            assert.typeOf(sayHelloResult,'string');
        });
    
    });
    
    describe('addNumbers',()=>{
        it('addNumbers should be above 5',()=>{
            //let result = addNumbers(5,5);
            //let result = app.addNumbers(5,5);
            //assert.isAbove(result,5);
            assert.isAbove(addNumbersResult,5);
        });
    
        it('addNumbers should be type of number',()=>{
            //let result = addNumbers(5,5);
            //let result = app.addNumbers(5,5);
            //assert.typeOf(result,'number');
            assert.typeOf(addNumbersResult,'number');
        });
    });
    
});