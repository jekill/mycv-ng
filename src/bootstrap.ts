import "es7-reflect-metadata";
import "zone.js/dist/zone-node.js"
import * as hmr from "angular2-hmr";
import {provide} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";

import {App} from "./app/app";
import {AppStore} from "./app/redux/store";

function startApplication() {
    return bootstrap(App, [provide('AppStore', {useValue: AppStore})]).catch((err)=>console.log(err));
}

let isDev = true;

if (isDev) {
    hmr.hotModuleReplacement(startApplication, module);
} else {
    document.addEventListener('DOMContentLoaded', startApplication);
}

