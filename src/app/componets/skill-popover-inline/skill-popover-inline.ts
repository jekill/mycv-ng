import {Component, Input, Inject} from "@angular/core";
import {AppState} from "../../redux/state";
import {NgRedux} from "ng2-redux";
import {skills} from "../skill/skill.reduxt";

@Component({
    selector: 'skill-popover-inline',
    template: require('./skill-popover-inline.html'),
    styles: [require('./skill-popover-inline.scss')],
})
export class SkillPopoverInline {
    @Input() private name;
    private skillData;
    private html;

    constructor(@Inject(NgRedux) private store: NgRedux<AppState>) {

    }

    private description() {
        if (this.skillData && this.skillData.descriptionElementRef) {
            return this.skillData.descriptionElementRef.nativeElement.innerHTML;
        }
        return '';
    }

    ngOnInit() {
        this.store.select('skills').subscribe(skills => {
            if (skills[this.name]) {
                this.skillData = skills[this.name];
                this.fetchDescriptionHtml();
            }
        });

        this.store.select('lang').subscribe(()=>{
            this.fetchDescriptionHtml();
        })
    }

    private fetchDescriptionHtml(){
        if (this.skillData && this.skillData.descriptionElementRef) {
            setTimeout(()=> {
                this.html = this.skillData.descriptionElementRef.nativeElement.innerHTML;
                console.log("HTML!>>>",this.html);
            },0);
        }
    }
}