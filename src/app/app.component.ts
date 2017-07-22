import {Component} from "@angular/core";

@Component({
    selector: 'app',
    template: require('./app.html'),
    styles: [require('./app.scss')],
})
export class App {
    ngAfterContentInit(){
    }
}