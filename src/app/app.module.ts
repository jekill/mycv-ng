import {NgModule, Inject} from "@angular/core";
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
import {AppStore} from "./redux/store";
import {NgRedux, NgReduxModule} from "ng2-redux";
import {AppState} from "./redux/state";
import {SkillPopoverInline} from "./componets/skill-popover-inline/skill-popover-inline";
import {ValueGenerator} from "./services/value-generator";

// import from "shi"


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
    providers:[
        ValueGenerator
    ]
})

export class AppModule {

    constructor(@Inject(NgRedux) public store:NgRedux<AppState>) {
        store.provideStore(AppStore);
    }

    // hmrOnInit(store) {
    //     console.log('HMR store', store);
    //
    //     // inject AppStore here and update it
    //     // this.AppStore.update(store)
    // }
    //
    // hmrOnDestroy(store) {
    //
    //     console.log('on destroy HMR store', store);
    //     // var cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    //     // // recreate elements
    //     // store.disposeOldHosts = createNewHosts(cmpLocation)
    //     // // inject your AppStore and grab state then set it on store
    //     // // var appState = this.AppStore.get()
    //     // store.OHHAI = 'yolo'
    //     // // Object.assign(store, appState)
    //     // const state = this.appStore.getState();
    //     // const newState = Object.assign({},state,store) ;
    //
    //     // // remove styles
    //     removeNgStyles();
    //
    // }
    //
    // hmrAfterDestroy(store) {
    //     console.log('hmrAfterDestroy',store);
    //     // // display new elements
    //     // store.disposeOldHosts()
    //     // delete store.disposeOldHosts;
    //     // // anything you need done the component is removed
    // }
}