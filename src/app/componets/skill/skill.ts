import {Component, ContentChild, ElementRef, Inject, ViewChild} from "angular2/core";


@Component({
    selector: 'name',
    template: '<ng-content></ng-content>'
})
export class Name {
    aaa:string = "qweqweqwe";
}

@Component({
    selector: 'description',
    template: '<ng-content></ng-content>'
})
export class Description {

}

@Component({
    selector: 'skill',
    template: require('./skill.html'),
    styles: [require('./skill.scss')],
    directives: [Name,Description]
})
export class Skill {
    @ContentChild(Name) name:Name;
    @ContentChild(Description) description:Description;

    showDescription:boolean = false;

    constructor() {
    }

    onMouseEnter() {
        this.showDescription = true;
    }

    onMouseLeave() {
        this.showDescription = false;
    }

    ngAfterContentInit() {
        console.log("Name is:", this.name);
        console.log("Description is:", this.description);
    }

    ngAfterViewInit() {
        console.log("Name is:", this.name);

    }
}