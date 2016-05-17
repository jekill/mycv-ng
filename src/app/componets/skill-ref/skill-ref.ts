import {Component, Input, Inject, ElementRef} from "@angular/core";
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

    @Input()
    private name:string;
    private isRegistered:boolean = false;
    private unsubscribe:Function;

    constructor(@Inject('AppStore') private store:Store<AppState>,
                @Inject(ElementRef) private element:ElementRef) {
    }

    checkRegistered() {
        if (this.name) {
            const state = this.store.getState();
            this.isRegistered = typeof (state.skills[this.name]) != 'undefined' && state.skills[this.name];
        }
    }

    ngOnDestroy() {
        this.unsubscribe();
    }

    ngOnInit() {
        this.unsubscribe = this.store.subscribe(()=> {
            this.checkRegistered();
        });
    }

    // ngAfterContentInit() {
    //     if (!this.name) {
    //         this.name = this.element.nativeElement.innerText;
    //         this.checkRegistered();
    //     }
    // }

    onMouseEnter() {
        if (!this.name) {
            return;
        }
        const el = this.element.nativeElement;
        const box = el.getBoundingClientRect();
        let pos = elementPosition(el);
        pos[0] += box.height;
        this.store.dispatch(<any>CreateHoverSkillAction(this.name, pos, true));
    }

    onMouseLeave() {
        if (!this.name) {
            return;
        }
        this.store.dispatch(<any>CreateHoverSkillAction(this.name, [0, 0], false));
    }
}