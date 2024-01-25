// // Demo toBe() using primitive values
// test('Two plus two is four', () => {
//     expect(2 + 2).toBe(4);
// })

// test('Object assignment', ()=>{
// const data = {one: 1}
// data['two'] = 2;
// // Use toEqual() for non-primitives
// expect(data).toEqual({one: 1, two: 2})
// });

// test('null, 0, false, NaN, & undefined are falsy', ()=>{
//     // Checks for 0, false, NaN, undefined or null
//     const myEmptyString = '';

//     expect(myEmptyString).toBeFalsy()
//     expect(0).toBeFalsy()
//     expect(false).toBeFalsy()
//     expect(NaN).toBeFalsy()
//     expect(null).toBeFalsy()
//     expect(undefined).toBeFalsy()
// })

// test('1, {} & [] are truthy',()=>{
//     expect(1).toBeTruthy()
//     expect({}).toBeTruthy()
//     expect([]).toBeTruthy()
// })


const onlyAcceptNumbers = require('./onlyAcceptNumbers');

test('Throws on invalid input when a number is not supplied',()=>{
    expect(()=>{
        onlyAcceptNumbers("I am not a number!");
    }).toThrow();
})