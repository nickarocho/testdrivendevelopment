var expect = require('chai').expect;

describe('test_suite1', () => {
    it('test1', () => expect(true).to.equal(true));
});

describe('test_suite2', () => {
    before('setup code', () => console.log('Setup code'));
    after('teardown code', () => console.log('Teardown code'));

    beforeEach('setup for each test', () => {
        console.log('Setup code for each test');
    });

    afterEach('teardown for each test', () => {
        console.log('Teardown code for each test');
    });

    it('test1', () => {
        console.log('test1');
        expect(true).to.equal(true);
    });

    it('test2', () => {
        console.log('test2');
        expect(true).to.equal(true);
    });
    // describe('test_suite3', () => {
    //     it('test3', () => expect(true).to.equal(true));
    // });
    // it('test2', () => expect(true).to.equal(true));
});
