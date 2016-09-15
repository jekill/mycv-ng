///<reference path="../../mixins/hoverable-element.ts"/>
import {Component, Input, Inject} from "@angular/core";
import {AppState} from "../../redux/state";
import {NgRedux, select} from "ng2-redux";
import {ValueGenerator} from "../../services/value-generator";
import {HoverableElement} from "../../mixins/hoverable-element";
import {CreateAction_HoverElement} from "../../redux/actions/common-actions";

@Component({
    selector: 'skill-ref',
    template: require('./skill-ref.html'),
    styles: [require('./skill-ref.scss')],
    host: {
        "(mouseenter)": 'onMouseEnter()',
        "(mouseleave)": 'onMouseLeave()'
    }
})
export class SkillRef implements HoverableElement {


    @Input() private name: string;
    @select('skills') private skills;

    private isRegistered: boolean = false;
    public identifier: string;

    public isHover: boolean;

    constructor(@Inject(NgRedux) public store: NgRedux<AppState>,
                @Inject(ValueGenerator) private generator: ValueGenerator) {
    }

    checkRegistered() {
        if (this.name) {
            const state = this.store.getState();
            this.isRegistered = typeof (state.skills[this.name]) != 'undefined' && state.skills[this.name];
        }
    }

    // fixme: duplicate code. Bug appeared in rc7
    onMouseEnter(): void {
        this.store.dispatch(CreateAction_HoverElement(this.identifier, true));
    }

    onMouseLeave():void {
        this.store.dispatch(CreateAction_HoverElement(this.identifier, false));
    }


    ngOnInit() {
        this.identifier = this.name + '_' + this.generator.nextNumber();
        this.skills.subscribe(() => this.checkRegistered());

        // super.ngOnInit();
        this.store.select('hoveredElement').subscribe((val) => {
            this.isHover = (val === this.identifier);
        });
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

