const {fetchPromise, fetchPromiseReject} = require('./promiseDemo');

test('Data from Promise is "Hello World"', ()=>{
    return expect(fetchPromise()).resolves.toBe('Hello World');
});

test('The fetch fails with an error', ()=>{
    return expect(fetchPromiseReject()).rejects.toEqual('error');
});