const fetchData = require('./callbackDemo')

// Using done() to deal with callback
// fetchData() uses a setTimeout so the answer to the test won't be instant
test('The data is Hello World', done =>{
    function callback(data){
        try {
            expect(data).toBe("Hello World")
            // Remember to use done()
            done();
        } catch (error) {
            done(error);
        }
    }

    fetchData(callback);
})