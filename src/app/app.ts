import {Component, Inject} from "angular2/core";
import {Translation}  from "./componets/trans/translation";
import {LangSwitcher} from "./componets/lang-switcher/lang-switcher";
import * as skills from "./componets/skill/skill";
import {Block} from "./componets/block/block";
import {ExpandButton} from "./componets/expant-button/expand-button";
import {SkillPopover} from "./componets/skill-popover/skill-popover";

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
        SkillPopover
    ]
})
export class App {
    private name:string = "Hello Jeka!!!";

    constructor() {
    }


}