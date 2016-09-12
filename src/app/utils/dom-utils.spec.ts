import {elementPosition} from "./dom-utils";
describe('check mk attributes', () => {
    it("1", () => {
        let el = document.createElement('div');
        let res = elementPosition(el);
        // chai.expect(res).to.equal([0, 0]);
        // chai.expect(res).equals([0,0])
    })
});