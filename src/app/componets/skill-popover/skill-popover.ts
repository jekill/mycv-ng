import {Component, Inject, DynamicComponentLoader, ViewChild, ElementRef, Injector} from "angular2/core";
import {AppState} from "../../redux/state";
import {Store} from "redux/index";
import {SkillDescription} from "../skill/skill";
@Component({
    selector: 'skill-popover',
    template: require('./skill-popover.html'),
    styles: [require('./skill-popover.scss')]
})
export class SkillPopover {
    skillData:{
        skillName:string,
        icon:string,
        site:string,
        descriptionElementRef:ElementRef
    };
    position:number[] = [0, 0];
    unscribe:Function;

    constructor(@Inject('AppStore') private store:Store<AppState>) {

    }

    private descriptionHTML() {
        if (this.skillData && this.skillData.descriptionElementRef) {
            return this.skillData.descriptionElementRef.nativeElement.innerHTML;
        }
        return '';
    }

    ngOnDestroy() {
        this.unscribe();
    }

    ngOnInit() {
        this.unscribe = this.store.subscribe(()=> {
            const state = this.store.getState();
            const data = state.popoverSkillDescription;

            if (!data) {
                this.clear();
                return;
            }

            if (state.skills[data.skillName]) {
                this.position = data.position;
                this.skillData = state.skills[data.skillName];
            } else {
                this.clear();
            }
        });
    }

    private clear() {
        this.skillData = null;
        this.position = [0, 0];
    }
}