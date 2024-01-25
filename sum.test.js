const sum = require('./sum');

// Description written first then test function
test('Adds 1 + 2 to equal 3', ()=> {
    expect(sum(1,2)).toBe(3);
});