import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {App} from "./app.component";
import {WorkingPeriod} from "./componets/working-period/working-period";
import {SkillRef} from "./componets/skill-ref/skill-ref";
import {SkillPopover} from "./componets/skill-popover/skill-popover";
import {ExpandButton} from "./componets/expant-button/expand-button";
import {Block} from "./componets/block/block";
import * as skills from "./componets/skill/skill";
import {LangSwitcher} from "./componets/lang-switcher/lang-switcher";
import {Translation} from "./componets/trans/translation";

// import from "shi"


@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [App,
        Translation,
        LangSwitcher,
        skills.Skill,
        skills.SkillDescription,
        Block,
        ExpandButton,
        SkillPopover,
        SkillRef,
        WorkingPeriod
    ],
    bootstrap: [App]
})

export class AppModule {
}