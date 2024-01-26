test('Spying on a method of an object', ()=> {
    const video = {
        play() {
            return true;
        },
    };

    // Track the video with Jest spyOn  to see if play has been called
    const spy = jest.spyOn(video, 'play');
    video.play();

    // Check if the play function has been called
    expect(spy).toHaveBeenCalled();
    // Restore original implementation of function after it has been spied on
    // so we no longer use the mock version
    spy.mockRestore();
})