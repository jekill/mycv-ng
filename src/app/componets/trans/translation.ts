import {Component, Inject, Input} from "@angular/core";
import {LangsList} from "../../types/langs-list";
import {AppState} from "../../redux/state";
import {NgRedux, select} from "ng2-redux";
import {Observable} from "rxjs";
@Component({
    selector: 'trans',
    template: require('./translation.html')
})
export class Translation {

    @Input() public lang;

    private langObservable;
    private currentLang = LangsList.en;
    private langs = LangsList;

    constructor(@Inject(NgRedux) private store: NgRedux<AppState>) {
    }

    ngOnInit() {
        this.langObservable = this.store.select('lang');
        this.langObservable.subscribe(v=>this.currentLang = v);
    }


    isCurrent(lang: string): boolean {
        return typeof (LangsList[lang]) !== 'undefined' && this.currentLang == LangsList[lang];
    }

}