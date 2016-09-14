import {elementPosition} from "./dom-utils";
describe('Test dom utils tool', () => {
    it("Check calculation of element position", () => {
        const el = document.createElement('div');
        const res = elementPosition(el);
        chai.assert.isArray(res);
        chai.expect(res).to.have.length(2);
        chai.assert.deepEqual(res, [0, 0]);

        el.innerText = "test";
        el.style.top = '100px';
        el.style.left = '200px';
        el.style.position = 'absolute';

        document.body.appendChild(el);

        const res2 = elementPosition(el);
        chai.assert.deepEqual(res2, [100, 200]);
    });
});