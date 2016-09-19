import {NgModule, Inject, ApplicationRef} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {App} from "./app.component";
import {WorkingPeriod} from "./componets/working-period/working-period";
import {SkillRef} from "./componets/skill-ref/skill-ref";
import {ExpandButton} from "./componets/expant-button/expand-button";
import {Block} from "./componets/block/block";
import * as skills from "./componets/skill/skill";
import {LangSwitcher} from "./componets/lang-switcher/lang-switcher";
import {Translation} from "./componets/trans/translation";
import {AppStore} from "./redux/store";
import {NgRedux, NgReduxModule} from "ng2-redux";
import {AppState} from "./redux/state";
import {SkillPopoverInline} from "./componets/skill-popover-inline/skill-popover-inline";
import {ValueGenerator} from "./services/value-generator";
import {removeNgStyles, createInputTransfer, createNewHosts} from "@angularclass/hmr";


@NgModule({
    imports: [
        BrowserModule,
        NgReduxModule
    ],
    declarations: [
        App,
        Translation,
        LangSwitcher,
        skills.Skill,
        skills.SkillDescription,
        Block,
        ExpandButton,
        SkillPopoverInline,
        SkillRef,
        WorkingPeriod
    ],
    bootstrap: [App],
    providers: [
        ValueGenerator
    ]
})


export class AppModule {

    constructor(@Inject(NgRedux) public store: NgRedux<AppState>,
                @Inject(ApplicationRef) public appRef: ApplicationRef) {
        store.provideStore(AppStore);
    }

    hmrOnInit(store) {
        console.log("hmrOnInit STORE!",store);
        if (!store || !store.state) return;
        console.log('HMR store', store);
        // inject AppStore here and update it
        // this.AppStore.update(store.state)
        if ('restoreInputValues' in store) {
            store.restoreInputValues();
        }
        // change detection
        this.appRef.tick();
        delete store.state;
        delete store.restoreInputValues;
    }

    hmrOnDestroy(store) {
        console.log("hmrOnDestroy STORE + ",store);
        var cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
        // recreate elements
        store.disposeOldHosts = createNewHosts(cmpLocation)
        // inject your AppStore and grab state then set it on store
        // var appState = this.AppStore.get()

        const s = this.store.getState();
        store.state = Object.assign({}, s);

        store.restoreInputValues = createInputTransfer();
        // remove styles
        removeNgStyles();
    }

    hmrAfterDestroy(store) {
        console.log("hmrAfterDestroy STORE",store);

        // display new elements
        store.disposeOldHosts()
        delete store.disposeOldHosts;
    }

}