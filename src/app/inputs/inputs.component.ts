import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {
  @Output() fName: EventEmitter<string> = new EventEmitter<string>();
  @Output() lName: EventEmitter<string> = new EventEmitter<string>();
  @Output() num: EventEmitter<number> = new EventEmitter<number>();
  @Output() le: EventEmitter<string> = new EventEmitter<string>();
  @Output() saveRow: EventEmitter<any> = new EventEmitter<any>();
  @Input()"ab":string;
  @Input()"abnum":number;
  constructor() { }

  ngOnInit() {
  }

}
