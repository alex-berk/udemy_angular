import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
    counterSetInactive: number = 0;
    counterSetActive: number = 0;

    increaseSetInactive(){
        this.counterSetInactive += 1;
        console.log("SetInactive has been called (times): ", this.counterSetInactive)
    }
    increaseSetActive(){
        this.counterSetActive += 1;
        console.log("SetActive has been called (times): ", this.counterSetActive)
    }
}