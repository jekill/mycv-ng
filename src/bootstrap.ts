// import "zone.js/dist/zone-node.js";
import "core-js/shim";
import "zone.js";
import "reflect-metadata";
import '@angular/platform-browser';

import {enableProdMode} from "@angular/core";

import {AppModule} from "./app/app.module";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";


if (__IS_PROD_MODE__) {
    enableProdMode();
}


function startApplication(){
    const platform = platformBrowserDynamic();
    platform.bootstrapModule(AppModule);

}

document.addEventListener('DOMContentLoaded', startApplication);


declare var __IS_PROD_MODE__: boolean;


