import {Component, ContentChild, ElementRef, Inject, Input} from "@angular/core";
import {AppState} from "../../redux/state";
import {TYPE_SKILL_REGISTER_DESCRIPTION} from "./skill.reduxt";
import {NgRedux} from "ng2-redux";
import {HoverableElement} from "../../mixins/hoverable-element";
import {ValueGenerator} from "../../services/value-generator";


@Component({
    selector: 'description',
    template: '<ng-content></ng-content>'
})
export class SkillDescription {

    constructor(@Inject(ElementRef) public el: ElementRef) {
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
export class Skill extends HoverableElement {

    @ContentChild(SkillDescription) description: SkillDescription;

    @Input() name: string;
    @Input() about: string;
    @Input() icon: string;
    @Input() site: string;
    @Input() isExpanded: boolean = true;


    identifier: string;

    constructor(@Inject(NgRedux) public store: NgRedux<AppState>,
                @Inject(ValueGenerator) private generator: ValueGenerator,
    ) {
        super(store);
    }


    onMouseEnter() {

        if (this.isExpanded) {
            return;
        }

        super.onMouseEnter();

        // const el = this.element.nativeElement;
        // const box = el.getBoundingClientRect();
        // let pos = elementPosition(el);
        // pos[0] += box.height;
        // console.log(pos);
        //
        // this.store.dispatch(<any>CreateHoverSkillAction(this.name, pos, true));
    }

    onMouseLeave() {
        if (this.isExpanded) {
            return;
        }

        super.onMouseLeave();

        // this.store.dispatch(<any>CreateHoverSkillAction(this.name, [0, 0], false));
    }

    ngOnInit() {
        this.identifier = this.name + '_' + this.generator.nextNumber();
        super.ngOnInit();
    }

    ngAfterContentInit() {
        setTimeout(() => {
            const descriptionEl = this.description ? this.description.el : null;
            this.store.dispatch(<any>{
                type: TYPE_SKILL_REGISTER_DESCRIPTION,
                data: {
                    skillName: this.name,
                    about: this.about,
                    descriptionElementRef: descriptionEl,
                    icon: this.icon,
                    site: this.site
                }
            });
        },0);
    }

}
