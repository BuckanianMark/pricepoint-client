import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrl: './test-error.component.css'
})
export class TestErrorComponent implements OnInit{
   baseUrl = 'http://pricepointapi.com/api/'
  validationErrors:any;

  constructor(private http:HttpClient){

  }

  get404Error(){
    return this.http.get(this.baseUrl + "products/52").subscribe(res => {
      console.log(res);
    },err => {
      console.log(err)
    });
  }

  get500Error(){
    return this.http.get(this.baseUrl + "buggy/servererror").subscribe(res => {
      console.log(res);
    },err => {
      console.log(err)
    });
  }
  get400Error(){
    return this.http.get(this.baseUrl + "buggy/badrequest").subscribe(res => {
      console.log(res);
    },err => {
      console.log(err)
    });
  }
  get400ValidationError(){
    return this.http.get(this.baseUrl + "products/fortytwo").subscribe(res => {
      console.log(res);
    },err => {
      console.log(err)
      this.validationErrors = err.errors.id;
    });
  }

  ngOnInit(): void {
  }

}
