import {Component, Inject, OnDestroy} from "angular2/core";
import {LangsList} from "../../types/langs-list";
import {AppState} from "../../redux/state";
import {Store} from "redux/index";
@Component({
    selector: 'trans',
    template: require('./translation.html'),
    properties: ['lang']
})
export class Translation implements OnDestroy {

    private currentLang:LangsList;
    private lang;
    private langs = LangsList;
    private unscribe:Function;

    constructor(@Inject('AppStore') private store:Store<AppState>) {

        this.currentLang = store.getState().lang;

        this.unscribe = store.subscribe(()=> {
            this.currentLang = store.getState().lang;
        })
    }

    ngOnDestroy():any {
        return this.unscribe();
    }

    isCurrent(lang:string):boolean {
        return typeof (LangsList[lang])!=='undefined' && this.currentLang == LangsList[lang];
    }

}