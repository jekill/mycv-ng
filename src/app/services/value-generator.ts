import {Injectable} from "@angular/core";

@Injectable()
export class ValueGenerator {
    private counter: number = 0;

    constructor() {

    }

    nextNumber() {
        this.counter++;
        return this.counter;
    }
}