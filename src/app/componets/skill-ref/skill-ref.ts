import {Component, Inject, ElementRef} from "angular2/core";
import {elementPosition} from "../../utils/dom-utils";
import {AppState} from "../../redux/state";
import {Store} from "redux/index";
import {CreateHoverSkillAction} from "../skill/skill.reduxt";
@Component({
    selector: 'skill-ref',
    template: require('./skill-ref.html'),
    styles: [require('./skill-ref.scss')],
    host: {
        "(mouseenter)": 'onMouseEnter()',
        "(mouseleave)": 'onMouseLeave()'
    }
})
export class SkillRef {

    private skillName:string;

    constructor(@Inject('AppStore') private store:Store<AppState>,
                @Inject(ElementRef) private element:ElementRef) {
    }

    ngAfterContentInit() {
        this.skillName = this.element.nativeElement.innerText;
    }

    onMouseEnter() {
        if (!this.skillName){
            return;
        }
        const el = this.element.nativeElement;
        const box = el.getBoundingClientRect();
        let pos = elementPosition(el);
        pos[0] += box.height;

        this.store.dispatch(<any>CreateHoverSkillAction(this.skillName, pos, true));
    }

    onMouseLeave() {
        if (!this.skillName){
            return;
        }
        this.store.dispatch(<any>CreateHoverSkillAction(this.skillName, [0, 0], false));
    }
}