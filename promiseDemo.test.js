const fetchPromise = require('./promiseDemo');

test('Data from Promise is "Hello World"', ()=>{
    return expect(fetchPromise()).resolves.toBe('Hello World');
});