import {Component, OnDestroy} from "@angular/core";
import {Subscription} from "rxjs";

/**
 * Classical Angular component class
 */
@Component({
  template: ''
})
export abstract class IdeComponent implements OnDestroy {
  subscriptions = new Subscription();


  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
