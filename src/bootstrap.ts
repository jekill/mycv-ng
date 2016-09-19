// import "zone.js/dist/zone-node.js";

import {enableProdMode} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

import {AppModule} from "./app/app.module";
import {bootloader} from "@angularclass/hmr";


if (__IS_PROD_MODE__) {
    enableProdMode();
}


function startApplication(){
    const platform = platformBrowserDynamic();
    platform.bootstrapModule(AppModule);
}

bootloader(startApplication);