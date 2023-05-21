import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Details } from '../model';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  @Input() details:Details; 
  @Input() layout = 'row'; 
  @Input() index: number;
  @Output() currentIndex = new EventEmitter<number>();

  constructor(private commonService: CommonService) {}

  subsctractMoney(index: number) {
    this.commonService.commonData[index].money -= 10;
  }

  getMoney() {
    this.currentIndex.emit(this.index);
  }
}
