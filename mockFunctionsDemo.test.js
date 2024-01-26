test('Mock implementation of a basic function', ()=>{
    const  mock = jest.fn(x => 42 + x);
    // 42 + 0 aka "x" = 42
    expect(mock(0)).toBe(42);
});

test('Check mock argument called with correct argument', ()=>{
    const  mock = jest.fn(x => 42 + x);   
    expect(mock(1)).toBe(43);
    // Check mock argument called with correct argument of 1
    expect(mock).toHaveBeenCalledWith(1);
});