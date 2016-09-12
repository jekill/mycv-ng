import {Component, Input, Inject, ElementRef} from "@angular/core";
import {elementPosition} from "../../utils/dom-utils";
import {AppState} from "../../redux/state";
import {CreateHoverSkillAction} from "../skill/skill.reduxt";
import {NgRedux, select} from "ng2-redux";
import {ValueGenerator} from "../../services/value-generator";
import {CreateAction_HoverElement} from "../../redux/actions/common-actions";
import {HoverableElement} from "../../mixins/hoverable-element";
import {applyMixins} from "rxjs/util/applyMixins";

@Component({
    selector: 'skill-ref',
    template: require('./skill-ref.html'),
    styles: [require('./skill-ref.scss')],
    host: {
        "(mouseenter)": 'onMouseEnter()',
        "(mouseleave)": 'onMouseLeave()'
    }
})
export class SkillRef extends HoverableElement {

    @Input() private name: string;

    private isRegistered: boolean = false;
    public identifier: string;

    @select('skills') private skills;

    constructor(@Inject(NgRedux) public store: NgRedux<AppState>,
                @Inject(ElementRef) private element: ElementRef,
                @Inject(ValueGenerator) private generator: ValueGenerator) {
        super(store);
    }

    checkRegistered() {
        if (this.name) {
            const state = this.store.getState();
            this.isRegistered = typeof (state.skills[this.name]) != 'undefined' && state.skills[this.name];
        }
    }

    ngOnInit() {
        this.identifier = this.name + '_' + this.generator.nextNumber();
        this.skills.subscribe(() => this.checkRegistered());
        super.ngOnInit();
    }

    // onMouseEnter() {
    //     this.store.dispatch(CreateAction_HoverElement(this.identifier, true));
    //
    //     // this.isHover = true;
    //     // if (!this.name) {
    //     //     return;
    //     // }
    //     // const el = this.element.nativeElement;
    //     // const box = el.getBoundingClientRect();
    //     // let pos = elementPosition(el);
    //     // pos[0] += box.height;
    //     // this.store.dispatch(<any>CreateHoverSkillAction(this.name, pos, true));
    // }
    //
    // onMouseLeave() {
    //     this.store.dispatch(CreateAction_HoverElement(this.identifier, false));
    //
    //     // this.isHover = false;
    //     // if (!this.name) {
    //     //     return;
    //     // }
    //     // this.store.dispatch(<any>CreateHoverSkillAction(this.name, [0, 0], false));
    // }
}
