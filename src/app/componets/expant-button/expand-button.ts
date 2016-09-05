import {Component, Input} from "@angular/core";
import {Translation} from "../trans/translation";

@Component({
    selector: 'expand-button',
    template: require('./expand-button.html'),
    styles: [require('./expand-button.scss')]
})
export class ExpandButton {
    @Input() isExpanded:boolean = false;
}



