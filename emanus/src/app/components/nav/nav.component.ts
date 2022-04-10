import { Component, OnChanges, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnChanges, OnInit  {
h = 'dis';
j = 'noDis';
p = true;
a = true;
m = '';
shopMenu='';
zindex =  ''
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {
//  this.m = 'movedown';
  }
  ngOnInit(){
    setTimeout(()=>{

    this.m = 'movedown';
    },500)
  }
  ngOnChanges(){
    alert('hello')
  }
go(){
 
 this.p= this.p ? false : true;
 if(!this.p){
    this.zindex = 'zindex';
 } else {
   this.zindex = '';
 }
  // this.h = 'noDis';

  // alert('good job');
}
ent(){
  this.zindex = 'zindex';
  this.a = false;
  this.shopMenu = 'shop-menu-down'
}
ext(){
  
  this.zindex = '';
  this.a = true;
  this.shopMenu = '';
}


}
