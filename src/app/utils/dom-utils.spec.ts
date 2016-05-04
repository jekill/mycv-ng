import {elementPosition} from "./dom-utils";
describe('check mk attributes', ()=> {
    it("1", ()=> {
        let el = new HTMLElement();
        let res = elementPosition(el);
        chai.expect(res).to.equal([0, 0]);
    })
});