import "es7-reflect-metadata";
import "zone.js/dist/zone-node.js"
import * as hmr from "angular2-hmr";

import {App} from "./app/app";
import {AppStore} from "./app/redux/store";
import {provide} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {mkNoopenerRelAttributeValue} from "./app/utils/dom-utils";


function startApplication() {
    return bootstrap(App, [provide('AppStore', {useValue: AppStore})]).catch((err)=>console.log(err))
        .then(function () {
                let links = document.getElementsByTagName('a');
                for (let i = 0; i < links.length; i++) {
                    let a:HTMLAnchorElement = links.item(i);
                    if (a.target === '_blank') {
                        a.rel = mkNoopenerRelAttributeValue(a.rel);
                    }
                }
            }
        );
}

let isDev = true;

if (isDev) {
    hmr.hotModuleReplacement(startApplication, module);

} else {
    document.addEventListener('DOMContentLoaded', startApplication);
}

