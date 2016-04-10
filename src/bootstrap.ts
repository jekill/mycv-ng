import "es7-reflect-metadata";
import "zone.js/dist/zone-node.js"
import {bootstrap} from "angular2/bootstrap";

import * as hmr from "angular2-hmr";


import {App} from "./app/app";

function startApplication() {
    return bootstrap(App).catch((err)=>console.log(err));
}

let isDev=true;

if (isDev) {
    hmr.hotModuleReplacement(startApplication, module);
}else{
    document.addEventListener('DOMContentLoaded', startApplication);
}

