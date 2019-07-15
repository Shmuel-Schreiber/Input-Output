import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  fName:string = "";
  lName:string = "";
  num:string;
  le:string = "";
  inp:EventEmitter<null> = new EventEmitter<null>();


  tabArray = []
  saveRow(a, b, c, d){
    this.tabArray.unshift({fName:a, lName:b, num:c, le:d})
  }
  clear(){
    this.tabArray = [];
  }
  clearinp(){
    document.querySelectorAll("input").forEach((e)=>e.value="")
    this.fName = "";
    this.lName = "";
    this.num = "";
    this.le = "";
  }
  constructor() { }

  ngOnInit() {
  }

}
