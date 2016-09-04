import "es7-reflect-metadata";
import "zone.js/dist/zone-node.js"
import * as hmr from "angular2-hmr";
import {provide, enableProdMode} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";

import {App} from "./app/app";
import {AppStore} from "./app/redux/store";

function startApplication() {
    return bootstrap(App, [provide('AppStore', {useValue: AppStore})]).catch((err)=>console.log(err));
}


if (!__IS_PROD_MODE__) {
    hmr.hotModuleReplacement(startApplication, module);
} else {
    enableProdMode();
    document.addEventListener('DOMContentLoaded', startApplication);
}

declare var __IS_PROD_MODE__: boolean;


