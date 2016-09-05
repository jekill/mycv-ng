import {Component, Input} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {SkillRef} from "../skill-ref/skill-ref";
import {Translation} from "../trans/translation";

@Component({
    selector: 'working-period',
    template: require('./working-period.html'),
    styles: [require('./working-period.scss')]
})
export class WorkingPeriod {
    @Input() dates:string;
    @Input() company:string;
    @Input() position:string;
    // @Input() mainTechnologies:string='qwe';

    // public mainTechnologiesList:Observable<string>;
    mainTechnologiesList:string[]=[];

    constructor() {
        this.mainTechnologiesList = Observable.create();
    }

    @Input()
    set mainTechnologies(list:string) {
        if (list) {
            // this.mainTechnologiesList;
            this.mainTechnologiesList=list.split(",").map((skillName)=>skillName.trim())
            console.log(this.mainTechnologiesList);
        }
    }
    

}