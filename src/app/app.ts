import {Component, Inject} from "angular2/core";
import {Translation}  from "./componets/trans/translation";
import {LangSwitcher} from "./componets/lang-switcher/lang-switcher";
import * as skills from "./componets/skill/skill";
import {Block} from "./componets/block/block";
import {ExpandButton} from "./componets/expant-button/expand-button";
import {SkillPopover} from "./componets/skill-popover/skill-popover";
import {SkillRef} from "./componets/skill-ref/skill-ref";

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
        SkillRef
    ]
})
export class App {
    private name:string = "Hello Jeka!!!";

    constructor() {
    }


}