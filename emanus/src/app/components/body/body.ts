export {}; declare global { interface Window { Calendly: any; } } 
import { Component, OnChanges, OnInit, Input } from '@angular/core';
import {MetadataService, Person} from '../../service/MetadataService';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-body',
  templateUrl: './body.html',
  styleUrls: ['./body.css']
})

export class BodyComponent implements OnChanges, OnInit  {
    @Input()
    zindex = '';
    m ='';
    people=new Array<Person>();
    constructor(private service:MetadataService){}
    ngOnChanges(){
       
    }
    ngOnInit(){
      this.service.getData().subscribe( people =>{
          this.people = people;
      }, err =>{
        console.log(err);
      }, )

        window.Calendly.initBadgeWidget({
            url: 'https://calendly.com/wjacques',
            text: 'Schedule an appointment',
            color: '#0069ff',
            textColor: '#ffffff',
            branding: false,
  });
        setTimeout(()=>{
            this.m = 'moveup'
        },1000)
    }
  
}