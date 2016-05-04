import {Component, Inject, OnDestroy} from "@angular/core";
import {Store} from "redux/index";
import {AppState} from "../../redux/state";
import {CreateChangeLangAction} from "../../redux/store";
import {LangsList} from "../../types/langs-list";
@Component({
    selector: 'lang-switcher',
    template: require('./lang-switcher.html'),
    styles: [require('./lang-switcher.scss')]
})
export class LangSwitcher implements OnDestroy {

    public currentLang = LangsList.en;
    public langs = LangsList;
    private unsubscribe:Function;

    constructor(@Inject('AppStore') private store:Store<AppState>) {
        this.unsubscribe = store.subscribe(() => {
            let state = store.getState();
            this.currentLang = state.lang;
        });
    }


    ngOnDestroy():any {
        this.unsubscribe();
    }

    changeLang(newLang:LangsList) {
        let act = CreateChangeLangAction(newLang);
        this.store.dispatch(<any>act);
    }
}