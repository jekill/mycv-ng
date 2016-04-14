import {Component, Inject, OnDestroy} from "angular2/core";
import {LangEnum, AppState} from "../../redux/state";
import {Store} from "redux";
import {isUndefined} from "es7-reflect-metadata/dist/dist/helper/is-undefined";
@Component({
    selector: 'trans',
    template: require('./translation.html'),
    properties: ['lang']
})
export class Translation implements OnDestroy {

    private currentLang:LangEnum;
    private lang;
    private langs = LangEnum;
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
        return typeof (LangEnum[lang])!=='undefined' && this.currentLang == LangEnum[lang];
    }

}