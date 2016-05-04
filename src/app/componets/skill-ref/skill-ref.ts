import {Component, Inject, ElementRef} from "@angular/core";
import {elementPosition} from "../../utils/dom-utils";
import {AppState} from "../../redux/state";
import {Store} from "redux/index";
import {CreateHoverSkillAction} from "../skill/skill.reduxt";
import {stat} from "fs";
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
    private isRegistered:boolean = false;
    private unsubscribe:Function;

    constructor(@Inject('AppStore') private store:Store<AppState>,
                @Inject(ElementRef) private element:ElementRef) {
    }

    checkRegistered() {
        if (this.skillName) {
            const state = this.store.getState();
            this.isRegistered = typeof (state.skills[this.skillName]) != 'undefined' && state.skills[this.skillName];
        }
    }

    ngOnDestroy(){
        this.unsubscribe();
    }
    ngOnInit(){
        this.unsubscribe=this.store.subscribe(()=>{
             this.checkRegistered();
        });
    }

    ngAfterContentInit() {
        this.skillName = this.element.nativeElement.innerText;
    }

    onMouseEnter() {
        if (!this.skillName) {
            return;
        }
        const el = this.element.nativeElement;
        const box = el.getBoundingClientRect();
        let pos = elementPosition(el);
        pos[0] += box.height;

        this.store.dispatch(<any>CreateHoverSkillAction(this.skillName, pos, true));
    }

    onMouseLeave() {
        if (!this.skillName) {
            return;
        }
        this.store.dispatch(<any>CreateHoverSkillAction(this.skillName, [0, 0], false));
    }
}