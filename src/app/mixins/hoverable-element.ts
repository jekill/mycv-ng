import {NgRedux} from "ng2-redux";
import {CreateAction_HoverElement} from "../redux/actions/common-actions";
import {AppState} from "../redux/state";
import {Inject} from "@angular/core";

export class HoverableElement {
    public identifier: string;
    public isHover: boolean = false;

    constructor(@Inject(NgRedux) public store: NgRedux<AppState>) {
    }

    onMouseEnter(): void {
        this.store.dispatch(CreateAction_HoverElement(this.identifier, true));
    }

    onMouseLeave():void {
        this.store.dispatch(CreateAction_HoverElement(this.identifier, false));
    }

    ngOnInit() {
        this.store.select('hoveredElement').subscribe((val) => {
            this.isHover = (val === this.identifier);
        });
    }
}