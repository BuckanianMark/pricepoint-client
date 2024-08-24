import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import {map} from 'rxjs/operators'
import { IUser } from '../shared/models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
   baseUrl = 'http://pricepointapi.com/api/'

  private currentUserSource = new BehaviorSubject<IUser | null>(null);
  currentUser$ = this.currentUserSource.asObservable(); 


  constructor(private http:HttpClient,private router:Router) { }

  getCurrentUserValue(){
    return this.currentUserSource.value;
  }

  loadCurrentUser(token:string){
    // if(token === null){
    //   this.currentUserSource.next(null);
    //   return;
    // }
    let headers = new HttpHeaders();
    headers = headers.set('Authorization',`Bearer ${token}`)

    return this.http.get(this.baseUrl + 'Accounts',{headers}).pipe(
      map((user:IUser | any) => {
        if(user){
          localStorage.setItem("PricepointToken",user.token)
          this.currentUserSource.next(user);
        }
      })
    )
  }
  login(values:any){
    return this.http.post(this.baseUrl + 'Accounts/login',values).pipe(
      map((user:IUser | any) => {
        if(user){
          localStorage.setItem("PricepointToken",user.token)
          this.currentUserSource.next(user);
        }
      })
    )
  }
  register(values:any){
    return this.http.post(this.baseUrl + 'Accounts/register',values).pipe(
      map((user:IUser | any) => {
        if(user){
          localStorage.setItem("PricepointToken",user.token)
          this.currentUserSource.next(user);
        }
      })
    )
  }
  logout(){
    localStorage.removeItem("PricepointToken")
    this.currentUserSource.next(null)
    this.router.navigateByUrl('/shop')
  }
  checkEmailExists(email:string){
    return this.http.get(this.baseUrl + 'Accounts/emailexists?email='+email);
  }

}
