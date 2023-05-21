import { Injectable } from "@angular/core";
import { Details } from "../model";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  commonData: Details[] = [
    { name: "Jack", money: 10 },
    { name: "Jill", money: 15 },
  ];
  constructor() {}
}
