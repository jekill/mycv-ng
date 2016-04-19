import {Component, Input} from "angular2/core";
import {Translation} from "../trans/translation";
@Component({
    selector: 'expand-button',
    template: require('./expand-button.html'),
    styles:[require('./expand-button.scss')],
    directives:[
        Translation
    ]
})
export class ExpandButton {
    @Input() isExpanded:boolean=false;
}