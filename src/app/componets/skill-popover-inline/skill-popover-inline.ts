import {Component, Input, Inject} from "@angular/core";
import {AppState, PopoverSkillDescription} from "../../redux/state";
import {NgRedux} from "ng2-redux";
import {skills} from "../skill/skill.reduxt";

@Component({
    selector: 'skill-popover-inline',
    template: require('./skill-popover-inline.html'),
    styles: [require('./skill-popover-inline.scss')],
})
export class SkillPopoverInline {
    @Input() private name;
    private skillData;

    constructor(@Inject(NgRedux) private store: NgRedux<AppState>) {

    }

    ngOnInit() {
        this.store.select('skills').subscribe(skills => {
            if (skills[this.name]) {
                this.skillData = skills[this.name];
            }
        });
    }
}