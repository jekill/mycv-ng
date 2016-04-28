import {Component, Input} from "angular2/core";

@Component({
    selector: 'working-period',
    template: require('./working-period.html')
})
export class WorkingPeriod {
    @Input() dates:string;
    @Input() company:string;
    @Input() position:string;
}