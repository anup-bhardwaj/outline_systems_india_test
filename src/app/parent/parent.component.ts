import { Component, OnDestroy, ViewChild } from "@angular/core";
import { Subscription, interval, map, mergeMap, of } from "rxjs";
import { ChildComponent } from "../child/child.component";
import { Details } from "../model";
import { CommonService } from "../services/common.service";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.scss"],
})
export class ParentComponent implements OnDestroy {
  @ViewChild("childComponent", { static: false })  public childComponent: ChildComponent;

  subscription = new Subscription();
  
  layout = "column";
  commonData: Details[] = this.commonService.commonData;

  constructor(private commonService: CommonService) {
    const data = of(...this.commonData);
    const result = data.pipe(
      mergeMap((x, index) => interval(1000 * 60).pipe(map(() => index)))
    );
    this.subscription.add(
      result.subscribe((data) => {
        this.addMoney(data);
      })
    );
  }

  addMoney(index: number) {
    this.commonService.commonData[index].money += 10;
  }
  subtractMoney(index: number) {
    this.childComponent?.subsctractMoney(index);
  }

  addMoneyChild(index: any) {
    this.commonService.commonData[index].money += 5;
  }

  layoutChange(event: any) {
    this.layout = event.target.value + " wrap";
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
