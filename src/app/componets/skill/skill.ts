import {Component, ContentChild, ElementRef, Inject, ViewChild, HostListener, Input} from "angular2/core";
import {Store} from "redux/index";
import {AppState} from "../../redux/state";




@Component({
    selector: 'description',
    template: '<ng-content></ng-content>'
})
export class SkillDescription {
    public value:string;
    constructor(@Inject(ElementRef) private el:ElementRef) {
    }
    ngOnInit() {
        this.value = this.el.nativeElement.innerHTML;
        console.log('++DESCRIPTION:', this.el.nativeElement.innerHTML);
    }
}

@Component({
    selector: 'skill',
    template: require('./skill.html'),
    styles: [require('./skill.scss')],
    directives: [SkillDescription],
    host: {
        "(mouseenter)": 'onMouseEnter()',
        "(mouseleave)": 'onMouseLeave()'
    }
})
export class Skill {
    @ContentChild(SkillDescription) description:SkillDescription;

    @Input() name:string;
    @Input() icon:string;
    @Input() site:string;
    @Input() isExpanded:boolean=true;

    showDescription:boolean = false;

    constructor(@Inject('AppStore') private store:Store<AppState>) {
    }


    onMouseEnter() {
        this.showDescription = true;
        console.log('enter');
    }

    onMouseLeave() {
        this.showDescription = false;
    }

    ngAfterContentInit() {
        console.log("Name is:", this.name);
        if (!this.name) {
        }
    }

    ngAfterViewInit() {

    }
}