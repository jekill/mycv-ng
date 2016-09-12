import {Component, Inject} from "@angular/core";
import {AppState} from "../../redux/state";
import {CreateChangeLangAction} from "../../redux/store";
import {LangsList} from "../../types/langs-list";

import {NgRedux, select} from "ng2-redux";

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