import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  @Output() tab:EventEmitter<null> = new EventEmitter<null>();
  @Output() inputs:EventEmitter<null> = new EventEmitter<null>();
  constructor() { }

  ngOnInit() {
  }

}
