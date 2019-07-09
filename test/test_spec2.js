var expect = require('chai').expect;

before('root setup code', () => console.log('ROOT Setup code'));

after('root teardown code', () => console.log('ROOT Teardown code'));

beforeEach('root setup for each test', () => {
    console.log('root Setup code for each test');
});

afterEach('root teardown for each test', () => {
    console.log('ROOT Teardown code for each test');
});

describe('test_suite3', () => {
    it('test3', () => {
        console.log('test3');
        expect(true).to.equal(true);
    });
});
