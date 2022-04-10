import  {Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class MetadataService {
  
    constructor(private http: HttpClient){

    }

    getData() : Observable<Person[]>{
        return this.http.get<Person[]>('http://localhost:8080/getall');
    }
    
}
export interface Person {
	id:number;
	firstName:string;
	lastName:string;
	email:string;
	dob:Date;
	phoneNumber:string;
    comments:Comment[];
}
export interface Comment {
    id:number;
	title:string;
	description:string;
}