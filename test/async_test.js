var expect = require('chai').expect;

function myAsyncFunction(cb) {
    setTimeout(() => {
        cb('blah');
    }, 50);
};

function myPromiseFunction() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('blah');
        }, 50);
    });
};

it('test_async', (done) => {
    myAsyncFunction((str) => {
        expect(str).to.equal('blah');
        done();
    });
});

it('test_promise', function() {
    return myPromiseFunction().then(function(res) {
        expect(res).to.equal('blah');
    });
});

it('test_async_await', async function() {
    var result = await myPromiseFunction();
    expect(result).to.equal('blah');
});
