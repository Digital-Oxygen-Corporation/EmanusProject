import { Component, OnInit, Input, OnChanges, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnChanges {
@Input()
show: boolean = false;
zindex = -1;
num = .5;
color='red'

//later in the code

  constructor() {
   }

  ngOnInit(): void {
  }
  ngOnChanges(){
   
    if(this.show){
     this.num = 0;
     this.zindex = -1
    } else {
      this.num = 1;
      this.zindex = 10;
    }
  }
  
}
