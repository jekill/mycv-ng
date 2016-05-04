import {Component, Inject} from "@angular/core";
import {Translation}  from "./componets/trans/translation";
import {LangSwitcher} from "./componets/lang-switcher/lang-switcher";
import * as skills from "./componets/skill/skill";
import {Block} from "./componets/block/block";
import {ExpandButton} from "./componets/expant-button/expand-button";
import {SkillPopover} from "./componets/skill-popover/skill-popover";
import {SkillRef} from "./componets/skill-ref/skill-ref";
import {WorkingPeriod} from "./componets/working-period/working-period";

@Component({
    selector: 'app',
    template: require('./app.html'),
    styles: [require('./app.scss')],
    directives: [
        Translation,
        LangSwitcher,
        skills.Skill,
        skills.SkillDescription,
        Block,
        ExpandButton,
        SkillPopover,
        SkillRef,
        WorkingPeriod
    ]
})
export class App {
}