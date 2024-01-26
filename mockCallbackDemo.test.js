test('Mock implementation of a basic function', ()=>{
    const  mock = jest.fn(x => 42 + x);
    // 42 + 0 aka "x" = 42
    expect(mock(0)).toBe(42);
    expect(mock(1)).toBe(43);
});