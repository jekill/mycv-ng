import {Component, QueryList, ContentChildren, Inject, Input} from "@angular/core";
import {AppState} from "../../redux/state";
import {Store} from "redux/index";
import {CreateBlockUpdateAction} from "./block.redux";

@Component({
    selector: 'block',
    template: require('./block.html'),
    queries: {},
    styles:[require('./block.scss')]
})
export class Block {

    @Input() id:string = '';
    isExpanded:boolean = false;
    @ContentChildren('skill') expandableComponents:QueryList<{isExpand:boolean}>;
    private unscribe:Function;

    constructor(@Inject('AppStore') private store:Store<AppState>) {

    }

    ngOnInit() {
        this.store.dispatch(<any>CreateBlockUpdateAction(this.id, this.isExpanded));

        this.unscribe = this.store.subscribe(()=> {
            let state:AppState = this.store.getState();
            this.isExpanded = state.blocks[this.id].isExpanded;
        });
    }

    ngOnDestroy() {
        this.unscribe();
    }

    handleExpandButton() {
        let a = CreateBlockUpdateAction(this.id, !this.isExpanded);
        this.store.dispatch(<any>a);
    }

    ngAfterContentInit() {
        console.log("==== EXPA:", this.expandableComponents.length);
        this.expandableComponents.forEach((exp)=> exp.isExpand = this.isExpanded);
    }
}


