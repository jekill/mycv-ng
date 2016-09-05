import {Component, ContentChild, ElementRef, Inject, ViewChild, HostListener, Input} from "@angular/core";
import {Store} from "redux/index";
import {AppState} from "../../redux/state";
import {TYPE_SKILL_REGISTER_DESCRIPTION, CreateHoverSkillAction} from "./skill.reduxt";
import {elementPosition} from "../../utils/dom-utils";


@Component({
    selector: 'description',
    template: '<ng-content></ng-content>'
})
export class SkillDescription {

    constructor(@Inject(ElementRef) public el:ElementRef) {
    }

}

@Component({
    selector: 'skill',
    template: require('./skill.html'),
    styles: [require('./skill.scss')],
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
    @Input() isExpanded:boolean = true;


    constructor(@Inject('AppStore') private store:Store<AppState>,
                @Inject(ElementRef) private element:ElementRef) {
    }


    onMouseEnter() {

        if (this.isExpanded) {
            return;
        }

        const el = this.element.nativeElement;
        const box = el.getBoundingClientRect();
        let pos = elementPosition(el);
        pos[0] += box.height;
        console.log(pos);

        this.store.dispatch(<any>CreateHoverSkillAction(this.name, pos, true));
    }

    onMouseLeave() {
        if (this.isExpanded) {
            return;
        }
        this.store.dispatch(<any>CreateHoverSkillAction(this.name, [0, 0], false));
    }

    ngAfterContentInit() {
        const descriptionEl = this.description ? this.description.el : null;
        this.store.dispatch(<any>{
            type: TYPE_SKILL_REGISTER_DESCRIPTION,
            data: {
                skillName: this.name,
                descriptionElementRef: descriptionEl,
                icon: this.icon,
                site: this.site
            }
        });
    }

}