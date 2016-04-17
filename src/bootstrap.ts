import "es7-reflect-metadata";
import "zone.js/dist/zone-node.js"
import * as hmr from "angular2-hmr";

import {App} from "./app/app";
import {AppStore} from "./app/redux/store";
import {provide} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";


function startApplication() {
    return bootstrap(App,[provide('AppStore',{useValue:AppStore})]).catch((err)=>console.log(err));
}

let isDev=true;

if (isDev) {
    hmr.hotModuleReplacement(startApplication, module);
}else{
    document.addEventListener('DOMContentLoaded', startApplication);
}

