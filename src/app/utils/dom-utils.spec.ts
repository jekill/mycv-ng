import {mkNoopenerRelAttributeValue} from "./dom-utils";
describe('check mk attributes', ()=> {
    it("1", ()=> {
        let res = mkNoopenerRelAttributeValue(null);
        chai.expect('noopener noreferrer').to.equal(res);
    })
});