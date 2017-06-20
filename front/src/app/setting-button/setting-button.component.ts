import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';

@Component({
  selector: 'setting-button',
  templateUrl: './setting-button.component.html',
  styleUrls: ['./setting-button.component.css']
})
export class SettingButtonComponent implements OnInit {
@Output()  setClick = new EventEmitter<boolean>();
// @Input() setClickInput: boolean;
  viewStatus : boolean = true;

  constructor() { }

  ngOnInit() {
  }
  eventClick(status: boolean){
    this.viewStatus = !this.viewStatus;

    this.setClick.emit(status);
    // console.log(status);


  }


}
