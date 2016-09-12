import {Component, Input} from "@angular/core";

@Component({
    selector: 'working-period',
    template: require('./working-period.html'),
    styles: [require('./working-period.scss')]
})
export class WorkingPeriod {
    @Input() dates:string;
    @Input() company:string;
    @Input() position:string;
    mainTechnologiesList:string[]=[];

    constructor() {
        // this.mainTechnologiesList = Observable.create();
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