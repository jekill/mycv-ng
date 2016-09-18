// import "zone.js/dist/zone-node.js";

import {enableProdMode} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

import {AppModule} from "./app/app.module";


if (__IS_PROD_MODE__) {
    enableProdMode();
}


function startApplication(){
    const platform = platformBrowserDynamic();
    platform.bootstrapModule(AppModule);

}

document.addEventListener('DOMContentLoaded', startApplication);


declare var __IS_PROD_MODE__: boolean;


