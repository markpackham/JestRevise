function fetchPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hello World'),1000);
    });
}