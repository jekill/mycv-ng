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

    @Input()
    private name;
    private isVisible;
    private skillData;

    constructor(@Inject(NgRedux) private store: NgRedux<AppState>) {

    }

    ngOnInit() {
        console.log('init');
        this.store.select('skills').subscribe(skills => {
            if (skills[this.name]) {
                console.log(skills[this.name]);
                this.skillData = skills[this.name];
            }
        });
        // this.store.select('popoverSkillDescription').subscribe((skill: PopoverSkillDescription) => {
        //     if (skill !== null && skill.skillName == this.name) {
        //         console.log(skill.skillName);
        //         this.skillData = skill;
        //     }
        // });

    }


    // private clear() {
    //     this.skillData = null;
    //     this.position = [0, 0];
    // }
}