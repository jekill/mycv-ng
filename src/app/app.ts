import {Component, Inject} from "angular2/core";
import {Translation}  from "./componets/trans/translation";
import {LangSwitcher} from "./componets/lang-switcher/lang-switcher";
import {Skill} from "./componets/skill/skill";
import {Block} from "./componets/block/block";

@Component({
    selector: 'app',
    template: require('./app.html'),
    styles: [require('./app.scss')],
    directives: [
        Translation,
        LangSwitcher,
        Skill,
        Block
    ]
})
export class App {
    private name:string = "Hello Jeka!!!";

    constructor() {
    }


}