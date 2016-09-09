import {AppState, PopoverSkillDescription} from "../../redux/state";
import {ElementRef, Inject, Component} from "@angular/core"
import {Store} from "redux/index";
import {NgRedux} from "ng2-redux";

@Component({
    selector: 'skill-popover',
    template: require('./skill-popover.html'),
    styles: [require('./skill-popover.scss')],
})
export class SkillPopover {
    skillData: {
        skillName: string,
        icon: string,
        site: string,
        descriptionElementRef: ElementRef
    };
    position: number[] = [0, 0];

    constructor(@Inject(NgRedux) private store: NgRedux<AppState>) {

    }

    private descriptionHTML() {
        if (this.skillData && this.skillData.descriptionElementRef) {
            return this.skillData.descriptionElementRef.nativeElement.innerHTML;
        }
        return '';
    }


    ngOnInit() {
        this.store.select('popoverSkillDescription').subscribe((popoverSkillDescription:PopoverSkillDescription)=> {
            var state = this.store.getState();
            if (!popoverSkillDescription) {
                this.clear();
                return;
            }

            if (state.skills[popoverSkillDescription.skillName]) {
                this.position = popoverSkillDescription.position;
                this.skillData = state.skills[popoverSkillDescription.skillName];
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