import {Component, Inject} from "@angular/core";
import {AppState} from "../../redux/state";
import {LangsList} from "../../types/langs-list";

import {NgRedux, select} from "ng2-redux";
import {CreateChangeLangAction} from "./lang-switcher.redux";

@Component({
    selector: 'lang-switcher',
    template: require('./lang-switcher.html'),
    styles: [require('./lang-switcher.scss')],
})
export class LangSwitcher {

    @select('lang')
    public currentLang;
    public langs = LangsList;

    constructor(@Inject(NgRedux)
                private store: NgRedux<AppState>) {
    }

    changeLang(newLang: LangsList) {
        let act = CreateChangeLangAction(newLang);
        this.store.dispatch(<any>act);
    }
}