test('Spying on a method of an object', ()=> {
    const video = {
        play() {
            return true;
        },
    };

    // Track the video with Jest spyOn  to see if play has been called
    const spy = jest.spyOn(video, 'play');
    video.play();

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
})