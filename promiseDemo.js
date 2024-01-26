function fetchPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hello World'),1000);
    });
}

function fetchPromiseReject(){
    return new Promise((resolve, reject) => {
        setTimeout(() => reject('error'),1000);
    });
}

module.exports = {fetchPromise, fetchPromiseReject};