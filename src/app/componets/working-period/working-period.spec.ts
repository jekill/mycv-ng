import {WorkingPeriod} from "./working-period";
import "jasmine";


describe('first', () => {
    it('works', ()=> {
        let wp = new WorkingPeriod();
        wp.company = 'qwe';
        chai.expect(wp.company).to.eq('qwe');
    });

    
    it('works-2',()=>{
        chai.expect(2).to.eq('2');
    })
});

