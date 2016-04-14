import {Component, Inject, OnDestroy} from "angular2/core";
import {Store} from "redux/index";
import {AppState, LangEnum} from "../../redux/state";
import {CreateChangeLangAction} from "../../redux/store";
@Component({
    selector: 'lang-switcher',
    template: require('./lang-switcher.html'),
    styles: [require('./lang-switcher.scss')]
})
export class LangSwitcher implements OnDestroy {

    public currentLang = LangEnum.en;
    public langs = LangEnum;
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

    changeLang(newLang:LangEnum) {
        let act = CreateChangeLangAction(newLang);
        this.store.dispatch(<any>act);
    }
}