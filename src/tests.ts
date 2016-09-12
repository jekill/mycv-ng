
import 'core-js/es6';
import 'core-js/es7/reflect';
//
import "reflect-metadata";
import 'zone.js/dist/zone';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
import 'zone.js/dist/proxy';
import 'zone.js/dist/jasmine-patch';
import 'babel-polyfill'

import 'ts-helpers';

let testContext = (<any>require).context("./", true, /\.spec.ts$/);

// testContext('./bootstrap.ts');

testContext.keys().forEach(key => {
    console.log('>>>!!!!',key);
    testContext(key);
});
