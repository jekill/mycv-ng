import {ValueGenerator} from "./value-generator";
const assert = chai.assert;
describe('Test Value Generator service', function () {
    it('Increase value', function () {
        const generator = new ValueGenerator();
        assert.equal(generator.nextNumber(), 1);
        assert.equal(generator.nextNumber(), 2);
        assert.equal(generator.nextNumber(), 3);
    })
});