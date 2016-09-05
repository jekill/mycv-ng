import "zone.js/dist/zone-node.js";
import "core-js/shim";

import {enableProdMode} from "@angular/core";

import {AppModule} from "./app/app.module";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

function startApplication() {
    const platform = platformBrowserDynamic();
    return platform.bootstrapModule(AppModule);
    // return bootstrap(App, [provide('AppStore', {useValue: AppStore})]).catch((err)=>console.log(err));
}

if (__IS_PROD_MODE__) {
    enableProdMode();
}

document.addEventListener('DOMContentLoaded', startApplication);


declare var __IS_PROD_MODE__: boolean;


