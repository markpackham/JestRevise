const {fetchPromise, fetchPromiseReject} = require('./promiseDemo');

// Normal Promises
test('Data from Promise is "Hello World"', ()=>{
    return expect(fetchPromise()).resolves.toBe('Hello World');
});

test('The fetch fails with an error', ()=>{
    return expect(fetchPromiseReject()).rejects.toEqual('error');
});

// Use of Async Await
test('Async Await test for "Hello World"', async ()=>{
    const data = await fetchPromise();
    expect(data).toBe('Hello World');
});