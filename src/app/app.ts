import {Component} from "angular2/core";

@Component({
    selector: 'app',
    template: require('./app.html'),
    styles: [require('./app.scss')]
})
export class App {
    name:string = "Hello Jeka!!!";

    constructor() {

    }
}